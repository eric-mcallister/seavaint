<template>
  <div class="min-h-screen flex flex-col bg-surface text-on-surface font-body selection:bg-primary-fixed-dim">
    <AppHeader />
    <main
      v-if="article"
      class="pt-28 sm:pt-32 md:pt-36 pb-16 md:pb-24 px-5 sm:px-8 md:px-10 max-w-[1200px] mx-auto w-full flex-1"
    >
      <header class="mb-10 md:mb-14 max-w-4xl mx-auto">
        <div class="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-8 md:mb-10">
          <div class="w-full min-w-0">
            <div class="flex flex-wrap gap-4 items-center mb-5">
              <span
                class="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label text-xs font-bold tracking-widest uppercase"
              >
                {{ article.category }}
              </span>
              <span class="text-on-surface-variant font-label text-sm tracking-tight">
                {{ article.readTime }}
              </span>
            </div>
            <h1
              class="text-3xl sm:text-4xl md:text-[2.25rem] lg:text-5xl font-headline font-extrabold text-on-surface tracking-tight leading-snug"
            >
              <template v-if="titleParts.accent">
                {{ titleParts.before }}<span class="text-primary">{{ titleParts.accent }}</span>{{ titleParts.after }}
              </template>
              <template v-else>
                {{ article.title }}
              </template>
            </h1>
          </div>
          <div
            class="flex items-center gap-4 border-l border-outline-variant/15 pl-6 lg:pl-8 py-2 shrink-0 lg:max-w-[280px]"
          >
            <div class="text-right min-w-0">
              <p class="font-headline font-bold text-on-surface text-sm sm:text-base">
                {{ article.authorName }}
              </p>
              <p class="font-label text-xs text-on-surface-variant">
                {{ article.authorRole }}
              </p>
            </div>
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-surface-container-high overflow-hidden shadow-sm shrink-0">
              <img
                :src="article.authorImage"
                :alt="article.authorName"
                class="w-full h-full object-cover"
              >
            </div>
          </div>
        </div>
        <div class="relative w-full aspect-[21/9] min-h-[200px] rounded-xl overflow-hidden shadow-xl mb-5">
          <img
            :src="article.heroImage ?? article.image"
            :alt="article.title"
            class="w-full h-full object-cover"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
        </div>
        <p class="font-label text-xs text-on-surface-variant italic">
          {{ article.publishedLine }}
        </p>
      </header>

      <!-- Flex layout keeps the reading column wide; grid + component roots was collapsing the body column -->
      <div
        class="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-10 xl:gap-14"
      >
        <aside
          class="hidden lg:flex flex-col gap-6 items-center shrink-0 w-11 pt-1 sticky top-36 border-r border-outline-variant/10 pr-6"
        >
          <button
            type="button"
            class="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors border border-outline-variant/10"
            aria-label="Share"
          >
            <span class="material-symbols-outlined text-xl">share</span>
          </button>
          <button
            type="button"
            class="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors border border-outline-variant/10"
            aria-label="Bookmark"
          >
            <span class="material-symbols-outlined text-xl">bookmark</span>
          </button>
          <div class="w-px h-10 bg-outline-variant/15" />
          <button
            type="button"
            class="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
            aria-label="Email"
          >
            <span class="material-symbols-outlined text-xl">alternate_email</span>
          </button>
        </aside>

        <div
          class="flex-1 min-w-0 w-full flex justify-center order-first lg:order-none"
        >
          <div class="w-full max-w-3xl">
            <BlogArticleBody
              :sections="article.bodySections ?? []"
              :tags="article.tags ?? []"
            />
          </div>
        </div>

        <aside class="w-full lg:w-[min(100%,280px)] shrink-0 space-y-10 lg:sticky lg:top-36 lg:self-start order-last">
          <div class="p-8 bg-primary rounded-xl text-on-primary">
            <h3 class="font-headline font-bold text-xl mb-4">
              Request a Strategy Session
            </h3>
            <p class="text-on-primary/80 text-sm mb-6 leading-relaxed">
              Discover how Seavaint Health can integrate specialist care into your global fleet operations.
            </p>
            <router-link
              to="/#contact"
              class="block w-full py-3 text-center bg-surface text-primary font-headline font-bold rounded-lg shadow-lg hover:bg-surface-container transition-all"
            >
              Consult an Expert
            </router-link>
          </div>
          <div>
            <h3 class="font-headline font-bold text-on-surface mb-6 border-b border-outline-variant/15 pb-2">
              Newsletter
            </h3>
            <div class="flex flex-col gap-3">
              <p class="text-on-surface-variant text-sm">
                Monthly insights on maritime intelligence and global trade.
              </p>
              <label class="sr-only" for="article-sidebar-email">Email</label>
              <input
                id="article-sidebar-email"
                type="email"
                autocomplete="email"
                placeholder="email@example.com"
                class="bg-surface-container border-none rounded-lg focus:ring-2 focus:ring-primary text-sm px-4 py-3 w-full text-on-surface"
              >
              <button
                type="button"
                class="bg-surface-container-high text-on-surface font-label font-bold py-3 rounded-lg hover:bg-outline-variant/30 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </aside>
      </div>
    </main>

    <main
      v-else
      class="pt-32 pb-24 px-6 max-w-2xl mx-auto flex-1 text-center"
    >
      <h1 class="font-headline text-2xl font-bold text-on-surface mb-4">
        Article not found
      </h1>
      <router-link
        to="/blog"
        class="text-primary font-label text-sm font-semibold underline"
      >
        Back to Health Intelligence
      </router-link>
    </main>

    <BlogRelatedArticles
      v-if="article && related.length"
      :items="related"
    />
    <AppFooter />
  </div>
</template>

<script setup>
import { computed, onMounted, watch } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import BlogArticleBody from '@/components/blog/BlogArticleBody.vue'
import BlogRelatedArticles from '@/components/blog/BlogRelatedArticles.vue'
import { getArticleBySlug, getRelatedArticles } from '@/data/blog.js'

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
})

const article = computed(() => getArticleBySlug(props.slug))

const titleParts = computed(() => {
  const a = article.value
  if (!a?.title) return { before: '', accent: null, after: '' }
  const accent = a.titleAccent
  if (!accent) return { before: a.title, accent: null, after: '' }
  const i = a.title.indexOf(accent)
  if (i === -1) return { before: a.title, accent: null, after: '' }
  return {
    before: a.title.slice(0, i),
    accent,
    after: a.title.slice(i + accent.length),
  }
})

const related = computed(() =>
  article.value ? getRelatedArticles(article.value.slug, 3) : [],
)

function setTitle() {
  if (article.value) {
    document.title = `${article.value.title} | Seavaint Health`
  } else {
    document.title = 'Article | Seavaint Health'
  }
}

onMounted(setTitle)
watch(article, setTitle)
</script>
