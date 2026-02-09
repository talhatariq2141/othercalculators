import Link from 'next/link';
import { Calculator } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white py-10 border-t border-slate-200 mt-auto">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Left: Logo */}
                <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded bg-indigo-600 text-white flex items-center justify-center shadow-sm">
                        <Calculator className="h-3.5 w-3.5" />
                    </div>
                    <span className="font-bold text-slate-700">Other Calculators</span>
                </div>

                {/* Center: Copyright */}
                <p className="text-slate-500 text-sm">
                    &copy; {new Date().getFullYear()} OtherCalculators. All rights reserved.
                </p>

                {/* Right: Links */}
                <div className="flex flex-wrap justify-center gap-6 text-sm">
                    <Link href="/about" className="text-slate-500 hover:text-indigo-600 transition-colors">
                        About
                    </Link>
                    <Link href="/contact" className="text-slate-500 hover:text-indigo-600 transition-colors">
                        Contact
                    </Link>
                    <Link href="/privacy-policy" className="text-slate-500 hover:text-indigo-600 transition-colors">
                        Privacy Policy
                    </Link>
                    <Link href="/terms-of-service" className="text-slate-500 hover:text-indigo-600 transition-colors">
                        Terms of Service
                    </Link>
                </div>
            </div>
        </footer>
    );
}