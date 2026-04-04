<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="pt-16 flex-1">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <CtaSection />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import AboutSection from '@/components/home/AboutSection.vue'
import ServicesSection from '@/components/home/ServicesSection.vue'
import TeamSection from '@/components/home/TeamSection.vue'
import CtaSection from '@/components/home/CtaSection.vue'
</script>
