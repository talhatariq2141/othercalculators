# OtherCalculators AI Skill — Web Calculator Generator

**Version:** 1.0.0  
**Purpose:** Defines how Antigravity AI should generate consistent, semantic, SEO-optimized calculators using Tailwind v4 and Next.js.

---

## 🎯 Skill Overview

This Skill enables Antigravity AI to generate **high-quality calculator tools** with:

- Tailwind v4 UI/UX consistency  
- Semantic HTML structure  
- JSON-LD schema injection  
- Smooth animated result reveal  
- Accessibility and responsive design  
- SEO-rich contextual sections

---

## 🧩 Skill Metadata

```json
{
  "skill_name": "WebCalculatorGenerator",
  "version": "1.0.0",
  "description": "Generates a Tailwind v4 React calculator component and a semantic Next.js page with schema and SEO",
  "author": "Your Name / OtherCalculators Team",
  "triggers": ["generate calculator", "create calculator page", "new calculator tool"]
}

🧠 Skill Purpose

Antigravity will generate a two-file output for any new tool:

Calculator Component

Only logic + UI

Tailwind v4 styling

Smooth result reveal

Next.js Page File

Hero section

Breadcrumbs

Semantic sections

JSON-LD schemas

📦 Required Inputs

Antigravity AI should prompt for:

Field	Description
Calculator Name	e.g., “Concrete Volume Calculator”
Category	e.g., “Concrete”
Slug	URL friendly path segment
Inputs	List with labels, units, constraints
Outputs	Output titles and formulas
Default Values	Suggested defaults
Formula Explanation	Human readable
Example Calculation	Real example
FAQs	5–8 topic FAQs
Related Tools	Internal recommend links
Additional Notes	Optional notes
📁 File Structure
/app/calculators/{category}/{slug}/page.tsx
/components/calculators/{category}/{CalculatorComponent}.tsx

✨ Calculator Component Rules
🛠 Content Scope

Must contain:

React logic/UI only

Inputs + results

Smooth animation

No SEO or page content

🎨 Tailwind v4 UI Standards
Container
rounded-2xl border-2 border-dashed border-green-700 bg-green-100/80 p-5 sm:p-6

Input
rounded-xl border border-slate-900/15 bg-white px-3 py-2.5

Focus
focus:border-indigo-500/60 focus:ring-4 focus:ring-indigo-500/15

Unit Badge
inline-flex items-center rounded-full border border-slate-900/10 bg-slate-900/5 px-3 py-2 text-[12px]

Buttons
bg-indigo-600 text-white rounded-xl px-4 py-2.5 hover:bg-indigo-700 disabled:opacity-60

🌀 Result Reveal Animation
<div
  className="overflow-hidden transition-[max-height,opacity] duration-500 ease-out"
  style={{ maxHeight: hasCalculated ? resultHeight : 0 }}
>
  ...
</div>

📄 Page Layout Rules

Each generated page must include:

Breadcrumbs

Hero (H1 + description)

Calculator block

How it works

Formula

Example

FAQs

Related tools

Sources & assumptions

🧠 JSON-LD Schema Injection

Include three schema types:

BreadcrumbList
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [...],
}

SoftwareApplication
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "...",
  applicationCategory: "CalculatorApplication",
  operatingSystem: "All",
  url,
  description: "...",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
}

FAQPage
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}

🧩 Hero Section Guidelines
<header class="text-center">
  <h1 class="...">Title</h1>
  <p class="...">Description</p>
</header>

📝 Accessibility Rules

Use <fieldset> + <legend>

Screen reader ARIA labels

Button states reflect validity

Use aria-live="polite" on result reveals

🔎 Content Rules

Use clear, SEO-friendly copy

H1 matches intent

Description includes units and context

🧪 Validation Rules

Generated calculator must include:

✔ At least 3 inputs
✔ Default values
✔ Example section
✔ Formula explanation
✔ At least 5 FAQs
✔ Schema injections

🧾 Prompt Template
Generate a new calculator with:
- Name: {Calculator Name}
- Category: {Category}
- Slug: {slug}
- Inputs:
  - {Label} ({unit}): min {min}, max {max}, default {default}
- Outputs:
  - {output name}, formula: {formula}
- Formula explanation: {text}
- Example: {example}
- FAQs:
  - {question}
- Related tools:
  - {link}

Follow Tailwind v4 UI/UX, semantic layout, result animation, and include JSON-LD schemas for BreadcrumbList, SoftwareApplication, FAQPage. Output two files: Calculator component and Page.

🚀 Success Outcome

Generated code conforms to:

✔ Tailwind v4 consistency
✔ Smooth result reveal
✔ Semantic HTML & SEO
✔ JSON-LD schemas
✔ Accessible & responsive design