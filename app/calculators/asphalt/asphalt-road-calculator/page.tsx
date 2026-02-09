import type { Metadata } from "next";
import AsphaltRoadCalculator from "@/components/calculators/asphalt/AsphaltRoadCalculator";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
    title: "Asphalt Road Calculator | Linear Tonnage Estimator",
    description: "Calculate asphalt tonnage for road construction and lane paving. Professional tool for linear distance estimation with municipal standards.",
    alternates: {
        canonical: "/calculators/asphalt/asphalt-road-calculator",
    },
    openGraph: {
        title: "Asphalt Road Calculator",
        description: "Standard US road paving quantity estimator. Calculate bridge, lane, and highway asphalt requirements.",
        url: "/calculators/asphalt/asphalt-road-calculator",
        type: "website",
    },
};

function jsonLd(data: unknown) {
    return { __html: JSON.stringify(data) };
}

export default function Page() {
    const url = "https://othercalculators.com/calculators/asphalt/asphalt-road-calculator";

    const faqs = [
        {
            q: "How wide is a standard road lane?",
            a: "In the United States, a standard travel lane is typically 12 feet wide, though local residential streets may be 10 feet wide.",
        },
        {
            q: "What is the standard thickness for a highway?",
            a: "Highways often require 6 to 12 inches of asphalt depending on traffic volume and heavy truck loads, usually applied in multiple lifts.",
        },
        {
            q: "How many tons of asphalt are in a mile of road?",
            a: "For a 12ft wide lane at 4 inches thick, you need approximately 1,531 tons of asphalt per linear mile (at 145 lb/ft³ density).",
        },
        {
            q: "What is 'Density' in road construction?",
            a: "Road density refers to the compaction level of the asphalt. Engineers typically target 92-97% of the maximum theoretical density (Gmm).",
        },
    ];

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://othercalculators.com/" },
            { "@type": "ListItem", position: 2, name: "Asphalt Calculators", item: "https://othercalculators.com/calculators/asphalt" },
            { "@type": "ListItem", position: 3, name: "Asphalt Road Calculator", item: url },
        ],
    };

    const softwareAppLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Asphalt Road Calculator",
        applicationCategory: "CalculatorApplication",
        operatingSystem: "All",
        url,
        description: "Calculate linear road tonnage for municipal and private paving projects.",
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
                        <li aria-current="page" className="text-slate-900/85">Asphalt Road Calculator</li>
                    </ol>
                </nav>

                {/* Hero */}
                <header className="mt-5 text-center">
                    <h1 className="text-[34px] font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[40px]">
                        Asphalt Road Calculator
                    </h1>
                    <p className="mx-auto mt-3 max-w-[780px] text-[16px] leading-7 text-slate-900/70">
                        Estimate the total material required for highway, lane, or residential street paving. Designed for civil engineering projects and municipal material takeoffs.
                    </p>
                </header>

                {/* Calculator */}
                <div className="mt-8">
                    <AsphaltRoadCalculator />
                </div>

                {/* Content Sections */}
                <article className="mt-12 space-y-8 pb-12">
                    {/* Municipal Standards */}
                    <section aria-labelledby="standards-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="standards-title" className="text-[22px] font-semibold text-slate-900 mb-4">Municipal Paving Standards</h2>
                        <p className="text-[15px] leading-7 text-slate-700">
                            Asphalt road construction is measured by lane miles or linear feet. This calculator simplifies the complex volumetric math into order-ready tonnage. Whether you are surfacing a small access road or a major arterial highway, accurate material ordering is critical to staying on budget.
                        </p>
                    </section>

                    {/* Logic */}
                    <section aria-labelledby="logic-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="logic-title" className="text-[22px] font-semibold text-slate-900 mb-4">The Volume-to-Weight Logic</h2>
                        <div className="space-y-4 text-[15px] leading-7 text-slate-700">
                            <p>Road surfacing volume is calculated as:</p>
                            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 text-center">
                                <code className="text-lg font-semibold text-slate-800">Road Tons = (Lane Width × Length × Depth/12 × 145) ÷ 2000</code>
                            </div>
                            <p className="text-sm text-slate-500 italic">
                                *Note: 145 lb/ft³ is the standard US density for hot-mix asphalt (HMA).
                            </p>
                        </div>
                    </section>

                    {/* Assumptions */}
                    <section aria-labelledby="assumptions-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="assumptions-title" className="text-[22px] font-semibold text-slate-900 mb-4">Engineering Assumptions</h2>
                        <ul className="list-disc pl-5 space-y-3 text-[15px] leading-7 text-slate-700">
                            <li><strong>Compaction Factor:</strong> Always account for the change from loose-mix volume to compacted volume. Contractors usually add 5-10% to account for this and waste.</li>
                            <li><strong>Lift Thickness:</strong> Asphalt is usually applied in "lifts" of 2-3 inches. If your road is 6" thick, it may require two or three separate passes with the paver.</li>
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

                    <RelatedTools category="Asphalt" currentPath="/calculators/asphalt/asphalt-road-calculator" />
                </article>
            </div>
        </main>
    );
}
