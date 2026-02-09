import type { Metadata } from "next";
import AsphaltTonsToSquareFeetCalculator from "@/components/calculators/asphalt/AsphaltTonsToSquareFeetCalculator";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
    title: "Asphalt Tons to Square Feet Calculator | Coverage Tool",
    description: "Convert asphalt weight (tons) to coverage area (square feet). Determine how much area you can pave based on a specific amount of material and thickness.",
    alternates: {
        canonical: "/calculators/asphalt/asphalt-tons-to-square-feet-calculator",
    },
    openGraph: {
        title: "Asphalt Tons to Square Feet Conversion Calculator",
        description: "Official tool for converting tonnage to paved surface area. Professional asphalt estimation metrics.",
        url: "/calculators/asphalt/asphalt-tons-to-square-feet-calculator",
        type: "website",
    },
};

function jsonLd(data: unknown) {
    return { __html: JSON.stringify(data) };
}

export default function Page() {
    const url = "https://othercalculators.com/calculators/asphalt/asphalt-tons-to-square-feet-calculator";

    const faqs = [
        {
            q: "How many square feet does 1 ton of asphalt cover?",
            a: "At 2 inches of thickness and standard density (145 lb/ft³), 1 ton of asphalt covers approximately 80-82 square feet.",
        },
        {
            q: "What is the formula for tons to square feet?",
            a: "Area = ((Tons × 2000) / Density) / (Thickness in Inches / 12). Standard density is 145 lb/ft³.",
        },
        {
            q: "How does thickness affect coverage?",
            a: "Coverage is inversely proportional to thickness. If you double the thickness (e.g., 2 inch to 4 inch), you will get half the square footage from the same tonnage.",
        },
        {
            q: "What is the weight per square yard per inch?",
            a: "A common estimator's rule is that asphalt weighs approximately 110 lbs per square yard per inch of thickness.",
        },
    ];

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://othercalculators.com/" },
            { "@type": "ListItem", position: 2, name: "Asphalt Calculators", item: "https://othercalculators.com/calculators/asphalt" },
            { "@type": "ListItem", position: 3, name: "Asphalt Tons to Square Feet Calculator", item: url },
        ],
    };

    const softwareAppLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Asphalt Tons to Square Feet Calculator",
        applicationCategory: "CalculatorApplication",
        operatingSystem: "All",
        url,
        description: "Convert asphalt weight into surface area coverage based on thickness.",
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
                        <li aria-current="page" className="text-slate-900/85">Asphalt Tons to Square Feet Calculator</li>
                    </ol>
                </nav>

                {/* Hero */}
                <header className="mt-5 text-center">
                    <h1 className="text-[34px] font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[40px]">
                        Asphalt Tons to Square Feet Calculator
                    </h1>
                    <p className="mx-auto mt-3 max-w-[780px] text-[16px] leading-7 text-slate-900/70">
                        Determine exactly how much paved area your asphalt order will cover. Convert weight (tons) to surface area (sq ft) based on your paving depth.
                    </p>
                </header>

                {/* Calculator */}
                <div className="mt-8">
                    <AsphaltTonsToSquareFeetCalculator />
                </div>

                {/* Content Sections */}
                <article className="mt-12 space-y-8 pb-12">
                    {/* Coverage Logic */}
                    <section aria-labelledby="logic-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="logic-title" className="text-[22px] font-semibold text-slate-900 mb-4">Coverage Estimation Logic</h2>
                        <p className="text-[15px] leading-7 text-slate-700">
                            Knowing the <strong>tonnage</strong> is only half the battle. This tool helps you plan the <strong>layout</strong>. By calculating the coverage area, you can determine if a specific order is enough to complete a driveway, walkway, or parking stall at the desired thickness.
                        </p>
                    </section>

                    {/* Formula */}
                    <section aria-labelledby="formula-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="formula-title" className="text-[22px] font-semibold text-slate-900 mb-4">Conversion Formula</h2>
                        <div className="space-y-4 text-[15px] leading-7 text-slate-700">
                            <p>This tool uses the standard volumetric method:</p>
                            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 text-center">
                                <code className="text-lg font-semibold text-slate-800">
                                    Sq Ft = ((Tons × 2000) / Density) / (Thickness" / 12)
                                </code>
                            </div>
                            <p className="text-sm text-slate-500">
                                *Assumes standard density of 145 lb/ft³ for hot-mix asphalt (HMA).
                            </p>
                        </div>
                    </section>

                    {/* Variables */}
                    <section aria-labelledby="vars-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="vars-title" className="text-[22px] font-semibold text-slate-900 mb-4">Coverage Variables</h2>
                        <ul className="grid gap-4 sm:grid-cols-2 list-none p-0 text-[15px] leading-7">
                            <li className="p-4 bg-slate-50/50 rounded-xl border border-slate-100">
                                <h3 className="font-semibold text-slate-900 mb-1">Thickness Impact</h3>
                                <p className="text-slate-600">A 4-inch deep road will cover exactly half the area of a 2-inch driveway using the same amount of asphalt tonnage.</p>
                            </li>
                            <li className="p-4 bg-slate-50/50 rounded-xl border border-slate-100">
                                <h3 className="font-semibold text-slate-900 mb-1">Compaction Factor</h3>
                                <p className="text-slate-600">The volume of asphalt decreases by about 25% when rolled. Ensure your thickness input matches the final <em>compacted</em> grade.</p>
                            </li>
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

                    <RelatedTools category="Asphalt" currentPath="/calculators/asphalt/asphalt-tons-to-square-feet-calculator" />
                </article>
            </div>
        </main>
    );
}
