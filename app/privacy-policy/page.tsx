import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Privacy Policy for OtherCalculators. Learn how we handle your data.",
};

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-slate-50 py-16 md:py-24">
            <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                <article className="rounded-2xl border border-slate-900/10 bg-white p-6 md:p-10 shadow-sm transition-all duration-300 hover:shadow-md">
                    <header className="mb-10 text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-slate-500 text-sm">Last Updated: February 8, 2026</p>
                    </header>

                    <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">
                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">1. Introduction</h2>
                            <p>
                                At <strong>OtherCalculators</strong>, we value your privacy. This Privacy Policy explains our practices regarding your information when you use our website and tools.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">2. Data Collection</h2>
                            <p>
                                Our calculators are designed to run primarily in your browser. We do not collect, store, or share the input data you enter into our calculation tools.
                            </p>
                            <p className="mt-4 italic">
                                Note: We may collect anonymized usage data (such as page views and browser type) to improve our services, but this data cannot be used to identify you personally.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">3. Cookies</h2>
                            <p>
                                We may use "cookies" to enhance your experience and analyze website traffic. You can choose to disable cookies in your browser settings, though some parts of the site may not function as intended.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">4. Third-Party Services</h2>
                            <p>
                                Our website may contain links to external sites or services (e.g., advertisements or related tools). We are not responsible for the privacy practices or content of these third-party sites.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">5. Security</h2>
                            <p>
                                We implement industry-standard measures to protect any data we may handle. However, no method of transmission over the internet is 100% secure.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">6. Changes to This Policy</h2>
                            <p>
                                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page with a revised "Last Updated" date.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">7. Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@othercalculators.com" className="text-indigo-600 hover:underline">privacy@othercalculators.com</a>.
                            </p>
                        </section>
                    </div>
                </article>
            </div>
        </main>
    );
}
