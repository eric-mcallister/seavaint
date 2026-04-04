<template>
  <section class="max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
    <div class="bg-surface-container-lowest p-10 md:p-16 rounded-3xl shadow-2xl shadow-primary/5 border border-outline-variant/10">
      <h2 class="text-3xl md:text-4xl font-manrope font-medium text-on-surface mb-6">
        Still have questions?
      </h2>
      <p class="font-lato text-on-surface-variant text-lg mb-10 max-w-xl mx-auto leading-relaxed font-normal">
        Our care navigators are standing by to guide you through your healthcare journey. Precision wellness starts with a conversation.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <router-link
          :to="{ path: '/', hash: '#contact' }"
          class="inline-flex justify-center bg-primary text-on-primary px-10 py-4 rounded-xl font-manrope font-light shadow-lg shadow-primary/20 hover:brightness-110 transition-all active:scale-95"
        >
          Contact Us
        </router-link>
        <router-link
          :to="{ path: '/', hash: '#contact' }"
          class="inline-flex justify-center bg-surface-container-high text-on-surface px-10 py-4 rounded-xl font-manrope font-light hover:bg-surface-container-highest transition-all"
        >
          Schedule a Call
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup></script>
