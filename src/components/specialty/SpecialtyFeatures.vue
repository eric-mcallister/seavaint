<template>
  <section class="px-8 md:px-12 lg:px-16 pb-20 md:pb-28 bg-surface">
    <div class="max-w-7xl mx-auto">
      <h2 class="font-manrope font-medium text-3xl md:text-4xl tracking-tight text-on-surface mb-10 md:mb-12">
        Features
      </h2>
      <div
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        <RouterLink
          v-for="(item, index) in specialty.features"
          :key="item.title"
          :to="`/treatments/${treatmentSlug(specialty.slug, item.title)}`"
          class="p-8 rounded-xl flex flex-col justify-between border border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
          :class="index % 2 === 0 ? 'bg-surface-container-high' : 'bg-surface-container-low'"
        >
          <div>
            <span class="material-symbols-outlined text-primary text-3xl mb-4">{{ item.icon }}</span>
            <h3 class="font-manrope font-medium text-xl text-on-surface mb-2">
              {{ item.title }}
            </h3>
            <p class="font-lato text-sm text-on-surface-variant leading-relaxed font-normal">
              {{ item.description }}
            </p>
          </div>
          <span
            class="text-primary font-manrope font-medium text-sm mt-6 inline-flex items-center gap-2 group"
          >
            Learn more
            <span class="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </span>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { treatmentSlug } from '@/data/treatments.js'

defineProps({
  specialty: {
    type: Object,
    required: true,
  },
})
</script>
