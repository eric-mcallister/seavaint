<template>
  <div>
    <nav class="fixed top-0 w-full z-50 glass-nav shadow-sm">
      <div class="flex items-center justify-between px-4 sm:px-8 py-4 max-w-7xl mx-auto w-full gap-3">
        <router-link
          to="/"
          class="flex items-center shrink-0 min-w-0"
          @click="closeMenu"
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
          <router-link
            to="/pricing"
            :class="navLinkClass(isPricing)"
          >
            Pricing
          </router-link>
          <router-link
            to="/blog"
            :class="navLinkClass(isBlog)"
          >
            Blog
          </router-link>
          <a
            class="text-stone-600 hover:text-stone-900 transition-all duration-300 font-manrope font-light tracking-tight text-sm"
            href="/#contact"
          >Contact</a>
        </div>

        <div class="hidden md:flex items-center shrink-0">
          <button
            type="button"
            class="bg-primary text-on-primary px-6 py-2.5 rounded-lg text-sm font-manrope font-light tracking-tight scale-95 active:scale-90 transition-transform hover:opacity-90"
          >
            Book Appointment
          </button>
        </div>

        <button
          type="button"
          class="md:hidden flex items-center justify-center w-11 h-11 rounded-lg text-stone-700 hover:bg-stone-200/60 transition-colors shrink-0"
          :aria-expanded="menuOpen"
          aria-controls="mobile-nav-menu"
          aria-label="Open menu"
          @click="menuOpen = true"
        >
          <span class="material-symbols-outlined text-2xl">menu</span>
        </button>
      </div>
    </nav>

    <Teleport to="body">
      <Transition name="mobile-nav">
        <div
          v-if="menuOpen"
          id="mobile-nav-menu"
          class="fixed inset-0 z-[100] md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div
            class="absolute inset-0 bg-stone-900/45 backdrop-blur-sm"
            aria-hidden="true"
            @click="closeMenu"
          />
          <div
            class="mobile-nav-panel absolute top-0 right-0 h-full w-[min(100%,20rem)] bg-surface shadow-2xl flex flex-col border-l border-outline-variant/20"
          >
            <div class="flex items-center justify-between px-4 py-4 border-b border-outline-variant/15">
              <span class="font-manrope text-sm font-medium text-stone-800 tracking-tight">Menu</span>
              <button
                type="button"
                class="flex items-center justify-center w-11 h-11 rounded-lg text-stone-700 hover:bg-stone-200/60 transition-colors"
                aria-label="Close menu"
                @click="closeMenu"
              >
                <span class="material-symbols-outlined text-2xl">close</span>
              </button>
            </div>
            <nav
              class="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-1"
              aria-label="Main"
            >
              <router-link
                v-for="item in mobileLinks"
                :key="item.to"
                :to="item.to"
                :class="mobileLinkClass(item.match)"
                @click="closeMenu"
              >
                {{ item.label }}
              </router-link>
              <a
                href="/#contact"
                :class="`${mobileLinkBase} text-stone-600 hover:text-stone-900 hover:bg-stone-100/80`"
                @click="closeMenu"
              >
                Contact
              </a>
            </nav>
            <div class="p-4 border-t border-outline-variant/15 bg-surface-container-low/50">
              <a
                href="/#contact"
                class="flex items-center justify-center w-full bg-primary text-on-primary px-4 py-3 rounded-lg text-sm font-manrope font-medium tracking-tight hover:opacity-90 transition-opacity"
                @click="closeMenu"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const menuOpen = ref(false)

const isHome = computed(() => route.path === '/')
const isAbout = computed(() => route.path === '/about')
const isServices = computed(() => route.path === '/services' || route.path.startsWith('/services/'))
const isTreatments = computed(() => route.path === '/treatments' || route.path.startsWith('/treatments/'))
const isFaqs = computed(() => route.path === '/faqs')
const isPricing = computed(() => route.path === '/pricing')
const isBlog = computed(() => route.path === '/blog' || route.path.startsWith('/blog/'))

const mobileLinks = [
  { label: 'Home', to: '/', match: () => isHome.value },
  { label: 'About', to: '/about', match: () => isAbout.value },
  { label: 'Services Hub', to: '/services', match: () => isServices.value },
  { label: 'Treatments', to: '/treatments', match: () => isTreatments.value },
  { label: 'FAQs', to: '/faqs', match: () => isFaqs.value },
  { label: 'Pricing', to: '/pricing', match: () => isPricing.value },
  { label: 'Blog', to: '/blog', match: () => isBlog.value },
]

const activeClass =
  'text-red-800 font-manrope font-medium border-b-2 border-red-800 pb-1 tracking-tight text-sm'
const inactiveClass =
  'text-stone-600 hover:text-stone-900 transition-all duration-300 font-manrope font-light tracking-tight text-sm'

function navLinkClass(active) {
  return active ? activeClass : inactiveClass
}

const mobileLinkBase =
  'block rounded-lg px-4 py-3.5 font-manrope text-base tracking-tight transition-colors'

function mobileLinkClass(matchFn) {
  if (matchFn()) {
    return `${mobileLinkBase} bg-red-50 text-red-900 font-medium border-l-4 border-red-800 pl-3`
  }
  return `${mobileLinkBase} text-stone-700 hover:bg-stone-100/80`
}

function closeMenu() {
  menuOpen.value = false
}

watch(
  () => route.path,
  () => {
    closeMenu()
  },
)

watch(menuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

function onKeydown(e) {
  if (e.key === 'Escape') closeMenu()
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: opacity 0.2s ease;
}

.mobile-nav-enter-active .mobile-nav-panel,
.mobile-nav-leave-active .mobile-nav-panel {
  transition: transform 0.25s ease;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  opacity: 0;
}

.mobile-nav-enter-from .mobile-nav-panel,
.mobile-nav-leave-to .mobile-nav-panel {
  transform: translateX(100%);
}
</style>
