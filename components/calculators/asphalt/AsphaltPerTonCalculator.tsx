"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import { Calculator } from "lucide-react";

function formatNumber(n: number, decimals = 2) {
    if (!Number.isFinite(n)) return "—";
    return n.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

export default function AsphaltPerTonCalculator() {
    const [tons, setTons] = useState<number>(10);
    const [costPerTon, setCostPerSqFt] = useState<number>(125);

    const [hasCalculated, setHasCalculated] = useState(false);
    const resultsAnchorRef = useRef<HTMLDivElement | null>(null);
    const resultsInnerRef = useRef<HTMLDivElement | null>(null);
    const [resultsHeight, setResultsHeight] = useState<number>(0);

    const result = useMemo(() => {
        const totalCost = tons * costPerTon;
        return { totalCost };
    }, [tons, costPerTon]);

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
        if (tons <= 0 || costPerTon <= 0) return;
        setHasCalculated(true);
        setTimeout(() => {
            resultsAnchorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
    };

    const handleReset = () => {
        setHasCalculated(false);
        setTons(10);
        setCostPerSqFt(125);
    };

    const containerClasses = "rounded-2xl border-2 border-dashed border-green-700 bg-green-100/80 p-5 sm:p-6";
    const inputClasses = "w-full rounded-xl border border-slate-900/15 bg-white px-3 py-2.5 text-[14px] text-slate-900 outline-none focus:border-indigo-500/60 focus:ring-4 focus:ring-indigo-500/15";
    const buttonClasses = "w-full rounded-xl bg-indigo-600 px-4 py-2.5 text-[14px] font-semibold text-white shadow-sm transition hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2";
    const secondaryButtonClasses = "w-full rounded-xl border border-slate-900/15 bg-white px-4 py-2.5 text-[14px] font-semibold text-slate-900 hover:bg-slate-50 transition";
    const unitBadgeClasses = "inline-flex items-center whitespace-nowrap rounded-full border border-slate-900/10 bg-slate-900/5 px-3 py-2 text-[12px] text-slate-900/70";

    const isValid = tons > 0 && costPerTon > 0;

    return (
        <section aria-label="Asphalt Per Ton Cost Calculator">
            <div className={containerClasses}>
                <div className="mb-6">
                    <h2 className="text-[18px] font-semibold tracking-[-0.01em] text-slate-900">Material Quotes</h2>
                </div>

                <div className="grid gap-6">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="tons" className="text-[13px] font-medium text-slate-900/80">
                                Asphalt Quantity (tons)
                            </label>
                            <div className="flex items-center gap-2">
                                <input
                                    id="tons"
                                    type="number"
                                    min="0"
                                    step="any"
                                    className={inputClasses}
                                    value={tons || ""}
                                    onChange={(e) => setTons(parseFloat(e.target.value))}
                                    placeholder="0"
                                />
                                <span className={unitBadgeClasses}>tons</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="costPerTon" className="text-[13px] font-medium text-slate-900/80">
                                Price per Ton ($)
                            </label>
                            <div className="flex items-center gap-2">
                                <input
                                    id="costPerTon"
                                    type="number"
                                    min="0"
                                    step="any"
                                    className={inputClasses}
                                    value={costPerTon || ""}
                                    onChange={(e) => setCostPerSqFt(parseFloat(e.target.value))}
                                    placeholder="e.g. 125"
                                />
                                <span className={unitBadgeClasses}>$/ton</span>
                            </div>
                        </div>
                    </div>

                    <p className="text-[12px] text-slate-500">Typical hot-mix asphalt prices range from $100 to $150 per ton depending on the region and mix type.</p>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <button
                            onClick={handleCalculate}
                            disabled={!isValid}
                            className={buttonClasses}
                        >
                            <Calculator className="h-4 w-4" />
                            Calculate Material Cost
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
                                    <h3 className="text-[16px] font-semibold text-slate-900">Total Material Cost</h3>
                                </div>

                                <div className="flex items-baseline gap-1 mb-6">
                                    <span className="text-[42px] font-bold text-slate-900 tracking-tight">
                                        ${formatNumber(result.totalCost, 2)}
                                    </span>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="rounded-xl bg-slate-50 p-3 border border-slate-200">
                                        <dt className="text-[12px] text-slate-500 uppercase tracking-wider font-semibold">Total Tonnage</dt>
                                        <dd className="text-[18px] font-semibold text-slate-900 mt-1">
                                            {formatNumber(tons, 1)} tons
                                        </dd>
                                    </div>
                                    <div className="rounded-xl bg-slate-50 p-3 border border-slate-200">
                                        <dt className="text-[12px] text-slate-500 uppercase tracking-wider font-semibold">Price/Ton</dt>
                                        <dd className="text-[18px] font-semibold text-slate-900 mt-1">
                                            ${formatNumber(costPerTon, 2)} / ton
                                        </dd>
                                    </div>
                                </div>
                                <p className="mt-4 text-[13px] text-slate-500 leading-relaxed">
                                    This estimate is for the material cost only (FOB at the plant). It does not include delivery fees, paving crews, or preparation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
