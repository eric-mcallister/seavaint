<template>
  <div class="min-h-screen flex flex-col bg-surface text-on-surface font-body">
    <AppHeader />
    <main class="pt-20 md:pt-24 min-h-screen flex-1">
      <BlogFeaturedHero
        v-if="featured"
        :article="featured"
      />
      <BlogInsightsHeader v-model:filter="activeFilter" />
      <BlogArticleGrid :items="filteredGridArticles" />
      <BlogPagination />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import BlogFeaturedHero from '@/components/blog/BlogFeaturedHero.vue'
import BlogInsightsHeader from '@/components/blog/BlogInsightsHeader.vue'
import BlogArticleGrid from '@/components/blog/BlogArticleGrid.vue'
import BlogPagination from '@/components/blog/BlogPagination.vue'
import {
  getFeaturedArticle,
  getGridArticles,
  articleMatchesFilter,
} from '@/data/blog.js'

const activeFilter = ref('all')

const featured = computed(() => getFeaturedArticle())

const filteredGridArticles = computed(() => {
  const grid = getGridArticles()
  return grid.filter((a) => articleMatchesFilter(a, activeFilter.value))
})

onMounted(() => {
  document.title = 'Health Intelligence | Seavaint Health'
})
</script>
