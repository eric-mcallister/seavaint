<template>
  <section class="py-16 md:py-24 px-8 text-center bg-surface relative overflow-hidden">
    <div class="absolute inset-0 opacity-[0.06] pointer-events-none select-none">
      <span class="material-symbols-outlined text-[min(40rem,90vw)] absolute -bottom-40 -left-40 text-primary">waves</span>
    </div>
    <div class="relative z-10 max-w-2xl mx-auto">
      <h2 class="font-manrope font-medium text-4xl md:text-5xl text-on-surface mb-8 tracking-tight">
        Start Your Journey Today
      </h2>
      <p class="font-lato text-on-surface-variant text-lg mb-10 font-normal">
        Take the helm of your health with Seavaint’s precision orchestration. Your first consultation is just minutes away.
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="#contact"
          class="inline-flex justify-center bg-primary text-on-primary px-10 py-5 rounded-lg font-manrope font-light text-xl hover:shadow-xl transition-all active:scale-[0.98]"
        >
          Schedule a Consultation
        </a>
        <a
          href="#contact"
          class="inline-flex justify-center bg-surface-container-high text-on-surface px-10 py-5 rounded-lg font-manrope font-light text-xl hover:bg-surface-container-highest transition-all border border-outline-variant/20"
        >
          Speak to an Advisor
        </a>
      </div>
      <p class="mt-8 font-lato text-xs text-on-surface-variant opacity-70">
        No long-term contracts. Cancel memberships anytime.
      </p>
    </div>
  </section>
</template>

<script setup></script>
