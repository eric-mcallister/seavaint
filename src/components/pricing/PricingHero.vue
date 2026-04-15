<template>
  <section class="relative px-8 py-16 md:py-24 overflow-hidden bg-surface">
    <div class="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
      <div class="md:col-span-7 z-10">
        <span
          class="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-manrope text-xs font-medium tracking-widest uppercase mb-6"
        >
          Transparency First
        </span>
        <h1 class="font-manrope font-medium text-4xl md:text-6xl lg:text-7xl tracking-tight text-on-surface mb-8 leading-[1.1]">
          Transparent Care, <br >
          <span class="text-primary italic">Orchestrated</span> for You.
        </h1>
        <p class="font-lato text-lg md:text-xl text-on-surface-variant max-w-2xl mb-10 leading-relaxed font-normal">
          Experience precision healthcare without the fog of traditional insurance. Whether it is a one-time specialist consult or a premium health membership, our direct-pay model puts you at the helm of your wellness journey.
        </p>
        <div class="flex flex-wrap gap-4">
          <a
            href="#pricing-plans"
            class="inline-flex justify-center items-center bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-lg font-manrope font-light text-lg hover:shadow-lg transition-all active:scale-[0.98]"
          >
            Explore Memberships
          </a>
          <router-link
            to="/services"
            class="inline-flex justify-center items-center bg-surface-container-low border border-outline/20 text-on-surface px-8 py-4 rounded-lg font-manrope font-light text-lg hover:bg-surface-container-high transition-all"
          >
            View One-Time Visits
          </router-link>
        </div>
      </div>
      <div class="md:col-span-5 relative">
        <div class="absolute -top-12 -left-12 w-64 h-64 bg-tertiary-fixed opacity-20 rounded-full blur-3xl" />
        <img
          class="w-full aspect-[4/5] object-cover rounded-xl editorial-shadow relative z-10"
          alt=""
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEdn8C02mnAWYXuTR0_ZOvvxMUn5o-LiyiOyNCAAEeqOFKhhaYpA4k3Bsg0HlD3L1cI3aAIliuDS7oQpS3Z_RASongKn1gxuI00rWi88Bw_C5OVOKjsQZleStVWTVseffmRlJwWjE3KhIHEXv6kOHIceNzbwXLPku4Zn1EuhOqHG0_PlI5xfUa-1Aj1yn1c7m6qV6gMgXX_78vZB2E7dX2f6mvyqCyGbYV4r6pKhIKcEr03VtKYEfUOkPuoa31vqZ_h8BoIWpWsUuc"
        >
      </div>
    </div>
  </section>
</template>

<script setup></script>
