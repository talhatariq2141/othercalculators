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
    tons: 10,
    density: 145,
};

export default function AsphaltTonsToCubicYardsCalculator() {
    const [tons, setTons] = useState(DEFAULTS.tons);
    const [density, setDensity] = useState(DEFAULTS.density);

    const [hasCalculated, setHasCalculated] = useState(false);
    const resultsAnchorRef = useRef<HTMLDivElement | null>(null);
    const resultsInnerRef = useRef<HTMLDivElement | null>(null);
    const [resultsHeight, setResultsHeight] = useState<number>(0);

    const result = useMemo(() => {
        const T = clampNumber(tons, 0, 1_000_000);
        const D = clampNumber(density, 1, 500);

        const lbs = T * 2000;
        const cuFt = lbs / D;
        const cuYd = cuFt / 27;

        return {
            lbs,
            cuFt,
            cuYd,
        };
    }, [tons, density]);

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
        if (!isFiniteNumber(tons) || tons <= 0) return;
        setHasCalculated(true);
        setTimeout(() => {
            resultsAnchorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
    };

    const handleReset = () => {
        setHasCalculated(false);
        setTons(DEFAULTS.tons);
        setDensity(DEFAULTS.density);
    };

    const containerClasses = "rounded-2xl border-2 border-dashed border-green-700 bg-green-100/80 p-5 sm:p-6";
    const inputClasses = "w-full rounded-xl border border-slate-900/15 bg-white px-3 py-2.5 text-[14px] text-slate-900 outline-none focus:border-indigo-500/60 focus:ring-4 focus:ring-indigo-500/15";
    const buttonClasses = "w-full rounded-xl bg-indigo-600 px-4 py-2.5 text-[14px] font-semibold text-white shadow-sm transition hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed";
    const secondaryButtonClasses = "w-full rounded-xl border border-slate-900/15 bg-white px-4 py-2.5 text-[14px] font-semibold text-slate-900 hover:bg-slate-50 transition";
    const unitBadgeClasses = "inline-flex items-center whitespace-nowrap rounded-full border border-slate-900/10 bg-slate-900/5 px-3 py-2 text-[12px] text-slate-900/70";

    const isValid = isFiniteNumber(tons) && tons > 0 && isFiniteNumber(density) && density > 0;

    return (
        <section aria-label="Asphalt Tons to Cubic Yards Calculator">
            <div className={containerClasses}>
                <div className="mb-6">
                    <h2 className="text-[18px] font-semibold tracking-[-0.01em] text-slate-900">Conversion Tool</h2>
                </div>

                <div className="grid gap-6">
                    <fieldset className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[13px] font-medium text-slate-900/80">Weight (Tons)</label>
                            <input
                                type="number"
                                className={inputClasses}
                                value={tons}
                                onChange={(e) => setTons(parseFloat(e.target.value))}
                            />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[13px] font-medium text-slate-900/80">Material Density (lb/ft³)</label>
                            <div className="flex items-center gap-2">
                                <input
                                    type="number"
                                    className={inputClasses}
                                    value={density}
                                    onChange={(e) => setDensity(parseFloat(e.target.value))}
                                />
                                <span className={unitBadgeClasses}>lb/ft³</span>
                            </div>
                        </div>
                    </fieldset>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <button
                            onClick={handleCalculate}
                            disabled={!isValid}
                            className={buttonClasses}
                        >
                            Convert to Cubic Yards
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
                                <span className="text-[13px] font-medium text-indigo-900/60 uppercase tracking-wider block mb-1">Volume Result</span>
                                <div className="flex items-baseline gap-2 mb-6">
                                    <span className="text-[42px] font-bold text-slate-900 tracking-tight">
                                        {formatNumber(result.cuYd, 2)}
                                    </span>
                                    <span className="text-[20px] font-semibold text-slate-600">yd³</span>
                                </div>

                                <dl className="grid gap-3 sm:grid-cols-2">
                                    <div className="rounded-xl bg-slate-50 p-3 border border-slate-200">
                                        <dt className="text-[12px] text-slate-500">Cubic Feet</dt>
                                        <dd className="text-[16px] font-semibold text-slate-900">
                                            {formatNumber(result.cuFt, 1)} ft³
                                        </dd>
                                    </div>
                                    <div className="rounded-xl bg-slate-50 p-3 border border-slate-200">
                                        <dt className="text-[12px] text-slate-500">Total Pounds</dt>
                                        <dd className="text-[16px] font-semibold text-slate-900">
                                            {formatNumber(result.lbs, 0)} lbs
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
