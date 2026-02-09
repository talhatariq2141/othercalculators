// ScientificCalculator.tsx
"use client";

import React, { useMemo, useState } from "react";

type Btn = {
    key: string;
    label: React.ReactNode;
    kind?: "pill" | "op" | "primary";
    onClick?: () => void;
};

function clampFinite(n: number) {
    if (!Number.isFinite(n)) return NaN;
    return n;
}

function formatNumber(n: number) {
    if (!Number.isFinite(n)) return "Error";
    // Keep it readable (like typical calculators)
    const abs = Math.abs(n);
    if (abs !== 0 && (abs >= 1e10 || abs < 1e-6)) return n.toExponential(8).replace(/\.?0+e/, "e");
    const s = n.toFixed(10).replace(/\.?0+$/, "");
    return s.length ? s : "0";
}

function factorial(n: number) {
    n = Math.trunc(n);
    if (n < 0) return NaN;
    if (n > 170) return Infinity; // JS number overflow ~ 171!
    let r = 1;
    for (let i = 2; i <= n; i++) r *= i;
    return r;
}

export default function ScientificCalculator() {
    const [expr, setExpr] = useState<string>("0");
    const [result, setResult] = useState<string>("0");
    const [isDeg, setIsDeg] = useState<boolean>(true);
    const [inv, setInv] = useState<boolean>(false);
    const [lastAns, setLastAns] = useState<number>(0);

    const displayValue = useMemo(() => {
        return result ?? "0";
    }, [result]);

    const resetAll = () => {
        setExpr("0");
        setResult("0");
        setInv(false);
    };

    const append = (token: string) => {
        setExpr((prev) => {
            const p = prev === "0" ? "" : prev;
            const next = p + token;
            setResult(next || "0");
            return next || "0";
        });
    };

    const setExprDirect = (next: string) => {
        const cleaned = next.trim() || "0";
        setExpr(cleaned);
        setResult(cleaned);
    };

    const toggleDegRad = (deg: boolean) => setIsDeg(deg);

    const applyUnaryAroundSelection = (fnName: string) => {
        const cur = expr === "0" ? "" : expr;
        const endsWith = cur.slice(-1);
        if (!cur || /[+\-*/^(,]$/.test(endsWith)) {
            append(`${fnName}(`);
            return;
        }
        if (/^[\d.]+$/.test(cur)) {
            setExprDirect(`${fnName}(${cur})`);
            return;
        }
        append(`${fnName}(`);
    };

    const applyFactorialToEnd = () => {
        const cur = expr;
        if (/[0-9)]$/.test(cur)) {
            const v = safeEval(cur, isDeg);
            if (Number.isFinite(v)) {
                const f = factorial(v);
                const formatted = formatNumber(f);
                setExprDirect(formatted);
                setLastAns(f);
                return;
            }
        }
        append("!");
    };

    const safeEvalAndSet = () => {
        const v = safeEval(expr, isDeg);
        if (!Number.isFinite(v)) {
            setResult("Error");
            return;
        }
        const formatted = formatNumber(v);
        setResult(formatted);
        setExpr(formatted);
        setLastAns(v);
    };

    const backspace = () => {
        setExpr((prev) => {
            const p = prev.length <= 1 ? "0" : prev.slice(0, -1);
            setResult(p);
            return p;
        });
    };

    const buttons: Btn[] = [
        { key: "deg", label: "Deg", kind: "pill", onClick: () => toggleDegRad(true) },
        { key: "rad", label: "Rad", kind: "pill", onClick: () => toggleDegRad(false) },
        { key: "fact", label: "x!", kind: "pill", onClick: applyFactorialToEnd },
        { key: "lp", label: "(", kind: "pill", onClick: () => append("(") },
        { key: "rp", label: ")", kind: "pill", onClick: () => append(")") },
        { key: "pct", label: "%", kind: "pill", onClick: () => append("%") },
        { key: "ac", label: "AC", kind: "pill", onClick: resetAll },

        { key: "inv", label: "Inv", kind: "pill", onClick: () => setInv((v) => !v) },
        { key: "sin", label: inv ? "asin" : "sin", kind: "pill", onClick: () => applyUnaryAroundSelection(inv ? "asin" : "sin") },
        { key: "ln", label: "ln", kind: "pill", onClick: () => applyUnaryAroundSelection("ln") },
        { key: "7", label: "7", onClick: () => append("7") },
        { key: "8", label: "8", onClick: () => append("8") },
        { key: "9", label: "9", onClick: () => append("9") },
        { key: "div", label: "÷", kind: "op", onClick: () => append("÷") },

        { key: "pi", label: "π", kind: "pill", onClick: () => append("pi") },
        { key: "cos", label: inv ? "acos" : "cos", kind: "pill", onClick: () => applyUnaryAroundSelection(inv ? "acos" : "cos") },
        { key: "log", label: "log", kind: "pill", onClick: () => applyUnaryAroundSelection("log") },
        { key: "4", label: "4", onClick: () => append("4") },
        { key: "5", label: "5", onClick: () => append("5") },
        { key: "6", label: "6", onClick: () => append("6") },
        { key: "mul", label: "×", kind: "op", onClick: () => append("×") },

        { key: "e", label: "e", kind: "pill", onClick: () => append("e") },
        { key: "tan", label: inv ? "atan" : "tan", kind: "pill", onClick: () => applyUnaryAroundSelection(inv ? "atan" : "tan") },
        { key: "sqrt", label: "√", kind: "pill", onClick: () => applyUnaryAroundSelection("sqrt") },
        { key: "1", label: "1", onClick: () => append("1") },
        { key: "2", label: "2", onClick: () => append("2") },
        { key: "3", label: "3", onClick: () => append("3") },
        { key: "sub", label: "−", kind: "op", onClick: () => append("−") },

        { key: "ans", label: "Ans", kind: "pill", onClick: () => append(String(lastAns)) },
        { key: "exp", label: "EXP", kind: "pill", onClick: () => append("E") },
        { key: "pow", label: "xʸ", kind: "pill", onClick: () => append("^") },
        { key: "0", label: "0", onClick: () => append("0") },
        { key: "dot", label: ".", onClick: () => append(".") },
        { key: "eq", label: "=", kind: "primary", onClick: safeEvalAndSet },
        { key: "add", label: "+", kind: "op", onClick: () => append("+") },
    ];

    return (
        <section className="mx-auto w-full max-w-xl">
            <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
                {/* Display */}
                <div className="relative mb-5 rounded-2xl border border-slate-200 bg-white px-4 py-3">
                    <button
                        type="button"
                        onClick={backspace}
                        className="absolute left-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 active:scale-[0.98]"
                        aria-label="Backspace"
                        title="Backspace"
                    >
                        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 12a9 9 0 1 0 3-6.7" />
                            <path d="M3 4v6h6" />
                            <path d="M12 7v6l4 2" />
                        </svg>
                    </button>

                    <div className="flex items-center justify-end">
                        <div className="text-right">
                            <div className="select-none text-[11px] font-medium text-slate-400">
                                {isDeg ? "DEG" : "RAD"} {inv ? "• INV" : ""}
                            </div>
                            <div className="mt-1 font-semibold tabular-nums text-slate-900">
                                <span className="block truncate text-3xl sm:text-4xl">{displayValue}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Keys */}
                <div className="grid grid-cols-7 gap-3">
                    {buttons.map((b) => {
                        const isDegBtn = b.key === "deg";
                        const isRadBtn = b.key === "rad";
                        const activeToggle = (isDegBtn && isDeg) || (isRadBtn && !isDeg);

                        const base =
                            "h-12 rounded-full px-2 text-sm font-medium transition active:scale-[0.99] disabled:opacity-50 disabled:active:scale-100";
                        const pill =
                            "bg-slate-100 text-slate-900 hover:bg-slate-200";
                        const op =
                            "bg-slate-200/70 text-slate-900 hover:bg-slate-200";
                        const primary =
                            "bg-blue-600 text-white hover:bg-blue-700 shadow-sm";

                        const cls =
                            b.kind === "primary"
                                ? `${base} ${primary}`
                                : b.kind === "op"
                                    ? `${base} ${op}`
                                    : `${base} ${pill}`;

                        const toggleCls = activeToggle
                            ? "ring-2 ring-blue-500/30 bg-blue-50 hover:bg-blue-100"
                            : "";

                        const degRadWrap =
                            b.key === "deg"
                                ? "col-span-1"
                                : b.key === "rad"
                                    ? "col-span-1"
                                    : "col-span-1";

                        return (
                            <button
                                key={b.key}
                                type="button"
                                onClick={b.onClick}
                                className={`${cls} ${toggleCls} ${degRadWrap}`}
                                aria-pressed={activeToggle ? true : undefined}
                            >
                                {b.label}
                            </button>
                        );
                    })}
                </div>

                {/* Tiny helper row */}
                <div className="mt-4 text-center text-xs text-slate-500">
                    Tip: use <span className="font-medium">π</span>, <span className="font-medium">e</span>, <span className="font-medium">^</span>, and parentheses for complex expressions.
                </div>
            </div>
        </section>
    );
}

/**
 * Safely evaluate the calculator expression with a restricted function scope.
 */
function safeEval(raw: string, isDeg: boolean): number {
    try {
        let s = (raw || "").trim();
        if (!s) return 0;

        s = s.replaceAll("×", "*").replaceAll("÷", "/").replaceAll("−", "-");
        s = s.replaceAll("^", "**");
        s = s.replace(/(\d+(\.\d+)?)%/g, "($1/100)");
        s = s.replace(/(\d)E([+\-]?\d)/g, "$1e$2");

        while (s.includes("!")) {
            s = s.replace(/(\d+(\.\d+)?|\([^()]*\))!/g, "fact($1)");
        }

        if (!/^[0-9a-zA-Z+\-*/().,\s*e!^%]*$/.test(s)) return NaN;

        const toRad = (x: number) => (x * Math.PI) / 180;
        const toDeg = (x: number) => (x * 180) / Math.PI;

        const ctx = {
            pi: Math.PI,
            e: Math.E,
            fact: (x: number) => factorial(x),
            sqrt: (x: number) => Math.sqrt(x),
            exp: (x: number) => Math.exp(x),
            ln: (x: number) => Math.log(x),
            log: (x: number) => Math.log10(x),
            sin: (x: number) => Math.sin(isDeg ? toRad(x) : x),
            cos: (x: number) => Math.cos(isDeg ? toRad(x) : x),
            tan: (x: number) => Math.tan(isDeg ? toRad(x) : x),
            asin: (x: number) => (isDeg ? toDeg(Math.asin(x)) : Math.asin(x)),
            acos: (x: number) => (isDeg ? toDeg(Math.acos(x)) : Math.acos(x)),
            atan: (x: number) => (isDeg ? toDeg(Math.atan(x)) : Math.atan(x)),
        } as const;

        const fn = new Function("ctx", `with (ctx) { return (${s}); }`);
        const out = fn(ctx as unknown);
        return clampFinite(Number(out));
    } catch {
        return NaN;
    }
}
