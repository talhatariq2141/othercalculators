"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import { Plus, Trash2, Calculator } from "lucide-react";

function isFiniteNumber(n: unknown): n is number {
    return typeof n === "number" && Number.isFinite(n);
}

function formatNumber(n: number, decimals = 2) {
    if (!Number.isFinite(n)) return "—";
    const s = n.toFixed(decimals);
    return s.replace(/\.?0+$/, "");
}

type AreaItem = {
    id: string;
    length: number;
    width: number;
};

export default function AsphaltAreaCalculator() {
    const [areas, setAreas] = useState<AreaItem[]>([
        { id: "1", length: 20, width: 10 },
    ]);

    const [hasCalculated, setHasCalculated] = useState(false);
    const resultsAnchorRef = useRef<HTMLDivElement | null>(null);
    const resultsInnerRef = useRef<HTMLDivElement | null>(null);
    const [resultsHeight, setResultsHeight] = useState<number>(0);

    const result = useMemo(() => {
        let totalSqFt = 0;
        areas.forEach(a => {
            if (isFiniteNumber(a.length) && isFiniteNumber(a.width)) {
                totalSqFt += Math.max(0, a.length) * Math.max(0, a.width);
            }
        });
        const totalSqYd = totalSqFt / 9;
        const totalSqM = totalSqFt * 0.092903;
        return { totalSqFt, totalSqYd, totalSqM };
    }, [areas]);

    useEffect(() => {
        if (!hasCalculated) { setResultsHeight(0); return; }
        if (resultsInnerRef.current) setResultsHeight(resultsInnerRef.current.scrollHeight);
    }, [hasCalculated, result]);

    const handleAddArea = () => {
        setAreas(prev => [...prev, { id: crypto.randomUUID(), length: 0, width: 0 }]);
        setHasCalculated(false);
    };

    const handleRemoveArea = (id: string) => {
        if (areas.length <= 1) return;
        setAreas(prev => prev.filter(a => a.id !== id));
        setHasCalculated(false);
    };

    const handleUpdateArea = (id: string, field: 'length' | 'width', value: number) => {
        setAreas(prev => prev.map(a => a.id === id ? { ...a, [field]: value } : a));
    };

    const handleCalculate = () => {
        if (result.totalSqFt <= 0) return;
        setHasCalculated(true);
        setTimeout(() => resultsAnchorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
    };

    const handleReset = () => {
        setHasCalculated(false);
        setAreas([{ id: crypto.randomUUID(), length: 20, width: 10 }]);
    };

    const containerClasses = "rounded-2xl border-2 border-dashed border-green-700 bg-green-100/80 p-5 sm:p-6";
    const inputClasses = "w-full rounded-xl border border-slate-900/15 bg-white px-3 py-2.5 text-[14px] text-slate-900 outline-none focus:border-indigo-500/60 focus:ring-4 focus:ring-indigo-500/15";
    const buttonClasses = "w-full rounded-xl bg-indigo-600 px-4 py-2.5 text-[14px] font-semibold text-white shadow-sm transition hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2";
    const secondaryButtonClasses = "w-full rounded-xl border border-slate-900/15 bg-white px-4 py-2.5 text-[14px] font-semibold text-slate-900 hover:bg-slate-50 transition";
    const iconButtonClasses = "rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-600 transition disabled:opacity-30";

    const isValid = result.totalSqFt > 0;

    return (
        <section aria-label="Asphalt Area Calculator">
            <div className={containerClasses}>
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-[18px] font-semibold tracking-[-0.01em] text-slate-900">Project Areas</h2>
                    <span className="text-[12px] font-medium text-slate-500 bg-white/50 px-2 py-1 rounded-md">{areas.length} {areas.length === 1 ? 'Area' : 'Areas'}</span>
                </div>

                <div className="grid gap-4">
                    {areas.map((area, index) => (
                        <fieldset key={area.id} className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 rounded-xl bg-white/60 p-3 border border-green-700/10">
                            <legend className="sr-only">Area {index + 1}</legend>
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor={`length-${area.id}`} className="text-[13px] font-medium text-slate-900/80">Length (ft) <span className="text-xs text-slate-400 font-normal">- Area {index + 1}</span></label>
                                <input id={`length-${area.id}`} type="number" min="0" step="any" className={inputClasses} value={area.length || ""} onChange={(e) => handleUpdateArea(area.id, 'length', parseFloat(e.target.value))} placeholder="0" />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor={`width-${area.id}`} className="text-[13px] font-medium text-slate-900/80">Width (ft)</label>
                                <div className="flex items-center gap-2">
                                    <input id={`width-${area.id}`} type="number" min="0" step="any" className={inputClasses} value={area.width || ""} onChange={(e) => handleUpdateArea(area.id, 'width', parseFloat(e.target.value))} placeholder="0" />
                                    {areas.length > 1 && <button onClick={() => handleRemoveArea(area.id)} className={iconButtonClasses} aria-label={`Remove Area ${index + 1}`}><Trash2 className="h-5 w-5" /></button>}
                                </div>
                            </div>
                        </fieldset>
                    ))}

                    <button onClick={handleAddArea} className="flex items-center justify-center gap-1.5 rounded-xl border border-dashed border-slate-300 bg-white/40 px-4 py-2 text-[13px] font-semibold text-slate-600 hover:border-indigo-400 hover:bg-white hover:text-indigo-600 transition">
                        <Plus className="h-4 w-4" /> Add Another Area
                    </button>

                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <button onClick={handleCalculate} disabled={!isValid} className={buttonClasses}><Calculator className="h-4 w-4" /> Calculate Total Area</button>
                        <button onClick={handleReset} className={secondaryButtonClasses}>Reset</button>
                    </div>

                    <div ref={resultsAnchorRef} />

                    <div className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${hasCalculated ? "opacity-100" : "opacity-0"}`} style={{ maxHeight: hasCalculated ? resultsHeight : 0 }} aria-live="polite">
                        <div ref={resultsInnerRef} className="pt-2">
                            <div className="rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm">
                                <h3 className="text-[16px] font-semibold text-slate-900 mb-4">Total Project Area</h3>
                                <div className="flex items-baseline gap-2 mb-6">
                                    <span className="text-[42px] font-bold text-slate-900 tracking-tight">{formatNumber(result.totalSqFt, 2)}</span>
                                    <span className="text-[20px] font-semibold text-slate-600">sq ft</span>
                                </div>
                                <dl className="grid gap-3 sm:grid-cols-2">
                                    <div className="rounded-xl bg-slate-50 p-3 border border-slate-200">
                                        <dt className="text-[12px] text-slate-500">Square Yards</dt>
                                        <dd className="text-[16px] font-semibold text-slate-900">{formatNumber(result.totalSqYd, 2)} sq yd</dd>
                                    </div>
                                    <div className="rounded-xl bg-slate-50 p-3 border border-slate-200">
                                        <dt className="text-[12px] text-slate-500">Square Meters</dt>
                                        <dd className="text-[16px] font-semibold text-slate-900">{formatNumber(result.totalSqM, 2)} m²</dd>
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
