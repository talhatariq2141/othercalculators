import type { Metadata } from "next";
import { CalculatorGrid } from "@/components/CalculatorGrid";

export const metadata: Metadata = {
    title: "General Calculators | Everyday Calculation Tools",
    description: "Access our suite of general-purpose calculators. Scientific calculator, unit converters, and everyday math tools for all your calculation needs.",
    alternates: { canonical: "/calculators/general" },
    openGraph: {
        title: "General Calculators | Everyday Calculation Tools",
        description: "Comprehensive suite of general calculators for math, science, and everyday use.",
        url: "https://othercalculators.com/calculators/general",
        type: "website"
    },
};

const generalCalculators = [
    {
        title: "Scientific Calculator",
        description: "Advanced calculator with trigonometry, logarithms, and more.",
        href: "/calculators/general/scientific-calculator",
        category: "General",
    },
];

const faqs = [
    {
        q: "What can I do with a scientific calculator?",
        a: "A scientific calculator can perform advanced mathematical functions including trigonometry (sin, cos, tan), logarithms (log, ln), exponents, roots, factorials, and more. It's essential for science, engineering, and higher mathematics."
    },
    {
        q: "What is the difference between log and ln?",
        a: "Log (log₁₀) is the logarithm base 10, commonly used in scientific notation and decibels. Ln (natural log) is the logarithm base e (≈2.718), commonly used in calculus and natural growth/decay calculations."
    },
    {
        q: "How do I convert between units?",
        a: "Use our unit converter to switch between metric and imperial units for length, weight, volume, temperature, and more. Simply enter a value and select the units you want to convert from and to."
    },
    {
        q: "What is the order of operations?",
        a: "The order of operations (PEMDAS/BODMAS) is: Parentheses/Brackets, Exponents/Orders, Multiplication and Division (left to right), Addition and Subtraction (left to right)."
    },
    {
        q: "Are these calculators accurate?",
        a: "Yes, our calculators use standard mathematical formulas and are accurate for general use. For critical applications, always verify results with multiple sources."
    }
];

function jsonLd() {
    const breadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://othercalculators.com/" },
            { "@type": "ListItem", position: 2, name: "General Calculators", item: "https://othercalculators.com/calculators/general" }
        ]
    };

    const collectionPage = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "General Calculators Suite",
        "description": "A comprehensive collection of general-purpose calculation tools including scientific calculators and unit converters.",
        "url": "https://othercalculators.com/calculators/general",
        "mainEntity": {
            "@type": "ItemList",
            "numberOfItems": generalCalculators.length,
            "itemListElement": generalCalculators.map((calc, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "url": `https://othercalculators.com${calc.href}`,
                "name": calc.title
            }))
        }
    };

    const faqPage = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return {
        __html: JSON.stringify([breadcrumb, collectionPage, faqPage])
    };
}

export default function Page() {
    return (
        <main className="mt-2 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd()} />

            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                {/* Breadcrumbs */}
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center space-x-2 text-sm text-slate-500">
                        <li><a className="hover:text-indigo-600 transition" href="/">Home</a></li>
                        <li aria-hidden="true" className="text-slate-400">›</li>
                        <li aria-current="page" className="font-medium text-slate-900">General Calculators</li>
                    </ol>
                </nav>

                {/* Header Section */}
                <header className="mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">
                        General Purpose Calculators
                    </h1>
                    <p className="max-w-3xl text-lg text-slate-600 leading-relaxed mb-6">
                        Everyday calculation tools for math, science, and general use. From scientific functions to unit conversions—we provide accurate tools for all your calculation needs.
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm font-medium text-indigo-700 bg-white/50 border border-indigo-100 rounded-2xl p-4 inline-block">
                        <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span> Scientific Functions</span>
                        <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span> 100% Free to Use</span>
                        <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span> Mobile Friendly</span>
                    </div>
                </header>

                {/* Calculator Grid */}
                <section className="mb-20">
                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-slate-900">Available Tools</h2>
                        <span className="text-sm font-medium text-slate-500">{generalCalculators.length} Calculator{generalCalculators.length !== 1 ? 's' : ''} Available</span>
                    </div>
                    <CalculatorGrid calculators={generalCalculators} />
                </section>

                {/* Value-Add Sections */}
                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Section 1: When to Use */}
                    <section className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                            Everyday Math Made Easy
                        </h2>
                        <div className="space-y-6 text-slate-600 leading-7">
                            <p>
                                Whether you're a student, professional, or just need quick calculations, our general-purpose tools are designed to be fast, accurate, and easy to use.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-xs">1</span>
                                    <span><strong>Scientific:</strong> Trigonometry, logarithms, exponents, and advanced math.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-xs">2</span>
                                    <span><strong>Conversions:</strong> Length, weight, volume, and temperature unit conversions.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-xs">3</span>
                                    <span><strong>Everyday Math:</strong> Percentages, tips, discounts, and basic arithmetic.</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 2: Tips */}
                    <section className="bg-indigo-600 rounded-3xl p-8 text-white shadow-lg shadow-indigo-200">
                        <h2 className="text-2xl font-bold mb-6">Calculator Tips</h2>
                        <div className="space-y-6 opacity-90 leading-7">
                            <div className="p-4 bg-white/10 rounded-2xl border border-white/20">
                                <h3 className="font-bold mb-2">Use Parentheses</h3>
                                <p className="text-sm">When in doubt about order of operations, use parentheses to ensure calculations are performed in the correct order.</p>
                            </div>
                            <div className="p-4 bg-white/10 rounded-2xl border border-white/20">
                                <h3 className="font-bold mb-2">Degrees vs Radians</h3>
                                <p className="text-sm">Make sure you're using the correct angle mode. Scientific and engineering typically use radians; everyday use often means degrees.</p>
                            </div>
                            <div className="p-4 bg-white/10 rounded-2xl border border-white/20">
                                <h3 className="font-bold mb-2">Check Your Work</h3>
                                <p className="text-sm">For important calculations, run the numbers twice or use an alternative method to verify your results.</p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* FAQ Section */}
                <section className="mt-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">General Calculator FAQs</h2>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((f, i) => (
                            <details key={i} className="group rounded-2xl border border-slate-200 bg-white px-6 py-5 hover:border-indigo-200 transition-colors cursor-pointer open:ring-2 open:ring-indigo-100">
                                <summary className="flex items-center justify-between font-bold text-slate-900 leading-relaxed list-none">
                                    {f.q}
                                    <span className="text-indigo-400 group-open:rotate-45 transition-transform">+</span>
                                </summary>
                                <p className="mt-4 text-slate-600 leading-relaxed">
                                    {f.a}
                                </p>
                            </details>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
