"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import { Calculator } from "lucide-react";

function formatNumber(n: number, decimals = 2) {
    if (!Number.isFinite(n)) return "—";
    return n.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

export default function AsphaltDrivewayCostCalculator() {
    const [length, setLength] = useState<number>(50);
    const [width, setWidth] = useState<number>(12);
    const [costPerSqFt, setCostPerSqFt] = useState<number>(10);

    const [hasCalculated, setHasCalculated] = useState(false);
    const resultsAnchorRef = useRef<HTMLDivElement | null>(null);
    const resultsInnerRef = useRef<HTMLDivElement | null>(null);
    const [resultsHeight, setResultsHeight] = useState<number>(0);

    const result = useMemo(() => {
        const area = length * width;
        const totalCost = area * costPerSqFt;
        return { area, totalCost };
    }, [length, width, costPerSqFt]);

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
        if (result.area <= 0 || costPerSqFt <= 0) return;
        setHasCalculated(true);
        setTimeout(() => {
            resultsAnchorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
    };

    const handleReset = () => {
        setHasCalculated(false);
        setLength(50);
        setWidth(12);
        setCostPerSqFt(10);
    };

    const containerClasses = "rounded-2xl border-2 border-dashed border-green-700 bg-green-100/80 p-5 sm:p-6";
    const inputClasses = "w-full rounded-xl border border-slate-900/15 bg-white px-3 py-2.5 text-[14px] text-slate-900 outline-none focus:border-indigo-500/60 focus:ring-4 focus:ring-indigo-500/15";
    const buttonClasses = "w-full rounded-xl bg-indigo-600 px-4 py-2.5 text-[14px] font-semibold text-white shadow-sm transition hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2";
    const secondaryButtonClasses = "w-full rounded-xl border border-slate-900/15 bg-white px-4 py-2.5 text-[14px] font-semibold text-slate-900 hover:bg-slate-50 transition";
    const unitBadgeClasses = "inline-flex items-center whitespace-nowrap rounded-full border border-slate-900/10 bg-slate-900/5 px-3 py-2 text-[12px] text-slate-900/70";

    const isValid = length > 0 && width > 0 && costPerSqFt > 0;

    return (
        <section aria-label="Asphalt Driveway Cost Calculator">
            <div className={containerClasses}>
                <div className="mb-6">
                    <h2 className="text-[18px] font-semibold tracking-[-0.01em] text-slate-900">Project Specifications</h2>
                </div>

                <div className="grid gap-6">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="length" className="text-[13px] font-medium text-slate-900/80">
                                Length (ft)
                            </label>
                            <div className="flex items-center gap-2">
                                <input
                                    id="length"
                                    type="number"
                                    min="0"
                                    step="any"
                                    className={inputClasses}
                                    value={length || ""}
                                    onChange={(e) => setLength(parseFloat(e.target.value))}
                                    placeholder="0"
                                />
                                <span className={unitBadgeClasses}>ft</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="width" className="text-[13px] font-medium text-slate-900/80">
                                Width (ft)
                            </label>
                            <div className="flex items-center gap-2">
                                <input
                                    id="width"
                                    type="number"
                                    min="0"
                                    step="any"
                                    className={inputClasses}
                                    value={width || ""}
                                    onChange={(e) => setWidth(parseFloat(e.target.value))}
                                    placeholder="0"
                                />
                                <span className={unitBadgeClasses}>ft</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="costPerSqFt" className="text-[13px] font-medium text-slate-900/80">
                            Cost per Square Foot ($)
                        </label>
                        <div className="flex items-center gap-2">
                            <input
                                id="costPerSqFt"
                                type="number"
                                min="0"
                                step="any"
                                className={inputClasses}
                                value={costPerSqFt || ""}
                                onChange={(e) => setCostPerSqFt(parseFloat(e.target.value))}
                                placeholder="e.g. 10"
                            />
                            <span className={unitBadgeClasses}>$/sq ft</span>
                        </div>
                        <p className="text-[12px] text-slate-500">Industry average range: $7 – $15 per sq ft.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <button
                            onClick={handleCalculate}
                            disabled={!isValid}
                            className={buttonClasses}
                        >
                            <Calculator className="h-4 w-4" />
                            Calculate Estimated Cost
                        </button>
                        <button
                            onClick={handleReset}
                            className={secondaryButtonClasses}
                        >
                            Reset
                        </button>
                    </div>

                    <div ref={resultsAnchorRef} />

                    {/* Results */}
                    <div
                        className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${hasCalculated ? "opacity-100" : "opacity-0"}`}
                        style={{ maxHeight: hasCalculated ? resultsHeight : 0 }}
                        aria-live="polite"
                    >
                        <div ref={resultsInnerRef} className="pt-2">
                            <div className="rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm">
                                <div className="mb-4">
                                    <h3 className="text-[16px] font-semibold text-slate-900">Estimated Project Cost</h3>
                                </div>

                                <div className="flex items-baseline gap-1 mb-6">
                                    <span className="text-[42px] font-bold text-slate-900 tracking-tight">
                                        ${formatNumber(result.totalCost, 2)}
                                    </span>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="rounded-xl bg-slate-50 p-3 border border-slate-200">
                                        <dt className="text-[12px] text-slate-500 uppercase tracking-wider font-semibold">Total Area</dt>
                                        <dd className="text-[18px] font-semibold text-slate-900 mt-1">
                                            {formatNumber(result.area, 0)} sq ft
                                        </dd>
                                    </div>
                                    <div className="rounded-xl bg-slate-50 p-3 border border-slate-200">
                                        <dt className="text-[12px] text-slate-500 uppercase tracking-wider font-semibold">Unit Rate</dt>
                                        <dd className="text-[18px] font-semibold text-slate-900 mt-1">
                                            ${formatNumber(costPerSqFt, 2)}/sq ft
                                        </dd>
                                    </div>
                                </div>
                                <p className="mt-4 text-[13px] text-slate-500 leading-relaxed">
                                    This estimate includes typical material, labor, and basic preparation costs based on the square foot rate provided. Actual costs may vary by region and site conditions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
