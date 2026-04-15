<template>
  <section class="relative min-h-[520px] md:min-h-[640px] flex items-center overflow-hidden bg-surface">
    <div class="absolute inset-0 z-0">
      <img
        :src="treatment.heroImage"
        alt=""
        class="w-full h-full object-cover grayscale-[20%] opacity-90"
      >
      <div class="absolute inset-0 bg-gradient-to-r from-surface via-surface/65 to-transparent" />
    </div>
    <div class="max-w-7xl mx-auto px-8 w-full relative z-10 pt-12 pb-20 md:py-20">
      <nav class="font-lato text-sm text-on-surface-variant mb-8">
        <RouterLink
          to="/services"
          class="hover:text-primary transition-colors"
        >
          Services Hub
        </RouterLink>
        <span class="mx-2 opacity-60">/</span>
        <RouterLink
          :to="`/services/${treatment.specialtySlug}`"
          class="hover:text-primary transition-colors"
        >
          {{ treatment.specialtyLabel }}
        </RouterLink>
        <span class="mx-2 opacity-60">/</span>
        <span class="text-on-surface font-manrope">{{ treatment.title }}</span>
      </nav>
      <div class="max-w-2xl">
        <span class="font-lato text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4 block">{{
          treatment.heroEyebrow
        }}</span>
        <h1 class="font-manrope font-medium text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.05] text-on-surface mb-6">
          <span class="block">{{ treatment.heroLineBefore }}</span>
          <span class="text-primary block">{{ treatment.heroLineAccent }}</span>
        </h1>
        <p class="font-lato text-lg md:text-xl text-on-surface-variant max-w-lg mb-10 leading-relaxed font-normal">
          {{ treatment.heroSubtitle }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            class="inline-flex justify-center items-center bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-lg font-manrope font-light text-base shadow-lg hover:brightness-110 active:scale-[0.98] transition-all text-center"
          >
            Start Virtual Assessment
          </a>
          <a
            href="#contact"
            class="inline-flex justify-center items-center bg-surface-container-low text-primary px-8 py-4 rounded-lg font-manrope font-light text-base hover:bg-surface-container-high transition-colors text-center border border-outline-variant/20"
          >
            Speak with a Specialist
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  treatment: {
    type: Object,
    required: true,
  },
})
</script>
