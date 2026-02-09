import type { Metadata } from "next";
import AircraftFinanceCalculator from "@/components/calculators/finance/AircraftFinanceCalculator";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
    title: "Aircraft Finance Calculator | OtherCalculators",
    description: "Calculate monthly aircraft loan payments, total interest, and amortization. Free aircraft finance calculator for planes, jets, and helicopters.",
    alternates: {
        canonical: "/calculators/finance/aircraft-finance-calculator",
    },
    openGraph: {
        title: "Aircraft Finance Calculator",
        description: "Accurate aircraft loan calculator. Estimate monthly payments, interest rates, and loan terms for your next aircraft purchase.",
        url: "/calculators/finance/aircraft-finance-calculator",
        type: "website",
    },
};

function jsonLd(data: unknown) {
    return { __html: JSON.stringify(data) };
}

export default function Page() {
    const url = "https://othercalculators.com/calculators/finance/aircraft-finance-calculator";

    const faqs = [
        {
            q: "How is an aircraft loan calculated?",
            a: "Aircraft loans are calculated using a standard amortization formula, similar to a mortgage or auto loan. The monthly payment is determined by the loan amount (purchase price minus down payment), the annual interest rate, and the loan term in years.",
        },
        {
            q: "What is the typical down payment for an aircraft?",
            a: "Lenders typically require a down payment of 15% to 20% of the aircraft's purchase price. This can vary based on the age of the aircraft, your creditworthiness, and the loan amount.",
        },
        {
            q: "How long can you finance an airplane for?",
            a: "Aircraft loan terms generally range from 5 to 20 years. Newer aircraft often qualify for longer terms (up to 20 years), while older aircraft might be limited to shorter terms.",
        },
        {
            q: "Are aircraft loan rates higher than mortgage rates?",
            a: "Aircraft loan rates are typically higher than residential mortgage rates but lower than unsecured personal loans. They often range between 6% and 10%.",
        },
        {
            q: "Can I include sales tax in my aircraft loan?",
            a: "Yes, many lenders allow you to finance the sales tax, along with other costs like insurance premiums or upgrade expenses, into the loan amount.",
        },
        {
            q: "What is a balloon payment in aircraft financing?",
            a: "A balloon payment is a large lump sum due at the end of the loan term. Some aircraft loans use this structure to keep monthly payments lower.",
        },
    ];

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://othercalculators.com/" },
            { "@type": "ListItem", position: 2, name: "Finance Calculators", item: "https://othercalculators.com/calculators/finance" },
            { "@type": "ListItem", position: 3, name: "Aircraft Finance Calculator", item: url },
        ],
    };

    const softwareAppLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Aircraft Finance Calculator",
        applicationCategory: "FinanceApplication",
        operatingSystem: "All",
        url,
        description: "Calculate monthly payments and total interest for aircraft loans. Supports sales tax, down payments, and custom terms.",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    };

    const faqPageLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
    };

    return (
        <main>
            <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbLd)} />
            <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(softwareAppLd)} />
            <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqPageLd)} />

            <div className="mx-auto max-w-[1050px] px-4 pt-5">
                {/* Breadcrumbs */}
                <nav aria-label="Breadcrumb" className="text-center">
                    <ol className="inline-flex flex-wrap items-center justify-center gap-2 text-[13px] text-slate-900/65">
                        <li><a className="hover:text-slate-900" href="/">Home</a></li>
                        <li aria-hidden="true">›</li>
                        <li><a className="hover:text-slate-900" href="/calculators/finance">Finance Calculators</a></li>
                        <li aria-hidden="true">›</li>
                        <li aria-current="page" className="text-slate-900/85">Aircraft Finance Calculator</li>
                    </ol>
                </nav>

                {/* Hero */}
                <header className="mt-5 text-center">
                    <h1 className="text-[34px] font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[40px]">
                        Aircraft Finance Calculator
                    </h1>
                    <p className="mx-auto mt-3 max-w-[780px] text-[16px] leading-7 text-slate-900/70">
                        Estimate your monthly aircraft loan payments with precision. Calculate financing costs, including interest, sales tax, and amortization schedules for planes, jets, and helicopters.
                    </p>
                </header>

                {/* Calculator */}
                <div className="mt-8">
                    <AircraftFinanceCalculator />
                </div>

                {/* Content Sections */}
                <article className="mt-12 space-y-8 pb-12">
                    {/* How it works */}
                    <section aria-labelledby="how-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="how-title" className="text-[22px] font-semibold text-slate-900 mb-4">How Aircraft Loan Payments are Calculated</h2>
                        <div className="space-y-4 text-[15px] leading-7 text-slate-700">
                            <p>
                                Aircraft loans use the standard <strong>amortizing loan formula</strong>, the same formula used for mortgages and auto loans:
                            </p>
                            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 text-center">
                                <code className="text-lg font-semibold text-slate-800">PMT = P × [r(1+r)^n] / [(1+r)^n – 1]</code>
                            </div>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>P:</strong> Loan principal (purchase price − down payment + financed fees)</li>
                                <li><strong>r:</strong> Monthly interest rate (annual rate ÷ 12)</li>
                                <li><strong>n:</strong> Total number of payments (loan term in years × 12)</li>
                            </ul>
                        </div>
                    </section>

                    {/* Example */}
                    <section aria-labelledby="example-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="example-title" className="text-[22px] font-semibold text-slate-900 mb-4">Example Calculation</h2>
                        <div className="rounded-xl bg-sky-50/50 border border-sky-100 p-5">
                            <p className="text-[15px] leading-7 text-slate-800">
                                <strong>Scenario:</strong> Financing a $1,000,000 aircraft with 20% down at 7.5% APR for 20 years.
                            </p>
                            <ul className="mt-3 list-disc pl-5 space-y-1 text-[14px] text-slate-700">
                                <li><strong>Down Payment:</strong> $200,000 (20%)</li>
                                <li><strong>Loan Amount:</strong> $800,000</li>
                                <li><strong>Monthly Rate:</strong> 7.5% ÷ 12 = 0.625%</li>
                                <li><strong>Total Payments:</strong> 20 × 12 = 240</li>
                                <li><strong>Monthly Payment:</strong> <strong>$6,442.67</strong></li>
                            </ul>
                            <p className="mt-3 text-[14px] text-slate-600 italic">
                                Total paid over 20 years: $1,546,241 (including $746,241 in interest).
                            </p>
                        </div>
                    </section>

                    {/* Tips */}
                    <section aria-labelledby="tips-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="tips-title" className="text-[22px] font-semibold text-slate-900 mb-4">Financing Tips</h2>
                        <ul className="list-disc pl-5 space-y-3 text-[15px] leading-7 text-slate-700">
                            <li><strong>Get pre-approved</strong> before shopping; it clarifies your budget and strengthens negotiations.</li>
                            <li><strong>Consider operating costs</strong>—hangar, insurance, fuel, and maintenance often exceed the loan itself.</li>
                            <li><strong>Check sales tax rules</strong>—some states offer exemptions for commercial use or fly-away provisions.</li>
                            <li><strong>Compare lenders</strong>—banks, credit unions, and specialized aviation lenders may offer different terms.</li>
                        </ul>
                    </section>

                    {/* FAQs */}
                    <section aria-labelledby="faq-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="faq-title" className="text-[22px] font-semibold text-slate-900 mb-6">Frequently Asked Questions</h2>
                        <div className="grid gap-4">
                            {faqs.map((f, i) => (
                                <details key={i} className="group rounded-2xl border border-slate-900/10 bg-slate-50/50 px-5 py-4 open:bg-white open:shadow-sm transition-all duration-200">
                                    <summary className="flex cursor-pointer items-center justify-between font-semibold text-slate-900 marker:content-none">
                                        {f.q}
                                        <span className="text-slate-400 text-xl font-light group-open:rotate-45 transition-transform duration-200">+</span>
                                    </summary>
                                    <p className="mt-3 text-[15px] leading-7 text-slate-600">{f.a}</p>
                                </details>
                            ))}
                        </div>
                    </section>

                    <RelatedTools category="Finance" currentPath="/calculators/finance/aircraft-finance-calculator" />

                    {/* Sources */}
                    <section aria-labelledby="sources-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-6 shadow-sm">
                        <h2 id="sources-title" className="text-[18px] font-semibold tracking-[-0.01em] text-slate-900">
                            Sources & Assumptions
                        </h2>
                        <ul className="mt-3 list-disc space-y-1 pl-5 text-[14px] leading-6 text-slate-700">
                            <li>Calculations use the standard amortizing loan formula.</li>
                            <li>Interest rates assumed to be fixed for the loan term.</li>
                            <li>Estimates are for planning purposes; always verify with your lender.</li>
                        </ul>
                    </section>
                </article>
            </div>
        </main>
    );
}
