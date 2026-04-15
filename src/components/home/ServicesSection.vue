<template>
  <section class="py-32 bg-surface-container-low" id="services">
    <div class="max-w-7xl mx-auto px-8">
      <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div class="max-w-xl">
          <h2 class="font-manrope font-medium text-4xl md:text-5xl tracking-tight text-on-surface mb-4">
            What can we help you with today?
          </h2>
          <p class="font-lato text-on-surface-variant text-lg font-normal">
            Specialized care paths designed for your specific health journey.
          </p>
        </div>
        <router-link
          to="/services"
          class="text-primary font-manrope font-light flex items-center gap-2 group"
        >
          View All Services
          <span class="material-symbols-outlined group-hover:translate-x-1 transition-transform">trending_flat</span>
        </router-link>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <RouterLink
          v-for="card in serviceCards"
          :key="card.title"
          :to="card.to"
          class="bg-surface-container-lowest p-10 rounded-xl border border-transparent shadow-sm transition-all duration-200 hover:border-primary hover:shadow-[0_12px_40px_-8px_rgba(154,37,29,0.4)] block no-underline text-inherit cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
        >
          <div class="w-14 h-14 rounded-full bg-primary-container/10 flex items-center justify-center text-primary mb-8">
            <span class="material-symbols-outlined text-3xl">{{ card.icon }}</span>
          </div>
          <h3 class="font-manrope font-medium text-2xl text-on-surface mb-4">{{ card.title }}</h3>
          <ul class="space-y-4 text-on-surface-variant font-manrope font-light text-sm">
            <li v-for="item in card.items" :key="item" class="flex items-center gap-3">
              <span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {{ item }}
            </li>
          </ul>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const serviceCards = [
  {
    icon: 'female',
    title: "Women's Health",
    to: '/services/womens-health',
    items: ['Hormonal Optimization', 'Reproductive Wellness', 'Preventative Screenings'],
  },
  {
    icon: 'clinical_notes',
    title: 'Chronic Conditions',
    to: '/services/chronic-conditions',
    items: ['Hypertension Management', 'Diabetes Care', 'Long-term Wellness Plans'],
  },
  {
    icon: 'vaccines',
    title: 'General Illness',
    to: '/services/acute-care-general-issues',
    items: ['Urgent Care Consults', 'Cold & Flu Relief', 'Allergy Management'],
  },
]
</script>
