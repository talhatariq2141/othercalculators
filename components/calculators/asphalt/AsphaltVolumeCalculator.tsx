"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type System = "us" | "metric";

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
function roundTo(n: number, decimals = 2) {
    const p = 10 ** decimals;
    return Math.round(n * p) / p;
}
function toFtFromThickness(value: number, thicknessUnit: "in" | "ft") {
    return thicknessUnit === "in" ? value / 12 : value;
}
function toMFromThickness(value: number, thicknessUnit: "mm" | "cm" | "m") {
    if (thicknessUnit === "mm") return value / 1000;
    if (thicknessUnit === "cm") return value / 100;
    return value;
}

const DEFAULTS = {
    us: {
        lengthFt: 50,
        widthFt: 10,
        thickness: 2,
        thicknessUnit: "in" as const,
        wastePct: 7,
        densityLbPerFt3: 145,
    },
    metric: {
        lengthM: 15,
        widthM: 3,
        thickness: 50,
        thicknessUnit: "mm" as const,
        wastePct: 7,
        densityKgPerM3: 2320,
    },
};

export type AsphaltVolumeResult =
    | {
        system: "us";
        ok: boolean;
        wasteFactor: number;
        volumeFt3Raw: number;
        volumeFt3: number;
        volumeYd3: number;
        shortTons: number;
    }
    | {
        system: "metric";
        ok: boolean;
        wasteFactor: number;
        volumeM3Raw: number;
        volumeM3: number;
        volumeLiters: number;
        tonnes: number;
    };

export default function AsphaltVolumeCalculator() {
    const [system, setSystem] = useState<System>("us");

    // US inputs
    const [lengthFt, setLengthFt] = useState(DEFAULTS.us.lengthFt);
    const [widthFt, setWidthFt] = useState(DEFAULTS.us.widthFt);
    const [thicknessUS, setThicknessUS] = useState(DEFAULTS.us.thickness);
    const [thicknessUnitUS, setThicknessUnitUS] = useState<"in" | "ft">(DEFAULTS.us.thicknessUnit);
    const [densityLbPerFt3, setDensityLbPerFt3] = useState(DEFAULTS.us.densityLbPerFt3);

    // Metric inputs
    const [lengthM, setLengthM] = useState(DEFAULTS.metric.lengthM);
    const [widthM, setWidthM] = useState(DEFAULTS.metric.widthM);
    const [thicknessMetric, setThicknessMetric] = useState(DEFAULTS.metric.thickness);
    const [thicknessUnitMetric, setThicknessUnitMetric] = useState<"mm" | "cm" | "m">(
        DEFAULTS.metric.thicknessUnit
    );
    const [densityKgPerM3, setDensityKgPerM3] = useState(DEFAULTS.metric.densityKgPerM3);

    // shared
    const [wastePct, setWastePct] = useState(DEFAULTS.us.wastePct);

    // results behavior
    const [hasCalculated, setHasCalculated] = useState(false);
    const resultsAnchorRef = useRef<HTMLDivElement | null>(null);

    // Smooth height transition helper
    const resultsInnerRef = useRef<HTMLDivElement | null>(null);
    const [resultsHeight, setResultsHeight] = useState<number>(0);

    // If user switches system before first calc, set sensible default waste
    useEffect(() => {
        if (!hasCalculated) {
            setWastePct(system === "us" ? DEFAULTS.us.wastePct : DEFAULTS.metric.wastePct);
        }
    }, [system]); // eslint-disable-line react-hooks/exhaustive-deps

    const result: AsphaltVolumeResult = useMemo(() => {
        const wasteFactor = 1 + clampNumber(wastePct, 0, 50) / 100;

        if (system === "us") {
            const L = clampNumber(lengthFt, 0, 1_000_000);
            const W = clampNumber(widthFt, 0, 1_000_000);
            const Tft = clampNumber(toFtFromThickness(thicknessUS, thicknessUnitUS), 0, 10_000);

            const volumeFt3Raw = L * W * Tft;
            const volumeFt3 = volumeFt3Raw * wasteFactor;
            const volumeYd3 = volumeFt3 / 27;

            const density = clampNumber(densityLbPerFt3, 50, 250);
            const pounds = volumeFt3 * density;
            const shortTons = pounds / 2000;

            return {
                system: "us",
                ok: volumeFt3Raw > 0,
                wasteFactor,
                volumeFt3Raw,
                volumeFt3,
                volumeYd3,
                shortTons,
            };
        }

        const L = clampNumber(lengthM, 0, 1_000_000);
        const W = clampNumber(widthM, 0, 1_000_000);
        const Tm = clampNumber(toMFromThickness(thicknessMetric, thicknessUnitMetric), 0, 10_000);

        const volumeM3Raw = L * W * Tm;
        const volumeM3 = volumeM3Raw * wasteFactor;
        const volumeLiters = volumeM3 * 1000;

        const density = clampNumber(densityKgPerM3, 1000, 3500);
        const kg = volumeM3 * density;
        const tonnes = kg / 1000;

        return {
            system: "metric",
            ok: volumeM3Raw > 0,
            wasteFactor,
            volumeM3Raw,
            volumeM3,
            volumeLiters,
            tonnes,
        };
    }, [
        system,
        lengthFt,
        widthFt,
        thicknessUS,
        thicknessUnitUS,
        densityLbPerFt3,
        lengthM,
        widthM,
        thicknessMetric,
        thicknessUnitMetric,
        densityKgPerM3,
        wastePct,
    ]);

    // Recompute height for smooth expand/collapse
    useEffect(() => {
        if (!hasCalculated) {
            setResultsHeight(0);
            return;
        }
        const el = resultsInnerRef.current;
        if (!el) return;

        // Use scrollHeight for a stable animated max-height
        const h = el.scrollHeight;
        setResultsHeight(h);
    }, [hasCalculated, result]);

    const inputsValid =
        system === "us"
            ? isFiniteNumber(lengthFt) && isFiniteNumber(widthFt) && isFiniteNumber(thicknessUS)
            : isFiniteNumber(lengthM) && isFiniteNumber(widthM) && isFiniteNumber(thicknessMetric);

    // Tailwind v4 UI Standards from Spec + Green Theme Override
    const containerClasses = "rounded-2xl border-2 border-dashed border-green-700 bg-green-100/80 p-5 sm:p-6";
    const inputClasses = "w-full rounded-xl border border-slate-900/15 bg-white px-3 py-2.5 text-[14px] text-slate-900 outline-none focus:border-indigo-500/60 focus:ring-4 focus:ring-indigo-500/15";
    const selectClasses = "rounded-xl border border-slate-900/15 bg-white px-3 py-2.5 text-[14px] text-slate-900 outline-none focus:border-indigo-500/60 focus:ring-4 focus:ring-indigo-500/15";
    const buttonClasses = "w-full rounded-xl bg-indigo-600 px-4 py-2.5 text-[14px] font-semibold text-white shadow-sm transition hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed";
    const secondaryButtonClasses = "w-full rounded-xl border border-slate-900/15 bg-white px-4 py-2.5 text-[14px] font-semibold text-slate-900 hover:bg-slate-50 transition";
    const unitBadgeClasses = "inline-flex items-center whitespace-nowrap rounded-full border border-slate-900/10 bg-slate-900/5 px-3 py-2 text-[12px] text-slate-900/70";

    function reset() {
        setSystem("us");
        setHasCalculated(false);
        setResultsHeight(0);

        setLengthFt(DEFAULTS.us.lengthFt);
        setWidthFt(DEFAULTS.us.widthFt);
        setThicknessUS(DEFAULTS.us.thickness);
        setThicknessUnitUS(DEFAULTS.us.thicknessUnit);
        setDensityLbPerFt3(DEFAULTS.us.densityLbPerFt3);

        setLengthM(DEFAULTS.metric.lengthM);
        setWidthM(DEFAULTS.metric.widthM);
        setThicknessMetric(DEFAULTS.metric.thickness);
        setThicknessUnitMetric(DEFAULTS.metric.thicknessUnit);
        setDensityKgPerM3(DEFAULTS.metric.densityKgPerM3);

        setWastePct(DEFAULTS.us.wastePct);
    }

    function handleCalculate() {
        if (!inputsValid) return;
        setHasCalculated(true);
        setTimeout(() => {
            resultsAnchorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
    }

    const Field = ({
        label,
        help,
        children,
    }: {
        label: string;
        help?: string;
        children: React.ReactNode;
    }) => (
        <div className="flex flex-col gap-1.5">
            <div className="text-[13px] font-medium text-slate-900/80">{label}</div>
            {children}
            {help ? <p className="text-[12px] leading-5 text-slate-900/60">{help}</p> : null}
        </div>
    );

    return (
        <section aria-label="Asphalt volume calculator">
            <div className={containerClasses}>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-6">
                    <h2 className="text-[18px] font-semibold tracking-[-0.01em] text-slate-900">Calculator</h2>

                    <div className="inline-flex rounded-lg border border-slate-900/10 bg-white/50 p-1" role="group">
                        <button
                            type="button"
                            onClick={() => setSystem("us")}
                            className={`rounded-md px-3 py-1.5 text-[13px] font-medium transition ${system === "us"
                                ? "bg-white text-slate-900 shadow-sm"
                                : "text-slate-600 hover:text-slate-900"
                                }`}
                        >
                            US Customary
                        </button>
                        <button
                            type="button"
                            onClick={() => setSystem("metric")}
                            className={`rounded-md px-3 py-1.5 text-[13px] font-medium transition ${system === "metric"
                                ? "bg-white text-slate-900 shadow-sm"
                                : "text-slate-600 hover:text-slate-900"
                                }`}
                        >
                            Metric
                        </button>
                    </div>
                </div>

                <div className="grid gap-6">
                    <fieldset className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        {system === "us" ? (
                            <>
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
                                <Field label="Thickness" help="~1–3 inches typical">
                                    <div className="flex items-center gap-2">
                                        <input
                                            className={inputClasses}
                                            type="number"
                                            min={0}
                                            value={thicknessUS}
                                            onChange={(e) => setThicknessUS(Number(e.target.value))}
                                        />
                                        <select
                                            className={selectClasses}
                                            value={thicknessUnitUS}
                                            onChange={(e) => setThicknessUnitUS(e.target.value as "in" | "ft")}
                                        >
                                            <option value="in">in</option>
                                            <option value="ft">ft</option>
                                        </select>
                                    </div>
                                </Field>
                            </>
                        ) : (
                            <>
                                <Field label="Length (m)">
                                    <input
                                        className={inputClasses}
                                        type="number"
                                        min={0}
                                        value={lengthM}
                                        onChange={(e) => setLengthM(Number(e.target.value))}
                                    />
                                </Field>
                                <Field label="Width (m)">
                                    <input
                                        className={inputClasses}
                                        type="number"
                                        min={0}
                                        value={widthM}
                                        onChange={(e) => setWidthM(Number(e.target.value))}

                                    />
                                </Field>
                                <Field label="Thickness" help="~25–75 mm typical">
                                    <div className="flex items-center gap-2">
                                        <input
                                            className={inputClasses}
                                            type="number"
                                            min={0}
                                            value={thicknessMetric}
                                            onChange={(e) => setThicknessMetric(Number(e.target.value))}
                                        />
                                        <select
                                            className={selectClasses}
                                            value={thicknessUnitMetric}
                                            onChange={(e) => setThicknessUnitMetric(e.target.value as "mm" | "cm" | "m")}
                                        >
                                            <option value="mm">mm</option>
                                            <option value="cm">cm</option>
                                            <option value="m">m</option>
                                        </select>
                                    </div>
                                </Field>
                            </>
                        )}
                    </fieldset>

                    <fieldset className="rounded-xl border border-slate-900/10 bg-white p-4">
                        <legend className="px-2 text-[13px] font-medium text-slate-500">Ordering specifics</legend>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-2">
                            <Field label="Waste %" help="Safety buffer (5-10% typical)">
                                <div className="flex items-center gap-2">
                                    <input
                                        className={inputClasses}
                                        type="number"
                                        min={0}
                                        max={50}
                                        value={wastePct}
                                        onChange={(e) => setWastePct(Number(e.target.value))}
                                    />
                                    <span className={unitBadgeClasses}>%</span>
                                </div>
                            </Field>

                            <Field label="Density (optional)">
                                {system === "us" ? (
                                    <div className="flex items-center gap-2">
                                        <input
                                            className={inputClasses}
                                            type="number"
                                            min={50}
                                            max={250}
                                            value={densityLbPerFt3}
                                            onChange={(e) => setDensityLbPerFt3(Number(e.target.value))}
                                        />
                                        <span className={unitBadgeClasses}>lb/ft³</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2">
                                        <input
                                            className={inputClasses}
                                            type="number"
                                            min={1000}
                                            max={3500}
                                            value={densityKgPerM3}
                                            onChange={(e) => setDensityKgPerM3(Number(e.target.value))}
                                        />
                                        <span className={unitBadgeClasses}>kg/m³</span>
                                    </div>
                                )}
                            </Field>
                        </div>
                    </fieldset>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <button
                            onClick={handleCalculate}
                            disabled={!inputsValid}
                            className={buttonClasses}
                        >
                            Calculate Volume
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
                            <div className="rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm">
                                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between mb-4">
                                    <h3 className="text-[16px] font-semibold text-slate-900">Results</h3>
                                    <p className="text-[12px] text-slate-900/60">
                                        Includes {formatNumber(roundTo((result.wasteFactor - 1) * 100, 1), 1)}% waste
                                    </p>
                                </div>

                                {result.system === "us" ? (
                                    <>
                                        <div className="flex items-baseline gap-2 mb-6">
                                            <span className="text-[42px] font-bold text-slate-900 tracking-tight">
                                                {formatNumber(roundTo(result.volumeYd3, 3), 3)}
                                            </span>
                                            <span className="text-[20px] font-semibold text-slate-600">yd³</span>
                                        </div>

                                        <dl className="grid gap-3 sm:grid-cols-2">
                                            <div className="rounded-xl bg-slate-50 p-3 border border-slate-200">
                                                <dt className="text-[12px] text-slate-500">Total Volume (ft³)</dt>
                                                <dd className="text-[16px] font-semibold text-slate-900">
                                                    {formatNumber(roundTo(result.volumeFt3, 2), 2)} ft³
                                                </dd>
                                            </div>
                                            <div className="rounded-xl bg-slate-50 p-3 border border-slate-200">
                                                <dt className="text-[12px] text-slate-500">Estimated Weight</dt>
                                                <dd className="text-[16px] font-semibold text-slate-900">
                                                    {formatNumber(roundTo(result.shortTons, 2), 2)} tons
                                                </dd>
                                            </div>
                                        </dl>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex items-baseline gap-2 mb-6">
                                            <span className="text-[42px] font-bold text-slate-900 tracking-tight">
                                                {formatNumber(roundTo(result.volumeM3, 3), 3)}
                                            </span>
                                            <span className="text-[20px] font-semibold text-slate-600">m³</span>
                                        </div>

                                        <dl className="grid gap-3 sm:grid-cols-2">
                                            <div className="rounded-xl bg-slate-50 p-3 border border-slate-200">
                                                <dt className="text-[12px] text-slate-500">Total Volume (L)</dt>
                                                <dd className="text-[16px] font-semibold text-slate-900">
                                                    {formatNumber(roundTo(result.volumeLiters, 0), 0)} L
                                                </dd>
                                            </div>
                                            <div className="rounded-xl bg-slate-50 p-3 border border-slate-200">
                                                <dt className="text-[12px] text-slate-500">Estimated Weight</dt>
                                                <dd className="text-[16px] font-semibold text-slate-900">
                                                    {formatNumber(roundTo(result.tonnes, 2), 2)} tonnes
                                                </dd>
                                            </div>
                                        </dl>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
