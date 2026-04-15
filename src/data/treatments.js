import { specialties } from './specialties.js'

/** URL-safe slug segment from a display title (handles parens, ampersands). */
export function slugifyTitle(title) {
  return title
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[()[\]]/g, ' ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Global unique treatment slug: `{specialtySlug}-{featureSlug}`
 * e.g. mental-health-depression, acute-care-general-issues-hair-loss
 */
export function treatmentSlug(specialtySlug, featureTitle) {
  return `${specialtySlug}-${slugifyTitle(featureTitle)}`
}

function pillarBullets(treatmentTitle) {
  const t = treatmentTitle.replace(/\s*\([^)]*\)\s*/g, '').trim()
  return [
    `Structured clinical interview and history built around ${t}`,
    'Evidence-aligned care recommendations with clear documentation',
    'Safety-net guidance and escalation criteria when in-person care is appropriate',
  ]
}

function heroLines(title) {
  const cleaned = title.replace(/\s*\([^)]*\)\s*/g, '').trim()
  const parts = cleaned.split(/\s+/).filter(Boolean)
  if (parts.length <= 1) {
    return { lineBefore: 'Expert virtual care for', lineAccent: cleaned }
  }
  const mid = Math.ceil(parts.length / 2)
  return {
    lineBefore: parts.slice(0, mid).join(' '),
    lineAccent: parts.slice(mid).join(' '),
  }
}

function defaultPillarBody(shortDescription) {
  return `${shortDescription} Our specialists use secure video and structured intake to evaluate your situation, align the plan with current guidance, and coordinate next steps—including referral when hands-on care is required.`
}

/** @typedef {{ slug: string, title: string, icon: string, specialtySlug: string, specialtyLabel: string, heroEyebrow: string, heroLineBefore: string, heroLineAccent: string, heroSubtitle: string, pillarBody: string, pillarBullets: string[], heroImage: string }} Treatment */

/** @type {Treatment[]} */
export const treatments = specialties.flatMap((spec) =>
  spec.features.map((f) => {
    const slug = treatmentSlug(spec.slug, f.title)
    const lines = heroLines(f.title)
    return {
      slug,
      title: f.title,
      icon: f.icon,
      specialtySlug: spec.slug,
      specialtyLabel: `${spec.titleBefore} ${spec.titleAccent}`
        .replace(/\s+/g, ' ')
        .trim()
        .replace(/\.+$/, ''),
      heroEyebrow: spec.badge,
      heroLineBefore: lines.lineBefore,
      heroLineAccent: lines.lineAccent,
      heroSubtitle: f.description,
      pillarBody: defaultPillarBody(f.description),
      pillarBullets: pillarBullets(f.title),
      heroImage: spec.heroImage,
    }
  }),
)

export function getTreatmentBySlug(slug) {
  return treatments.find((t) => t.slug === slug) ?? null
}

export function getTreatmentsBySpecialtySlug(specialtySlug) {
  return treatments.filter((t) => t.specialtySlug === specialtySlug)
}
