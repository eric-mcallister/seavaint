<template>
  <section class="px-8 md:px-12 lg:px-16 pt-10 pb-16 md:pb-24 bg-surface">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
      <div class="md:col-span-7">
        <span
          class="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-manrope text-xs uppercase tracking-widest mb-6"
        >
          {{ specialty.badge }}
        </span>
        <h1
          class="font-manrope font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] mb-8 text-on-surface"
        >
          {{ specialty.titleBefore }}
          <br >
          <span class="text-primary">{{ specialty.titleAccent }}</span>
        </h1>
        <p class="font-lato text-lg md:text-xl text-on-surface-variant max-w-xl font-normal mb-10 leading-relaxed">
          {{ specialty.description }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            class="inline-flex justify-center items-center bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-lg font-manrope font-light text-base md:text-lg shadow-xl shadow-primary/10 hover:brightness-110 transition-all text-center"
          >
            Start Virtual Assessment
          </a>
          <RouterLink
            to="/faqs"
            class="inline-flex justify-center items-center border border-outline/30 text-primary px-8 py-4 rounded-lg font-manrope font-light text-base md:text-lg hover:bg-surface-container-low transition-all text-center"
          >
            View FAQs
          </RouterLink>
        </div>
      </div>
      <div class="md:col-span-5 relative">
        <div class="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl shadow-primary/5">
          <img
            :src="specialty.heroImage"
            alt=""
            class="w-full h-full object-cover grayscale-[20%] brightness-105"
          >
        </div>
        <div
          v-if="specialty.overlay"
          class="absolute -bottom-6 -left-4 md:-left-6 bg-surface-container-lowest/85 backdrop-blur-xl p-6 md:p-8 rounded-xl shadow-xl max-w-xs border border-outline-variant/15 hidden sm:block"
        >
          <div class="flex items-center gap-4 mb-4">
            <div class="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
              <span class="material-symbols-outlined">{{ specialty.overlay.icon }}</span>
            </div>
            <div>
              <p class="font-manrope font-medium text-sm text-on-surface">
                {{ specialty.overlay.title }}
              </p>
              <p class="font-lato text-xs text-on-surface-variant">
                {{ specialty.overlay.subtitle }}
              </p>
            </div>
          </div>
          <div class="w-full h-1 bg-surface-container-high rounded-full overflow-hidden">
            <div class="w-3/4 h-full bg-primary rounded-full" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  specialty: {
    type: Object,
    required: true,
  },
})
</script>
