import type { Metadata } from "next";
import { CalculatorGrid } from "@/components/CalculatorGrid";

export const metadata: Metadata = {
    title: "Finance Calculators | Professional Financial Estimation Tools",
    description: "Access our suite of professional finance calculators. Estimate loan payments, amortization schedules, and financing costs with accuracy.",
    alternates: { canonical: "/calculators/finance" },
    openGraph: {
        title: "Finance Calculators | Professional Financial Estimation Tools",
        description: "Comprehensive suite of finance calculators for loans, mortgages, and investments.",
        url: "https://othercalculators.com/calculators/finance",
        type: "website"
    },
};

const financeCalculators = [
    {
        title: "Aircraft Finance Calculator",
        description: "Calculate monthly payments for aircraft loans.",
        href: "/calculators/finance/aircraft-finance-calculator",
        category: "Finance",
    },
];

const faqs = [
    {
        q: "What is amortization?",
        a: "Amortization is the process of spreading out a loan into a series of fixed payments over time. Each payment covers both principal and interest, with the interest portion decreasing as the loan balance decreases."
    },
    {
        q: "How can I lower my monthly loan payment?",
        a: "You can lower your monthly payment by increasing the loan term (more months to pay), making a larger down payment (reducing principal), or securing a lower interest rate through good credit or shopping around."
    },
    {
        q: "What is APR vs interest rate?",
        a: "Interest rate is the cost of borrowing the principal. APR (Annual Percentage Rate) includes the interest rate plus other fees and costs, giving you a more complete picture of the total borrowing cost."
    },
    {
        q: "Should I choose a fixed or variable rate?",
        a: "Fixed rates offer stability with consistent payments. Variable rates may start lower but can increase over time. Choose fixed for predictability, variable if you expect rates to fall or plan to pay off early."
    },
    {
        q: "How does a down payment affect my loan?",
        a: "A larger down payment reduces the amount you need to borrow, which lowers your monthly payments, total interest paid, and may help you qualify for better rates."
    }
];

function jsonLd() {
    const breadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://othercalculators.com/" },
            { "@type": "ListItem", position: 2, name: "Finance Calculators", item: "https://othercalculators.com/calculators/finance" }
        ]
    };

    const collectionPage = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Finance Calculators Suite",
        "description": "A comprehensive collection of financial estimation tools including loan, mortgage, and investment calculators.",
        "url": "https://othercalculators.com/calculators/finance",
        "mainEntity": {
            "@type": "ItemList",
            "numberOfItems": financeCalculators.length,
            "itemListElement": financeCalculators.map((calc, index) => ({
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
                        <li aria-current="page" className="font-medium text-slate-900">Finance Calculators</li>
                    </ol>
                </nav>

                {/* Header Section */}
                <header className="mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">
                        Professional Finance Calculators
                    </h1>
                    <p className="max-w-3xl text-lg text-slate-600 leading-relaxed mb-6">
                        Plan your financial future with our precision estimation tools. From aircraft loans to mortgages and investments—we provide the data you need to make informed decisions.
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm font-medium text-indigo-700 bg-white/50 border border-indigo-100 rounded-2xl p-4 inline-block">
                        <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span> Standard Amortization</span>
                        <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span> 100% Free to Use</span>
                        <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span> Mobile Friendly</span>
                    </div>
                </header>

                {/* Calculator Grid */}
                <section className="mb-20">
                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-slate-900">Available Tools</h2>
                        <span className="text-sm font-medium text-slate-500">{financeCalculators.length} Calculator{financeCalculators.length !== 1 ? 's' : ''} Available</span>
                    </div>
                    <CalculatorGrid calculators={financeCalculators} />
                </section>

                {/* Value-Add Sections */}
                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Section 1: When to Use */}
                    <section className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                            Planning for Financial Success
                        </h2>
                        <div className="space-y-6 text-slate-600 leading-7">
                            <p>
                                Successful financial planning starts with accurate calculations. Whether you're financing an aircraft, home, or vehicle, using specialized tools ensures you avoid costly surprises.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-xs">1</span>
                                    <span><strong>Know Your Budget:</strong> Calculate monthly payments before committing to any loan.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-xs">2</span>
                                    <span><strong>Compare Options:</strong> Run scenarios with different rates, terms, and down payments.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-xs">3</span>
                                    <span><strong>Total Cost Awareness:</strong> Understand total interest paid over the life of the loan.</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 2: Industry Standards */}
                    <section className="bg-indigo-600 rounded-3xl p-8 text-white shadow-lg shadow-indigo-200">
                        <h2 className="text-2xl font-bold mb-6">Financial Tips</h2>
                        <div className="space-y-6 opacity-90 leading-7">
                            <div className="p-4 bg-white/10 rounded-2xl border border-white/20">
                                <h3 className="font-bold mb-2">Check Your Credit First</h3>
                                <p className="text-sm">Your credit score significantly impacts the interest rate you'll receive. Check and improve your score before applying.</p>
                            </div>
                            <div className="p-4 bg-white/10 rounded-2xl border border-white/20">
                                <h3 className="font-bold mb-2">Shop Multiple Lenders</h3>
                                <p className="text-sm">Don't accept the first offer. Compare rates from banks, credit unions, and specialized lenders to find the best terms.</p>
                            </div>
                            <div className="p-4 bg-white/10 rounded-2xl border border-white/20">
                                <h3 className="font-bold mb-2">Factor in All Costs</h3>
                                <p className="text-sm">Remember that the purchase price is just the beginning. Include taxes, fees, insurance, and ongoing costs in your budget.</p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* FAQ Section */}
                <section className="mt-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Finance Planning FAQs</h2>
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
