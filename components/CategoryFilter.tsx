"use client";

interface CategoryFilterProps {
    categories: string[];
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}

export function CategoryFilter({
    categories,
    activeCategory,
    onCategoryChange,
}: CategoryFilterProps) {
    return (
        <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((tag) => (
                <button
                    key={tag}
                    onClick={() => onCategoryChange(tag)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${activeCategory === tag
                            ? "bg-[#E33636] text-white shadow-sm"
                            : "bg-white text-[#33333b] border border-[#d6d6df] hover:border-[#33333b] hover:bg-[#f5f5fa]"
                        }`}
                >
                    {tag}
                </button>
            ))}
        </div>
    );
}
