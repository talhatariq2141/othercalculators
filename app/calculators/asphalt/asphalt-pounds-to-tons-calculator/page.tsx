import type { Metadata } from "next";
import AsphaltPoundsToTonsCalculator from "@/components/calculators/asphalt/AsphaltPoundsToTonsCalculator";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
    title: "Asphalt Pounds to Tons Calculator | Weight Conversion Tool",
    description: "Convert asphalt weight from pounds to short tons. Ideal for small repair projects and bag-to-bulk material takeoffs.",
    alternates: {
        canonical: "/calculators/asphalt/asphalt-pounds-to-tons-calculator",
    },
    openGraph: {
        title: "Asphalt Pounds to Tons Conversion Calculator",
        description: "Official asphalt weight converter. Calculate decimal tonnage from LBS for patching and repairs.",
        url: "/calculators/asphalt/asphalt-pounds-to-tons-calculator",
        type: "website",
    },
};

function jsonLd(data: unknown) {
    return { __html: JSON.stringify(data) };
}

export default function Page() {
    const url = "https://othercalculators.com/calculators/asphalt/asphalt-pounds-to-tons-calculator";

    const faqs = [
        {
            q: "How many pounds are in a ton of asphalt?",
            a: "In the United States, a standard 'short ton' of asphalt is equal to exactly 2,000 pounds.",
        },
        {
            q: "How do I convert pounds of cold patch to tons?",
            a: "Divide the total number of pounds by 2,000. For example, forty 50lb bags (2,000 lbs) equals exactly 1 ton.",
        },
        {
            q: "Is a short ton the same as a metric tonne?",
            a: "No. A short ton is 2,000 lbs, whereas a metric tonne is approximately 2,204.6 lbs. Our calculator provides conversions for both units.",
        },
        {
            q: "When is pounds-to-tons conversion useful?",
            a: "This is most common in patch repairs (where mix is often sold in lbs) or when reconciling plant tickets that show poundage vs. ordered tonnage.",
        },
    ];

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://othercalculators.com/" },
            { "@type": "ListItem", position: 2, name: "Asphalt Calculators", item: "https://othercalculators.com/calculators/asphalt" },
            { "@type": "ListItem", position: 3, name: "Asphalt Pounds to Tons Calculator", item: url },
        ],
    };

    const softwareAppLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Asphalt Pounds to Tons Calculator",
        applicationCategory: "CalculatorApplication",
        operatingSystem: "All",
        url,
        description: "Convert asphalt weight from small units (LBS) to commercial units (Tons).",
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
                        <li aria-current="page" className="text-slate-900/85">Asphalt Pounds to Tons Calculator</li>
                    </ol>
                </nav>

                {/* Hero */}
                <header className="mt-5 text-center">
                    <h1 className="text-[34px] font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[40px]">
                        Asphalt Pounds to Tons Calculator
                    </h1>
                    <p className="mx-auto mt-3 max-w-[780px] text-[16px] leading-7 text-slate-900/70">
                        Easily convert material weight from pounds to standard short tons. Perfect for reconciling plant tickets, calculating bag counts, and job-site material takeoffs.
                    </p>
                </header>

                {/* Calculator */}
                <div className="mt-8">
                    <AsphaltPoundsToTonsCalculator />
                </div>

                {/* Content Sections */}
                <article className="mt-12 space-y-8 pb-12">
                    {/* Reconcile */}
                    <section aria-labelledby="reconcile-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="reconcile-title" className="text-[22px] font-semibold text-slate-900 mb-4">Weight Reconciliation</h2>
                        <p className="text-[15px] leading-7 text-slate-700">
                            Asphalt plants often weigh trucks in <strong>pounds</strong> for high precision but bill the final customer in <strong>short tons</strong>. This converter allows you to instantly check your weight tickets against your invoices. It is also an essential tool when planning small-scale repairs using 50lb or 80lb bags of patch mix.
                        </p>
                    </section>

                    {/* Formula */}
                    <section aria-labelledby="formula-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="formula-title" className="text-[22px] font-semibold text-slate-900 mb-4">The Weight Formula</h2>
                        <div className="space-y-4 text-[15px] leading-7 text-slate-700">
                            <p>This calculator follows standard US and Metric benchmarks:</p>
                            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 text-center">
                                <code className="text-lg font-semibold text-slate-800">Tons = Pounds / 2,000</code>
                            </div>
                            <p className="text-sm text-slate-500">
                                *Metric Tonnes = Pounds / 2,204.62
                            </p>
                        </div>
                    </section>

                    {/* Density Facts */}
                    <section aria-labelledby="density-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="density-title" className="text-[22px] font-semibold text-slate-900 mb-4">Material Units</h2>
                        <ul className="grid gap-4 sm:grid-cols-2 list-none p-0 text-[15px] leading-7">
                            <li className="p-4 bg-slate-50/50 rounded-xl border border-slate-100">
                                <h3 className="font-semibold text-slate-900 mb-1">Short Ton (US)</h3>
                                <p className="text-slate-600">Commonly used in the paving industry across North America. Equal to exactly 2,000 pounds.</p>
                            </li>
                            <li className="p-4 bg-slate-50/50 rounded-xl border border-slate-100">
                                <h3 className="font-semibold text-slate-900 mb-1">Metric Tonne</h3>
                                <p className="text-slate-600">The standard unit for international paving projects and scientific engineering. Equal to 1,000 kilograms.</p>
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

                    <RelatedTools category="Asphalt" currentPath="/calculators/asphalt/asphalt-pounds-to-tons-calculator" />
                </article>
            </div>
        </main>
    );
}
