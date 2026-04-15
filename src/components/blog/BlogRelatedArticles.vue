<template>
  <section class="bg-surface-container-low py-16 md:py-24 px-6 md:px-12">
    <div class="max-w-[1440px] mx-auto">
      <h2 class="text-3xl md:text-4xl font-headline font-black text-on-surface mb-10 md:mb-12 tracking-tighter">
        Strategic Deep Dives
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <router-link
          v-for="a in items"
          :key="a.slug"
          :to="{ name: 'blog-article', params: { slug: a.slug } }"
          class="group cursor-pointer text-left"
        >
          <div
            class="aspect-[16/10] bg-surface-container overflow-hidden rounded-xl mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500"
          >
            <img
              :src="a.image"
              :alt="a.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            >
          </div>
          <span class="text-primary font-label text-xs font-bold uppercase tracking-widest">
            {{ a.cardCategory ?? a.category }}
          </span>
          <h3
            class="text-xl font-headline font-bold text-on-surface mt-2 group-hover:text-primary transition-colors"
          >
            {{ a.title }}
          </h3>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
})
</script>
