import type { Metadata } from "next";
import AsphaltOverlayCostCalculator from "@/components/calculators/asphalt/AsphaltOverlayCostCalculator";

export const metadata: Metadata = {
    title: "Asphalt Overlay Cost Calculator | OtherCalculators",
    description: "Calculate the cost of an asphalt overlay. Estimate your project expenses based on area and specialized overlay rates.",
    alternates: {
        canonical: "/calculators/asphalt/asphalt-overlay-cost-calculator",
    },
    openGraph: {
        title: "Asphalt Overlay Cost Calculator",
        description: "Quickly estimate asphalt overlay project costs.",
        url: "/calculators/asphalt/asphalt-overlay-cost-calculator",
        type: "website",
    },
};

function jsonLd(data: unknown) {
    return { __html: JSON.stringify(data) };
}

import RelatedTools from "@/components/RelatedTools";

export default function Page() {
    const url = "https://othercalculators.com/calculators/asphalt/asphalt-overlay-cost-calculator";
    const category = "Asphalt";

    const faqs = [
        {
            q: "What is an asphalt overlay?",
            a: "An overlay is a thinner layer of new asphalt applied over an existing pavement. It serves to refresh the surface and add structural integrity without the cost of full replacement.",
        },
        {
            q: "How thick is a typical asphalt overlay?",
            a: "Standard residential and commercial overlays are usually between 1.5 and 2 inches thick.",
        },
        {
            q: "Is an overlay the same as resurfacing?",
            a: "Essentially, yes. Resurfacing is the process, and an 'overlay' is the specific layer being added.",
        },
        {
            q: "When should I choose an overlay over sealcoating?",
            a: "Sealcoating is a preventive maintenance coating (less than 1/8 inch) that protects against the elements. An overlay is a structural repair for surfaces with minor cracks or fading that need a new wearing course.",
        },
    ];

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://othercalculators.com/" },
            { "@type": "ListItem", position: 2, name: "Asphalt Calculators", item: "https://othercalculators.com/calculators/asphalt" },
            { "@type": "ListItem", position: 3, name: "Asphalt Overlay Cost Calculator", item: url },
        ],
    };

    const softwareAppLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Asphalt Overlay Cost Calculator",
        applicationCategory: "CalculatorApplication",
        operatingSystem: "All",
        url,
        description: "Estimate asphalt overlay costs using area and unit rate calculations.",
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
                        <li aria-current="page" className="text-slate-900/85">Asphalt Overlay Cost Calculator</li>
                    </ol>
                </nav>

                {/* Hero */}
                <header className="mt-5 text-center">
                    <h1 className="text-[34px] font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[40px]">
                        Asphalt Overlay Cost Calculator
                    </h1>
                    <p className="mx-auto mt-3 max-w-[780px] text-[16px] leading-7 text-slate-900/70">
                        Calculate the cost to add a fresh layer of asphalt to your project. Budget effectively with our area-based overlay cost estimator.
                    </p>
                </header>

                {/* Calculator */}
                <div className="mt-8">
                    <AsphaltOverlayCostCalculator />
                </div>

                {/* Content */}
                <article className="mt-12 space-y-8 pb-12">
                    {/* Calculation Method */}
                    <section aria-labelledby="method-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="method-title" className="text-[22px] font-semibold text-slate-900 mb-4">Overlay Cost Method</h2>
                        <p className="text-[15px] leading-7 text-slate-600 mb-4">
                            Overlay estimates are straightforward but depend heavily on the specialized 'overlay rate' which is lower than new paving:
                        </p>
                        <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 mb-4 text-center">
                            <code className="text-lg font-semibold text-blue-700">Overlay Cost = Area × Overlay Rate per sq ft</code>
                        </div>
                        <p className="text-[15px] leading-7 text-slate-600">
                            The rate usually includes cleaning the surface, applying a tack coat (liquid asphalt binder), and the machinery time to lay the new material.
                        </p>
                    </section>

                    {/* Example */}
                    <section aria-labelledby="example-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="example-title" className="text-[22px] font-semibold text-slate-900 mb-4">Overlay Calculation Example</h2>
                        <div className="rounded-xl bg-blue-50/50 border border-blue-100 p-5">
                            <ul className="list-disc pl-5 space-y-2 text-[15px] text-slate-700">
                                <li><strong>Total Area:</strong> 1,500 sq ft</li>
                                <li><strong>Proposed Rate:</strong> $4.00 / sq ft</li>
                                <li><strong>Estimated Overlay Cost: $6,000.00</strong></li>
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
                    <RelatedTools category={category} currentPath="/calculators/asphalt/asphalt-overlay-cost-calculator" />
                </article>
            </div>
        </main>
    );
}
