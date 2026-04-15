<template>
  <section class="bg-surface-container-high py-16 md:py-24">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-8">
        <div>
          <span class="font-manrope font-medium text-xs uppercase tracking-[0.2em] text-primary mb-4 block">
            Knowledge Base
          </span>
          <h2 class="text-3xl md:text-4xl font-manrope font-medium text-on-surface max-w-xl leading-tight">
            Recent articles from Seavaint Health Intelligence Department
          </h2>
          <p class="mt-3 font-lato text-on-surface-variant text-sm max-w-lg">
            Deep dives on maritime health, logistics, and virtual care—updated as we publish.
          </p>
        </div>
        <router-link
          to="/blog"
          class="inline-flex items-center gap-2 font-manrope font-medium text-primary group shrink-0"
        >
          View All Resources
          <span class="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
        </router-link>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <router-link
          v-for="post in latestPosts"
          :key="post.slug"
          :to="{ name: 'blog-article', params: { slug: post.slug } }"
          class="group text-left block rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <div class="aspect-[4/5] bg-stone-200 rounded-xl mb-6 overflow-hidden relative">
            <img
              :src="post.image"
              :alt="post.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            >
            <div
              class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
            >
              <span class="material-symbols-outlined text-white text-4xl">arrow_outward</span>
            </div>
          </div>
          <p class="font-label text-xs font-semibold uppercase tracking-widest text-primary mb-2">
            {{ post.cardCategory ?? post.category }}
          </p>
          <h3 class="font-manrope font-medium text-xl text-on-surface mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {{ post.title }}
          </h3>
          <p class="font-lato text-on-surface-variant text-sm font-normal line-clamp-2 mb-2">
            {{ post.excerpt }}
          </p>
          <p class="font-lato text-on-surface-variant/80 text-xs font-normal">
            {{ post.date }} · {{ post.readTime }}
          </p>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { getLatestArticles } from '@/data/blog.js'

const latestPosts = computed(() => getLatestArticles(3))
</script>
