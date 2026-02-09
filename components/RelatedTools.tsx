"use client";

import { useState } from "react";
import Link from "next/link";
import { calculators } from "@/data/calculators";

interface RelatedToolsProps {
    category: string;
    currentPath: string;
}

export default function RelatedTools({ category, currentPath }: RelatedToolsProps) {
    const [showAll, setShowAll] = useState(false);

    // Filter tools in the same category, excluding the current tool
    const related = calculators.filter(
        (calc) => calc.category === category && calc.href !== currentPath
    );

    if (related.length === 0) return null;

    const displayTools = showAll ? related : related.slice(0, 10);
    const hasMore = related.length > 10;

    return (
        <section aria-labelledby="related-tools-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
            <h2 id="related-tools-title" className="text-[22px] font-semibold text-slate-900 mb-4">
                Related {category} Tools
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
                {displayTools.map((calc, index) => (
                    <Link
                        key={index}
                        href={calc.href}
                        className="block rounded-xl border border-slate-200 p-4 hover:border-indigo-300 hover:bg-slate-50 transition group"
                    >
                        <span className="font-semibold text-indigo-700 group-hover:text-indigo-800 transition">
                            {calc.title}
                        </span>
                        <p className="text-xs text-slate-500 mt-1 line-clamp-1">
                            {calc.description}
                        </p>
                    </Link>
                ))}
            </div>

            {hasMore && !showAll && (
                <div className="mt-6 flex justify-end">
                    <button
                        onClick={() => setShowAll(true)}
                        className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition-colors flex items-center gap-1"
                    >
                        Show More
                        <span aria-hidden="true">→</span>
                    </button>
                </div>
            )}
        </section>
    );
}
