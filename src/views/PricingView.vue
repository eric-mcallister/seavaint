<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="pt-16 flex-1">
      <PricingHero />
      <PricingPlans />
      <PricingPayment />
      <PricingPageCta />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import PricingHero from '@/components/pricing/PricingHero.vue'
import PricingPlans from '@/components/pricing/PricingPlans.vue'
import PricingPayment from '@/components/pricing/PricingPayment.vue'
import PricingPageCta from '@/components/pricing/PricingPageCta.vue'

onMounted(() => {
  document.title = 'Pricing | Seavaint Health'
})
</script>
