"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

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
    areaSqFt: 1000,
    thickness: 4,
    density: 145,
};

export default function AsphaltPavingCalculator() {
    const [areaSqFt, setAreaSqFt] = useState(DEFAULTS.areaSqFt);
    const [thickness, setThickness] = useState(DEFAULTS.thickness);
    const [density, setDensity] = useState(DEFAULTS.density);

    const [hasCalculated, setHasCalculated] = useState(false);
    const resultsAnchorRef = useRef<HTMLDivElement | null>(null);
    const resultsInnerRef = useRef<HTMLDivElement | null>(null);
    const [resultsHeight, setResultsHeight] = useState<number>(0);

    const result = useMemo(() => {
        const A = clampNumber(areaSqFt, 0, 100_000_000);
        const T = clampNumber(thickness, 0, 100);
        const D = clampNumber(density, 1, 500);

        const volCuFt = A * (T / 12);
        const weightLbs = volCuFt * D;
        const tonnage = weightLbs / 2000;
        const tonnageWithWaste = tonnage * 1.05; // Default 5% waste

        return {
            volCuFt,
            weightLbs,
            tonnage,
            tonnageWithWaste,
        };
    }, [areaSqFt, thickness, density]);

    useEffect(() => {
        if (!hasCalculated) {
            setResultsHeight(0);
            return;
        }
        if (resultsInnerRef.current) {
            setResultsHeight(resultsInnerRef.current.scrollHeight);
        }
    }, [hasCalculated, result]);

    const handleCalculate = () => {
        if (!isFiniteNumber(areaSqFt) || areaSqFt <= 0) return;
        setHasCalculated(true);
        setTimeout(() => {
            resultsAnchorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
    };

    const handleReset = () => {
        setHasCalculated(false);
        setAreaSqFt(DEFAULTS.areaSqFt);
        setThickness(DEFAULTS.thickness);
        setDensity(DEFAULTS.density);
    };

    const containerClasses = "rounded-2xl border-2 border-dashed border-green-700 bg-green-100/80 p-5 sm:p-6";
    const inputClasses = "w-full rounded-xl border border-slate-900/15 bg-white px-3 py-2.5 text-[14px] text-slate-900 outline-none focus:border-indigo-500/60 focus:ring-4 focus:ring-indigo-500/15";
    const buttonClasses = "w-full rounded-xl bg-indigo-600 px-4 py-2.5 text-[14px] font-semibold text-white shadow-sm transition hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed";
    const secondaryButtonClasses = "w-full rounded-xl border border-slate-900/15 bg-white px-4 py-2.5 text-[14px] font-semibold text-slate-900 hover:bg-slate-50 transition";
    const unitBadgeClasses = "inline-flex items-center whitespace-nowrap rounded-full border border-slate-900/10 bg-slate-900/5 px-3 py-2 text-[12px] text-slate-900/70";

    const isValid = isFiniteNumber(areaSqFt) && areaSqFt > 0 && isFiniteNumber(thickness) && thickness > 0;

    return (
        <section aria-label="Asphalt Paving Calculator">
            <div className={containerClasses}>
                <div className="mb-6">
                    <h2 className="text-[18px] font-semibold tracking-[-0.01em] text-slate-900">General Paving Estimator</h2>
                </div>

                <div className="grid gap-6">
                    <fieldset className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[13px] font-medium text-slate-900/80">Total Area (sq ft)</label>
                            <input
                                type="number"
                                className={inputClasses}
                                value={areaSqFt}
                                onChange={(e) => setAreaSqFt(parseFloat(e.target.value))}
                            />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[13px] font-medium text-slate-900/80">Design Depth (in)</label>
                            <div className="flex items-center gap-2">
                                <input
                                    type="number"
                                    className={inputClasses}
                                    value={thickness}
                                    onChange={(e) => setThickness(parseFloat(e.target.value))}
                                />
                                <span className={unitBadgeClasses}>inches</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5 sm:col-span-2">
                            <label className="text-[13px] font-medium text-slate-900/80">Material Density (lb/ft³)</label>
                            <input
                                type="number"
                                className={inputClasses}
                                value={density}
                                onChange={(e) => setDensity(parseFloat(e.target.value))}
                            />
                        </div>
                    </fieldset>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <button
                            onClick={handleCalculate}
                            disabled={!isValid}
                            className={buttonClasses}
                        >
                            Calculate Total Weight
                        </button>
                        <button
                            onClick={handleReset}
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
                                <span className="text-[13px] font-medium text-indigo-900/60 uppercase tracking-wider block mb-1">Paving Requirements</span>
                                <div className="flex items-baseline gap-2 mb-6">
                                    <span className="text-[42px] font-bold text-slate-900 tracking-tight">
                                        {formatNumber(result.tonnageWithWaste, 2)}
                                    </span>
                                    <span className="text-[20px] font-semibold text-slate-600">tons</span>
                                </div>

                                <dl className="grid gap-3 sm:grid-cols-2">
                                    <div className="rounded-xl bg-slate-50 p-3 border border-slate-200">
                                        <dt className="text-[12px] text-slate-500">Weight in Pounds</dt>
                                        <dd className="text-[16px] font-semibold text-slate-900">
                                            {formatNumber(result.weightLbs, 0)} lbs
                                        </dd>
                                    </div>
                                    <div className="rounded-xl bg-slate-50 p-3 border border-slate-200">
                                        <dt className="text-[12px] text-slate-500">Cubic Feet</dt>
                                        <dd className="text-[16px] font-semibold text-slate-900">
                                            {formatNumber(result.volCuFt, 1)} ft³
                                        </dd>
                                    </div>
                                    <div className="rounded-xl bg-slate-50 p-3 border border-slate-200">
                                        <dt className="text-[12px] text-slate-500">Net Tonnage</dt>
                                        <dd className="text-[16px] font-semibold text-slate-900">
                                            {formatNumber(result.tonnage, 1)} tons
                                        </dd>
                                    </div>
                                    <div className="rounded-xl bg-slate-50 p-3 border border-slate-200">
                                        <dt className="text-[12px] text-slate-500">Waste Factor (5%)</dt>
                                        <dd className="text-[16px] font-semibold text-slate-900">
                                            {formatNumber(result.tonnageWithWaste - result.tonnage, 2)} tons
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
