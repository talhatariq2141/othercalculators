import type { Metadata } from "next";
import AsphaltSquareFootageCalculator from "@/components/calculators/asphalt/AsphaltSquareFootageCalculator";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
    title: "Asphalt Square Footage Calculator | OtherCalculators",
    description:
        "Calculate the total square footage of your asphalt paving project. Easily sum multiple rectangular areas for complex driveways or parking lots.",
    alternates: {
        canonical: "/calculators/asphalt/asphalt-square-footage-calculator",
    },
    openGraph: {
        title: "Asphalt Square Footage Calculator",
        description:
            "Quickly estimate the total area of your asphalt project. Supports multiple areas for accurate calculation.",
        url: "/calculators/asphalt/asphalt-square-footage-calculator",
        type: "website",
    },
};

function jsonLd(data: unknown) {
    return { __html: JSON.stringify(data) };
}

export default function Page() {
    const url = "https://othercalculators.com/calculators/asphalt/asphalt-square-footage-calculator";

    const faqs = [
        {
            q: "How do I calculate square footage for asphalt?",
            a: "For a rectangular area, simply multiply the length by the width (in feet). For irregular shapes, break the project into smaller rectangles, calculate the area of each, and sum them up.",
        },
        {
            q: "Why do I need to know the square footage?",
            a: "Square footage is the base measurement used to calculate the amount of asphalt, sealcoat, or base material needed. It's the first step in any accurate paving estimate.",
        },
        {
            q: "How many square feet are in a square yard?",
            a: "There are 9 square feet in 1 square yard.",
        },
    ];

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://othercalculators.com/" },
            { "@type": "ListItem", position: 2, name: "Asphalt Calculators", item: "https://othercalculators.com/calculators/asphalt" },
            { "@type": "ListItem", position: 3, name: "Asphalt Square Footage Calculator", item: url },
        ],
    };

    const softwareAppLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Asphalt Square Footage Calculator",
        applicationCategory: "CalculatorApplication",
        operatingSystem: "All",
        url,
        description:
            "Calculate the total square footage of your asphalt paving project. Supports multiple areas.",
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
                        <li aria-current="page" className="text-slate-900/85">Asphalt Square Footage Calculator</li>
                    </ol>
                </nav>

                {/* Hero */}
                <header className="mt-5 text-center">
                    <h1 className="text-[34px] font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[40px]">
                        Asphalt Square Footage Calculator
                    </h1>
                    <p className="mx-auto mt-3 max-w-[780px] text-[16px] leading-7 text-slate-900/70">
                        Calculate the total area of your driveway, parking lot, or paving project.
                        Add multiple sections to get an accurate total for complex shapes.
                    </p>
                </header>

                {/* Calculator */}
                <div className="mt-8">
                    <AsphaltSquareFootageCalculator />
                </div>

                {/* Content */}
                <article className="mt-12 space-y-8 pb-12">
                    {/* How to use */}
                    <section aria-labelledby="how-to-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="how-to-title" className="text-[22px] font-semibold text-slate-900 mb-4">How to Calculate Total Area</h2>
                        <div className="grid gap-6 sm:grid-cols-2">
                            <div>
                                <h3 className="font-medium text-slate-900 mb-2">Rectangular Shapes</h3>
                                <p className="text-[15px] leading-relaxed text-slate-600">
                                    For simple driveways or lots, just measure the <strong>Length</strong> and <strong>Width</strong> in feet.
                                    <br />
                                    <code className="mt-2 inline-block rounded bg-slate-100 px-2 py-1 text-sm text-slate-800">Area = Length × Width</code>
                                </p>
                            </div>
                            <div>
                                <h3 className="font-medium text-slate-900 mb-2">Complex Shapes</h3>
                                <p className="text-[15px] leading-relaxed text-slate-600">
                                    Break your project down into smaller rectangles or squares. Calculate the area for each section and then <strong>sum them up</strong>.
                                    <br />
                                    <span className="text-sm italic text-slate-500">The calculator above makes this easy by letting you add multiple areas.</span>
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Example */}
                    <section aria-labelledby="example-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="example-title" className="text-[22px] font-semibold text-slate-900 mb-4">Real World Example</h2>
                        <div className="rounded-xl bg-green-50/50 border border-green-100 p-5">
                            <p className="text-[15px] leading-7 text-slate-800">
                                <strong>Scenario:</strong> You have an L-shaped driveway.
                            </p>
                            <ul className="mt-3 list-disc pl-5 space-y-2 text-[14px] text-slate-700">
                                <li><strong>Section 1 (Main run):</strong> 50 ft long × 12 ft wide = 600 sq ft.</li>
                                <li><strong>Section 2 (Parking pad):</strong> 20 ft long × 20 ft wide = 400 sq ft.</li>
                                <li><strong>Total Project Area:</strong> 600 + 400 = <strong>1,000 sq ft</strong>.</li>
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
                    <RelatedTools category="Asphalt" currentPath="/calculators/asphalt/asphalt-square-footage-calculator" />
                </article>
            </div>
        </main>
    );
}
