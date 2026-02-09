import type { Metadata } from "next";
import AsphaltAreaCalculator from "@/components/calculators/asphalt/AsphaltAreaCalculator";

export const metadata: Metadata = {
    title: "Asphalt Area Calculator | OtherCalculators",
    description: "Calculate the total area of your asphalt paving project. Sum multiple rectangular sections for complex shapes.",
    alternates: { canonical: "/calculators/asphalt/asphalt-area-calculator" },
    openGraph: { title: "Asphalt Area Calculator", description: "Quickly estimate total area for asphalt projects.", url: "/calculators/asphalt/asphalt-area-calculator", type: "website" },
};

function jsonLd(data: unknown) { return { __html: JSON.stringify(data) }; }

import RelatedTools from "@/components/RelatedTools";

export default function Page() {
    const url = "https://othercalculators.com/calculators/asphalt/asphalt-area-calculator";
    const category = "Asphalt";
    const faqs = [
        { q: "How do I calculate area for asphalt?", a: "Multiply Length × Width for each rectangular section. Sum them up for complex shapes." },
        { q: "What's the difference between area and square footage?", a: "They are the same. Area measured in feet is called square footage." },
        { q: "How many square feet in a square yard?", a: "There are 9 square feet in 1 square yard." },
    ];

    const breadcrumbLd = {
        "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://othercalculators.com/" },
            { "@type": "ListItem", position: 2, name: "Asphalt Calculators", item: "https://othercalculators.com/calculators/asphalt" },
            { "@type": "ListItem", position: 3, name: "Asphalt Area Calculator", item: url },
        ]
    };
    const softwareAppLd = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Asphalt Area Calculator", applicationCategory: "CalculatorApplication", operatingSystem: "All", url, description: "Calculate total area for asphalt projects.", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } };
    const faqPageLd = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

    return (
        <main>
            <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbLd)} />
            <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(softwareAppLd)} />
            <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqPageLd)} />
            <div className="mx-auto max-w-[1050px] px-4 pt-5">
                <nav aria-label="Breadcrumb" className="text-center">
                    <ol className="inline-flex flex-wrap items-center justify-center gap-2 text-[13px] text-slate-900/65">
                        <li><a className="hover:text-slate-900" href="/">Home</a></li><li aria-hidden="true">›</li>
                        <li><a className="hover:text-slate-900" href="/calculators/asphalt">Asphalt Calculators</a></li><li aria-hidden="true">›</li>
                        <li aria-current="page" className="text-slate-900/85">Asphalt Area Calculator</li>
                    </ol>
                </nav>
                <header className="mt-5 text-center">
                    <h1 className="text-[34px] font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[40px]">Asphalt Area Calculator</h1>
                    <p className="mx-auto mt-3 max-w-[780px] text-[16px] leading-7 text-slate-900/70">Calculate the total area of your driveway, parking lot, or paving project. Add multiple sections for complex shapes.</p>
                </header>
                <div className="mt-8"><AsphaltAreaCalculator /></div>
                <article className="mt-12 space-y-8 pb-12">
                    <section className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 className="text-[22px] font-semibold text-slate-900 mb-4">Formula</h2>
                        <div className="rounded-xl bg-slate-50 p-4 border border-slate-200"><p className="font-mono text-[14px] text-slate-800">Area (sq ft) = Length (ft) × Width (ft)</p></div>
                        <p className="mt-4 text-[15px] leading-7 text-slate-600">For irregular shapes, break the project into rectangles, calculate each area, and sum them.</p>
                    </section>
                    <section className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 className="text-[22px] font-semibold text-slate-900 mb-6">FAQs</h2>
                        <div className="grid gap-4">
                            {faqs.map((f, i) => (<details key={i} className="group rounded-2xl border border-slate-900/10 bg-slate-50/50 px-5 py-4 open:bg-white open:shadow-sm transition-all"><summary className="flex cursor-pointer items-center justify-between font-semibold text-slate-900 marker:content-none">{f.q}<span className="text-slate-400 text-xl group-open:rotate-45 transition-transform">+</span></summary><p className="mt-3 text-[15px] leading-7 text-slate-600">{f.a}</p></details>))}
                        </div>
                    </section>
                    <RelatedTools category={category} currentPath="/calculators/asphalt/asphalt-area-calculator" />
                </article>
            </div>
        </main>
    );
}
