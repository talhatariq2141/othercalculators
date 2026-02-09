"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";

function isFiniteNumber(n: unknown): n is number {
    return typeof n === "number" && Number.isFinite(n);
}

function formatNumber(n: number, decimals = 2) {
    if (!Number.isFinite(n)) return "—";
    const s = n.toFixed(decimals);
    return s.replace(/\.?0+$/, "");
}

// clamp helper
function clamp(n: number, min: number, max: number) {
    return Math.min(max, Math.max(min, n));
}

type VolumeUnit = "ft3" | "yd3" | "m3";

export default function AsphaltWeightCalculator() {
    // State
    const [volume, setVolume] = useState<number>(10);
    const [volumeUnit, setVolumeUnit] = useState<VolumeUnit>("yd3");
    const [density, setDensity] = useState<number>(145); // lb/ft³ default

    const [hasCalculated, setHasCalculated] = useState(false);
    const resultsAnchorRef = useRef<HTMLDivElement | null>(null);
    const resultsInnerRef = useRef<HTMLDivElement | null>(null);
    const [resultsHeight, setResultsHeight] = useState<number>(0);

    // Derived results
    const result = useMemo(() => {
        // Convert input volume to cubic feet for base calculation
        let volFt3 = 0;
        let volM3 = 0;

        // safe clamp
        const v = clamp(volume, 0, 1_000_000);
        const d = clamp(density, 50, 3500); // broad range to allow metric density if user wants

        if (volumeUnit === "yd3") {
            volFt3 = v * 27;
            volM3 = volFt3 / 35.3147;
        } else if (volumeUnit === "ft3") {
            volFt3 = v;
            volM3 = v / 35.3147;
        } else {
            // m3
            volM3 = v;
            volFt3 = v * 35.3147;
        }

        // Weight calc
        // Assume density is lb/ft³ if unit is imperial-ish, but user might input kg/m³?
        // The prompt says "Density is typically 145 lb per cubic foot".
        // Let's assume the input Density is ALWAYS in lb/ft³ for simplicity unless we add a unit toggle for density. 
        // Given the prompt "Weight (lbs) = Volume (cubic feet) × Density (lb/ft³)", we will stick to that.

        const weightLbs = volFt3 * d;
        const weightTons = weightLbs / 2000;
        const weightTonnes = weightLbs / 2204.62;

        return {
            volFt3,
            weightLbs,
            weightTons,
            weightTonnes
        };
    }, [volume, volumeUnit, density]);

    // Height anim
    useEffect(() => {
        if (!hasCalculated) {
            setResultsHeight(0);
            return;
        }
        if (resultsInnerRef.current) {
            setResultsHeight(resultsInnerRef.current.scrollHeight);
        }
    }, [hasCalculated, result]);

    // Handlers
    const handleCalculate = () => {
        if (!isFiniteNumber(volume) || volume <= 0) return;
        setHasCalculated(true);
        setTimeout(() => {
            resultsAnchorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
    };

    const handleReset = () => {
        setHasCalculated(false);
        setVolume(10);
        setVolumeUnit("yd3");
        setDensity(145);
    };

    // UI Classes (Standard Spec)
    const containerClasses = "rounded-2xl border-2 border-dashed border-green-700 bg-green-100/80 p-5 sm:p-6";
    const inputClasses = "w-full rounded-xl border border-slate-900/15 bg-white px-3 py-2.5 text-[14px] text-slate-900 outline-none focus:border-indigo-500/60 focus:ring-4 focus:ring-indigo-500/15";
    const selectClasses = "rounded-xl border border-slate-900/15 bg-white px-3 py-2.5 text-[14px] text-slate-900 outline-none focus:border-indigo-500/60 focus:ring-4 focus:ring-indigo-500/15";
    const buttonClasses = "w-full rounded-xl bg-indigo-600 px-4 py-2.5 text-[14px] font-semibold text-white shadow-sm transition hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed";
    const secondaryButtonClasses = "w-full rounded-xl border border-slate-900/15 bg-white px-4 py-2.5 text-[14px] font-semibold text-slate-900 hover:bg-slate-50 transition";
    const unitBadgeClasses = "inline-flex items-center whitespace-nowrap rounded-full border border-slate-900/10 bg-slate-900/5 px-3 py-2 text-[12px] text-slate-900/70";

    const isValid = isFiniteNumber(volume) && volume > 0 && isFiniteNumber(density) && density > 0;

    return (
        <section aria-label="Asphalt Weight Calculator">
            <div className={containerClasses}>
                <div className="mb-6">
                    <h2 className="text-[18px] font-semibold tracking-[-0.01em] text-slate-900">Calculator</h2>
                </div>

                <div className="grid gap-6">
                    <fieldset className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[13px] font-medium text-slate-900/80">Volume</label>
                            <div className="flex items-center gap-2">
                                <input
                                    type="number"
                                    min="0"
                                    step="any"
                                    className={inputClasses}
                                    value={volume}
                                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                                />
                                <select
                                    className={selectClasses}
                                    value={volumeUnit}
                                    onChange={(e) => setVolumeUnit(e.target.value as VolumeUnit)}
                                >
                                    <option value="yd3">yd³</option>
                                    <option value="ft3">ft³</option>
                                    <option value="m3">m³</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label className="text-[13px] font-medium text-slate-900/80">Density</label>
                            <div className="flex items-center gap-2">
                                <input
                                    type="number"
                                    min="0"
                                    step="any"
                                    className={inputClasses}
                                    value={density}
                                    onChange={(e) => setDensity(parseFloat(e.target.value))}
                                />
                                <span className={unitBadgeClasses}>lb/ft³</span>
                            </div>
                            <p className="text-[12px] leading-4 text-slate-500">Standard hot mix ≈ 145 lb/ft³</p>
                        </div>
                    </fieldset>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <button
                            onClick={handleCalculate}
                            disabled={!isValid}
                            className={buttonClasses}
                        >
                            Calculate Weight
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
                                    <h3 className="text-[16px] font-semibold text-slate-900">Estimated Weight</h3>
                                </div>

                                <div className="flex items-baseline gap-2 mb-6">
                                    <span className="text-[42px] font-bold text-slate-900 tracking-tight">
                                        {formatNumber(result.weightTons, 2)}
                                    </span>
                                    <span className="text-[20px] font-semibold text-slate-600">tons</span>
                                </div>

                                <dl className="grid gap-3 sm:grid-cols-2">
                                    <div className="rounded-xl bg-slate-50 p-3 border border-slate-200">
                                        <dt className="text-[12px] text-slate-500">Weight (lbs)</dt>
                                        <dd className="text-[16px] font-semibold text-slate-900">
                                            {formatNumber(result.weightLbs, 0)} lbs
                                        </dd>
                                    </div>
                                    <div className="rounded-xl bg-slate-50 p-3 border border-slate-200">
                                        <dt className="text-[12px] text-slate-500">Metric Tonnes</dt>
                                        <dd className="text-[16px] font-semibold text-slate-900">
                                            {formatNumber(result.weightTonnes, 2)} t
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
