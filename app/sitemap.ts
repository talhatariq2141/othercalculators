import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://othercalculators.com";
    const now = new Date();

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
        { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
        { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
        { url: `${baseUrl}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
        { url: `${baseUrl}/terms-of-service`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    ];

    // Asphalt Category Page
    const asphaltCategory: MetadataRoute.Sitemap = [
        { url: `${baseUrl}/calculators/asphalt`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    ];

    // Asphalt Calculators
    const asphaltCalculators = [
        "asphalt-tonnage-calculator",
        "asphalt-volume-calculator",
        "asphalt-weight-calculator",
        "asphalt-square-footage-calculator",
        "asphalt-area-calculator",
        "asphalt-thickness-calculator",
        "asphalt-density-calculator",
        "asphalt-driveway-cost-calculator",
        "asphalt-paving-cost-calculator",
        "asphalt-repair-cost-calculator",
        "asphalt-resurfacing-cost-calculator",
        "asphalt-overlay-cost-calculator",
        "asphalt-milling-cost-calculator",
        "asphalt-per-ton-calculator",
    ];

    const asphaltPages: MetadataRoute.Sitemap = asphaltCalculators.map((slug) => ({
        url: `${baseUrl}/calculators/asphalt/${slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    return [...staticPages, ...asphaltCategory, ...asphaltPages];
}
