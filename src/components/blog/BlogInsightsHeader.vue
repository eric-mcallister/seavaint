<template>
  <section class="max-w-[1440px] mx-auto px-6 sm:px-8 mb-12 md:mb-16">
    <div
      class="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-outline-variant/15 pb-8"
    >
      <div>
        <h2 class="font-headline text-3xl md:text-4xl font-bold tracking-tight text-on-surface">
          Health Intelligence
        </h2>
        <p class="text-on-surface-variant mt-2 font-light">
          Orchestrating wellness across the global maritime network.
        </p>
      </div>
      <div class="flex flex-wrap gap-2">
        <button
          v-for="cat in categories"
          :key="cat.id"
          type="button"
          :class="pillClass(cat.id)"
          @click="$emit('update:filter', cat.id)"
        >
          {{ cat.label }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  filter: {
    type: String,
    default: 'all',
  },
})

defineEmits(['update:filter'])

const categories = [
  { id: 'all', label: 'All Insights' },
  { id: 'clinical', label: 'Clinical' },
  { id: 'logistics', label: 'Logistics' },
  { id: 'wellness', label: 'Wellness' },
  { id: 'news', label: 'News' },
]

function pillClass(id) {
  const active = props.filter === id
  if (active) {
    return 'px-6 py-2 rounded-full bg-primary text-on-primary font-label text-sm font-semibold transition-all'
  }
  return 'px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant font-label text-sm font-medium hover:bg-surface-container-highest transition-all'
}
</script>
