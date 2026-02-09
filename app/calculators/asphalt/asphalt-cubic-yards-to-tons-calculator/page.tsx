import type { Metadata } from "next";
import AsphaltCubicYardsToTonsCalculator from "@/components/calculators/asphalt/AsphaltCubicYardsToTonsCalculator";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
    title: "Asphalt Cubic Yards to Tons Calculator | Volume to Weight Tool",
    description: "Easily convert asphalt volume in cubic yards to tonnage. Accurately estimate weight for ordering and purchasing material from plants.",
    alternates: {
        canonical: "/calculators/asphalt/asphalt-cubic-yards-to-tons-calculator",
    },
    openGraph: {
        title: "Asphalt Cubic Yards to Tons Calculator",
        description: "Professional tool to convert cubic yards to asphalt tons using standard density formulas.",
        url: "/calculators/asphalt/asphalt-cubic-yards-to-tons-calculator",
        type: "website",
    },
};

function jsonLd(data: unknown) {
    return { __html: JSON.stringify(data) };
}

export default function Page() {
    const url = "https://othercalculators.com/calculators/asphalt/asphalt-cubic-yards-to-tons-calculator";

    const faqs = [
        {
            q: "How do I convert cubic yards to asphalt tons?",
            a: "Multiply cubic yards by 27 to get cubic feet, then multiply by density (usually 145 lb/ft³). Finally, divide by 2000 to get tons.",
        },
        {
            q: "What is the density of asphalt per yard?",
            a: "At 145 lb per cubic foot, one cubic yard of asphalt weighs approximately 3,915 lbs or 1.96 tons.",
        },
        {
            q: "How many tons is 10 cubic yards of asphalt?",
            a: "10 cubic yards of asphalt weighs roughly 19.58 tons based on standard US hot-mix density.",
        },
        {
            q: "Why is conversion important for ordering?",
            a: "Most site blueprints and excavation plans measure material in cubic yards, but asphalt plants exclusively bill by the ton.",
        },
    ];

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", "item": "https://othercalculators.com/" },
            { "@type": "ListItem", position: 2, name: "Asphalt Calculators", "item": "https://othercalculators.com/calculators/asphalt" },
            { "@type": "ListItem", position: 3, name: "Asphalt Cubic Yards to Tons Calculator", item: url },
        ],
    };

    const softwareAppLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Asphalt Cubic Yards to Tons Calculator",
        applicationCategory: "CalculatorApplication",
        operatingSystem: "All",
        url,
        description: "Convert asphalt volumetric measurements (cubic yards) into commercial weight (tons).",
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
                        <li aria-current="page" className="text-slate-900/85">Asphalt Cubic Yards to Tons Calculator</li>
                    </ol>
                </nav>

                {/* Hero */}
                <header className="mt-5 text-center">
                    <h1 className="text-[34px] font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[40px]">
                        Asphalt Cubic Yards to Tons Calculator
                    </h1>
                    <p className="mx-auto mt-3 max-w-[780px] text-[16px] leading-7 text-slate-900/70">
                        Seamlessly convert your project volume into purchasing weight. Ensure your material order at the plant is accurate based on your excavation or design plans.
                    </p>
                </header>

                {/* Calculator */}
                <div className="mt-8">
                    <AsphaltCubicYardsToTonsCalculator />
                </div>

                {/* Content Sections */}
                <article className="mt-12 space-y-8 pb-12">
                    {/* Procurement */}
                    <section aria-labelledby="procurement-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="procurement-title" className="text-[22px] font-semibold text-slate-900 mb-4">Procurement Accuracy</h2>
                        <p className="text-[15px] leading-7 text-slate-700">
                            Ordering the right amount of asphalt is critical for project success. While blueprints often show volumes in <strong>cubic yards</strong>, asphalt is always transacted in <strong>tons</strong>. This tool bridges the gap between design and procurement, preventing costly material shortages or overruns.
                        </p>
                    </section>

                    {/* Formula */}
                    <section aria-labelledby="formula-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="formula-title" className="text-[22px] font-semibold text-slate-900 mb-4">The Volume-to-Weight Formula</h2>
                        <div className="space-y-4 text-[15px] leading-7 text-slate-700">
                            <p>Our calculator follows the standard US density benchmarks:</p>
                            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 text-center">
                                <code className="text-lg font-semibold text-slate-800">Tons = (Cubic Yards × 27 × Density) / 2000</code>
                            </div>
                            <p className="text-sm text-slate-500">
                                *Typical Hot Mix Asphalt (HMA) density is 145 lb/ft³.
                            </p>
                        </div>
                    </section>

                    {/* Assumptions */}
                    <section aria-labelledby="assumptions-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="assumptions-title" className="text-[22px] font-semibold text-slate-900 mb-4">Engineering Assumptions</h2>
                        <ul className="grid gap-4 sm:grid-cols-2 list-none p-0 text-[15px] leading-7">
                            <li className="p-4 bg-slate-50/50 rounded-xl border border-slate-100">
                                <h3 className="font-semibold text-slate-900 mb-1">Loose vs. Compacted</h3>
                                <p className="text-slate-600">This calculator assumes the volume you enter is the <em>target compacted volume</em>. If your mix is loose, it will occupy more space but the weight remains the same.</p>
                            </li>
                            <li className="p-4 bg-slate-50/50 rounded-xl border border-slate-100">
                                <h3 className="font-semibold text-slate-900 mb-1">Truck Loading</h3>
                                <p className="text-slate-600">One cubic yard of hot asphalt weighs nearly 2 tons. Ensure your truck scales can handle the weight before loading for site delivery.</p>
                            </li>
                        </ul>
                    </section>

                    {/* FAQs */}
                    <section aria-labelledby="faq-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="faq-title" className="text-[22px] font-semibold text-slate-900 mb-6">Common Questions</h2>
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

                    <RelatedTools category="Asphalt" currentPath="/calculators/asphalt/asphalt-cubic-yards-to-tons-calculator" />
                </article>
            </div>
        </main>
    );
}
