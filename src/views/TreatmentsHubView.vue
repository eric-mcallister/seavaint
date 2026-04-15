<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="pt-16 flex-1 bg-surface-container-low">
      <section class="px-8 py-16 md:py-24">
        <div class="max-w-7xl mx-auto">
          <div class="mb-12 md:mb-16">
            <h1 class="font-manrope font-medium text-3xl md:text-4xl tracking-tight text-on-surface mb-4">
              Treatments
            </h1>
            <div class="h-1 w-20 bg-primary rounded-full mb-6" />
            <p class="font-lato text-on-surface-variant max-w-2xl leading-relaxed font-normal text-sm md:text-base">
              Every condition below is available through our virtual care pathways. Select a treatment to learn how we structure evaluation, follow-up, and escalation when you need it.
            </p>
          </div>

          <div
            v-for="spec in specialties"
            :key="spec.slug"
            class="mb-14 last:mb-0"
          >
            <h2 class="font-manrope font-medium text-xl md:text-2xl text-on-surface mb-2">
              {{ spec.titleBefore }} {{ spec.titleAccent }}
            </h2>
            <p class="font-lato text-sm text-on-surface-variant mb-6 max-w-3xl">
              {{ spec.description }}
            </p>
            <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <li
                v-for="t in treatmentsFor(spec.slug)"
                :key="t.slug"
              >
                <RouterLink
                  :to="`/treatments/${t.slug}`"
                  class="group flex items-center gap-3 px-4 py-3 rounded-xl bg-surface-container-lowest border border-outline-variant/10 shadow-sm hover:shadow-md hover:border-primary/20 transition-all"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0 group-hover:scale-125 transition-transform" />
                  <span class="font-manrope font-light text-sm text-on-surface group-hover:text-primary transition-colors">
                    {{ t.title }}
                  </span>
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import { specialties } from '@/data/specialties.js'
import { treatments } from '@/data/treatments.js'

function treatmentsFor(specialtySlug) {
  return treatments.filter((t) => t.specialtySlug === specialtySlug)
}

onMounted(() => {
  document.title = 'Treatments | Seavaint Health'
})
</script>
