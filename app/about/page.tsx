import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn more about OtherCalculators and our mission to provide free, accurate calculation tools.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-slate-50 py-16 md:py-24">
            <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <article className="rounded-2xl border border-slate-900/10 bg-white p-6 md:p-10 shadow-sm transition-all duration-300 hover:shadow-md">
                    <header className="mb-10 text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-4">
                            About OtherCalculators
                        </h1>
                        <p className="text-lg text-slate-600">Empowering your decisions with precision.</p>
                    </header>

                    <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Our Mission</h2>
                            <p>
                                <strong>OtherCalculators</strong> was founded with a simple goal: to make complex calculations accessible to everyone. Whether you're a homeowner planning a paving project, a student solving math problems, or a professional estimating costs, we provide the tools you need to get fast, accurate results.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Why Use Our Tools?</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong>100% Free:</strong> All our calculators are available to use at no cost, forever.</li>
                                <li><strong>Privacy First:</strong> Your calculation data stays in your browser. We don't store your inputs.</li>
                                <li><strong>User-Friendly:</strong> Designed with a focus on simplicity and clarity across all devices.</li>
                                <li><strong>Modern & Fast:</strong> Built with the latest web technologies to ensure a smooth experience.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">Our Expertise</h2>
                            <p>
                                Our team consists of developers and domain experts who collaborate to ensure every formula and conversion factor is as accurate as possible. From asphalt density to financial interest rates, we sweat the details so you don't have to.
                            </p>
                        </section>

                        <section className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                            <h3 className="text-xl font-bold text-indigo-900 mb-2">Have a Suggestion?</h3>
                            <p className="text-indigo-800 text-sm">
                                We are constantly expanding our library of tools. If there's a specific calculator you'd like to see on our site, we'd love to hear from you!
                            </p>
                            <div className="mt-4">
                                <a href="/contact" className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 transition">
                                    Contact Us
                                </a>
                            </div>
                        </section>
                    </div>
                </article>
            </div>
        </main>
    );
}
