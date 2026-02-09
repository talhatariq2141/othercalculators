import type { Metadata } from "next";
import AsphaltDrivewayCalculator from "@/components/calculators/asphalt/AsphaltDrivewayCalculator";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
    title: "Asphalt Driveway Calculator | OtherCalculators",
    description: "Calculate the exact number of asphalt tons needed for your residential driveway project. Estimate material for new installs or resurfacing.",
    alternates: {
        canonical: "/calculators/asphalt/asphalt-driveway-calculator",
    },
    openGraph: {
        title: "Asphalt Driveway Calculator",
        description: "Free tool to calculate driveway asphalt tonnage. Accounts for length, width, thickness, and density.",
        url: "/calculators/asphalt/asphalt-driveway-calculator",
        type: "website",
    },
};

function jsonLd(data: unknown) {
    return { __html: JSON.stringify(data) };
}

export default function Page() {
    const url = "https://othercalculators.com/calculators/asphalt/asphalt-driveway-calculator";

    const faqs = [
        {
            q: "How thick should an asphalt driveway be?",
            a: "A standard residential driveway typically requires 2 to 3 inches of compacted hot mix asphalt over a solid base.",
        },
        {
            q: "How much asphalt do I need for a 20x50 driveway?",
            a: "For a 1,000 sq ft driveway (20x50) at 2 inches thick, you'll need approximately 6.04 tons of asphalt plus 5-10% for waste.",
        },
        {
            q: "What is the density of asphalt?",
            a: "Standard hot mix asphalt (HMA) has a density of approximately 145 pounds per cubic foot.",
        },
        {
            q: "Should I include a waste factor in my order?",
            a: "Yes. Most contractors recommend adding 5-10% to your calculated tonnage to account for compaction, spills, and irregular edges.",
        },
    ];

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://othercalculators.com/" },
            { "@type": "ListItem", position: 2, name: "Asphalt Calculators", item: "https://othercalculators.com/calculators/asphalt" },
            { "@type": "ListItem", position: 3, name: "Asphalt Driveway Calculator", item: url },
        ],
    };

    const softwareAppLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Asphalt Driveway Calculator",
        applicationCategory: "CalculatorApplication",
        operatingSystem: "All",
        url,
        description: "Calculate required asphalt tonnage for driveway projects based on standard US engineering formulas.",
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
                        <li aria-current="page" className="text-slate-900/85">Asphalt Driveway Calculator</li>
                    </ol>
                </nav>

                {/* Hero */}
                <header className="mt-5 text-center">
                    <h1 className="text-[34px] font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[40px]">
                        Asphalt Driveway Calculator
                    </h1>
                    <p className="mx-auto mt-3 max-w-[780px] text-[16px] leading-7 text-slate-900/70">
                        Accurately estimate the tonnage of asphalt required for your residential driveway. Our calculator uses standard density formulas to provide order-ready results.
                    </p>
                </header>

                {/* Calculator */}
                <div className="mt-8">
                    <AsphaltDrivewayCalculator />
                </div>

                {/* Content Sections */}
                <article className="mt-12 space-y-8 pb-12">
                    {/* How it works */}
                    <section aria-labelledby="how-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="how-title" className="text-[22px] font-semibold text-slate-900 mb-4">How Driveway Tonnage is Calculated</h2>
                        <div className="space-y-4 text-[15px] leading-7 text-slate-700">
                            <p>
                                Asphalt quantity is calculated based on the <strong>Volume</strong> of the area multiplied by the <strong>Density</strong> of the material.
                            </p>
                            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 text-center">
                                <code className="text-lg font-semibold text-slate-800">Tons = (Length × Width × Thickness/12 × 145) ÷ 2000</code>
                            </div>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>Length & Width:</strong> Dimensions of the driveway in feet</li>
                                <li><strong>Thickness:</strong> Depth of the asphalt layer in inches</li>
                                <li><strong>145:</strong> Standard density in lbs per cubic foot</li>
                                <li><strong>2000:</strong> Number of pounds in one short ton</li>
                            </ul>
                        </div>
                    </section>

                    {/* Tips */}
                    <section aria-labelledby="tips-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="tips-title" className="text-[22px] font-semibold text-slate-900 mb-4">Industry Best Practices</h2>
                        <ul className="list-disc pl-5 space-y-3 text-[15px] leading-7 text-slate-700">
                            <li><strong>Compaction Factor:</strong> Material thickness decreases during rolling. We recommend a 5-10% allowance for "fluff" and compaction losses.</li>
                            <li><strong>Sub-base Prep:</strong> The longevity of your asphalt depends on a stable, well-compacted gravel base (usually 6-8 inches).</li>
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

                    <RelatedTools category="Asphalt" currentPath="/calculators/asphalt/asphalt-driveway-calculator" />
                </article>
            </div>
        </main>
    );
}
