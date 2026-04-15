<template>
  <section
    id="pricing-plans"
    class="py-16 md:py-24 bg-surface scroll-mt-24"
  >
    <div class="max-w-7xl mx-auto px-8">
      <div class="text-center mb-14 md:mb-20">
        <h2 class="font-manrope font-medium text-3xl md:text-4xl tracking-tight text-on-surface mb-4">
          Select Your Plan
        </h2>
        <p class="font-lato text-on-surface-variant max-w-2xl mx-auto font-normal">
          No hidden fees. No surprise bills. Just direct, premium access to the best in healthcare.
        </p>
      </div>
      <div class="grid md:grid-cols-3 gap-8 items-stretch">
        <!-- Urgent Care -->
        <div
          class="bg-surface-container-low p-8 md:p-10 rounded-xl flex flex-col transition-transform hover:-translate-y-1 duration-300 border border-outline-variant/10"
        >
          <div class="mb-8">
            <span class="font-manrope text-xs uppercase tracking-widest text-on-surface-variant/80 block mb-2">On-Demand</span>
            <h3 class="font-manrope font-medium text-2xl md:text-3xl text-on-surface">
              Urgent Care
            </h3>
          </div>
          <div class="mb-8 flex items-baseline gap-1">
            <span class="text-4xl font-manrope font-medium text-on-surface">$149</span>
            <span class="text-on-surface-variant font-lato text-sm">/ visit</span>
          </div>
          <ul class="space-y-4 mb-12 flex-grow font-lato text-sm text-on-surface">
            <li class="flex items-start gap-3">
              <span class="material-symbols-outlined text-primary text-xl shrink-0" style="font-variation-settings: 'FILL' 1">check_circle</span>
              <span>Same-day availability</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="material-symbols-outlined text-primary text-xl shrink-0" style="font-variation-settings: 'FILL' 1">check_circle</span>
              <span>Common prescription sends</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="material-symbols-outlined text-primary text-xl shrink-0" style="font-variation-settings: 'FILL' 1">check_circle</span>
              <span>Standard labs included</span>
            </li>
          </ul>
          <a
            href="#contact"
            class="w-full py-4 text-center border border-outline/30 rounded-lg font-manrope font-light hover:bg-surface-container-high transition-all"
          >
            Book Visit
          </a>
        </div>

        <!-- Featured membership -->
        <div class="bg-primary p-1 rounded-xl shadow-2xl transition-transform hover:-translate-y-1 duration-300">
          <div class="bg-surface-container-lowest h-full p-8 md:p-10 rounded-[0.5rem] flex flex-col relative overflow-hidden">
            <div class="absolute top-0 right-0 bg-primary text-on-primary px-4 py-2 rounded-bl-xl font-manrope text-[10px] uppercase tracking-widest font-medium">
              Most Popular
            </div>
            <div class="mb-8">
              <span class="font-manrope text-xs uppercase tracking-widest text-on-surface-variant/80 block mb-2">Comprehensive</span>
              <h3 class="font-manrope font-medium text-2xl md:text-3xl text-on-surface">
                Seavaint Member
              </h3>
            </div>
            <div class="mb-8 flex items-baseline gap-1">
              <span class="text-4xl font-manrope font-medium text-on-surface">$199</span>
              <span class="text-on-surface-variant font-lato text-sm">/ month</span>
            </div>
            <ul class="space-y-4 mb-12 flex-grow font-lato text-sm text-on-surface">
              <li class="flex items-start gap-3">
                <span class="material-symbols-outlined text-primary text-xl shrink-0" style="font-variation-settings: 'FILL' 1">star</span>
                <span class="font-medium">Unlimited Urgent Care</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="material-symbols-outlined text-primary text-xl shrink-0" style="font-variation-settings: 'FILL' 1">check_circle</span>
                <span>2 Specialist consults/year</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="material-symbols-outlined text-primary text-xl shrink-0" style="font-variation-settings: 'FILL' 1">check_circle</span>
                <span>24/7 Priority Concierge</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="material-symbols-outlined text-primary text-xl shrink-0" style="font-variation-settings: 'FILL' 1">check_circle</span>
                <span>Mental Health screenings</span>
              </li>
            </ul>
            <a
              href="#contact"
              class="w-full py-4 text-center bg-primary text-on-primary rounded-lg font-manrope font-light hover:brightness-110 transition-all"
            >
              Start Membership
            </a>
          </div>
        </div>

        <!-- Specialist -->
        <div
          class="bg-surface-container-low p-8 md:p-10 rounded-xl flex flex-col transition-transform hover:-translate-y-1 duration-300 border border-outline-variant/10"
        >
          <div class="mb-8">
            <span class="font-manrope text-xs uppercase tracking-widest text-on-surface-variant/80 block mb-2">High Expertise</span>
            <h3 class="font-manrope font-medium text-2xl md:text-3xl text-on-surface">
              Specialist Consult
            </h3>
          </div>
          <div class="mb-8 flex items-baseline gap-1">
            <span class="text-4xl font-manrope font-medium text-on-surface">$299</span>
            <span class="text-on-surface-variant font-lato text-sm">/ visit</span>
          </div>
          <ul class="space-y-4 mb-12 flex-grow font-lato text-sm text-on-surface">
            <li class="flex items-start gap-3">
              <span class="material-symbols-outlined text-primary text-xl shrink-0" style="font-variation-settings: 'FILL' 1">check_circle</span>
              <span>Specialists only (Cardio, Ortho, etc.)</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="material-symbols-outlined text-primary text-xl shrink-0" style="font-variation-settings: 'FILL' 1">check_circle</span>
              <span>Comprehensive diagnostics review</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="material-symbols-outlined text-primary text-xl shrink-0" style="font-variation-settings: 'FILL' 1">check_circle</span>
              <span>Detailed orchestration plan</span>
            </li>
          </ul>
          <a
            href="#contact"
            class="w-full py-4 text-center border border-outline/30 rounded-lg font-manrope font-light hover:bg-surface-container-high transition-all"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
