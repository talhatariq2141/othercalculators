"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

function clampNumber(n: number, min: number, max: number) {
    return Math.min(max, Math.max(min, n));
}
function isFiniteNumber(n: unknown): n is number {
    return typeof n === "number" && Number.isFinite(n);
}
function formatCurrency(n: number) {
    if (!Number.isFinite(n)) return "—";
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 2,
    }).format(n);
}

const DEFAULTS = {
    purchasePrice: 1000000,
    downPayment: 200000,
    interestRate: 7.5,
    loanTerm: 20,
    salesTaxRate: 0,
};

export type AircraftFinanceResult = {
    ok: boolean;
    loanAmount: number;
    monthlyPayment: number;
    totalPayment: number;
    totalInterest: number;
    salesTaxAmount: number;
};

export default function AircraftFinanceCalculator() {
    // Inputs
    const [purchasePrice, setPurchasePrice] = useState(DEFAULTS.purchasePrice);
    const [downPayment, setDownPayment] = useState(DEFAULTS.downPayment);
    const [interestRate, setInterestRate] = useState(DEFAULTS.interestRate);
    const [loanTerm, setLoanTerm] = useState(DEFAULTS.loanTerm);
    const [salesTaxRate, setSalesTaxRate] = useState(DEFAULTS.salesTaxRate);

    // UX state
    const [hasCalculated, setHasCalculated] = useState(false);
    const resultsAnchorRef = useRef<HTMLDivElement | null>(null);
    const resultsInnerRef = useRef<HTMLDivElement | null>(null);
    const [resultsHeight, setResultsHeight] = useState<number>(0);

    const result: AircraftFinanceResult = useMemo(() => {
        const P = Math.max(0, purchasePrice);
        const D = Math.max(0, downPayment);
        const r = Math.max(0, interestRate) / 100;
        const nYears = Math.max(0, loanTerm);
        const taxRate = Math.max(0, salesTaxRate) / 100;

        const salesTaxAmount = P * taxRate;
        const loanPrincipal = Math.max(0, P + salesTaxAmount - D);

        // Monthly rate
        const i = r / 12;
        // Total number of payments
        const nPayments = nYears * 12;

        let monthlyPayment = 0;
        if (loanPrincipal > 0) {
            if (i === 0) {
                monthlyPayment = nPayments > 0 ? loanPrincipal / nPayments : 0;
            } else {
                monthlyPayment = (loanPrincipal * i * Math.pow(1 + i, nPayments)) / (Math.pow(1 + i, nPayments) - 1);
            }
        }

        const totalPayment = monthlyPayment * nPayments;
        const totalInterest = Math.max(0, totalPayment - loanPrincipal);

        return {
            ok: P > 0 && nYears > 0,
            loanAmount: loanPrincipal,
            monthlyPayment,
            totalPayment,
            totalInterest,
            salesTaxAmount,
        };
    }, [purchasePrice, downPayment, interestRate, loanTerm, salesTaxRate]);

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

    const inputsValid = isFiniteNumber(purchasePrice) && isFiniteNumber(downPayment) && isFiniteNumber(interestRate) && isFiniteNumber(loanTerm);

    // Tailwind v4 UI Standards
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
        setPurchasePrice(DEFAULTS.purchasePrice);
        setDownPayment(DEFAULTS.downPayment);
        setInterestRate(DEFAULTS.interestRate);
        setLoanTerm(DEFAULTS.loanTerm);
        setSalesTaxRate(DEFAULTS.salesTaxRate);
    }

    const Field = ({ label, help, children }: { label: string; help?: string; children: React.ReactNode }) => (
        <div className="flex flex-col gap-1.5">
            <div className="text-[13px] font-medium text-slate-900/80">{label}</div>
            {children}
            {help ? <p className="text-[12px] leading-5 text-slate-900/60">{help}</p> : null}
        </div>
    );

    return (
        <section aria-label="Aircraft Finance Calculator">
            <div className={containerClasses}>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-6">
                    <h2 className="text-[18px] font-semibold tracking-[-0.01em] text-slate-900">Aircraft Loan Calculator</h2>
                </div>

                <div className="grid gap-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <Field label="Purchase Price">
                            <div className="relative">
                                <span className="absolute left-3 top-2.5 text-slate-500">$</span>
                                <input
                                    className={`${inputClasses} pl-8`}
                                    type="number"
                                    min={0}
                                    value={purchasePrice}
                                    onChange={(e) => setPurchasePrice(Number(e.target.value))}
                                />
                            </div>
                        </Field>

                        <Field label="Down Payment">
                            <div className="relative">
                                <span className="absolute left-3 top-2.5 text-slate-500">$</span>
                                <input
                                    className={`${inputClasses} pl-8`}
                                    type="number"
                                    min={0}
                                    value={downPayment}
                                    onChange={(e) => setDownPayment(Number(e.target.value))}
                                />
                            </div>
                        </Field>

                        <Field label="Interest Rate (Annual)">
                            <div className="flex items-center gap-2">
                                <input
                                    className={inputClasses}
                                    type="number"
                                    min={0}
                                    max={100}
                                    step="0.1"
                                    value={interestRate}
                                    onChange={(e) => setInterestRate(Number(e.target.value))}
                                />
                                <span className={unitBadgeClasses}>%</span>
                            </div>
                        </Field>

                        <Field label="Loan Term">
                            <div className="flex items-center gap-2">
                                <input
                                    className={inputClasses}
                                    type="number"
                                    min={0}
                                    max={100}
                                    value={loanTerm}
                                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                                />
                                <span className={unitBadgeClasses}>Years</span>
                            </div>
                        </Field>

                        <Field label="Sales Tax Rate (Optional)">
                            <div className="flex items-center gap-2">
                                <input
                                    className={inputClasses}
                                    type="number"
                                    min={0}
                                    max={100}
                                    step="0.1"
                                    value={salesTaxRate}
                                    onChange={(e) => setSalesTaxRate(Number(e.target.value))}
                                />
                                <span className={unitBadgeClasses}>%</span>
                            </div>
                        </Field>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <button
                            onClick={handleCalculate}
                            disabled={!inputsValid}
                            className={buttonClasses}
                        >
                            Calculate Payment
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
                                    <span className="text-[13px] font-medium text-indigo-900/60 uppercase tracking-wider">Estimated Monthly Payment</span>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-[42px] font-bold text-slate-900 tracking-tight">
                                            {formatCurrency(result.monthlyPayment)}
                                        </span>
                                        <span className="text-[20px] font-semibold text-slate-600">/mo</span>
                                    </div>
                                    <p className="text-[13px] text-slate-600">
                                        Amount financed: <span className="font-semibold">{formatCurrency(result.loanAmount)}</span>
                                    </p>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    <div className="rounded-xl bg-white p-3 border border-indigo-100 shadow-sm">
                                        <div className="text-[12px] text-slate-500">Total Payments</div>
                                        <div className="text-[16px] font-semibold text-slate-900">
                                            {formatCurrency(result.totalPayment)}
                                        </div>
                                    </div>
                                    <div className="rounded-xl bg-white p-3 border border-indigo-100 shadow-sm">
                                        <div className="text-[12px] text-slate-500">Total Interest</div>
                                        <div className="text-[16px] font-semibold text-slate-900">
                                            {formatCurrency(result.totalInterest)}
                                        </div>
                                    </div>
                                    <div className="rounded-xl bg-white p-3 border border-indigo-100 shadow-sm">
                                        <div className="text-[12px] text-slate-500">Sales Tax Included</div>
                                        <div className="text-[16px] font-semibold text-slate-900">
                                            {formatCurrency(result.salesTaxAmount)}
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
