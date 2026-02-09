import type { Metadata } from "next";
import AsphaltVolumeCalculator from "@/components/calculators/asphalt/AsphaltVolumeCalculator";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
    title: "Asphalt Volume Calculator (Cubic Yards & Meters) | OtherCalculators",
    description:
        "Calculate asphalt volume in cubic yards (US) or cubic meters (Metric). Enter length, width, and thickness, add waste %, and optionally estimate weight.",
    alternates: {
        canonical: "/calculators/asphalt/asphalt-volume-calculator",
    },
    openGraph: {
        title: "Asphalt Volume Calculator",
        description:
            "US-first asphalt volume calculator with unit switching. Includes waste factor and optional weight estimate.",
        url: "/calculators/asphalt/asphalt-volume-calculator",
        type: "website",
    },
};

function jsonLd(data: unknown) {
    return { __html: JSON.stringify(data) };
}

export default function Page() {
    const url = "https://othercalculators.com/calculators/asphalt/asphalt-volume-calculator";

    const faqs = [
        {
            q: "What unit should I use to order asphalt in the US?",
            a: "Most suppliers handle tons (weight), but planning often starts with cubic yards (volume). This tool calculates both if you provide a density.",
        },
        {
            q: "Why add a waste percentage?",
            a: "Waste accounts for compaction loss, uneven subgrades, and minor measurement errors. 5-10% is a standard safety factor.",
        },
        {
            q: "How accurate is the weight estimate?",
            a: "It's an approximation. Real weight depends on the specific asphalt mix density and degree of compaction. Always verify with your supplier.",
        },
        {
            q: "Can I use this for metric projects?",
            a: "Yes. Toggle the calculator to 'Metric' to input meters/cm and get results in cubic meters and tonnes.",
        },
    ];

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://othercalculators.com/" },
            { "@type": "ListItem", position: 2, name: "Asphalt Calculators", item: "https://othercalculators.com/calculators/asphalt" },
            { "@type": "ListItem", position: 3, name: "Asphalt Volume Calculator", item: url },
        ],
    };

    const softwareAppLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Asphalt Volume Calculator",
        applicationCategory: "CalculatorApplication",
        operatingSystem: "All",
        url,
        description:
            "Calculate asphalt volume in cubic yards (US) or cubic meters (Metric). Add waste % and optionally estimate weight using density.",
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
                        <li aria-current="page" className="text-slate-900/85">Asphalt Volume Calculator</li>
                    </ol>
                </nav>

                {/* Hero */}
                <header className="mt-5 text-center">
                    <h1 className="text-[34px] font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[40px]">
                        Asphalt Volume Calculator
                    </h1>
                    <p className="mx-auto mt-3 max-w-[780px] text-[16px] leading-7 text-slate-900/70">
                        Calculate asphalt volume in cubic yards (US) or cubic meters (Metric) for paving projects. Includes waste factor and optional density-based weight conversion.
                    </p>
                </header>

                {/* Calculator */}
                <div className="mt-8">
                    <AsphaltVolumeCalculator />
                </div>

                {/* Content */}
                <article className="mt-12 space-y-8 pb-12">
                    {/* How to */}
                    <section aria-labelledby="how-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="how-title" className="text-[22px] font-semibold text-slate-900 mb-4">How it works</h2>
                        <div className="space-y-4 text-[15px] leading-7 text-slate-700">
                            <p>
                                This tool treats the paved area as a simple rectangular prism. It calculates the raw volume from your dimensions, adds a safety percentage (waste), and converts the result into standard ordering units like cubic yards.
                            </p>
                            <ol className="list-decimal pl-5 space-y-1">
                                <li><strong>Input Dimensions:</strong> Length, Width, and Thickness.</li>
                                <li><strong>Calculate Volume:</strong> Length × Width × Thickness = Raw Volume.</li>
                                <li><strong>Add Waste:</strong> Multiply by (1 + Waste Percentage).</li>
                                <li><strong>Convert:</strong> To cubic yards (dividing cubic feet by 27).</li>
                            </ol>
                        </div>
                    </section>

                    {/* Formula */}
                    <section aria-labelledby="formula-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="formula-title" className="text-[22px] font-semibold text-slate-900 mb-4">Formulas</h2>

                        <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 mb-4">
                            <p className="font-mono text-[14px] text-slate-800">
                                Volume_yd³ = (Length_ft × Width_ft × Thickness_ft) ÷ 27
                            </p>
                        </div>
                        <p className="text-[15px] leading-7 text-slate-700">
                            For weight estimation:
                            <span className="font-mono text-[13px] bg-slate-100 rounded px-1 mx-1">Weight = Volume × Density</span>
                        </p>
                    </section>

                    {/* US Example */}
                    <section aria-labelledby="example-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="example-title" className="text-[22px] font-semibold text-slate-900 mb-4">Example Calculation</h2>
                        <div className="rounded-xl bg-sky-50/50 border border-sky-100 p-5">
                            <p className="text-[15px] leading-7 text-slate-800">
                                <strong>Scenario:</strong> 50ft driveway, 10ft wide, 2 inch overlay.
                            </p>
                            <ul className="mt-3 list-disc pl-5 space-y-1 text-[14px] text-slate-700">
                                <li>Thickness in ft: 2 ÷ 12 = 0.167 ft</li>
                                <li>Volume (ft³): 50 × 10 × 0.167 = 83.33 ft³</li>
                                <li>Add 7% waste: 83.33 × 1.07 = 89.16 ft³</li>
                                <li>Volume (yd³): 89.16 ÷ 27 = <strong>3.30 cubic yards</strong></li>
                            </ul>
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

                    <RelatedTools category="Asphalt" currentPath="/calculators/asphalt/asphalt-volume-calculator" />
                </article>
            </div>
        </main>
    );
}
