import virtualTriage from '@/content/articles/virtual-triage-global-logistics.json'
import pathogenDefense from '@/content/articles/pathogen-defense-maritime.json'
import psychologicalResilience from '@/content/articles/psychological-resilience-crew.json'
import supplyChain from '@/content/articles/supply-chain-pharmaceuticals.json'
import predictiveAnalytics from '@/content/articles/predictive-analytics-epidemic.json'
import virtualSpecialist from '@/content/articles/virtual-specialist-care.json'

/** @typedef {typeof virtualSpecialist} BlogArticle */

/** @type {BlogArticle[]} */
export const articles = [
  virtualTriage,
  pathogenDefense,
  psychologicalResilience,
  supplyChain,
  predictiveAnalytics,
  virtualSpecialist,
]

export function getArticleBySlug(slug) {
  return articles.find((a) => a.slug === slug) ?? null
}

export function getFeaturedArticle() {
  return articles.find((a) => a.featured) ?? articles[0]
}

/** Grid articles: non-featured, featured story is separate; wide card first */
export function getGridArticles() {
  const grid = articles.filter((a) => !a.featured)
  return [...grid].sort((a, b) => {
    if (a.gridLarge && !b.gridLarge) return -1
    if (!a.gridLarge && b.gridLarge) return 1
    return 0
  })
}

/** Match category filter pill id to article cardCategory / category strings */
export function articleMatchesFilter(article, filterId) {
  if (filterId === 'all') return true
  const cat = `${article.cardCategory ?? ''} ${article.category ?? ''}`.toLowerCase()
  if (filterId === 'clinical') return cat.includes('clinical')
  if (filterId === 'logistics') return cat.includes('logistics')
  if (filterId === 'wellness') return cat.includes('wellness')
  if (filterId === 'news') return cat.includes('news')
  return true
}

export function getRelatedArticles(currentSlug, limit = 3) {
  return articles.filter((a) => a.slug !== currentSlug).slice(0, limit)
}

/** Newest posts first (by `date` string); used on FAQs and similar. */
export function getLatestArticles(limit = 3) {
  return [...articles]
    .sort((a, b) => {
      const da = Date.parse(a.date)
      const db = Date.parse(b.date)
      const ta = Number.isNaN(da) ? 0 : da
      const tb = Number.isNaN(db) ? 0 : db
      return tb - ta
    })
    .slice(0, limit)
}
