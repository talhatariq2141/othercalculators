import type { Metadata } from "next";
import AsphaltPerTonCalculator from "@/components/calculators/asphalt/AsphaltPerTonCalculator";

export const metadata: Metadata = {
    title: "Asphalt Per Ton Cost Calculator | OtherCalculators",
    description: "Calculate the total cost of asphalt material based on tonnage and local plant prices. Simple estimator for material budgeting.",
    alternates: {
        canonical: "/calculators/asphalt/asphalt-per-ton-calculator",
    },
    openGraph: {
        title: "Asphalt Per Ton Cost Calculator",
        description: "Quickly estimate total asphalt material costs by ton.",
        url: "/calculators/asphalt/asphalt-per-ton-calculator",
        type: "website",
    },
};

function jsonLd(data: unknown) {
    return { __html: JSON.stringify(data) };
}

import RelatedTools from "@/components/RelatedTools";

export default function Page() {
    const url = "https://othercalculators.com/calculators/asphalt/asphalt-per-ton-calculator";
    const category = "Asphalt";

    const faqs = [
        {
            q: "How much does one ton of asphalt cost?",
            a: "On average, hot-mix asphalt (HMA) costs between $100 and $150 per ton in the United States. Prices vary based on local demand, proximity to the plant, and current oil prices.",
        },
        {
            q: "How many tons of asphalt are in a truckload?",
            a: "A standard dump truck typically carries 12 to 14 tons of asphalt, while a larger tri-axle truck can carry up to 20 to 22 tons.",
        },
        {
            q: "Does this cost include installation?",
            a: "No. The 'per ton' price usually refers only to the material cost at the batch plant. Installation costs involve labor, machinery, and prep work, which are usually quoted separately.",
        },
        {
            q: "Why do asphalt prices fluctuate?",
            a: "Asphalt is a petroleum-based product. Therefore, its cost is directly linked to the global price of crude oil. Seasonal demand (higher in summer) also plays a role.",
        },
    ];

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://othercalculators.com/" },
            { "@type": "ListItem", position: 2, name: "Asphalt Calculators", item: "https://othercalculators.com/calculators/asphalt" },
            { "@type": "ListItem", position: 3, name: "Asphalt Per Ton Cost Calculator", item: url },
        ],
    };

    const softwareAppLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Asphalt Per Ton Cost Calculator",
        applicationCategory: "CalculatorApplication",
        operatingSystem: "All",
        url,
        description: "Estimate total asphalt material costs by tonnage and unit price.",
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
                        <li aria-current="page" className="text-slate-900/85">Asphalt Per Ton Cost Calculator</li>
                    </ol>
                </nav>

                {/* Hero */}
                <header className="mt-5 text-center">
                    <h1 className="text-[34px] font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[40px]">
                        Asphalt Per Ton Cost Calculator
                    </h1>
                    <p className="mx-auto mt-3 max-w-[780px] text-[16px] leading-7 text-slate-900/70">
                        Calculate the total material expense for your asphalt project. Estimate costs based on total tonnage and current market rates.
                    </p>
                </header>

                {/* Calculator */}
                <div className="mt-8">
                    <AsphaltPerTonCalculator />
                </div>

                {/* Content */}
                <article className="mt-12 space-y-8 pb-12">
                    {/* Method */}
                    <section aria-labelledby="method-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="method-title" className="text-[22px] font-semibold text-slate-900 mb-4">Material Cost Calculation</h2>
                        <p className="text-[15px] leading-7 text-slate-600 mb-4">
                            Contractors and asphalt plants use a direct tonnage-based pricing model for heavy material orders:
                        </p>
                        <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 mb-4 text-center">
                            <code className="text-lg font-semibold text-indigo-700 block">Total Material Cost = Asphalt Tons × Cost per Ton</code>
                        </div>
                        <p className="text-[15px] leading-7 text-slate-600">
                            If you don't know your required tonnage yet, use our <a href="/calculators/asphalt/asphalt-tonnage-calculator" className="text-indigo-600 hover:underline">Asphalt Tonnage Calculator</a> first to find out exactly how much material you need.
                        </p>
                    </section>

                    {/* Example */}
                    <section aria-labelledby="example-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="example-title" className="text-[22px] font-semibold text-slate-900 mb-4">Example Order</h2>
                        <div className="rounded-xl bg-green-50/50 border border-green-100 p-5">
                            <ul className="list-disc pl-5 space-y-2 text-[15px] text-slate-700">
                                <li><strong>Required Material:</strong> 25 tons</li>
                                <li><strong>Market Price:</strong> $130 / ton</li>
                                <li><strong>Total Calculation:</strong> 25 × $130</li>
                                <li><strong>Estimated Material Cost: $3,250.00</strong></li>
                            </ul>
                        </div>
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
                    <RelatedTools category={category} currentPath="/calculators/asphalt/asphalt-per-ton-calculator" />
                </article>
            </div>
        </main>
    );
}
