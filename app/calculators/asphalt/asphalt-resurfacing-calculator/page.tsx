import type { Metadata } from "next";
import AsphaltResurfacingCalculator from "@/components/calculators/asphalt/AsphaltResurfacingCalculator";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
    title: "Asphalt Resurfacing Calculator | Overlay Quantity Estimator",
    description: "Determine how much asphalt is needed to resurface an existing driveway or parking lot. Estimate overlay tonnage based on area and thickness.",
    alternates: {
        canonical: "/calculators/asphalt/asphalt-resurfacing-calculator",
    },
    openGraph: {
        title: "Asphalt Resurfacing Calculator",
        description: "Official asphalt overlay estimator. Calculate material needs for repaving projects.",
        url: "/calculators/asphalt/asphalt-resurfacing-calculator",
        type: "website",
    },
};

function jsonLd(data: unknown) {
    return { __html: JSON.stringify(data) };
}

export default function Page() {
    const url = "https://othercalculators.com/calculators/asphalt/asphalt-resurfacing-calculator";

    const faqs = [
        {
            q: "What is asphalt resurfacing?",
            a: "Resurfacing (or overlaying) involves applying a new layer of hot-mix asphalt over an existing, structurally sound asphalt surface.",
        },
        {
            q: "How thick should an asphalt overlay be?",
            a: "A typical residential or commercial resurfacing layer is 1.5 to 2 inches thick once compacted.",
        },
        {
            q: "Does resurfacing require a tack coat?",
            a: "Yes. A tack coat (liquid asphalt) is essential to provide a bond between the old surface and the new overlay.",
        },
        {
            q: "Can I resurface an asphalt driveway with cracks?",
            a: "Small cracks can be resurfaced, but large structural cracks or potholes must be repaired and filled before the overlay is applied to prevent 'reflective' cracking.",
        },
    ];

    const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://othercalculators.com/" },
            { "@type": "ListItem", position: 2, name: "Asphalt Calculators", item: "https://othercalculators.com/calculators/asphalt" },
            { "@type": "ListItem", position: 3, name: "Asphalt Resurfacing Calculator", item: url },
        ],
    };

    const softwareAppLd = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Asphalt Resurfacing Calculator",
        applicationCategory: "CalculatorApplication",
        operatingSystem: "All",
        url,
        description: "Estimate material quantity for asphalt overlay and repaving projects.",
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
                        <li aria-current="page" className="text-slate-900/85">Asphalt Resurfacing Calculator</li>
                    </ol>
                </nav>

                {/* Hero */}
                <header className="mt-5 text-center">
                    <h1 className="text-[34px] font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[40px]">
                        Asphalt Resurfacing Calculator
                    </h1>
                    <p className="mx-auto mt-3 max-w-[780px] text-[16px] leading-7 text-slate-900/70">
                        Calculate the tonnage required for asphalt overlays and surface renewals. Ideal for driveways, parking lots, and walkways looking for a fresh, new look without full replacement.
                    </p>
                </header>

                {/* Calculator */}
                <div className="mt-8">
                    <AsphaltResurfacingCalculator />
                </div>

                {/* Content Sections */}
                <article className="mt-12 space-y-8 pb-12">
                    {/* Why Resurface */}
                    <section aria-labelledby="why-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="why-title" className="text-[22px] font-semibold text-slate-900 mb-4">Why Resurface?</h2>
                        <p className="text-[15px] leading-7 text-slate-700">
                            Asphalt resurfacing is a cost-effective way to extend the life of your pavement. Instead of an expensive "dig-out" and replacement, a thin layer (overlay) is applied to the top. This calculator uses standard industry formulas to ensure you order exactly what you need for a 1.5" or 2" cap.
                        </p>
                    </section>

                    {/* Formula */}
                    <section aria-labelledby="formula-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="formula-title" className="text-[22px] font-semibold text-slate-900 mb-4">The Overlay Formula</h2>
                        <div className="space-y-4 text-[15px] leading-7 text-slate-700">
                            <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 text-center">
                                <code className="text-lg font-semibold text-slate-800">Overlay Tons = (Area × Thickness/12 × 145) ÷ 2000</code>
                            </div>
                            <p className="text-sm text-slate-500">
                                Contractors typically assume a coverage rate of approximately <strong>110 lbs per square yard per inch of thickness</strong>.
                            </p>
                        </div>
                    </section>

                    {/* Requirements */}
                    <section aria-labelledby="req-title" className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 id="req-title" className="text-[22px] font-semibold text-slate-900 mb-4">Resurfacing Requirements</h2>
                        <ul className="grid gap-4 sm:grid-cols-2 list-none p-0 text-[15px] leading-7">
                            <li className="p-4 bg-slate-50/50 rounded-xl border border-slate-100">
                                <h3 className="font-semibold text-slate-900 mb-1">Milling</h3>
                                <p className="text-slate-600">In areas where the new layer must meet an existing concrete edge or garage floor, "milling" or grinding down the old asphalt is required.</p>
                            </li>
                            <li className="p-4 bg-slate-50/50 rounded-xl border border-slate-100">
                                <h3 className="font-semibold text-slate-900 mb-1">Structural Integrity</h3>
                                <p className="text-slate-600">An overlay cannot fix a failed base. If the existing asphalt is severely "alligatored" (cracked like a turtle shell), resurfacing may not be recommended.</p>
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

                    <RelatedTools category="Asphalt" currentPath="/calculators/asphalt/asphalt-resurfacing-calculator" />
                </article>
            </div>
        </main>
    );
}
