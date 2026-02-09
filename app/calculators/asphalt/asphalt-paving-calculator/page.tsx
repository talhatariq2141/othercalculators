import type { Metadata } from "next";
import AsphaltPavingCalculator from "@/components/calculators/asphalt/AsphaltPavingCalculator";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
    title: "Asphalt Paving Calculator | Material Weight Estimator",
    description: "Generic asphalt paving calculator. Convert total area and depth into tonnage and pounds. Perfect for any construction project.",
    alternates: {
        canonical: "/calculators/asphalt/asphalt-paving-calculator",
    },
    openGraph: {
        title: "Asphalt Paving Calculator",
        description: "Official asphalt paving quantity tool. Calculate tons, pounds, and volume for any project size.",
        url: "/calculators/asphalt/asphalt-paving-calculator",
        type: "website",
    },
};

function jsonLd(data: unknown) {
    return { __html: JSON.stringify(data) };
}

export default function Page() {
    const url = "https://othercalculators.com/calculators/asphalt/asphalt-paving-calculator";

    const faqs = [
        {
            q: "What is the basic formula for asphalt paving?",
            a: "The formula is: (Area in sq ft × Thickness in ft) × Density in lb/ft³. Then divide by 2000 to get Tons.",
        },
        {
            q: "How much does a square foot of asphalt weigh?",
            a: "At 1 inch thick, a square foot of asphalt weighs approximately 12.08 lbs (calculated as 1/12 × 145 lb/ft³).",
        },
        {
            q: "What is the 'Rule of Thumb' for asphalt tonnage?",
            a: "A common industry rule is that 1 ton of asphalt covers about 80 square feet at 2 inches thick.",
        },
        {
            q: "Should I use hot mix or cold mix?",
            a: "Hot mix is the industry standard for paving and structural projects. Cold mix is primarily used for temporary repairs or small patches.",
        },
    ];

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", "item": "https://othercalculators.com/" },
            { "@type": "ListItem", position: 2, name: "Asphalt Calculators", "item": "https://othercalculators.com/calculators/asphalt" },
            { "@type": "ListItem", position: 3, name: "Asphalt Paving Calculator", item: url },
        ],
    };

    const softwareAppLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Asphalt Paving Calculator",
        applicationCategory: "CalculatorApplication",
        operatingSystem: "All",
        url,
        description: "General purpose asphalt paving estimator for construction and landscaping.",
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
                        <li aria-current="page" className="text-slate-900/85">Asphalt Paving Calculator</li>
                    </ol>
                </nav>

                {/* Hero */}
                <header className="mt-5 text-center">
                    <h1 className="text-[34px] font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[40px]">
                        Asphalt Paving Calculator
                    </h1>
                    <p className="mx-auto mt-3 max-w-[780px] text-[16px] leading-7 text-slate-900/70">
                        A versatile tool to calculate the weight and tonnage of asphalt for any paving project. Simply enter your total area and desired thickness to get an accurate material takeoff.
                    </p>
                </header>

                {/* Calculator */}
                <div className="mt-8">
                    <AsphaltPavingCalculator />
                </div>

                {/* Content Sections */}
                <article className="mt-12 space-y-8 pb-12">
                    {/* General Tonnage */}
                    <section aria-labelledby="general-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="general-title" className="text-[22px] font-semibold text-slate-900 mb-4">General Paving Tonnage</h2>
                        <p className="text-[15px] leading-7 text-slate-700">
                            Ordering asphalt is usually done by the ton. This generic paving calculator allows you to skip the complex project shapes and focus purely on the <strong>surfaced area</strong>. Whether you're paving a walkway, a basketball court, or a residential driveway, this tool provides the weight requirement needed for your order.
                        </p>
                    </section>

                    {/* Calculation */}
                    <section aria-labelledby="calc-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="calc-title" className="text-[22px] font-semibold text-slate-900 mb-4">The Core Calculation</h2>
                        <div className="space-y-4 text-[15px] leading-7 text-slate-700">
                            <p>This tool uses the standard volumetric engineering formula:</p>
                            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 text-center">
                                <code className="text-lg font-semibold text-slate-800">Tonnage = (Square Footage × (Depth/12) × 145) ÷ 2000</code>
                            </div>
                            <p className="text-sm text-slate-500">
                                *145 lbs per cubic foot is the standard density for hot-mix asphalt (HMA).
                            </p>
                        </div>
                    </section>

                    {/* Site Factors */}
                    <section aria-labelledby="factors-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="factors-title" className="text-[22px] font-semibold text-slate-900 mb-4">Important Site Factors</h2>
                        <ul className="grid gap-4 sm:grid-cols-2 list-none p-0 text-[15px] leading-7">
                            <li className="p-4 bg-slate-50/50 rounded-xl border border-slate-100">
                                <h3 className="font-semibold text-slate-900 mb-1">Compaction Loss</h3>
                                <p className="text-slate-600">When the steamroller passes over the fresh mix, it compresses. We include a 5% buffer in our "Order Total" to account for this compaction.</p>
                            </li>
                            <li className="p-4 bg-slate-50/50 rounded-xl border border-slate-100">
                                <h3 className="font-semibold text-slate-900 mb-1">Edge Waste</h3>
                                <p className="text-slate-600">Loose material often falls off the edge or is discarded. Always round up to the nearest whole ton when placing your order.</p>
                            </li>
                        </ul>
                    </section>

                    {/* FAQs */}
                    <section aria-labelledby="faq-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="faq-title" className="text-[22px] font-semibold text-slate-900 mb-6">Paving FAQs</h2>
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

                    <RelatedTools category="Asphalt" currentPath="/calculators/asphalt/asphalt-paving-calculator" />
                </article>
            </div>
        </main>
    );
}
