import type { Metadata } from "next";
import AsphaltThicknessCalculator from "@/components/calculators/asphalt/AsphaltThicknessCalculator";
import RelatedTools from "@/components/RelatedTools";

export const metadata: Metadata = {
    title: "Asphalt Thickness Calculator | OtherCalculators",
    description: "Convert asphalt layer thickness from inches to feet and meters. Use this value in volume and tonnage calculations.",
    alternates: { canonical: "/calculators/asphalt/asphalt-thickness-calculator" },
    openGraph: { title: "Asphalt Thickness Calculator", description: "Convert asphalt thickness units.", url: "/calculators/asphalt/asphalt-thickness-calculator", type: "website" },
};

function jsonLd(data: unknown) { return { __html: JSON.stringify(data) }; }

export default function Page() {
    const url = "https://othercalculators.com/calculators/asphalt/asphalt-thickness-calculator";
    const faqs = [
        { q: "Why do I need to convert thickness to feet?", a: "Volume and tonnage formulas require consistent units. Converting inches to feet (Thickness ÷ 12) allows you to multiply with area (sq ft) to get volume (cubic ft)." },
        { q: "What is the standard thickness for asphalt driveways?", a: "Residential driveways typically use 2–3 inches. Heavy-duty commercial lots may require 4–6 inches." },
        { q: "How do I convert inches to meters?", a: "Multiply inches by 0.0254. For example, 3 inches = 0.0762 meters." },
    ];

    const breadcrumbLd = {
        "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://othercalculators.com/" },
            { "@type": "ListItem", position: 2, name: "Asphalt Calculators", item: "https://othercalculators.com/calculators/asphalt" },
            { "@type": "ListItem", position: 3, name: "Asphalt Thickness Calculator", item: url },
        ]
    };
    const softwareAppLd = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Asphalt Thickness Calculator", applicationCategory: "CalculatorApplication", operatingSystem: "All", url, description: "Convert asphalt thickness units.", offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } };
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
                        <li aria-current="page" className="text-slate-900/85">Asphalt Thickness Calculator</li>
                    </ol>
                </nav>
                <header className="mt-5 text-center">
                    <h1 className="text-[34px] font-semibold leading-tight tracking-[-0.02em] text-slate-900 sm:text-[40px]">Asphalt Thickness Calculator</h1>
                    <p className="mx-auto mt-3 max-w-[780px] text-[16px] leading-7 text-slate-900/70">Convert asphalt layer thickness from inches to feet and meters. This value is essential for volume and tonnage calculations.</p>
                </header>
                <div className="mt-8"><AsphaltThicknessCalculator /></div>
                <article className="mt-12 space-y-8 pb-12">
                    <section className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 className="text-[22px] font-semibold text-slate-900 mb-4">Formula</h2>
                        <div className="rounded-xl bg-slate-50 p-4 border border-slate-200"><p className="font-mono text-[14px] text-slate-800">Feet = Inches ÷ 12</p></div>
                        <p className="mt-4 text-[15px] leading-7 text-slate-600"><strong>Example:</strong> 3 in ÷ 12 = 0.25 ft. 4 in ÷ 12 = 0.333 ft.</p>
                    </section>
                    <section className="rounded-2xl border border-slate-900/10 bg-white p-5 sm:p-8 shadow-sm">
                        <h2 className="text-[22px] font-semibold text-slate-900 mb-6">FAQs</h2>
                        <div className="grid gap-4">{faqs.map((f, i) => (<details key={i} className="group rounded-2xl border border-slate-900/10 bg-slate-50/50 px-5 py-4 open:bg-white open:shadow-sm transition-all"><summary className="flex cursor-pointer items-center justify-between font-semibold text-slate-900 marker:content-none">{f.q}<span className="text-slate-400 text-xl group-open:rotate-45 transition-transform">+</span></summary><p className="mt-3 text-[15px] leading-7 text-slate-600">{f.a}</p></details>))}</div>
                    </section>
                    <RelatedTools category="Asphalt" currentPath="/calculators/asphalt/asphalt-thickness-calculator" />
                </article>
            </div>
        </main>
    );
}
