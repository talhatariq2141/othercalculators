// app/calculators/asphalt/layout.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://othercalculators.com"),
    title: {
        default: "Asphalt Calculators",
        template: "%s — Other Calculators",
    },
    description:
        "Free asphalt calculators for volume, tonnage, cost estimation, and more. Plan your paving projects with accurate measurements.",
    openGraph: {
        type: "website",
        siteName: "Other Calculators",
        url: "https://othercalculators.com",
        images: [{ url: "/og/default.png", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        site: "@Othercalculators",
        creator: "@Othercalculators",
        images: ["/og/default.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="flex flex-1">
            <main className="flex-1 overflow-auto p-6 bg-background">
                <div className="min-h-screen bg-background">{children}</div>
            </main>

        </div>
    );
}
