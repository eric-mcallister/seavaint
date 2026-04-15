<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="pt-16 flex-1">
      <template v-if="specialty">
        <SpecialtyHero :specialty="specialty" />
        <SpecialtyFeatures :specialty="specialty" />
        <CtaSection />
      </template>
      <div
        v-else
        class="max-w-7xl mx-auto px-8 py-24 text-center"
      >
        <h1 class="font-manrope font-medium text-2xl text-on-surface mb-4">
          Specialty not found
        </h1>
        <RouterLink
          to="/services"
          class="text-primary font-manrope font-light underline underline-offset-4"
        >
          Back to Services
        </RouterLink>
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { computed, nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'
import { forceWindowScrollTop } from '@/utils/scroll.js'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import CtaSection from '@/components/home/CtaSection.vue'
import SpecialtyHero from '@/components/specialty/SpecialtyHero.vue'
import SpecialtyFeatures from '@/components/specialty/SpecialtyFeatures.vue'
import { getSpecialtyBySlug } from '@/data/specialties.js'

const route = useRoute()

const specialty = computed(() => getSpecialtyBySlug(route.params.slug))

async function scrollAfterNav() {
  await nextTick()
  forceWindowScrollTop()
  setTimeout(forceWindowScrollTop, 0)
  setTimeout(forceWindowScrollTop, 32)
}

watch(
  () => route.fullPath,
  () => {
    scrollAfterNav()
  },
  { immediate: true, flush: 'post' },
)

watch(
  () => specialty.value,
  (s) => {
    document.title = s
      ? `Seavaint Health — ${s.titleBefore} ${s.titleAccent}`
      : 'Specialty | Seavaint Health'
  },
  { immediate: true },
)
</script>
