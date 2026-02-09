import type { Metadata } from "next";
import AsphaltDensityCalculator from "@/components/calculators/asphalt/AsphaltDensityCalculator";

export const metadata: Metadata = {
    title: "Asphalt Density Calculator | OtherCalculators",
    description: "Convert asphalt density between lb/ft³ and kg/m³. Understand industry standard values for hot mix asphalt.",
    alternates: { canonical: "/calculators/asphalt/asphalt-density-calculator" },
    openGraph: { title: "Asphalt Density Calculator", description: "Convert asphalt density units.", url: "/calculators/asphalt/asphalt-density-calculator", type: "website" },
};

function jsonLd(data: unknown) { return { __html: JSON.stringify(data) }; }

import RelatedTools from "@/components/RelatedTools";

export default function Page() {
    const url = "https://othercalculators.com/calculators/asphalt/asphalt-density-calculator";
    const category = "Asphalt";
    const faqs = [
        { q: "What is the standard density of asphalt?", a: "Standard hot mix asphalt (HMA) has a density of approximately 145 lb/ft³, or 2,322 kg/m³. This varies based on mix design." },
        { q: "Why does density matter?", a: "Density is used to convert volume (cubic feet) to weight (tons). Weight = Volume × Density." },
        { q: "What is the density range for asphalt?", a: "Asphalt mixes typically range from 138–150 lb/ft³ (2,210–2,400 kg/m³) depending on the aggregate and binder content." },
    ];

    const breadcrumbLd = {
        "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://othercalculators.com/" },
            { "@type": "ListItem", position: 2, name: "Asphalt Calculators", item: "https://othercalculators.com/calculators/asphalt" },
            { "@type": "ListItem", position: 3, name: "Asphalt Density Calculator", item: url },
        ]
    };
    const softwareAppLd = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Asphalt Density Calculator", applicationCategory: "CalculatorApplication", operatingSystem: "All", url, description: "Convert asphalt density units.", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } };
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
                        <li aria-current="page" className="text-slate-900/85">Asphalt Density Calculator</li>
                    </ol>
                </nav>
                <header className="mt-5 text-center">
                    <h1 className="text-[34px] font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[40px]">Asphalt Density Calculator</h1>
                    <p className="mx-auto mt-3 max-w-[780px] text-[16px] leading-7 text-slate-900/70">Convert asphalt density between imperial (lb/ft³) and metric (kg/m³) units. Understand industry values for accurate tonnage estimates.</p>
                </header>
                <div className="mt-8"><AsphaltDensityCalculator /></div>
                <article className="mt-12 space-y-8 pb-12">
                    <section className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 className="text-[22px] font-semibold text-slate-900 mb-4">Industry Standards</h2>
                        <ul className="list-disc pl-5 space-y-2 text-[15px] leading-7 text-slate-700">
                            <li><strong>145 lb/ft³</strong> – Standard hot mix asphalt (HMA).</li>
                            <li><strong>138–150 lb/ft³</strong> – Range based on mix type and material grade.</li>
                            <li><strong>2,300–2,400 kg/m³</strong> – Metric equivalent.</li>
                        </ul>
                    </section>
                    <section className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 className="text-[22px] font-semibold text-slate-900 mb-6">FAQs</h2>
                        <div className="grid gap-4">{faqs.map((f, i) => (<details key={i} className="group rounded-2xl border border-slate-900/10 bg-slate-50/50 px-5 py-4 open:bg-white open:shadow-sm transition-all"><summary className="flex cursor-pointer items-center justify-between font-semibold text-slate-900 marker:content-none">{f.q}<span className="text-slate-400 text-xl group-open:rotate-45 transition-transform">+</span></summary><p className="mt-3 text-[15px] leading-7 text-slate-600">{f.a}</p></details>))}</div>
                    </section>
                    <RelatedTools category={category} currentPath="/calculators/asphalt/asphalt-density-calculator" />
                </article>
            </div>
        </main>
    );
}
