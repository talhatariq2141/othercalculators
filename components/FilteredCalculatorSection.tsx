"use client";

import { useState } from "react";
import { Calculator } from "@/types/calculator";
import { CategoryFilter } from "./CategoryFilter";
import { CalculatorGrid } from "./CalculatorGrid";

interface FilteredCalculatorSectionProps {
    calculators: Calculator[];
    categories: string[];
}

export function FilteredCalculatorSection({
    calculators,
    categories,
}: FilteredCalculatorSectionProps) {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredCalculators =
        activeCategory === "All"
            ? calculators
            : calculators.filter((calc) => calc.category === activeCategory);

    return (
        <>
            <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
            />
            <CalculatorGrid calculators={filteredCalculators} />
        </>
    );
}
