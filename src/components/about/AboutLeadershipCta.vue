<template>
  <section class="py-20 md:py-28 bg-surface">
    <div class="max-w-4xl mx-auto px-8 text-center">
      <h2 class="text-3xl md:text-4xl font-manrope font-medium text-on-surface mb-6 md:mb-8 tracking-tight">
        Connect with Our Executive Leadership
      </h2>
      <p class="font-lato text-on-surface-variant mb-10 md:mb-12 text-lg font-normal">
        Inquire about our strategic partnerships and global medical excellence initiatives.
      </p>
      <router-link
        :to="{ path: '/', hash: '#contact' }"
        class="inline-block bg-primary hover:bg-primary-container text-on-primary px-10 py-4 rounded-lg font-manrope font-light text-lg shadow-xl shadow-primary/20 transition-all hover:scale-[1.02] active:scale-95"
      >
        Contact Our Team
      </router-link>
    </div>
  </section>
</template>

<script setup></script>
