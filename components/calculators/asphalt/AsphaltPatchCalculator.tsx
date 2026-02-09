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
    length: 10,
    width: 10,
    depth: 4,
    density: 137, // Cold mix or patch density is often slightly lower
    wastePct: 10,
};

export default function AsphaltPatchCalculator() {
    const [length, setLength] = useState(DEFAULTS.length);
    const [width, setWidth] = useState(DEFAULTS.width);
    const [depth, setDepth] = useState(DEFAULTS.depth);
    const [density, setDensity] = useState(DEFAULTS.density);
    const [wastePct, setWastePct] = useState(DEFAULTS.wastePct);

    const [hasCalculated, setHasCalculated] = useState(false);
    const resultsAnchorRef = useRef<HTMLDivElement | null>(null);
    const resultsInnerRef = useRef<HTMLDivElement | null>(null);
    const [resultsHeight, setResultsHeight] = useState<number>(0);

    const result = useMemo(() => {
        const L = clampNumber(length, 0, 10_000);
        const W = clampNumber(width, 0, 10_000);
        const D_in = clampNumber(depth, 0, 100);
        const Dens = clampNumber(density, 1, 500);
        const Wp = clampNumber(wastePct, 0, 100);

        const areaSqFt = L * W;
        const volCuFt = areaSqFt * (D_in / 12);
        const weightLbs = volCuFt * Dens;
        const tonnage = weightLbs / 2000;
        const tonnageWithWaste = tonnage * (1 + Wp / 100);
        const bagsOfColdMix = weightLbs / 50; // Standard 50lb bag

        return {
            areaSqFt,
            volCuFt,
            weightLbs,
            tonnage,
            tonnageWithWaste,
            bagsOfColdMix,
        };
    }, [length, width, depth, density, wastePct]);

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
        if (!isFiniteNumber(length) || length <= 0) return;
        setHasCalculated(true);
        setTimeout(() => {
            resultsAnchorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
    };

    const handleReset = () => {
        setHasCalculated(false);
        setLength(DEFAULTS.length);
        setWidth(DEFAULTS.width);
        setDepth(DEFAULTS.depth);
        setDensity(DEFAULTS.density);
        setWastePct(DEFAULTS.wastePct);
    };

    const containerClasses = "rounded-2xl border-2 border-dashed border-green-700 bg-green-100/80 p-5 sm:p-6";
    const inputClasses = "w-full rounded-xl border border-slate-900/15 bg-white px-3 py-2.5 text-[14px] text-slate-900 outline-none focus:border-indigo-500/60 focus:ring-4 focus:ring-indigo-500/15";
    const buttonClasses = "w-full rounded-xl bg-indigo-600 px-4 py-2.5 text-[14px] font-semibold text-white shadow-sm transition hover:bg-indigo-700 disabled:opacity-60 disabled:cursor-not-allowed";
    const secondaryButtonClasses = "w-full rounded-xl border border-slate-900/15 bg-white px-4 py-2.5 text-[14px] font-semibold text-slate-900 hover:bg-slate-50 transition";
    const unitBadgeClasses = "inline-flex items-center whitespace-nowrap rounded-full border border-slate-900/10 bg-slate-900/5 px-3 py-2 text-[12px] text-slate-900/70";

    const isValid = isFiniteNumber(length) && length > 0 && isFiniteNumber(width) && width > 0 && isFiniteNumber(depth) && depth > 0;

    return (
        <section aria-label="Asphalt Patch Calculator">
            <div className={containerClasses}>
                <div className="mb-6">
                    <h2 className="text-[18px] font-semibold tracking-[-0.01em] text-slate-900">Repair & Patch Estimator</h2>
                </div>

                <div className="grid gap-6">
                    <fieldset className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[13px] font-medium text-slate-900/80">Patch Length (ft)</label>
                            <input
                                type="number"
                                className={inputClasses}
                                value={length}
                                onChange={(e) => setLength(parseFloat(e.target.value))}
                            />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[13px] font-medium text-slate-900/80">Patch Width (ft)</label>
                            <input
                                type="number"
                                className={inputClasses}
                                value={width}
                                onChange={(e) => setWidth(parseFloat(e.target.value))}
                            />
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[13px] font-medium text-slate-900/80">Patch Depth (in)</label>
                            <div className="flex items-center gap-2">
                                <input
                                    type="number"
                                    className={inputClasses}
                                    value={depth}
                                    onChange={(e) => setDepth(parseFloat(e.target.value))}
                                />
                                <span className={unitBadgeClasses}>inches</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[13px] font-medium text-slate-900/80">Density (lb/ft³)</label>
                            <input
                                type="number"
                                className={inputClasses}
                                value={density}
                                onChange={(e) => setDensity(parseFloat(e.target.value))}
                            />
                            <p className="text-[11px] text-slate-500">Standard hot mix: 145. Cold mix: ~137.</p>
                        </div>
                    </fieldset>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <button
                            onClick={handleCalculate}
                            disabled={!isValid}
                            className={buttonClasses}
                        >
                            Calculate Patch Material
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
                                <span className="text-[13px] font-medium text-indigo-900/60 uppercase tracking-wider block mb-1">Repair Materials</span>
                                <div className="flex items-baseline gap-2 mb-6">
                                    <span className="text-[42px] font-bold text-slate-900 tracking-tight">
                                        {formatNumber(result.weightLbs, 0)}
                                    </span>
                                    <span className="text-[20px] font-semibold text-slate-600">lbs</span>
                                </div>

                                <dl className="grid gap-3 sm:grid-cols-2">
                                    <div className="rounded-xl bg-slate-50 p-3 border border-slate-200">
                                        <dt className="text-[12px] text-slate-500">Number of 50lb Bags (Cold Mix)</dt>
                                        <dd className="text-[16px] font-semibold text-slate-900">
                                            ~{Math.ceil(result.bagsOfColdMix)} bags
                                        </dd>
                                    </div>
                                    <div className="rounded-xl bg-slate-50 p-3 border border-slate-200">
                                        <dt className="text-[12px] text-slate-500">In Tons (including waste)</dt>
                                        <dd className="text-[16px] font-semibold text-slate-900">
                                            {formatNumber(result.tonnageWithWaste, 2)} tons
                                        </dd>
                                    </div>
                                    <div className="rounded-xl bg-slate-50 p-3 border border-slate-200">
                                        <dt className="text-[12px] text-slate-500">Total Sq Footage</dt>
                                        <dd className="text-[16px] font-semibold text-slate-900">
                                            {formatNumber(result.areaSqFt, 0)} ft²
                                        </dd>
                                    </div>
                                    <div className="rounded-xl bg-slate-50 p-3 border border-slate-200">
                                        <dt className="text-[12px] text-slate-500">Cubic Feet</dt>
                                        <dd className="text-[16px] font-semibold text-slate-900">
                                            {formatNumber(result.volCuFt, 2)} ft³
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
