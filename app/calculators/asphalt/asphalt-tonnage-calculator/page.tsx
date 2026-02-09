import type { Metadata } from "next";
import AsphaltTonnageCalculator from "@/components/calculators/asphalt/AsphaltTonnageCalculator";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
    title: "Asphalt Tonnage Calculator | OtherCalculators",
    description:
        "Calculate required asphalt tonnage (US tons) using area, thickness, and density. Supports standard and spread rate formulas.",
    openGraph: {
        title: "Asphalt Tonnage Calculator",
        description:
            "Estimate hot mix asphalt tonnage quickly with waste options. Supports both standard density and spread rate methods.",
        url: "/calculators/asphalt/asphalt-tonnage-calculator",
        type: "website",
    },
};

function jsonLd(data: unknown) {
    return { __html: JSON.stringify(data) };
}

export default function Page() {
    const url = "https://othercalculators.com/calculators/asphalt/asphalt-tonnage-calculator";

    const faqs = [
        {
            q: "What is the standard formula for asphalt tonnage?",
            a: "The standard formula is: Tonnage = (Area in ft² × Thickness in ft × Density) ÷ 2,000. Typical density is about 145 lb/ft³.",
        },
        {
            q: "What is spread rate?",
            a: "Spread rate is another way to estimate material. A common rule of thumb is 110 lbs per square yard per inch of thickness.",
        },
        {
            q: "How much waste should I add?",
            a: "5-10% is a typical range to account for ground irregularities and compaction variation.",
        },
        {
            q: "How do I calculate square footage?",
            a: "Multiply the length of your paved area by the width. For irregular shapes, break them down into smaller rectangles.",
        },
        {
            q: "Does temperature affect asphalt density?",
            a: "Yes, slightly, but for estimating purposes, standard density values (like 145 lb/ft³) are sufficient.",
        },
    ];

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://othercalculators.com/" },
            { "@type": "ListItem", position: 2, name: "Asphalt Calculators", item: "https://othercalculators.com/calculators/asphalt" },
            { "@type": "ListItem", position: 3, name: "Asphalt Tonnage Calculator", item: url },
        ],
    };

    const softwareAppLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Asphalt Tonnage Calculator",
        applicationCategory: "CalculatorApplication",
        operatingSystem: "All",
        url,
        description: "Calculate asphalt tonnage needed for paving projects.",
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
                        <li aria-current="page" className="text-slate-900/85">Asphalt Tonnage Calculator</li>
                    </ol>
                </nav>

                {/* Hero Section */}
                <header className="mt-5 text-center">
                    <h1 className="text-[34px] font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[40px]">
                        Asphalt Tonnage Calculator
                    </h1>
                    <p className="mx-auto mt-3 max-w-[780px] text-[16px] leading-7 text-slate-900/70">
                        Accurately estimate asphalt tonnage (US tons) for paving projects. Supports standard density (lb/ft³) and spread rate (lb/yd²/in) formulas.
                    </p>
                </header>

                {/* Calculator Component */}
                <div className="mt-8">
                    <AsphaltTonnageCalculator />
                </div>

                {/* Content Sections */}
                <article className="mt-12 space-y-8 pb-12">
                    {/* How it works */}
                    <section aria-labelledby="how-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="how-title" className="text-[22px] font-semibold text-slate-900 mb-4">How to Calculate Asphalt Tonnage</h2>
                        <div className="space-y-4 text-[15px] leading-7 text-slate-700">
                            <p>
                                There are two common ways to calculate required tonnage. This tool supports both:
                            </p>

                            <h3 className="text-[18px] font-medium text-slate-900 mt-6">Method 1: Standard Density</h3>
                            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200">
                                <p className="font-mono text-[14px] text-slate-800">
                                    Tonnage = (Area × Thickness × Density) ÷ 2,000
                                </p>
                            </div>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>Area:</strong> Square feet (Length × Width)</li>
                                <li><strong>Thickness:</strong> Depth in feet (Inches ÷ 12)</li>
                                <li><strong>Density:</strong> Typically 145 lbs per cubic foot</li>
                            </ul>

                            <h3 className="text-[18px] font-medium text-slate-900 mt-6">Method 2: Spread Rate</h3>
                            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200">
                                <p className="font-mono text-[14px] text-slate-800">
                                    Tonnage = (Area_yd² × Thickness_in × SpreadRate) ÷ 2,000
                                </p>
                            </div>
                            <p>
                                A common industry standard is using a spread rate of <strong>110 lbs</strong> per square yard, per inch of thickness.
                            </p>
                        </div>
                    </section>

                    {/* Example */}
                    <section aria-labelledby="example-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="example-title" className="text-[22px] font-semibold text-slate-900 mb-4">Example Calculation</h2>
                        <div className="rounded-xl bg-sky-50/50 border border-sky-100 p-5">
                            <p className="text-[15px] leading-7 text-slate-800">
                                <strong>Scenario:</strong> Paving a driveway 50 ft long, 10 ft wide, 2 inches thick.
                            </p>
                            <ul className="mt-3 list-disc pl-5 space-y-1 text-[14px] text-slate-700">
                                <li><strong>Area:</strong> 50 × 10 = 500 sq ft</li>
                                <li><strong>Thickness:</strong> 2 ÷ 12 = 0.167 ft</li>
                                <li><strong>Volume:</strong> 500 × 0.167 = 83.33 cubic ft</li>
                                <li><strong>Weight:</strong> 83.33 × 145 (density) = 12,083 lbs</li>
                                <li><strong>Tons:</strong> 12,083 ÷ 2,000 = <strong>6.04 tons</strong></li>
                            </ul>
                            <p className="mt-3 text-[14px] text-slate-600 italic">
                                Adding 5% waste: 6.04 × 1.05 = <strong>6.34 tons</strong> recommended.
                            </p>
                        </div>
                    </section>

                    {/* FAQs */}
                    <section aria-labelledby="faq-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="faq-title" className="text-[22px] font-semibold text-slate-900 mb-6">Frequently Asked Questions</h2>
                        <div className="grid gap-4">
                            {faqs.map((f, i) => (
                                <details key={i} id={`faq-${i + 1}`} className="group rounded-2xl border border-slate-900/10 bg-slate-50/50 px-5 py-4 open:bg-white open:shadow-sm transition-all duration-200">
                                    <summary className="flex cursor-pointer items-center justify-between font-semibold text-slate-900 marker:content-none">
                                        {f.q}
                                        <span className="text-slate-400 text-xl font-light group-open:rotate-45 transition-transform duration-200">+</span>
                                    </summary>
                                    <p className="mt-3 text-[15px] leading-7 text-slate-600">{f.a}</p>
                                </details>
                            ))}
                        </div>
                    </section>

                    <RelatedTools category="Asphalt" currentPath="/calculators/asphalt/asphalt-tonnage-calculator" />

                    {/* Sources */}
                    <section aria-labelledby="sources-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-6 shadow-sm">
                        <h2 id="sources-title" className="text-[18px] font-semibold tracking-[-0.01em] text-slate-900">
                            Sources & assumptions
                        </h2>
                        <ul className="mt-3 list-disc space-y-1 pl-5 text-[14px] leading-6 text-slate-700">
                            <li>Density assumed at 145 lb/ft³ for standard mix unless specified.</li>
                            <li>Spread rate assumed at 110 lb/yd² per inch depth.</li>
                            <li>Calculations are estimates; always verify with your supplier.</li>
                        </ul>
                    </section>
                </article>
            </div>
        </main>
    );
}
