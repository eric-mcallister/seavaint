<template>
  <section class="py-16 md:py-24 bg-surface-container-low">
    <div class="max-w-7xl mx-auto px-8">
      <div class="max-w-2xl mx-auto md:mx-0">
        <div class="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center mb-6">
          <span class="material-symbols-outlined text-primary">{{ treatment.icon }}</span>
        </div>
        <h2 class="font-manrope font-medium text-2xl md:text-3xl tracking-tight text-on-surface mb-6">
          {{ treatment.title }}
        </h2>
        <p class="font-lato text-on-surface-variant leading-relaxed text-base md:text-lg mb-8">
          {{ treatment.pillarBody }}
        </p>
        <ul class="space-y-3 font-lato text-sm text-on-surface-variant">
          <li
            v-for="(line, i) in treatment.pillarBullets"
            :key="i"
            class="flex items-start gap-2"
          >
            <span class="material-symbols-outlined text-xs text-primary shrink-0 mt-0.5">check_circle</span>
            {{ line }}
          </li>
        </ul>
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
