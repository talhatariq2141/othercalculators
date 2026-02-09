import type { Metadata } from "next";
import AsphaltPatchCalculator from "@/components/calculators/asphalt/AsphaltPatchCalculator";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
    title: "Asphalt Patch Calculator | Pothole Repair Estimator",
    description: "Calculate how many pounds or bags of asphalt patch you need to fix a pothole or driveway crack. Support for cold mix and hot mix repairs.",
    alternates: {
        canonical: "/calculators/asphalt/asphalt-patch-calculator",
    },
    openGraph: {
        title: "Asphalt Patch Calculator",
        description: "Free pothole material estimator. Convert patch dimensions to bags or tons of asphalt.",
        url: "/calculators/asphalt/asphalt-patch-calculator",
        type: "website",
    },
};

function jsonLd(data: unknown) {
    return { __html: JSON.stringify(data) };
}

export default function Page() {
    const url = "https://othercalculators.com/calculators/asphalt/asphalt-patch-calculator";

    const faqs = [
        {
            q: "How much area does a 50lb bag of asphalt patch cover?",
            a: "A 50lb bag of cold patch typically covers about 6 square feet at a 1-inch depth.",
        },
        {
            q: "What is the difference between hot mix and cold patch density?",
            a: "Hot mix is usually more dense (approx 145 lb/ft³), while cold patch mix can vary between 130-140 lb/ft³ depending on the additives.",
        },
        {
            q: "How many bags of asphalt patch do I need?",
            a: "Calculate the cubic feet of your repair (L x W x Depth/12) and multiply by density. Divide by bag weight (e.g., 50lbs).",
        },
        {
            q: "Should I overfill a pothole?",
            a: "Yes. Most patch materials require compaction (tamping). You should typically overfill by about 1 inch so it compacts flush with the surface.",
        },
    ];

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://othercalculators.com/" },
            { "@type": "ListItem", position: 2, name: "Asphalt Calculators", item: "https://othercalculators.com/calculators/asphalt" },
            { "@type": "ListItem", position: 3, name: "Asphalt Patch Calculator", item: url },
        ],
    };

    const softwareAppLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Asphalt Patch Calculator",
        applicationCategory: "CalculatorApplication",
        operatingSystem: "All",
        url,
        description: "Estimate repair material for asphalt patches and potholes in bags or tons.",
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
                        <li aria-current="page" className="text-slate-900/85">Asphalt Patch Calculator</li>
                    </ol>
                </nav>

                {/* Hero */}
                <header className="mt-5 text-center">
                    <h1 className="text-[34px] font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[40px]">
                        Asphalt Patch Calculator
                    </h1>
                    <p className="mx-auto mt-3 max-w-[780px] text-[16px] leading-7 text-slate-900/70">
                        Estimate the amount of asphalt patching material needed for any repair. Support for standard DIY cold-mix bags or professional hot-mix tonnage.
                    </p>
                </header>

                {/* Calculator */}
                <div className="mt-8">
                    <AsphaltPatchCalculator />
                </div>

                {/* Content Sections */}
                <article className="mt-12 space-y-8 pb-12">
                    {/* Small Repair Logic */}
                    <section aria-labelledby="repair-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="repair-title" className="text-[22px] font-semibold text-slate-900 mb-4">Small Repair Logic</h2>
                        <p className="text-[15px] leading-7 text-slate-700">
                            Asphalt repairs are often done using 50lb bags of "Cold Patch" material. This tool helps you convert your pothole dimensions into a bag count so you don't over-order at the hardware store. For larger utility cuts or surface repairs, we also provide the total tonnage requirement.
                        </p>
                    </section>

                    {/* Calculation Method */}
                    <section aria-labelledby="math-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="math-title" className="text-[22px] font-semibold text-slate-900 mb-4">Calculation Method</h2>
                        <div className="space-y-4 text-[15px] leading-7 text-slate-700">
                            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 text-center">
                                <code className="text-lg font-semibold text-slate-800">Bags = ((Area × (Depth / 12)) × Density) / 50</code>
                            </div>
                            <p className="text-sm text-slate-500">
                                *Assumes a standard DIY bag weight of 50 lbs. Pothole density is typically calculated at 137 lb/ft³ for cold-mix products.
                            </p>
                        </div>
                    </section>

                    {/* Best Practices */}
                    <section aria-labelledby="practices-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="practices-title" className="text-[22px] font-semibold text-slate-900 mb-4">Repair Best Practices</h2>
                        <ul className="list-disc pl-5 space-y-3 text-[15px] leading-7 text-slate-700">
                            <li><strong>The Square Cut:</strong> For a lasting patch, always cut the pothole into a clean square/rectangle with vertical edges. This provides a "shoulder" for the new mix to bind to.</li>
                            <li><strong>Compaction is Key:</strong> Patch material is extremely loose. Use a hand tamper or a vehicle tire to pack the material until it is tight and flush.</li>
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

                    <RelatedTools category="Asphalt" currentPath="/calculators/asphalt/asphalt-patch-calculator" />
                </article>
            </div>
        </main>
    );
}
