import Link from "next/link";
import { Metadata } from "next";
import { Calculator } from "@/types/calculator";
import { CalculatorGrid } from "@/components/CalculatorGrid";
import { FilteredCalculatorSection } from "@/components/FilteredCalculatorSection";
import ScientificCalculator from "@/components/calculators/general/ScientificCalculator";


// Metadata for SEO
export const metadata: Metadata = {
  title: "OtherCalculators - Free Online Calculators for Everything",
  description: "A comprehensive collection of free online calculators for finance, health, math, construction, and lifestyle. Simple, accurate, and easy to use.",
  keywords: "calculator, free calculator, finance calculator, health calculator, math calculator, unit converter",
  openGraph: {
    title: "OtherCalculators - Free Online Calculators",
    description: "Every tool you need to calculate anything in one place.",
    type: "website",
    url: "https://othercalculators.com",
    siteName: "OtherCalculators",
  },
};

import { calculators, categories } from "@/data/calculators";

export default function Home() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "OtherCalculators",
    "url": "https://othercalculators.com",
    "description": "Every tool you need to calculate anything in one place.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://othercalculators.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50">
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-1 bg-[#f4f5f7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-15">

          {/* Header */}
          <div className="mx-auto max-w-7xl text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-[#33333b] sm:text-4xl mb-4 leading-tight">
              Free Online Calculators for <br className="hidden sm:block" />
              <span className="text-indigo-600">Finance, Health & Construction</span>
            </h1>
            <p className="text-lg text-[#707078] max-w-6xl mx-auto mb-8 leading-relaxed">
              Simplify your daily calculations with our comprehensive collection of accurate and easy-to-use tools.
              Whether you need to estimate asphalt tonnage, calculate mortgage payments, or track health metrics,
              we have the right calculator for you—100% free and instant.
            </p>
          </div>

          {/* Calculator Section */}
          <FilteredCalculatorSection
            calculators={calculators}
            categories={categories}
          />
          {/* Scientific Calculator Section */}
          <section className="mt-30 mb-8">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Quick <span className="text-indigo-600">Scientific Calculator</span>
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Trigonometry, logarithms, powers & more — right here.
              </p>
            </div>
            <div className="mt-8 flex justify-center">
              <ScientificCalculator />
            </div>
          </section>

        </div>
      </main>


    </div>
  );
}
