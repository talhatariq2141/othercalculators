import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with the OtherCalculators team for suggestions, feedback, or inquiries.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-slate-50 py-16 md:py-24">
            <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <article className="rounded-2xl border border-slate-900/10 bg-white p-6 md:p-10 shadow-sm transition-all duration-300 hover:shadow-md">
                    <header className="mb-10 text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-4">
                            Contact Us
                        </h1>
                        <p className="text-lg text-slate-600">We'd love to hear from you.</p>
                    </header>

                    <div className="space-y-10">
                        <section className="grid gap-6 md:grid-cols-2">
                            <div className="rounded-2xl bg-slate-50 p-6 border border-slate-200">
                                <h3 className="font-bold text-slate-900 mb-2">General Inquiries</h3>
                                <p className="text-sm text-slate-600 mb-4">For general questions or feedback about our tools.</p>
                                <a href="mailto:hello@othercalculators.com" className="text-indigo-600 font-semibold hover:underline">hello@othercalculators.com</a>
                            </div>
                            <div className="rounded-2xl bg-slate-50 p-6 border border-slate-200">
                                <h3 className="font-bold text-slate-900 mb-2">Calculator Suggestions</h3>
                                <p className="text-sm text-slate-600 mb-4">Request a new tool or suggest an improvement.</p>
                                <a href="mailto:tools@othercalculators.com" className="text-indigo-600 font-semibold hover:underline">tools@othercalculators.com</a>
                            </div>
                        </section>

                        <section className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-8">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Our Commitment</h2>
                            <div className="grid gap-6 sm:grid-cols-3 text-center">
                                <div>
                                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-bold text-slate-800 text-sm">Fast Response</h4>
                                    <p className="text-xs text-slate-500 mt-1">We aim to reply within 48 hours.</p>
                                </div>
                                <div>
                                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        </svg>
                                    </div>
                                    <h4 className="font-bold text-slate-800 text-sm">Verified Accuracy</h4>
                                    <p className="text-xs text-slate-500 mt-1">We take your bug reports seriously.</p>
                                </div>
                                <div>
                                    <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.905-16.516.26-1.477" />
                                        </svg>
                                    </div>
                                    <h4 className="font-bold text-slate-800 text-sm">Community Driven</h4>
                                    <p className="text-xs text-slate-500 mt-1">Your feedback shapes our roadmap.</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </article>
            </div>
        </main>
    );
}
