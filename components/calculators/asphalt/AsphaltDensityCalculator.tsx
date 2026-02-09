"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import { Calculator } from "lucide-react";

function formatNumber(n: number, decimals = 2) {
    if (!Number.isFinite(n)) return "—";
    return n.toFixed(decimals).replace(/\.?0+$/, "");
}

type DensityUnit = "lb_ft3" | "kg_m3";

export default function AsphaltDensityCalculator() {
    const [densityValue, setDensityValue] = useState<number>(145);
    const [densityUnit, setDensityUnit] = useState<DensityUnit>("lb_ft3");
    const [hasCalculated, setHasCalculated] = useState(false);
    const resultsAnchorRef = useRef<HTMLDivElement | null>(null);
    const resultsInnerRef = useRef<HTMLDivElement | null>(null);
    const [resultsHeight, setResultsHeight] = useState<number>(0);

    const result = useMemo(() => {
        let lbFt3 = densityValue;
        let kgM3 = densityValue;
        if (densityUnit === "lb_ft3") {
            kgM3 = densityValue * 16.0185;
        } else {
            lbFt3 = densityValue / 16.0185;
        }
        return { lbFt3, kgM3 };
    }, [densityValue, densityUnit]);

    useEffect(() => {
        if (!hasCalculated) { setResultsHeight(0); return; }
        if (resultsInnerRef.current) setResultsHeight(resultsInnerRef.current.scrollHeight);
    }, [hasCalculated, result]);

    const handleCalculate = () => {
        if (densityValue <= 0) return;
        setHasCalculated(true);
        setTimeout(() => resultsAnchorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
    };

    const handleReset = () => { setHasCalculated(false); setDensityValue(145); setDensityUnit("lb_ft3"); };

    const containerClasses = "rounded-2xl border-2 border-dashed border-green-700 bg-green-100/80 p-5 sm:p-6";
    const inputClasses = "w-full rounded-xl border border-slate-900/15 bg-white px-3 py-2.5 text-[14px] text-slate-900 outline-none focus:border-indigo-500/60 focus:ring-4 focus:ring-indigo-500/15";
    const selectClasses = "rounded-xl border border-slate-900/15 bg-white px-3 py-2.5 text-[14px] text-slate-900 outline-none focus:border-indigo-500/60 focus:ring-4 focus:ring-indigo-500/15";
    const buttonClasses = "w-full rounded-xl bg-indigo-600 px-4 py-2.5 text-[14px] font-semibold text-white shadow-sm transition hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2";
    const secondaryButtonClasses = "w-full rounded-xl border border-slate-900/15 bg-white px-4 py-2.5 text-[14px] font-semibold text-slate-900 hover:bg-slate-50 transition";

    const isValid = densityValue > 0;

    return (
        <section aria-label="Asphalt Density Calculator">
            <div className={containerClasses}>
                <div className="mb-6"><h2 className="text-[18px] font-semibold tracking-[-0.01em] text-slate-900">Density Converter</h2></div>
                <div className="grid gap-6">
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="density" className="text-[13px] font-medium text-slate-900/80">Density</label>
                        <div className="flex items-center gap-2">
                            <input id="density" type="number" min="0" step="any" className={inputClasses} value={densityValue || ""} onChange={(e) => setDensityValue(parseFloat(e.target.value))} placeholder="e.g. 145" />
                            <select className={selectClasses} value={densityUnit} onChange={(e) => setDensityUnit(e.target.value as DensityUnit)}>
                                <option value="lb_ft3">lb/ft³</option>
                                <option value="kg_m3">kg/m³</option>
                            </select>
                        </div>
                        <p className="text-[12px] text-slate-500">Standard hot mix asphalt ≈ 145 lb/ft³ (2,322 kg/m³).</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <button onClick={handleCalculate} disabled={!isValid} className={buttonClasses}><Calculator className="h-4 w-4" /> Convert</button>
                        <button onClick={handleReset} className={secondaryButtonClasses}>Reset</button>
                    </div>

                    <div ref={resultsAnchorRef} />

                    <div className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${hasCalculated ? "opacity-100" : "opacity-0"}`} style={{ maxHeight: hasCalculated ? resultsHeight : 0 }} aria-live="polite">
                        <div ref={resultsInnerRef} className="pt-2">
                            <div className="rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm">
                                <h3 className="text-[16px] font-semibold text-slate-900 mb-4">Density Conversions</h3>
                                <dl className="grid gap-3 sm:grid-cols-2">
                                    <div className="rounded-xl bg-slate-50 p-4 border border-slate-200">
                                        <dt className="text-[12px] text-slate-500 uppercase tracking-wider font-semibold">Imperial</dt>
                                        <dd className="text-[24px] font-bold text-slate-900 mt-1">{formatNumber(result.lbFt3, 2)} <span className="text-[14px] font-semibold text-slate-600">lb/ft³</span></dd>
                                    </div>
                                    <div className="rounded-xl bg-slate-50 p-4 border border-slate-200">
                                        <dt className="text-[12px] text-slate-500 uppercase tracking-wider font-semibold">Metric</dt>
                                        <dd className="text-[24px] font-bold text-slate-900 mt-1">{formatNumber(result.kgM3, 2)} <span className="text-[14px] font-semibold text-slate-600">kg/m³</span></dd>
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
