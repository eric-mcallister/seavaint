<template>
  <div class="min-h-screen flex flex-col">
    <AppHeader />
    <main class="pt-16 flex-1">
      <AboutSophiaProfile />
      <AboutProfileDivider />
      <AboutKennethProfile />
      <AboutLeadershipCta />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import AboutSophiaProfile from '@/components/about/AboutSophiaProfile.vue'
import AboutProfileDivider from '@/components/about/AboutProfileDivider.vue'
import AboutKennethProfile from '@/components/about/AboutKennethProfile.vue'
import AboutLeadershipCta from '@/components/about/AboutLeadershipCta.vue'
</script>
