<template>
  <nav class="fixed top-0 w-full z-50 glass-nav shadow-sm">
    <div class="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto w-full">
      <router-link
        to="/"
        class="flex items-center shrink-0"
      >
        <img
          src="https://images.squarespace-cdn.com/content/v1/680734e550a37e25f5115e1a/69c82c8f-f2e8-4d33-ad52-8b4f3db947c8/SeavaintHealth+Logo.png?format=1500w"
          alt="Seavaint Health"
          class="h-9 sm:h-10 w-auto max-w-[200px] sm:max-w-[240px] object-contain object-left"
          width="240"
          height="40"
        >
      </router-link>
      <div class="hidden md:flex items-center space-x-10">
        <router-link
          to="/"
          :class="navLinkClass(isHome)"
        >
          Home
        </router-link>
        <router-link
          to="/about"
          :class="navLinkClass(isAbout)"
        >
          About
        </router-link>
        <router-link
          to="/services"
          :class="navLinkClass(isServices)"
        >
          Services Hub
        </router-link>
        <router-link
          to="/treatments"
          :class="navLinkClass(isTreatments)"
        >
          Treatments
        </router-link>
        <router-link
          to="/faqs"
          :class="navLinkClass(isFaqs)"
        >
          FAQs
        </router-link>
        <a
          class="text-stone-600 hover:text-stone-900 transition-all duration-300 font-manrope font-light tracking-tight text-sm"
          href="/#contact"
        >Contact</a>
      </div>
      <div class="flex items-center gap-4">
        <button
          type="button"
          class="bg-primary text-on-primary px-6 py-2.5 rounded-lg text-sm font-manrope font-light tracking-tight scale-95 active:scale-90 transition-transform hover:opacity-90"
        >
          Book Appointment
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isHome = computed(() => route.path === '/')
const isAbout = computed(() => route.path === '/about')
const isServices = computed(() => route.path === '/services' || route.path.startsWith('/services/'))
const isTreatments = computed(() => route.path === '/treatments' || route.path.startsWith('/treatments/'))
const isFaqs = computed(() => route.path === '/faqs')

const activeClass =
  'text-red-800 font-manrope font-medium border-b-2 border-red-800 pb-1 tracking-tight text-sm'
const inactiveClass =
  'text-stone-600 hover:text-stone-900 transition-all duration-300 font-manrope font-light tracking-tight text-sm'

function navLinkClass(active) {
  return active ? activeClass : inactiveClass
}
</script>
