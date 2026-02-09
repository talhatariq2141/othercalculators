import type { MetadataRoute } from "next";
import { calculators, categories } from "@/data/calculators";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://othercalculators.com";
    const now = new Date();

    // 1. Static pages
    const staticPages: MetadataRoute.Sitemap = [
        { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
        { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
        { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
        { url: `${baseUrl}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
        { url: `${baseUrl}/terms-of-service`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    ];

    // 2. Category Pages (excluding "All")
    const categoryPages: MetadataRoute.Sitemap = categories
        .filter(cat => cat !== "All")
        .map(cat => ({
            url: `${baseUrl}/calculators/${cat.toLowerCase()}`,
            lastModified: now,
            changeFrequency: "weekly" as const,
            priority: 0.9,
        }));

    // 3. Individual Calculator Pages
    const calculatorPages: MetadataRoute.Sitemap = calculators.map((calc) => ({
        url: `${baseUrl}${calc.href}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.8,
    }));

    return [...staticPages, ...categoryPages, ...calculatorPages];
}
