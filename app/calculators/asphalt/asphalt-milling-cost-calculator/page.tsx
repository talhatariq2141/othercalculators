import type { Metadata } from "next";
import AsphaltMillingCostCalculator from "@/components/calculators/asphalt/AsphaltMillingCostCalculator";

export const metadata: Metadata = {
    title: "Asphalt Milling Cost Calculator | OtherCalculators",
    description: "Calculate the cost of asphalt milling and removal based on square footage and regional rates. Budget for pavement preparation and debris hauling.",
    alternates: {
        canonical: "/calculators/asphalt/asphalt-milling-cost-calculator",
    },
    openGraph: {
        title: "Asphalt Milling Cost Calculator",
        description: "Quickly estimate asphalt milling and removal costs.",
        url: "/calculators/asphalt/asphalt-milling-cost-calculator",
        type: "website",
    },
};

function jsonLd(data: unknown) {
    return { __html: JSON.stringify(data) };
}

import RelatedTools from "@/components/RelatedTools";

export default function Page() {
    const url = "https://othercalculators.com/calculators/asphalt/asphalt-milling-cost-calculator";
    const category = "Asphalt";

    const faqs = [
        {
            q: "What is asphalt milling?",
            a: "Asphalt milling is the process of removing at least part of the surface of a paved area such as a road, bridge, or parking lot. Milling removes anywhere from just enough thickness to level and smooth the surface to a full depth removal.",
        },
        {
            q: "How much does asphalt milling cost per square foot?",
            a: "Milling costs typically range from $0.30 to $0.80 per square foot for large commercial projects. Small residential projects may be higher or billed at a minimum day rate for the machine.",
        },
        {
            q: "What factors affect milling prices?",
            a: "The depth of the cut (standard is 2 inches), the size of the project, the accessibility for the milling machine, and the local disposal fees for the asphalt grindings.",
        },
        {
            q: "Can milled asphalt be reused?",
            a: "Yes! Milled asphalt (RAP - Reclaimed Asphalt Pavement) is 100% recyclable and is commonly used as a sub-base for new roads or even mixed back into new hot-mix asphalt.",
        },
    ];

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://othercalculators.com/" },
            { "@type": "ListItem", position: 2, name: "Asphalt Calculators", item: "https://othercalculators.com/calculators/asphalt" },
            { "@type": "ListItem", position: 3, name: "Asphalt Milling Cost Calculator", item: url },
        ],
    };

    const softwareAppLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Asphalt Milling Cost Calculator",
        applicationCategory: "CalculatorApplication",
        operatingSystem: "All",
        url,
        description: "Estimate asphalt milling and debris hauling costs based on area and unit rates.",
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
                        <li aria-current="page" className="text-slate-900/85">Asphalt Milling Cost Calculator</li>
                    </ol>
                </nav>

                {/* Hero */}
                <header className="mt-5 text-center">
                    <h1 className="text-[34px] font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[40px]">
                        Asphalt Milling Cost Calculator
                    </h1>
                    <p className="mx-auto mt-3 max-w-[780px] text-[16px] leading-7 text-slate-900/70">
                        Calculate the cost of removing old asphalt layers. Budget for machine work, labor, and debris hauling for your pavement project.
                    </p>
                </header>

                {/* Calculator */}
                <div className="mt-8">
                    <AsphaltMillingCostCalculator />
                </div>

                {/* Content */}
                <article className="mt-12 space-y-8 pb-12">
                    {/* Method */}
                    <section aria-labelledby="method-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="method-title" className="text-[22px] font-semibold text-slate-900 mb-4">How Milling Costs are Estimated</h2>
                        <p className="text-[15px] leading-7 text-slate-600 mb-4">
                            Industry estimators generally combine the machine time/square foot rate with the cost of disposing of the removed material:
                        </p>
                        <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 mb-4 text-center">
                            <code className="text-lg font-semibold text-slate-700 block">Milling Cost = (Area × Cost per sq ft) + Hauling Fee</code>
                        </div>
                        <p className="text-[15px] leading-7 text-slate-600">
                            Square foot rates typically account for the milling machine operation and the crew. Hauling fees are often flat rates or based on travel distance to the recycling facility.
                        </p>
                    </section>

                    {/* Example */}
                    <section aria-labelledby="example-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="example-title" className="text-[22px] font-semibold text-slate-900 mb-4">Milling Example</h2>
                        <div className="rounded-xl bg-slate-100/50 border border-slate-200 p-5">
                            <ul className="list-disc pl-5 space-y-2 text-[15px] text-slate-700">
                                <li><strong>Project Area:</strong> 10,000 sq ft</li>
                                <li><strong>Milling Rate:</strong> $0.45 / sq ft</li>
                                <li><strong>Hauling/Disposal:</strong> $400</li>
                                <li><strong>Total Milling Estimate: $4,900.00</strong></li>
                            </ul>
                        </div>
                    </section>

                    {/* FAQs */}
                    <section aria-labelledby="faq-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="faq-title" className="text-[22px] font-semibold text-slate-900 mb-6">Milling FAQs</h2>
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
                    <RelatedTools category={category} currentPath="/calculators/asphalt/asphalt-milling-cost-calculator" />
                </article>
            </div>
        </main>
    );
}
