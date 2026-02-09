import type { Metadata } from "next";
import AsphaltSquareFeetToTonsCalculator from "@/components/calculators/asphalt/AsphaltSquareFeetToTonsCalculator";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
    title: "Asphalt Square Feet to Tons Calculator | Area to Weight",
    description: "Convert surface area in square feet to asphalt tonnage. Accurately estimate how much asphalt you need for a specific paving area and depth.",
    alternates: {
        canonical: "/calculators/asphalt/asphalt-square-feet-to-tons-calculator",
    },
    openGraph: {
        title: "Asphalt Square Feet to Tons Conversion Calculator",
        description: "Professional area-to-weight converter for asphalt projects. Calculate tonnage based on sq ft and thickness.",
        url: "/calculators/asphalt/asphalt-square-feet-to-tons-calculator",
        type: "website",
    },
};

function jsonLd(data: unknown) {
    return { __html: JSON.stringify(data) };
}

export default function Page() {
    const url = "https://othercalculators.com/calculators/asphalt/asphalt-square-feet-to-tons-calculator";

    const faqs = [
        {
            q: "How do I convert square feet to asphalt tons?",
            a: "Multiply the square footage by the thickness in feet (inches/12) to get volume. Then multiply by density (approx 145 lb/ft³) and divide by 2000.",
        },
        {
            q: "How many tons for 1,000 square feet of asphalt?",
            a: "For 1,000 sq ft at 2 inches thick, you will need approximately 12.08 tons of hot-mix asphalt.",
        },
        {
            q: "What is the weight of asphalt per square foot?",
            a: "At 1 inch thick, asphalt weighs roughly 12.08 lbs per square foot. This varies slightly based on the specific mix density.",
        },
        {
            q: "Should I add a waste factor?",
            a: "Yes. We recommend adding 5-10% to your calculated tonnage to account for compaction, edge trimming, and site irregularities.",
        },
    ];

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://othercalculators.com/" },
            { "@type": "ListItem", position: 2, name: "Asphalt Calculators", item: "https://othercalculators.com/calculators/asphalt" },
            { "@type": "ListItem", position: 3, name: "Asphalt Square Feet to Tons Calculator", item: url },
        ],
    };

    const softwareAppLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Asphalt Square Feet to Tons Calculator",
        applicationCategory: "CalculatorApplication",
        operatingSystem: "All",
        url,
        description: "Convert paving surface area into required asphalt weight (tons).",
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
                        <li aria-current="page" className="text-slate-900/85">Asphalt Square Feet to Tons Calculator</li>
                    </ol>
                </nav>

                {/* Hero */}
                <header className="mt-5 text-center">
                    <h1 className="text-[34px] font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[40px]">
                        Asphalt Square Feet to Tons Calculator
                    </h1>
                    <p className="mx-auto mt-3 max-w-[780px] text-[16px] leading-7 text-slate-900/70">
                        Convert your paved surface area into order-ready tonnage. Accurate weight estimation for driveways, parking lots, and walkways based on area and depth.
                    </p>
                </header>

                {/* Calculator */}
                <div className="mt-8">
                    <AsphaltSquareFeetToTonsCalculator />
                </div>

                {/* Content Sections */}
                <article className="mt-12 space-y-8 pb-12">
                    {/* Surface Area Logic */}
                    <section aria-labelledby="area-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="area-title" className="text-[22px] font-semibold text-slate-900 mb-4">Surface Area Estimation</h2>
                        <p className="text-[15px] leading-7 text-slate-700">
                            Whether you're quoting a job or planning a DIY project, converting <strong>square footage</strong> to <strong>tonnage</strong> is the most common mathematical step in asphalt paving. This calculator simplifies the process by factoring in your specific pavement thickness and mix density.
                        </p>
                    </section>

                    {/* Formula */}
                    <section aria-labelledby="formula-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="formula-title" className="text-[22px] font-semibold text-slate-900 mb-4">The Area-to-Weight Formula</h2>
                        <div className="space-y-4 text-[15px] leading-7 text-slate-700">
                            <p>We use the standard US volumetric standard for this calculation:</p>
                            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 text-center">
                                <code className="text-lg font-semibold text-slate-800">
                                    Required Tons = (Sq Ft × (Depth in Inches / 12) × 145) / 2000
                                </code>
                            </div>
                            <p className="text-sm text-slate-500">
                                *Typical hot-mix asphalt density is approximately 145 lbs per cubic foot.
                            </p>
                        </div>
                    </section>

                    {/* Factors */}
                    <section aria-labelledby="factors-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="factors-title" className="text-[22px] font-semibold text-slate-900 mb-4">Bidding & Procurement Factors</h2>
                        <ul className="grid gap-4 sm:grid-cols-2 list-none p-0 text-[15px] leading-7">
                            <li className="p-4 bg-slate-50/50 rounded-xl border border-slate-100">
                                <h3 className="font-semibold text-slate-900 mb-1">Compaction Factor</h3>
                                <p className="text-slate-600">The mix "loosens" during transit and "compacts" when rolled. Ensure your depth input is the <em>target final compacted depth</em>.</p>
                            </li>
                            <li className="p-4 bg-slate-50/50 rounded-xl border border-slate-100">
                                <h3 className="font-semibold text-slate-900 mb-1">Edge Geometry</h3>
                                <p className="text-slate-600">Irregularly shaped driveways or parking islands create more edge waste. Add at least 5% to your order for these areas.</p>
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

                    <RelatedTools category="Asphalt" currentPath="/calculators/asphalt/asphalt-square-feet-to-tons-calculator" />
                </article>
            </div>
        </main>
    );
}
