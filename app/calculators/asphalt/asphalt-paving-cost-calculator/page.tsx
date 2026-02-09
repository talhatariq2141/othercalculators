import type { Metadata } from "next";
import AsphaltPavingCostCalculator from "@/components/calculators/asphalt/AsphaltPavingCostCalculator";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
    title: "Asphalt Paving Cost Calculator | OtherCalculators",
    description: "Calculate the cost of large asphalt paving projects like parking lots and roads. Break down material and labor expenses.",
    alternates: {
        canonical: "/calculators/asphalt/asphalt-paving-cost-calculator",
    },
    openGraph: {
        title: "Asphalt Paving Cost Calculator",
        description: "Professional asphalt paving cost estimation tool.",
        url: "/calculators/asphalt/asphalt-paving-cost-calculator",
        type: "website",
    },
};

function jsonLd(data: unknown) {
    return { __html: JSON.stringify(data) };
}

export default function Page() {
    const url = "https://othercalculators.com/calculators/asphalt/asphalt-paving-cost-calculator";

    const faqs = [
        {
            q: "How are commercial asphalt paving costs calculated?",
            a: "Commercial projects are usually estimated by applying a combined 'Material + Labor' square foot rate to the total area. This accounts for high-volume equipment use and specialized labor.",
        },
        {
            q: "What is the average cost for asphalt paving?",
            a: "For large projects like parking lots, total costs typically range from $4 to $12 per square foot, depending on prep work, drainage requirements, and material grade.",
        },
        {
            q: "Does the size of the project reduce the cost per square foot?",
            a: "Yes, 'economies of scale' apply. Mobilizing heavy paving equipment has a high fixed cost, so larger areas often see a lower price per square foot than small residential jobs.",
        },
        {
            q: "What are 'prep costs' in asphalt paving?",
            a: "Prep costs include clearing land, grading for drainage, compacting the soil, and installing a crushed stone sub-base. This is critical for the pavement's lifespan.",
        },
    ];

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://othercalculators.com/" },
            { "@type": "ListItem", position: 2, name: "Asphalt Calculators", item: "https://othercalculators.com/calculators/asphalt" },
            { "@type": "ListItem", position: 3, name: "Asphalt Paving Cost Calculator", item: url },
        ],
    };

    const softwareAppLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Asphalt Paving Cost Calculator",
        applicationCategory: "CalculatorApplication",
        operatingSystem: "All",
        url,
        description: "Estimate asphalt paving costs by breaking down material and labor rates per square foot.",
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
                        <li aria-current="page" className="text-slate-900/85">Asphalt Paving Cost Calculator</li>
                    </ol>
                </nav>

                {/* Hero */}
                <header className="mt-5 text-center">
                    <h1 className="text-[34px] font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[40px]">
                        Asphalt Paving Cost Calculator
                    </h1>
                    <p className="mx-auto mt-3 max-w-[780px] text-[16px] leading-7 text-slate-900/70">
                        Budget for roads, parking lots, and large commercial projects. Calculate total expenses based on separate material and installation rates.
                    </p>
                </header>

                {/* Calculator */}
                <div className="mt-8">
                    <AsphaltPavingCostCalculator />
                </div>

                {/* Content */}
                <article className="mt-12 space-y-8 pb-12">
                    {/* Formula */}
                    <section aria-labelledby="formula-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="formula-title" className="text-[22px] font-semibold text-slate-900 mb-4">Paving Cost Formula</h2>
                        <p className="text-[15px] leading-7 text-slate-600 mb-4">
                            Commercial estimators use the Area x Rate method, often breaking down exactly where the money goes:
                        </p>
                        <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 mb-4">
                            <code className="block text-center text-indigo-700 font-mono text-[14px]">
                                Paving Cost = Area × (Material Rate + Labor Rate)
                            </code>
                        </div>
                        <ul className="list-disc pl-5 mt-4 space-y-2 text-[15px] text-slate-600">
                            <li><strong>Material:</strong> The cost of the hot mix asphalt ($1–$5/sq ft).</li>
                            <li><strong>Labor & Prep:</strong> Includes equipment operators, sub-base work, and hauling ($3–$10/sq ft).</li>
                        </ul>
                    </section>

                    {/* Example */}
                    <section aria-labelledby="example-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="example-title" className="text-[22px] font-semibold text-slate-900 mb-4">Calculation Example</h2>
                        <div className="rounded-xl bg-indigo-50/50 border border-indigo-100 p-5">
                            <p className="text-[15px] leading-7 text-slate-800">
                                <strong>Scenario:</strong> Small commercial parking pad of 2,000 sq ft.
                            </p>
                            <ul className="mt-3 list-disc pl-5 space-y-2 text-[14px] text-slate-700">
                                <li>Materials ($3.00/sq ft): $6,000</li>
                                <li>Labor ($5.50/sq ft): $11,000</li>
                                <li><strong>Total Project Estimate: $17,000</strong></li>
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
                    <RelatedTools category="Asphalt" currentPath="/calculators/asphalt/asphalt-paving-cost-calculator" />
                </article>
            </div>
        </main>
    );
}
