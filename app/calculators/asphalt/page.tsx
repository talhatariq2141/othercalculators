import type { Metadata } from "next";
import { CalculatorGrid } from "@/components/CalculatorGrid";

export const metadata: Metadata = {
    title: "Asphalt Calculators | Professional Paving Estimation Tools",
    description: "Access our full suite of professional asphalt calculators. Estimate tonnage, volume, area, weight, and project costs with industry-standard accuracy.",
    alternates: { canonical: "/calculators/asphalt" },
    openGraph: {
        title: "Asphalt Calculators | Professional Paving Estimation Tools",
        description: "Comprehensive suite of asphalt calculators for tonnage, volume, cost, and more. Designed for paving contractors and homeowners.",
        url: "https://othercalculators.com/calculators/asphalt",
        type: "website"
    },
};

const asphaltCalculators = [
    {
        title: "Asphalt Tonnage Calculator",
        description: "Estimate how many tons of asphalt you need for any project.",
        href: "/calculators/asphalt/asphalt-tonnage-calculator",
        category: "Asphalt",
    },
    {
        title: "Asphalt Volume Calculator",
        description: "Calculate asphalt volume in cubic yards, feet, or meters.",
        href: "/calculators/asphalt/asphalt-volume-calculator",
        category: "Asphalt",
    },
    {
        title: "Asphalt Weight Calculator",
        description: "Convert asphalt volume to tons using standard density.",
        href: "/calculators/asphalt/asphalt-weight-calculator",
        category: "Asphalt",
    },
    {
        title: "Asphalt Square Footage Calculator",
        description: "Calculate total project area. Sum multiple rectangular sections.",
        href: "/calculators/asphalt/asphalt-square-footage-calculator",
        category: "Asphalt",
    },
    {
        title: "Asphalt Area Calculator",
        description: "Calculate the total area of your paving project.",
        href: "/calculators/asphalt/asphalt-area-calculator",
        category: "Asphalt",
    },
    {
        title: "Asphalt Thickness Calculator",
        description: "Convert asphalt thickness from inches to feet and meters.",
        href: "/calculators/asphalt/asphalt-thickness-calculator",
        category: "Asphalt",
    },
    {
        title: "Asphalt Density Calculator",
        description: "Convert asphalt density between lb/ft³ and kg/m³.",
        href: "/calculators/asphalt/asphalt-density-calculator",
        category: "Asphalt",
    },
    {
        title: "Asphalt Driveway Cost Calculator",
        description: "Estimate costs for a new asphalt driveway.",
        href: "/calculators/asphalt/asphalt-driveway-cost-calculator",
        category: "Asphalt",
    },
    {
        title: "Asphalt Paving Cost Calculator",
        description: "Calculate costs for commercial paving projects.",
        href: "/calculators/asphalt/asphalt-paving-cost-calculator",
        category: "Asphalt",
    },
    {
        title: "Asphalt Repair Cost Calculator",
        description: "Estimate budget for asphalt patching and repairs.",
        href: "/calculators/asphalt/asphalt-repair-cost-calculator",
        category: "Asphalt",
    },
    {
        title: "Asphalt Resurfacing Cost Calculator",
        description: "Calculate the cost of resurfacing your asphalt.",
        href: "/calculators/asphalt/asphalt-resurfacing-cost-calculator",
        category: "Asphalt",
    },
    {
        title: "Asphalt Overlay Cost Calculator",
        description: "Estimate the cost of a fresh asphalt overlay.",
        href: "/calculators/asphalt/asphalt-overlay-cost-calculator",
        category: "Asphalt",
    },
    {
        title: "Asphalt Milling Cost Calculator",
        description: "Calculate asphalt milling and removal costs.",
        href: "/calculators/asphalt/asphalt-milling-cost-calculator",
        category: "Asphalt",
    },
    {
        title: "Asphalt Per Ton Cost Calculator",
        description: "Calculate material costs based on tonnage.",
        href: "/calculators/asphalt/asphalt-per-ton-calculator",
        category: "Asphalt",
    },
    {
        title: "Asphalt Driveway Calculator",
        description: "Estimate asphalt for residential driveway projects.",
        href: "/calculators/asphalt/asphalt-driveway-calculator",
        category: "Asphalt",
    },
    {
        title: "Asphalt Parking Lot Calculator",
        description: "Tonnage estimator for commercial parking lots.",
        href: "/calculators/asphalt/asphalt-parking-lot-calculator",
        category: "Asphalt",
    },
    {
        title: "Asphalt Road Calculator",
        description: "Calculate asphalt needs for roads and lanes.",
        href: "/calculators/asphalt/asphalt-road-calculator",
        category: "Asphalt",
    },
    {
        title: "Asphalt Patch Calculator",
        description: "Estimate material for pothole and patch repairs.",
        href: "/calculators/asphalt/asphalt-patch-calculator",
        category: "Asphalt",
    },
    {
        title: "Asphalt Resurfacing Calculator",
        description: "Calculate tonnage for overlays and resurfacing.",
        href: "/calculators/asphalt/asphalt-resurfacing-calculator",
        category: "Asphalt",
    },
    {
        title: "Asphalt Paving Calculator",
        description: "General weight and tonnage estimator for paving.",
        href: "/calculators/asphalt/asphalt-paving-calculator",
        category: "Asphalt",
    },
    {
        title: "Asphalt Tons to Cubic Yards",
        description: "Convert asphalt weight to volumetric yards.",
        href: "/calculators/asphalt/asphalt-tons-to-cubic-yards-calculator",
        category: "Asphalt",
    },
    {
        title: "Asphalt Cubic Yards to Tons",
        description: "Convert asphalt volume to commercial tons.",
        href: "/calculators/asphalt/asphalt-cubic-yards-to-tons-calculator",
        category: "Asphalt",
    },
    {
        title: "Asphalt Tons to Square Feet",
        description: "Calculate surface coverage from tonnage.",
        href: "/calculators/asphalt/asphalt-tons-to-square-feet-calculator",
        category: "Asphalt",
    },
    {
        title: "Asphalt Square Feet to Tons",
        description: "Convert paved area to required tonnage.",
        href: "/calculators/asphalt/asphalt-square-feet-to-tons-calculator",
        category: "Asphalt",
    },
    {
        title: "Asphalt Pounds to Tons",
        description: "Convert pounds to decimal short tons.",
        href: "/calculators/asphalt/asphalt-pounds-to-tons-calculator",
        category: "Asphalt",
    },
];

const faqs = [
    {
        q: "How much does asphalt cost?",
        a: "Asphalt material costs vary widely based on mix, quantity, and local conditions, but in 2025 typical material prices range from about $40 to $80 per ton or $0.75 to $2.00 per square foot installed for hot-mix asphalt in the United States. Total installed costs also depend on labor, site prep, and thickness. :contentReference[oaicite:0]{index=0}"
    },
    {
        q: "How much does asphalt cost per ton?",
        a: "Asphalt costs per ton depend on the mix type and location; standard hot-mix asphalt typically ranges from around $70 to $200 per ton nationally, with hot mix often $100–$150/ton and specialty blends higher. :contentReference[oaicite:1]{index=1}"
    },
    {
        q: "Is asphalt cheaper than concrete?",
        a: "Yes, asphalt generally has a lower upfront cost than concrete, with average asphalt paving costing about $3 to $7 per square foot compared to $4 to $10 per square foot for concrete, though long-term maintenance and lifespan should also be considered. :contentReference[oaicite:2]{index=2}"
    },
    {
        q: "How long does asphalt last?",
        a: "The lifespan of asphalt varies by use and maintenance: residential driveways often last about 12–20 years, commercial lots around 10–15 years, and roadways 15–25 years, with proper installation and upkeep extending these ranges. :contentReference[oaicite:3]{index=3}"
    },
    {
        q: "What affects asphalt paving cost?",
        a: "Asphalt paving cost is influenced by project size, material type, labor rates, site preparation, soil conditions, transportation distance, weather conditions, and required thickness or grading work. :contentReference[oaicite:4]{index=4}"
    },
    {
        q: "How many tons of asphalt do I need?",
        a: "Asphalt tonnage needed is calculated from area and thickness; for example, one ton of asphalt covers about 40–80 sq ft depending on compacted thickness (e.g., ~80 sq ft at 3\" thick), so required tons = (area × thickness factor) ÷ coverage. :contentReference[oaicite:5]{index=5}"
    },
    {
        q: "How thick should asphalt be?",
        a: "Asphalt thickness depends on use: residential driveways often use at least 3–4 inches, while parking lots and roads may need 4–6 inches or more to withstand heavier loads. :contentReference[oaicite:6]{index=6}"
    },
    {
        q: "How much area does a ton of asphalt cover?",
        a: "One ton of asphalt typically covers about 40–80 square feet, depending on the compacted thickness; at 3 inches thick it covers around 80 sq ft, and at 4 inches around 40 sq ft. :contentReference[oaicite:7]{index=7}"
    },
    {
        q: "How many cubic yards are in a ton of asphalt?",
        a: "One ton of asphalt equates to approximately 0.5 cubic yards since a cubic yard of hot mix asphalt weighs about two tons, though this can vary slightly by mix and compaction. :contentReference[oaicite:8]{index=8}"
    },
    {
        q: "How much asphalt is needed for a driveway?",
        a: "Asphalt needed for a driveway is based on its area and thickness; for example, a 1,000 sq ft driveway at 4\" thickness typically requires around 16–18 tons of asphalt, equating to roughly 12.3 cubic yards of material. :contentReference[oaicite:9]{index=9}"
    },
    {
        q: "How thick should an asphalt driveway be?",
        a: "A typical residential asphalt driveway is at least 3 inches thick, but many contractors recommend 4 inches or more for heavier vehicles or climates with freeze/thaw cycles for added strength and longevity. :contentReference[oaicite:10]{index=10}"
    },
    {
        q: "How long before you can drive on new asphalt?",
        a: "New asphalt typically cools and hardens enough for vehicle traffic within about 24 to 48 hours after installation, though full cure and maximum strength continue to develop over weeks. :contentReference[oaicite:11]{index=11}"
    },
    {
        q: "How much asphalt is needed for a parking lot?",
        a: "Asphalt required for a parking lot depends on size and thickness; commercial lots often use 4–6 inches thickness, and you can estimate required tons by multiplying area by thickness coverage rates then dividing by coverage per ton. :contentReference[oaicite:12]{index=12}"
    },
    {
        q: "How long does commercial asphalt last?",
        a: "Commercial asphalt surfaces, like parking lots, generally last around 10–15 years with typical use and regular maintenance, though heavy traffic and climate conditions can shorten or extend this range. :contentReference[oaicite:13]{index=13}"
    },
    {
        q: "How often should parking lots be resurfaced?",
        a: "Parking lots should be resurfaced every 10–15 years or as needed based on wear, cracking, and traffic loads; regular maintenance like sealcoating every few years can delay major resurfacing. :contentReference[oaicite:14]{index=14}"
    },
    {
        q: "What is asphalt density?",
        a: "Standard asphalt (hot mix) density used in calculations is about 145 pounds per cubic foot, though actual densities vary by mix design and compaction; this figure helps convert volume to tons for material estimates. :contentReference[oaicite:15]{index=15}"
    },
    {
        q: "How much does asphalt weigh?",
        a: "Asphalt weight depends on its volume and density; using a standard density of about 145 lbs per cubic foot, one cubic yard of asphalt typically weighs roughly 4,000 pounds, or about 2 tons. :contentReference[oaicite:16]{index=16}"
    }
];


function jsonLd() {
    const breadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://othercalculators.com/" },
            { "@type": "ListItem", position: 2, name: "Asphalt Calculators", item: "https://othercalculators.com/calculators/asphalt" }
        ]
    };

    const collectionPage = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Asphalt Calculators Suite",
        "description": "A comprehensive collection of asphalt paving estimation tools including tonnage, cost, and area calculators.",
        "url": "https://othercalculators.com/calculators/asphalt",
        "mainEntity": {
            "@type": "ItemList",
            "numberOfItems": asphaltCalculators.length,
            "itemListElement": asphaltCalculators.map((calc, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "url": `https://othercalculators.com${calc.href}`,
                "name": calc.title
            }))
        }
    };

    const faqPage = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return {
        __html: JSON.stringify([breadcrumb, collectionPage, faqPage])
    };
}

export default function Page() {
    return (
        <main className="mt-2 min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd()} />

            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                {/* Breadcrumbs */}
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center space-x-2 text-sm text-slate-500">
                        <li><a className="hover:text-indigo-600 transition" href="/">Home</a></li>
                        <li aria-hidden="true" className="text-slate-400">›</li>
                        <li aria-current="page" className="font-medium text-slate-900">Asphalt Calculators</li>
                    </ol>
                </nav>

                {/* Header Section */}
                <header className="mb-12">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-6">
                        Professional <span className="text-indigo-600">Asphalt Calculators</span>
                    </h1>
                    <p className="max-w-3xl text-lg text-slate-600 leading-relaxed mb-6">
                        Optimize your paving projects with our precision estimation suite. From fundamental volume and tonnage calculations
                        to detailed cost analysis for driveways, repairs, and commercial overlays—we provide the data you need to plan with confidence.
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm font-medium text-indigo-700 bg-white/50 border border-indigo-100 rounded-2xl p-4 inline-block">
                        <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span> Industry Standard Formulas</span>
                        <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span> 100% Free to Use</span>
                        <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span> Mobile Friendly</span>
                    </div>
                </header>

                {/* Calculator Grid */}
                <section className="mb-20">
                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-slate-900">Available Tools</h2>
                        <span className="text-sm font-medium text-slate-500">{asphaltCalculators.length} Calculators Available</span>
                    </div>
                    <CalculatorGrid calculators={asphaltCalculators} />
                </section>

                {/* Value-Add Sections */}
                <div className="grid gap-12 lg:grid-cols-2">
                    {/* Section 1: When to Use */}
                    <section className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                            Strategy for Paving Success
                        </h2>
                        <div className="space-y-6 text-slate-600 leading-7">
                            <p>
                                Successful paving starts with accurate measurements. Whether you're a contractor bidding for a municipal
                                road project or a homeowner planning a new driveway, using specialized tools ensures you avoid costly mistakes.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-xs">1</span>
                                    <span><strong>Measure Twice:</strong> Break complex shapes into simple rectangles using our area tools.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-xs">2</span>
                                    <span><strong>Standardize Density:</strong> Most paving asphalt enters at 145-150 lb/ft³. Adjust as needed in our density tools.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="flex-shrink-0 w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-xs">3</span>
                                    <span><strong>Cost Estimation:</strong> Use current hot-mix asphalt plant pricing to get precise budget forecasts.</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 2: Industry Standards */}
                    <section className="bg-indigo-600 rounded-3xl p-8 text-white shadow-lg shadow-indigo-200">
                        <h2 className="text-2xl font-bold mb-6">Industry Standards & Tips</h2>
                        <div className="space-y-6 opacity-90 leading-7">
                            <div className="p-4 bg-white/10 rounded-2xl border border-white/20">
                                <h3 className="font-bold mb-2">The Golden Rule: Waste Factor</h3>
                                <p className="text-sm">Never order exactly what the math says. Site irregularities and varying depths mean you should always add 5-10% to your tonnage order.</p>
                            </div>
                            <div className="p-4 bg-white/10 rounded-2xl border border-white/20">
                                <h3 className="font-bold mb-2">Compaction Factor</h3>
                                <p className="text-sm">Loose asphalt settles when rolled. Our tonnage calculator accounts for standard 25% compaction to ensure your finished surface height is correct.</p>
                            </div>
                            <div className="p-4 bg-white/10 rounded-2xl border border-white/20">
                                <h3 className="font-bold mb-2">Layer Thickness</h3>
                                <p className="text-sm">Standard residential driveways are usually 2-3 inches thick, while commercial surfaces may require 4-6 inches or more.</p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* FAQ Section */}
                <section className="mt-20">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center text-slate-900">Asphalt Project Planning FAQs</h2>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((f, i) => (
                            <details key={i} className="group rounded-2xl border border-slate-200 bg-white px-6 py-5 hover:border-indigo-200 transition-colors cursor-pointer open:ring-2 open:ring-indigo-100">
                                <summary className="flex items-center justify-between font-bold text-slate-900 leading-relaxed list-none">
                                    {f.q}
                                    <span className="text-indigo-400 group-open:rotate-45 transition-transform">+</span>
                                </summary>
                                <p className="mt-4 text-slate-600 leading-relaxed">
                                    {f.a}
                                </p>
                            </details>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
