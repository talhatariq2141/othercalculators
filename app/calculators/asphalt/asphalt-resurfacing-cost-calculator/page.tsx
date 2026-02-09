import type { Metadata } from "next";
import AsphaltResurfacingCostCalculator from "@/components/calculators/asphalt/AsphaltResurfacingCostCalculator";

export const metadata: Metadata = {
    title: "Asphalt Resurfacing Cost Calculator | OtherCalculators",
    description: "Estimate the cost of resurfacing your existing asphalt pavement. Calculate overlay expenses per square foot.",
    alternates: {
        canonical: "/calculators/asphalt/asphalt-resurfacing-cost-calculator",
    },
    openGraph: {
        title: "Asphalt Resurfacing Cost Calculator",
        description: "Quickly estimate asphalt resurfacing and overlay costs.",
        url: "/calculators/asphalt/asphalt-resurfacing-cost-calculator",
        type: "website",
    },
};

function jsonLd(data: unknown) {
    return { __html: JSON.stringify(data) };
}

import RelatedTools from "@/components/RelatedTools";

export default function Page() {
    const url = "https://othercalculators.com/calculators/asphalt/asphalt-resurfacing-cost-calculator";
    const category = "Asphalt";

    const faqs = [
        {
            q: "What is asphalt resurfacing?",
            a: "Asphalt resurfacing, or 'overlay', involves laying a new layer of asphalt (typically 1.5 to 2 inches thick) directly on top of an existing asphalt surface that is still structurally sound but worn out on the top.",
        },
        {
            q: "How much does resurfacing cost vs. full replacement?",
            a: "Resurfacing is significantly cheaper, usually costing $3–$7 per square foot, whereas a full removal and replacement can cost $7–$15 per square foot.",
        },
        {
            q: "Can any asphalt surface be resurfaced?",
            a: "No. The existing base must be stable. If the current pavement has deep structural cracks (alligator cracking) or soft spots, resurfacing will only provide a temporary fix as the old damage will quickly 'reflect' through the new layer.",
        },
        {
            q: "How long does resurfaced asphalt last?",
            a: "A professional asphalt overlay can last 10 to 15 years, depending on the condition of the original sub-base and local climate.",
        },
    ];

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://othercalculators.com/" },
            { "@type": "ListItem", position: 2, name: "Asphalt Calculators", item: "https://othercalculators.com/calculators/asphalt" },
            { "@type": "ListItem", position: 3, name: "Asphalt Resurfacing Cost Calculator", item: url },
        ],
    };

    const softwareAppLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Asphalt Resurfacing Cost Calculator",
        applicationCategory: "CalculatorApplication",
        operatingSystem: "All",
        url,
        description: "Calculate the total cost of resurfacing asphalt based on area and overlay rates.",
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
                        <li aria-current="page" className="text-slate-900/85">Asphalt Resurfacing Cost Calculator</li>
                    </ol>
                </nav>

                {/* Hero */}
                <header className="mt-5 text-center">
                    <h1 className="text-[34px] font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[40px]">
                        Asphalt Resurfacing Cost Calculator
                    </h1>
                    <p className="mx-auto mt-3 max-w-[780px] text-[16px] leading-7 text-slate-900/70">
                        Give your pavement a second life. Estimate the cost of a new asphalt overlay based on your total area and regional pricing.
                    </p>
                </header>

                {/* Calculator */}
                <div className="mt-8">
                    <AsphaltResurfacingCostCalculator />
                </div>

                {/* Content */}
                <article className="mt-12 space-y-8 pb-12">
                    {/* Method */}
                    <section aria-labelledby="method-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="method-title" className="text-[22px] font-semibold text-slate-900 mb-4">How Resurfacing Costs are Calculated</h2>
                        <p className="text-[15px] leading-7 text-slate-600 mb-4">
                            Contractors usually provide a square foot rate for resurfacing that includes the cleaning, tack coat (glue), and the new asphalt layer.
                        </p>
                        <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 mb-4 text-center">
                            <code className="text-lg font-semibold text-teal-700">Resurfacing Cost = Total Area × Cost per sq ft</code>
                        </div>
                        <p className="text-[15px] leading-7 text-slate-600">
                            Because you are using the existing pavement as a foundation, you save significantly on labor and material compared to starting from scratch.
                        </p>
                    </section>

                    {/* Example */}
                    <section aria-labelledby="example-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="example-title" className="text-[22px] font-semibold text-slate-900 mb-4">Resurfacing Example</h2>
                        <div className="rounded-xl bg-teal-50/50 border border-teal-100 p-5">
                            <ul className="list-disc pl-5 space-y-2 text-[15px] text-slate-700">
                                <li><strong>Project Area:</strong> 2,000 sq ft</li>
                                <li><strong>Overlay Rate:</strong> $4.50 / sq ft</li>
                                <li><strong>Total Resurfacing Estimate: $9,000.00</strong></li>
                            </ul>
                        </div>
                    </section>

                    {/* FAQs */}
                    <section aria-labelledby="faq-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="faq-title" className="text-[22px] font-semibold text-slate-900 mb-6">Resurfacing FAQs</h2>
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
                    <RelatedTools category={category} currentPath="/calculators/asphalt/asphalt-resurfacing-cost-calculator" />
                </article>
            </div>
        </main>
    );
}
