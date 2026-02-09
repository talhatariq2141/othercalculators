import type { Metadata } from "next";
import AsphaltDrivewayCostCalculator from "@/components/calculators/asphalt/AsphaltDrivewayCostCalculator";

export const metadata: Metadata = {
    title: "Asphalt Driveway Cost Calculator | OtherCalculators",
    description: "Estimate the cost of a new asphalt driveway. Calculate based on area and industry standard square foot rates.",
    alternates: {
        canonical: "/calculators/asphalt/asphalt-driveway-cost-calculator",
    },
    openGraph: {
        title: "Asphalt Driveway Cost Calculator",
        description: "Quickly estimate your asphalt driveway paving costs.",
        url: "/calculators/asphalt/asphalt-driveway-cost-calculator",
        type: "website",
    },
};

function jsonLd(data: unknown) {
    return { __html: JSON.stringify(data) };
}

import RelatedTools from "@/components/RelatedTools";

export default function Page() {
    const url = "https://othercalculators.com/calculators/asphalt/asphalt-driveway-cost-calculator";
    const category = "Asphalt";

    const faqs = [
        {
            q: "How much does an asphalt driveway cost per square foot?",
            a: "On average, a residential asphalt driveway costs between $7 and $15 per square foot, including material, labor, and basic site preparation.",
        },
        {
            q: "What factors affect the price of asphalt paving?",
            a: "Key factors include the total square footage, the current price of crude oil (which affects asphalt material costs), site prep needs (excavation vs. simple grading), and regional labor rates.",
        },
        {
            q: "Is asphalt cheaper than concrete for a driveway?",
            a: "Yes, asphalt is generally less expensive upfront than concrete, though it requires more frequent maintenance like sealcoating.",
        },
        {
            q: "How long does a new asphalt driveway last?",
            a: "With proper maintenance, a new asphalt driveway typically lasts 20 to 30 years.",
        },
        {
            q: "Can I pave asphalt over an existing driveway?",
            a: "Yes, this is called an overlay or resurfacing. It is often cheaper than a full replacement but requires the existing base to be in good structural condition.",
        },
    ];

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://othercalculators.com/" },
            { "@type": "ListItem", position: 2, name: "Asphalt Calculators", item: "https://othercalculators.com/calculators/asphalt" },
            { "@type": "ListItem", position: 3, name: "Asphalt Driveway Cost Calculator", item: url },
        ],
    };

    const softwareAppLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Asphalt Driveway Cost Calculator",
        applicationCategory: "CalculatorApplication",
        operatingSystem: "All",
        url,
        description: "Calculate the total cost of paving an asphalt driveway based on dimensions and square foot rates.",
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
                        <li aria-current="page" className="text-slate-900/85">Asphalt Driveway Cost Calculator</li>
                    </ol>
                </nav>

                {/* Hero */}
                <header className="mt-5 text-center">
                    <h1 className="text-[34px] font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[40px]">
                        Asphalt Driveway Cost Calculator
                    </h1>
                    <p className="mx-auto mt-3 max-w-[780px] text-[16px] leading-7 text-slate-900/70">
                        Quickly estimate the cost of your new asphalt driveway. Enter your dimensions and local square foot rates to plan your budget accurately.
                    </p>
                </header>

                {/* Calculator */}
                <div className="mt-8">
                    <AsphaltDrivewayCostCalculator />
                </div>

                {/* Content */}
                <article className="mt-12 space-y-8 pb-12">
                    {/* How it works */}
                    <section aria-labelledby="how-it-works-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="how-it-works-title" className="text-[22px] font-semibold text-slate-900 mb-4">How to Estimate Driveway Costs</h2>
                        <p className="text-[15px] leading-7 text-slate-600 mb-4">
                            Most contractors provide quotes based on the total area of the driveway. The standard formula used in our calculator is:
                        </p>
                        <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 mb-4 text-center">
                            <code className="text-lg font-semibold text-indigo-700">Total Cost = (Length × Width) × Cost per Sq Ft</code>
                        </div>
                        <p className="text-[15px] leading-7 text-slate-600">
                            While $7 to $15 per square foot is the national average for full installation, some projects might be higher if they require significant excavation or sub-base reinforcement.
                        </p>
                    </section>

                    {/* Example */}
                    <section aria-labelledby="example-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="example-title" className="text-[22px] font-semibold text-slate-900 mb-4">Example Calculation</h2>
                        <div className="rounded-xl bg-green-50/50 border border-green-100 p-5">
                            <ul className="list-disc pl-5 space-y-2 text-[15px] text-slate-700">
                                <li><strong>Driveway Size:</strong> 600 sq ft (50' × 12')</li>
                                <li><strong>Average Rate:</strong> $10.00 / sq ft</li>
                                <li><strong>Total Calculation:</strong> 600 × $10.00</li>
                                <li><strong>Estimated Total:</strong> <strong className="text-slate-900">$6,000.00</strong></li>
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
                    <RelatedTools category={category} currentPath="/calculators/asphalt/asphalt-driveway-cost-calculator" />
                </article>
            </div>
        </main>
    );
}
