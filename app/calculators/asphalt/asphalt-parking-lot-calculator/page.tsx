import type { Metadata } from "next";
import AsphaltParkingLotCalculator from "@/components/calculators/asphalt/AsphaltParkingLotCalculator";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
    title: "Asphalt Parking Lot Calculator | OtherCalculators",
    description: "Calculate asphalt tonnage for commercial parking lots. Professional estimation for contractors, including compaction and waste factors.",
    alternates: {
        canonical: "/calculators/asphalt/asphalt-parking-lot-calculator",
    },
    openGraph: {
        title: "Asphalt Parking Lot Calculator",
        description: "Official commercial asphalt estimation tool. Calculate weight and volume for parking lot surfaces.",
        url: "/calculators/asphalt/asphalt-parking-lot-calculator",
        type: "website",
    },
};

function jsonLd(data: unknown) {
    return { __html: JSON.stringify(data) };
}

export default function Page() {
    const url = "https://othercalculators.com/calculators/asphalt/asphalt-parking-lot-calculator";

    const faqs = [
        {
            q: "How thick should a commercial parking lot be?",
            a: "Standard residential areas might use 2-3 inches, but commercial lots for heavy trucks typically require 4 to 6 inches of asphalt over an engineered aggregate base.",
        },
        {
            q: "What is the square footage of a typical parking stall?",
            a: "A standard parking space is approximately 9x18 feet (162 sq ft). For estimation, including aisles, calculate total paved area dimensions.",
        },
        {
            q: "Why is waste factor higher for parking lots?",
            a: "Parking lots often have complex geometries, landscape islands, and curbs that lead to more cutting and irregular edges compared to a standard road.",
        },
        {
            q: "How many tons of asphalt in a cubic yard?",
            a: "At a standard density of 145 lb/ft³, one cubic yard (27 cubic feet) of asphalt weighs approximately 1.96 tons (3,915 lbs).",
        },
    ];

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://othercalculators.com/" },
            { "@type": "ListItem", position: 2, name: "Asphalt Calculators", item: "https://othercalculators.com/calculators/asphalt" },
            { "@type": "ListItem", position: 3, name: "Asphalt Parking Lot Calculator", item: url },
        ],
    };

    const softwareAppLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Asphalt Parking Lot Calculator",
        applicationCategory: "CalculatorApplication",
        operatingSystem: "All",
        url,
        description: "Professional tool for estimating asphalt requirements for commercial parking facilities.",
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
                        <li aria-current="page" className="text-slate-900/85">Asphalt Parking Lot Calculator</li>
                    </ol>
                </nav>

                {/* Hero */}
                <header className="mt-5 text-center">
                    <h1 className="text-[34px] font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[40px]">
                        Asphalt Parking Lot Calculator
                    </h1>
                    <p className="mx-auto mt-3 max-w-[780px] text-[16px] leading-7 text-slate-900/70">
                        Professional-grade tool for estimating asphalt material needs for commercial pavements. Account for large-scale dimensions and commercial-spec thicknesses accurately.
                    </p>
                </header>

                {/* Calculator */}
                <div className="mt-8">
                    <AsphaltParkingLotCalculator />
                </div>

                {/* Content Sections */}
                <article className="mt-12 space-y-8 pb-12">
                    {/* How it works */}
                    <section aria-labelledby="how-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="how-title" className="text-[22px] font-semibold text-slate-900 mb-4">Commercial Estimation Logic</h2>
                        <div className="space-y-4 text-[15px] leading-7 text-slate-700">
                            <p>We use the standard US volumetric method to arrive at tonnage:</p>
                            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 text-center">
                                <code className="text-lg font-semibold text-slate-800">Total Tons = (Area × Depth/12 × 145) ÷ 2000</code>
                            </div>
                            <p className="text-sm text-slate-500">
                                *Density of 145 lb/ft³ is the standard commercial assumption for hot-mix asphalt (HMA).
                            </p>
                        </div>
                    </section>

                    {/* Tips */}
                    <section aria-labelledby="tips-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="tips-title" className="text-[22px] font-semibold text-slate-900 mb-4">Material Takeoff Tips</h2>
                        <ul className="list-disc pl-5 space-y-3 text-[15px] leading-7 text-slate-700">
                            <li><strong>Account for Grade:</strong> Slopes and drainage requirements can increase depth in certain localized areas.</li>
                            <li><strong>Curbing & Gutters:</strong> Calculate asphalt tonnage separately for surfaces vs. specialized curbing if using different mixes.</li>
                            <li><strong>Compaction:</strong> Remember that asphalt "fluffs" when spread. The depth you input should be the compacted final depth.</li>
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

                    <RelatedTools category="Asphalt" currentPath="/calculators/asphalt/asphalt-parking-lot-calculator" />
                </article>
            </div>
        </main>
    );
}
