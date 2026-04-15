<template>
  <section class="max-w-[1440px] mx-auto px-6 sm:px-8 mb-16 md:mb-24">
    <div
      class="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch bg-surface-container-low overflow-hidden rounded-xl"
    >
      <div class="lg:col-span-7 relative min-h-[320px] md:min-h-[500px]">
        <img
          :src="article.image"
          :alt="article.title"
          class="absolute inset-0 w-full h-full object-cover"
        >
        <div
          class="absolute inset-0 bg-gradient-to-r from-surface-container-low/20 to-transparent lg:hidden"
        />
      </div>
      <div class="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center bg-surface-container-low">
        <div class="inline-flex items-center gap-2 mb-6 text-primary">
          <span class="font-label text-xs font-bold tracking-widest uppercase">Featured Intelligence</span>
          <div class="h-px w-8 bg-primary/30" />
        </div>
        <h1
          class="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold text-on-surface tracking-tighter leading-[1.1] mb-6 md:mb-8"
        >
          {{ article.title }}
        </h1>
        <p class="text-on-surface-variant text-lg leading-relaxed mb-8 md:mb-10 font-light">
          {{ article.excerpt }}
        </p>
        <div class="flex flex-wrap items-center gap-6">
          <router-link
            :to="{ name: 'blog-article', params: { slug: article.slug } }"
            class="inline-flex items-center justify-center bg-primary text-on-primary px-8 py-4 rounded-lg font-bold text-sm tracking-wide transition-all hover:brightness-110 active:scale-95"
          >
            Read Full Thesis
          </router-link>
          <span class="font-label text-sm text-outline font-medium tracking-tight uppercase">
            {{ article.readTime }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    required: true,
  },
})
</script>
