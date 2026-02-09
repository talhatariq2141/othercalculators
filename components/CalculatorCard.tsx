import Link from "next/link";
import { Calculator } from "@/types/calculator";

export function CalculatorCard({
    title,
    description,
    href,
    category,
}: Calculator) {
    return (
        <Link
            href={href}
            className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-400 hover:shadow-md hover:shadow-blue-50/50"
        >
            <div>
                <div className="flex items-start justify-between">
                    <h3 className="font-bold text-slate-900 text-lg leading-6">{title}</h3>
                    {/* Arrow Icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-slate-300 transition-colors duration-300 group-hover:text-blue-600"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <p className="mt-4 text-[14px] leading-relaxed text-slate-500">
                    {description}
                </p>
            </div>

            <div className="mt-8 text-[13px] font-medium text-slate-400">
                {category}
            </div>
        </Link>
    );
}
