<template>
  <section class="max-w-[1440px] mx-auto px-6 sm:px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <template
        v-for="article in items"
        :key="article.slug"
      >
        <!-- Large bento card -->
        <router-link
          v-if="article.gridLarge"
          :to="{ name: 'blog-article', params: { slug: article.slug } }"
          class="group lg:col-span-2 bg-surface-container-low rounded-xl overflow-hidden transition-all hover:bg-surface-container focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <div class="grid grid-cols-1 md:grid-cols-2 h-full">
            <div class="relative min-h-[240px] md:min-h-[300px]">
              <img
                :src="article.image"
                :alt="article.title"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              >
            </div>
            <div class="p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div class="flex items-center gap-3 mb-6">
                  <span
                    class="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest font-label"
                  >
                    {{ article.cardCategory ?? article.category }}
                  </span>
                  <span class="text-outline text-xs font-label">{{ article.date }}</span>
                </div>
                <h3
                  class="font-headline text-2xl md:text-3xl font-bold text-on-surface mb-4 group-hover:text-primary transition-colors"
                >
                  {{ article.title }}
                </h3>
                <p class="text-on-surface-variant font-light leading-relaxed mb-6">
                  {{ article.excerpt }}
                </p>
              </div>
              <div class="flex items-center justify-between mt-4">
                <span class="font-label text-xs font-bold text-outline uppercase tracking-wider">
                  {{ article.readTime }}
                </span>
                <span
                  class="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform"
                >arrow_forward</span>
              </div>
            </div>
          </div>
        </router-link>

        <!-- Standard card -->
        <router-link
          v-else
          :to="{ name: 'blog-article', params: { slug: article.slug } }"
          class="group bg-surface-container-low rounded-xl overflow-hidden transition-all hover:bg-surface-container focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <div class="aspect-video relative overflow-hidden">
            <img
              :src="article.image"
              :alt="article.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            >
          </div>
          <div class="p-8">
            <div class="flex items-center gap-3 mb-4">
              <span
                class="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest font-label"
              >
                {{ article.cardCategory ?? article.category }}
              </span>
            </div>
            <h3
              class="font-headline text-xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors"
            >
              {{ article.title }}
            </h3>
            <p class="text-on-surface-variant text-sm font-light leading-relaxed mb-6">
              {{ article.excerpt }}
            </p>
            <div class="flex items-center justify-between">
              <span class="font-label text-[10px] font-bold text-outline uppercase tracking-wider">
                {{ article.readTime }}
              </span>
              <span class="material-symbols-outlined text-primary">arrow_outward</span>
            </div>
          </div>
        </router-link>
      </template>

      <BlogNewsletterCard />
    </div>
  </section>
</template>

<script setup>
import BlogNewsletterCard from '@/components/blog/BlogNewsletterCard.vue'

defineProps({
  items: {
    type: Array,
    required: true,
  },
})
</script>
