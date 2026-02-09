import type { Metadata } from "next";
import AsphaltWeightCalculator from "@/components/calculators/asphalt/AsphaltWeightCalculator";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
    title: "Asphalt Weight Calculator (Volume to Tons) | OtherCalculators",
    description:
        "Convert asphalt volume (cubic yards, feet, or meters) to weight (tons). Uses standard density formulas for hot mix asphalt.",
    alternates: {
        canonical: "/calculators/asphalt/asphalt-weight-calculator",
    },
    openGraph: {
        title: "Asphalt Weight Calculator",
        description:
            "Quickly convert asphalt volume to tons. Supports cubic yards, feet, and meters with customizable density.",
        url: "/calculators/asphalt/asphalt-weight-calculator",
        type: "website",
    },
};

function jsonLd(data: unknown) {
    return { __html: JSON.stringify(data) };
}

export default function Page() {
    const url = "https://othercalculators.com/calculators/asphalt/asphalt-weight-calculator";

    const faqs = [
        {
            q: "How do I calculate asphalt weight from volume?",
            a: "Multiply the volume in cubic feet by the density (typically 145 lbs/ft³), then divide by 2,000 to get tons.",
        },
        {
            q: "What is the standard density of asphalt?",
            a: "Standard hot mix asphalt is often estimated at 145 lbs per cubic foot (approx 2,322 kg/m³), but this varies by mix design.",
        },
        {
            q: "How many tons is 1 cubic yard of asphalt?",
            a: "At 145 lb/ft³, one cubic yard (27 ft³) weighs about 3,915 lbs, or roughly 1.96 tons.",
        },
    ];

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://othercalculators.com/" },
            { "@type": "ListItem", position: 2, name: "Asphalt Calculators", item: "https://othercalculators.com/calculators/asphalt" },
            { "@type": "ListItem", position: 3, name: "Asphalt Weight Calculator", item: url },
        ],
    };

    const softwareAppLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Asphalt Weight Calculator",
        applicationCategory: "CalculatorApplication",
        operatingSystem: "All",
        url,
        description:
            "Convert asphalt volume (cubic yards, feet, or meters) to weight (tons). Uses standard density formulas.",
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
                        <li aria-current="page" className="text-slate-900/85">Asphalt Weight Calculator</li>
                    </ol>
                </nav>

                {/* Hero */}
                <header className="mt-5 text-center">
                    <h1 className="text-[34px] font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[40px]">
                        Asphalt Weight Calculator
                    </h1>
                    <p className="mx-auto mt-3 max-w-[780px] text-[16px] leading-7 text-slate-900/70">
                        Convert asphalt volume (cubic yards, feet, or meters) into tons or pounds. Useful when you know the dimensions but need to order by weight.
                    </p>
                </header>

                {/* Calculator */}
                <div className="mt-8">
                    <AsphaltWeightCalculator />
                </div>

                {/* Content */}
                <article className="mt-12 space-y-8 pb-12">
                    {/* Formula */}
                    <section aria-labelledby="formula-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="formula-title" className="text-[22px] font-semibold text-slate-900 mb-4">Formula</h2>
                        <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 mb-4">
                            <p className="font-mono text-[14px] text-slate-800">
                                Weight (lbs) = Volume (ft³) × Density (lb/ft³)
                            </p>
                            <p className="font-mono text-[14px] text-slate-800 mt-2">
                                Weight (tons) = Weight (lbs) ÷ 2,000
                            </p>
                        </div>
                        <p className="text-[15px] leading-7 text-slate-700">
                            <strong>Note:</strong> 1 cubic yard = 27 cubic feet.
                        </p>
                    </section>

                    {/* Example */}
                    <section aria-labelledby="example-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="example-title" className="text-[22px] font-semibold text-slate-900 mb-4">Example Calculation</h2>
                        <div className="rounded-xl bg-sky-50/50 border border-sky-100 p-5">
                            <p className="text-[15px] leading-7 text-slate-800">
                                <strong>Scenario:</strong> You have <strong>10 cubic yards</strong> of asphalt to pave.
                            </p>
                            <ul className="mt-3 list-disc pl-5 space-y-1 text-[14px] text-slate-700">
                                <li>Convert to cubic feet: 10 yd³ × 27 = 270 ft³</li>
                                <li>Calculate weight (lbs): 270 ft³ × 145 lb/ft³ = 39,150 lbs</li>
                                <li>Convert to tons: 39,150 ÷ 2,000 = <strong>19.58 tons</strong></li>
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
                    <RelatedTools category="Asphalt" currentPath="/calculators/asphalt/asphalt-weight-calculator" />
                </article>
            </div>
        </main>
    );
}
