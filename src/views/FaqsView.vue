<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="pt-16 flex-1">
      <FaqsHero />
      <FaqsTopicsGrid />
      <FaqsResourcesSection />
      <FaqsQuestionsCta />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import FaqsHero from '@/components/faqs/FaqsHero.vue'
import FaqsTopicsGrid from '@/components/faqs/FaqsTopicsGrid.vue'
import FaqsResourcesSection from '@/components/faqs/FaqsResourcesSection.vue'
import FaqsQuestionsCta from '@/components/faqs/FaqsQuestionsCta.vue'
</script>
