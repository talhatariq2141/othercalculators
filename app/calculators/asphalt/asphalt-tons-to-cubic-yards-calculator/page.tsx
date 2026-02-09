import type { Metadata } from "next";
import AsphaltTonsToCubicYardsCalculator from "@/components/calculators/asphalt/AsphaltTonsToCubicYardsCalculator";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
    title: "Asphalt Tons to Cubic Yards Calculator | Weight to Volume",
    description: "Convert asphalt weight in tons to volume in cubic yards. Use this tool to coordinate trucking and logistics for your paving project.",
    alternates: {
        canonical: "/calculators/asphalt/asphalt-tons-to-cubic-yards-calculator",
    },
    openGraph: {
        title: "Asphalt Tons to Cubic Yards Calculator",
        description: "Calculate how many cubic yards of asphalt are in a specific tonnage. Professional-grade logistics tool.",
        url: "/calculators/asphalt/asphalt-tons-to-cubic-yards-calculator",
        type: "website",
    },
};

function jsonLd(data: unknown) {
    return { __html: JSON.stringify(data) };
}

export default function Page() {
    const url = "https://othercalculators.com/calculators/asphalt/asphalt-tons-to-cubic-yards-calculator";

    const faqs = [
        {
            q: "What is the formula for converting tons to cubic yards?",
            a: "First convert tons to pounds (Tons × 2000). Divide by density in lb/ft³ to get cubic feet. Finally, divide by 27 to get cubic yards.",
        },
        {
            q: "How many cubic yards are in 1 ton of asphalt?",
            a: "At a standard density of 145 lb/ft³, 1 ton of asphalt equals approximately 0.51 cubic yards.",
        },
        {
            q: "Why do I need to convert tons to yards?",
            a: "Suppliers sell asphalt by the ton, but trucking capacities and excavation volumes are often measured in cubic yards.",
        },
        {
            q: "Does density change for cold mix?",
            a: "Yes. Cold mix is often slightly less dense (~137 lb/ft³) than hot mix (~145 lb/ft³), which slightly increases the volume per ton.",
        },
    ];

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", "item": "https://othercalculators.com/" },
            { "@type": "ListItem", position: 2, name: "Asphalt Calculators", "item": "https://othercalculators.com/calculators/asphalt" },
            { "@type": "ListItem", position: 3, name: "Asphalt Tons to Cubic Yards Calculator", "item": url },
        ],
    };

    const softwareAppLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Asphalt Tons to Cubic Yards Calculator",
        applicationCategory: "CalculatorApplication",
        operatingSystem: "All",
        url,
        description: "Logistics tool to convert asphalt tonnage into volumetric cubic yards.",
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
                        <li aria-current="page" className="text-slate-900/85">Asphalt Tons to Cubic Yards Calculator</li>
                    </ol>
                </nav>

                {/* Hero */}
                <header className="mt-5 text-center">
                    <h1 className="text-[34px] font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[40px]">
                        Asphalt Tons to Cubic Yards Calculator
                    </h1>
                    <p className="mx-auto mt-3 max-w-[780px] text-[16px] leading-7 text-slate-900/70">
                        Quickly convert asphalt tonnage into volumetric cubic yards. Essential for coordinating logistics, trucking, and site capacity for paving projects.
                    </p>
                </header>

                {/* Calculator */}
                <div className="mt-8">
                    <AsphaltTonsToCubicYardsCalculator />
                </div>

                {/* Content Sections */}
                <article className="mt-12 space-y-8 pb-12">
                    {/* Why Convert */}
                    <section aria-labelledby="why-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="why-title" className="text-[22px] font-semibold text-slate-900 mb-4">Why Convert Weight to Volume?</h2>
                        <p className="text-[15px] leading-7 text-slate-700">
                            Asphalt plants sell their product by the <strong>short ton</strong> (2,000 lbs). However, contractors often plan their sites based on <strong>cubic yards</strong>. This conversation is vital for understanding how many truckloads you need and if your equipment can handle the physical volume of the material.
                        </p>
                    </section>

                    {/* Formula */}
                    <section aria-labelledby="formula-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="formula-title" className="text-[22px] font-semibold text-slate-900 mb-4">Conversion Logic</h2>
                        <div className="space-y-4 text-[15px] leading-7 text-slate-700">
                            <p>The math follows standard US engineering metrics:</p>
                            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 text-center">
                                <code className="text-lg font-semibold text-slate-800">Cubic Yards = ((Tons × 2000) / Density) / 27</code>
                            </div>
                            <p className="text-sm text-slate-500">
                                *Standard hot-mix density is 145 lb per cubic foot.
                            </p>
                        </div>
                    </section>

                    {/* Logistics */}
                    <section aria-labelledby="logistics-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="logistics-title" className="text-[22px] font-semibold text-slate-900 mb-4">Logistics Checklist</h2>
                        <ul className="grid gap-4 sm:grid-cols-2 list-none p-0 text-[15px] leading-7">
                            <li className="p-4 bg-slate-50/50 rounded-xl border border-slate-100">
                                <h3 className="font-semibold text-slate-900 mb-1">Truck Capacity</h3>
                                <p className="text-slate-600">A typical tri-axle dump truck can carry 15-20 tons, which is roughly 7-10 cubic yards of asphalt.</p>
                            </li>
                            <li className="p-4 bg-slate-50/50 rounded-xl border border-slate-100">
                                <h3 className="font-semibold text-slate-900 mb-1">Thermal Mass</h3>
                                <p className="text-slate-600">Larger volumes (cubic yards) hold heat better than thin layers, making the asphalt easier to work with for longer periods.</p>
                            </li>
                        </ul>
                    </section>

                    {/* FAQs */}
                    <section aria-labelledby="faq-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="faq-title" className="text-[22px] font-semibold text-slate-900 mb-6">Logistic FAQs</h2>
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

                    <RelatedTools category="Asphalt" currentPath="/calculators/asphalt/asphalt-tons-to-cubic-yards-calculator" />
                </article>
            </div>
        </main>
    );
}
