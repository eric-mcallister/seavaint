<template>
  <section class="relative min-h-[360px] md:h-[400px] flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 z-0">
      <img
        alt=""
        class="w-full h-full object-cover object-center opacity-10 grayscale"
        aria-hidden="true"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSntLbnNJkEdNucVHQdN37KBC4e14YzYpYZY5Tp1obeK13dXvveFq5H2Y8Y6gerfDjtDi35vYPmyrMXPGHss6B1-xZ5Yjlbv3N0t3w8wdn4x04x5x2h8c60zYsDIwNCVLIOEtDsdJlKmOXGmNT6xwBT827sKp6Y6h9mRTHlpCrM0kLh_s_rBW1fwqIu0mpwMR0kBS5nnJiL1Ul5KTMVVS-slqUtecMB5o9yOz0dv0g4cOx9WhKkL6JS2SZ5Vt9-e0GRzXa_x8cp5oS"
      >
    </div>
    <div class="relative z-10 text-center max-w-3xl px-6 py-16 md:py-0">
      <h1 class="text-4xl md:text-5xl font-manrope font-medium tracking-tight text-on-surface mb-6">
        Help Center &amp; FAQs
      </h1>
      <p class="font-lato text-on-surface-variant text-lg mb-10 leading-relaxed font-normal">
        Orchestrating your wellness with precision. Find answers to common questions about our virtual healthcare ecosystem and specialty services.
      </p>
      <div class="relative group max-w-2xl mx-auto">
        <span class="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-outline pointer-events-none">search</span>
        <input
          type="search"
          class="w-full pl-12 pr-6 py-4 bg-surface-container-lowest border-none rounded-xl shadow-sm focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all text-on-surface placeholder:text-outline font-lato text-sm"
          placeholder="Search by condition, symptom, or topic (e.g., diabetes, anxiety, billing)…"
          aria-label="Search help topics by condition or topic"
        >
      </div>
    </div>
  </section>
</template>

<script setup></script>
