import type { Metadata } from "next";
import AsphaltRepairCostCalculator from "@/components/calculators/asphalt/AsphaltRepairCostCalculator";

export const metadata: Metadata = {
    title: "Asphalt Repair Cost Calculator | OtherCalculators",
    description: "Calculate the cost to repair or patch asphalt surfaces. Ideal for estimating driveway repairs and pothole fixes.",
    alternates: {
        canonical: "/calculators/asphalt/asphalt-repair-cost-calculator",
    },
    openGraph: {
        title: "Asphalt Repair Cost Calculator",
        description: "Quickly estimate asphalt repair and patching costs.",
        url: "/calculators/asphalt/asphalt-repair-cost-calculator",
        type: "website",
    },
};

function jsonLd(data: unknown) {
    return { __html: JSON.stringify(data) };
}

import RelatedTools from "@/components/RelatedTools";

export default function Page() {
    const url = "https://othercalculators.com/calculators/asphalt/asphalt-repair-cost-calculator";
    const category = "Asphalt";

    const faqs = [
        {
            q: "How much does it cost to repair a section of asphalt?",
            a: "Repair costs are typically calculated per square foot. While total paving might be cheaper per unit, small repair areas often cost slightly more ($10-$20+ per sq ft) because they involve specialized tasks like saw-cutting and manual patching.",
        },
        {
            q: "Is there a minimum charge for asphalt repairs?",
            a: "Yes, most professional paving companies have a mobilization fee (usually $500–$1,500) regardless of how small the patch is. It covers the cost of bringing trucks and crews to your site.",
        },
        {
            q: "Repair vs. Resurface: Which is better?",
            a: "Repair is best for localized damage like single potholes or specific cracks. Resurfacing (overlay) is better when the entire surface is showing signs of age but the base is still solid.",
        },
        {
            q: "How quickly can I use repaired asphalt?",
            a: "Hot-mix asphalt patches can usually be driven on within a few hours, though you should avoid turning your wheels while stationary for at least 24 hours.",
        },
    ];

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://othercalculators.com/" },
            { "@type": "ListItem", position: 2, name: "Asphalt Calculators", item: "https://othercalculators.com/calculators/asphalt" },
            { "@type": "ListItem", position: 3, name: "Asphalt Repair Cost Calculator", item: url },
        ],
    };

    const softwareAppLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Asphalt Repair Cost Calculator",
        applicationCategory: "CalculatorApplication",
        operatingSystem: "All",
        url,
        description: "Calculate the cost of patching or repairing damaged asphalt sections based on area and unit rates.",
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
                        <li><a className="hover:text-slate-900" href="/calculators/asphalt">Asphalt Calculators</a></li>
                        <li aria-hidden="true">›</li>
                        <li aria-current="page" className="text-slate-900/85">Asphalt Repair Cost Calculator</li>
                    </ol>
                </nav>

                {/* Hero */}
                <header className="mt-5 text-center">
                    <h1 className="text-[34px] font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[40px]">
                        Asphalt Repair Cost Calculator
                    </h1>
                    <p className="mx-auto mt-3 max-w-[780px] text-[16px] leading-7 text-slate-900/70">
                        Estimate patching and repair expenses. This tool helps you budget for localized asphalt maintenance and pothole fixes.
                    </p>
                </header>

                {/* Calculator */}
                <div className="mt-8">
                    <AsphaltRepairCostCalculator />
                </div>

                {/* Content */}
                <article className="mt-12 space-y-8 pb-12">
                    {/* The Method */}
                    <section aria-labelledby="method-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="method-title" className="text-[22px] font-semibold text-slate-900 mb-4">How to Estimate Repair Costs</h2>
                        <p className="text-[15px] leading-7 text-slate-600 mb-4">
                            Contractors usually price small repairs by the area required for the patch. The standard calculation used here is:
                        </p>
                        <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 mb-4 text-center">
                            <code className="text-lg font-semibold text-red-700">Repair Cost = Repair Area × Cost per sq ft</code>
                        </div>
                        <p className="text-[15px] leading-7 text-slate-600">
                            Square foot rates for repair typically account for the labor-intensive nature of cutting out old asphalt and hand-applying new material.
                        </p>
                    </section>

                    {/* Example */}
                    <section aria-labelledby="example-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="example-title" className="text-[22px] font-semibold text-slate-900 mb-4">Pothole Repair Example</h2>
                        <div className="rounded-xl bg-red-50/30 border border-red-100 p-5">
                            <ul className="list-disc pl-5 space-y-2 text-[15px] text-slate-700">
                                <li><strong>Damaged Area:</strong> 100 sq ft (10' × 10')</li>
                                <li><strong>Repair Rate:</strong> $12.00 / sq ft</li>
                                <li><strong>Total Patch Estimate: $1,200.00</strong></li>
                            </ul>
                        </div>
                    </section>

                    {/* FAQs */}
                    <section aria-labelledby="faq-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="faq-title" className="text-[22px] font-semibold text-slate-900 mb-6">Repair FAQs</h2>
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
                    <RelatedTools category={category} currentPath="/calculators/asphalt/asphalt-repair-cost-calculator" />
                </article>
            </div>
        </main>
    );
}
