import { Calculator } from "@/types/calculator";
import { CalculatorCard } from "./CalculatorCard";

interface CalculatorGridProps {
    calculators: Calculator[];
}

export function CalculatorGrid({ calculators }: CalculatorGridProps) {
    return (
        <div className="grid gap-4 grid-cols-1 min-[500px]:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {calculators.map((calc, index) => (
                <CalculatorCard
                    key={index}
                    title={calc.title}
                    description={calc.description}
                    href={calc.href}
                    category={calc.category}
                />
            ))}
        </div>
    );
}
