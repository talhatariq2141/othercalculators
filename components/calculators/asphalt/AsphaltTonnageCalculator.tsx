"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type FormulaType = "standard" | "spreadRate";

function clampNumber(n: number, min: number, max: number) {
    return Math.min(max, Math.max(min, n));
}
function isFiniteNumber(n: unknown): n is number {
    return typeof n === "number" && Number.isFinite(n);
}
function formatNumber(n: number, decimals = 2) {
    if (!Number.isFinite(n)) return "—";
    const s = n.toFixed(decimals);
    return s.replace(/\.?0+$/, "");
}

const DEFAULTS = {
    lengthFt: 50,
    widthFt: 10,
    thickness: 2,
    density: 145, // lb/ft³
    spreadRate: 110, // lb/yd²/in
    wastePct: 5,
};

export type AsphaltTonnageResult = {
    ok: boolean;
    areaSqFt: number;
    areaSqYd: number;
    tonnage: number;
    volumeFt3: number;
    wasteFactor: number;
    tonnageWithWaste: number;
};

export default function AsphaltTonnageCalculator() {
    // Inputs
    const [formulaType, setFormulaType] = useState<FormulaType>("standard");
    const [lengthFt, setLengthFt] = useState(DEFAULTS.lengthFt);
    const [widthFt, setWidthFt] = useState(DEFAULTS.widthFt);
    const [thickness, setThickness] = useState(DEFAULTS.thickness);
    const [density, setDensity] = useState(DEFAULTS.density);
    const [spreadRate, setSpreadRate] = useState(DEFAULTS.spreadRate);
    const [wastePct, setWastePct] = useState(DEFAULTS.wastePct);

    // UX state
    const [hasCalculated, setHasCalculated] = useState(false);
    const resultsAnchorRef = useRef<HTMLDivElement | null>(null);
    const resultsInnerRef = useRef<HTMLDivElement | null>(null);
    const [resultsHeight, setResultsHeight] = useState<number>(0);

    const result: AsphaltTonnageResult = useMemo(() => {
        const L = clampNumber(lengthFt, 0, 1_000_000);
        const W = clampNumber(widthFt, 0, 1_000_000);
        const T_in = clampNumber(thickness, 0, 100);
        const wasteFactor = 1 + clampNumber(wastePct, 0, 50) / 100;

        const areaSqFt = L * W;
        const areaSqYd = areaSqFt / 9;

        let tonnage = 0;
        let volumeFt3 = 0;

        if (formulaType === "standard") {
            // Tonnage = (Area_ft² × Thickness_ft × Density) ÷ 2000
            const T_ft = T_in / 12;
            const D = clampNumber(density, 50, 250);

            volumeFt3 = areaSqFt * T_ft;
            const weightLbs = volumeFt3 * D;
            tonnage = weightLbs / 2000;
        } else {
            // Tonnage = (Area_yd² × Thickness_in × SpreadRate) ÷ 2000
            const S = clampNumber(spreadRate, 50, 200);

            // Calc volume just for reference
            const weightLbs = areaSqYd * T_in * S;
            tonnage = weightLbs / 2000;

            // Back-calculate approx volume for display consistency
            volumeFt3 = (areaSqFt * T_in) / 12;
        }

        return {
            ok: areaSqFt > 0 && T_in > 0,
            areaSqFt,
            areaSqYd,
            volumeFt3,
            tonnage,
            wasteFactor,
            tonnageWithWaste: tonnage * wasteFactor,
        };
    }, [lengthFt, widthFt, thickness, density, spreadRate, formulaType, wastePct]);

    // Handle smooth expand/collapse
    useEffect(() => {
        if (!hasCalculated) {
            setResultsHeight(0);
            return;
        }
        const el = resultsInnerRef.current;
        if (!el) return;
        setResultsHeight(el.scrollHeight);
    }, [hasCalculated, result]);

    const inputsValid = isFiniteNumber(lengthFt) && isFiniteNumber(widthFt) && isFiniteNumber(thickness);

    // Tailwind v4 UI Standards from Spec
    const containerClasses = "rounded-2xl border-2 border-dashed border-green-700 bg-green-100/80 p-5 sm:p-6";
    const inputClasses = "w-full rounded-xl border border-slate-900/15 bg-white px-3 py-2.5 text-[14px] text-slate-900 outline-none focus:border-indigo-500/60 focus:ring-4 focus:ring-indigo-500/15";
    const buttonClasses = "w-full rounded-xl bg-indigo-600 px-4 py-2.5 text-[14px] font-semibold text-white shadow-sm transition hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed";
    const secondaryButtonClasses = "w-full rounded-xl border border-slate-900/15 bg-white px-4 py-2.5 text-[14px] font-semibold text-slate-900 hover:bg-slate-50 transition";
    const unitBadgeClasses = "inline-flex items-center whitespace-nowrap rounded-full border border-slate-900/10 bg-slate-900/5 px-3 py-2 text-[12px] text-slate-900/70";

    function handleCalculate() {
        if (!inputsValid) return;
        setHasCalculated(true);
        setTimeout(() => {
            resultsAnchorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
    }

    function reset() {
        setHasCalculated(false);
        setLengthFt(DEFAULTS.lengthFt);
        setWidthFt(DEFAULTS.widthFt);
        setThickness(DEFAULTS.thickness);
        setDensity(DEFAULTS.density);
        setSpreadRate(DEFAULTS.spreadRate);
        setWastePct(DEFAULTS.wastePct);
    }

    const Field = ({ label, help, children }: { label: string; help?: string; children: React.ReactNode }) => (
        <div className="flex flex-col gap-1.5">
            <div className="text-[13px] font-medium text-slate-900/80">{label}</div>
            {children}
            {help ? <p className="text-[12px] leading-5 text-slate-900/60">{help}</p> : null}
        </div>
    );

    return (
        <section aria-label="Asphalt Tonnage Calculator">
            <div className={containerClasses}>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-6">
                    <h2 className="text-[18px] font-semibold tracking-[-0.01em] text-slate-900">Calculator</h2>

                    {/* Method Toggle */}
                    <div className="inline-flex rounded-lg border border-slate-900/10 bg-slate-200/50 p-1" role="group">
                        <button
                            type="button"
                            onClick={() => setFormulaType("standard")}
                            className={`rounded-md px-3 py-1.5 text-[13px] font-medium transition ${formulaType === "standard"
                                ? "bg-white text-slate-900 shadow-sm"
                                : "text-slate-600 hover:text-slate-900"
                                }`}
                        >
                            Standard Density
                        </button>
                        <button
                            type="button"
                            onClick={() => setFormulaType("spreadRate")}
                            className={`rounded-md px-3 py-1.5 text-[13px] font-medium transition ${formulaType === "spreadRate"
                                ? "bg-white text-slate-900 shadow-sm"
                                : "text-slate-600 hover:text-slate-900"
                                }`}
                        >
                            Spread Rate
                        </button>
                    </div>
                </div>

                <div className="grid gap-6">
                    <fieldset className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <Field label="Length (ft)">
                            <input
                                className={inputClasses}
                                type="number"
                                min={0}
                                value={lengthFt}
                                onChange={(e) => setLengthFt(Number(e.target.value))}
                            />
                        </Field>
                        <Field label="Width (ft)">
                            <input
                                className={inputClasses}
                                type="number"
                                min={0}
                                value={widthFt}
                                onChange={(e) => setWidthFt(Number(e.target.value))}
                            />
                        </Field>
                        <Field label="Thickness (in)">
                            <input
                                className={inputClasses}
                                type="number"
                                min={0}
                                value={thickness}
                                onChange={(e) => setThickness(Number(e.target.value))}
                            />
                        </Field>
                    </fieldset>

                    <fieldset className="rounded-xl border border-slate-900/10 bg-white p-4">
                        <legend className="px-2 text-[13px] font-medium text-slate-500">Project Specifics</legend>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-2">
                            {formulaType === "standard" ? (
                                <Field
                                    label="Density (lb/ft³)"
                                    help="Standard is ~145 lb/ft³"
                                >
                                    <div className="flex items-center gap-2">
                                        <input
                                            className={inputClasses}
                                            type="number"
                                            value={density}
                                            onChange={(e) => setDensity(Number(e.target.value))}
                                        />
                                        <span className={unitBadgeClasses}>lb/ft³</span>
                                    </div>
                                </Field>
                            ) : (
                                <Field
                                    label="Spread Rate"
                                    help="Standard is ~110 lb/yd² per inch"
                                >
                                    <div className="flex items-center gap-2">
                                        <input
                                            className={inputClasses}
                                            type="number"
                                            value={spreadRate}
                                            onChange={(e) => setSpreadRate(Number(e.target.value))}
                                        />
                                        <span className={unitBadgeClasses}>lb/yd²/in</span>
                                    </div>
                                </Field>
                            )}

                            <Field label="Waste %" help="Safety buffer for overage">
                                <div className="flex items-center gap-2">
                                    <input
                                        className={inputClasses}
                                        type="number"
                                        min={0}
                                        max={100}
                                        value={wastePct}
                                        onChange={(e) => setWastePct(Number(e.target.value))}
                                    />
                                    <span className={unitBadgeClasses}>%</span>
                                </div>
                            </Field>
                        </div>
                    </fieldset>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <button
                            onClick={handleCalculate}
                            disabled={!inputsValid}
                            className={buttonClasses}
                        >
                            Calculate Tonnage
                        </button>
                        <button
                            onClick={reset}
                            className={secondaryButtonClasses}
                        >
                            Reset
                        </button>
                    </div>

                    <div ref={resultsAnchorRef} />

                    <div
                        className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${hasCalculated ? "opacity-100" : "opacity-0"}`}
                        style={{ maxHeight: hasCalculated ? resultsHeight : 0 }}
                        aria-live="polite"
                    >
                        <div ref={resultsInnerRef} className="pt-2">
                            <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-6">
                                <div className="flex flex-col gap-1 mb-6">
                                    <span className="text-[13px] font-medium text-indigo-900/60 uppercase tracking-wider">Required Asphalt</span>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-[42px] font-bold text-slate-900 tracking-tight">
                                            {formatNumber(result.tonnageWithWaste, 2)}
                                        </span>
                                        <span className="text-[20px] font-semibold text-slate-600">tons</span>
                                    </div>
                                    <p className="text-[13px] text-slate-600">
                                        Includes {wastePct}% waste factor
                                    </p>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="rounded-xl bg-white p-3 border border-indigo-100 shadow-sm">
                                        <div className="text-[12px] text-slate-500">Base Tonnage (Net)</div>
                                        <div className="text-[16px] font-semibold text-slate-900">
                                            {formatNumber(result.tonnage, 2)} tons
                                        </div>
                                    </div>
                                    <div className="rounded-xl bg-white p-3 border border-indigo-100 shadow-sm">
                                        <div className="text-[12px] text-slate-500">Total Area</div>
                                        <div className="text-[16px] font-semibold text-slate-900">
                                            {formatNumber(result.areaSqFt, 0)} ft² <span className="text-slate-400 font-normal">({formatNumber(result.areaSqYd, 1)} yd²)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
