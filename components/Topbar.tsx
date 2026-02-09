'use client';

import Link from 'next/link';
import { Calculator } from 'lucide-react';

export default function Topbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
            <div className="container mx-auto flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Left: Logo and Site Name */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white shadow-md shadow-indigo-200 transition group-hover:shadow-lg group-hover:shadow-indigo-300">
                        <Calculator className="h-5 w-5" />
                    </div>
                    <span className="text-lg font-bold tracking-tight text-slate-900">
                        Other Calculators
                    </span>
                </Link>

                {/* Right: Navigation Links */}
                <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
                    <Link href="/" className="hover:text-indigo-600 transition-colors">
                        All Calculators
                    </Link>
                    <Link href="/contact" className="hover:text-indigo-600 transition-colors">
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
}
