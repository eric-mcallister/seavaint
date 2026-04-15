<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="pt-16 flex-1">
      <template v-if="treatment">
        <TreatmentHero :treatment="treatment" />
        <TreatmentPillarSection :treatment="treatment" />
        <TreatmentCta />
      </template>
      <div
        v-else
        class="max-w-7xl mx-auto px-8 py-24 text-center"
      >
        <h1 class="font-manrope font-medium text-2xl text-on-surface mb-4">
          Treatment not found
        </h1>
        <RouterLink
          to="/treatments"
          class="text-primary font-manrope font-light underline underline-offset-4"
        >
          View all treatments
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
import TreatmentHero from '@/components/treatments/TreatmentHero.vue'
import TreatmentPillarSection from '@/components/treatments/TreatmentPillarSection.vue'
import TreatmentCta from '@/components/treatments/TreatmentCta.vue'
import { getTreatmentBySlug } from '@/data/treatments.js'

const route = useRoute()

const treatment = computed(() => getTreatmentBySlug(route.params.slug))

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
  () => treatment.value,
  (t) => {
    document.title = t ? `${t.title} | Seavaint Health` : 'Treatment | Seavaint Health'
  },
  { immediate: true },
)
</script>
