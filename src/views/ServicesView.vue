<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="pt-16 flex-1">
      <ServicesHero />
      <ServicesSpecialties />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import ServicesHero from '@/components/services/ServicesHero.vue'
import ServicesSpecialties from '@/components/services/ServicesSpecialties.vue'
</script>
