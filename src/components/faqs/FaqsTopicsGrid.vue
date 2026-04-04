<template>
  <section class="max-w-7xl mx-auto px-6 py-16 md:py-24">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
      <!-- Services & Care Paths -->
      <div class="md:col-span-7 bg-surface-container-low p-8 md:p-10 rounded-xl">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-primary-container/10 rounded-full flex items-center justify-center text-primary">
            <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">medical_services</span>
          </div>
          <h2 class="text-2xl font-manrope font-medium text-on-surface">Services &amp; Care Paths</h2>
        </div>
        <div class="space-y-6">
          <details class="group">
            <summary class="flex justify-between items-center cursor-pointer list-none py-4 border-b border-outline-variant/20 font-manrope font-medium text-on-surface">
              <span>What care paths are available at Seavaint Health?</span>
              <span class="material-symbols-outlined group-open:rotate-180 transition-transform shrink-0">expand_more</span>
            </summary>
            <div class="pt-4 font-lato text-on-surface-variant leading-relaxed font-normal text-sm">
              Our comprehensive services include primary care, specialized chronic disease management, and preventive health screenings. All care paths are designed for virtual integration with local diagnostics.
            </div>
          </details>
          <details class="group">
            <summary class="flex justify-between items-center cursor-pointer list-none py-4 border-b border-outline-variant/20 font-manrope font-medium text-on-surface">
              <span>How do I transition to specialist care?</span>
              <span class="material-symbols-outlined group-open:rotate-180 transition-transform shrink-0">expand_more</span>
            </summary>
            <div class="pt-4 font-lato text-on-surface-variant leading-relaxed font-normal text-sm">
              Our navigators coordinate seamless referrals to a curated network of premier specialists, ensuring continuity of your digital health records.
            </div>
          </details>
        </div>
      </div>

      <!-- Telehealth & Tech -->
      <div class="md:col-span-5 bg-surface-container-high p-8 md:p-10 rounded-xl">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-primary-container/10 rounded-full flex items-center justify-center text-primary">
            <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">videocam</span>
          </div>
          <h2 class="text-2xl font-manrope font-medium text-on-surface">Telehealth &amp; Tech</h2>
        </div>
        <div class="space-y-4">
          <div class="p-4 bg-surface-container-lowest/50 rounded-lg">
            <h3 class="font-manrope font-medium text-primary mb-2">California Coverage</h3>
            <p class="text-sm font-lato text-on-surface-variant font-normal">
              We currently provide full virtual coverage across the state of California with HIPAA-compliant secure streaming.
            </p>
          </div>
          <div class="p-4">
            <h3 class="font-manrope font-medium text-on-surface mb-2">Technical Requirements</h3>
            <p class="text-sm font-lato text-on-surface-variant font-normal">
              Any modern smartphone or desktop with a camera and broadband connection (min 5Mbps) is sufficient for high-definition visits.
            </p>
          </div>
        </div>
      </div>

      <!-- Pricing & Insurance -->
      <div class="md:col-span-5 bg-surface-container-high p-8 md:p-10 rounded-xl">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-primary-container/10 rounded-full flex items-center justify-center text-primary">
            <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">payments</span>
          </div>
          <h2 class="text-2xl font-manrope font-medium text-on-surface">Pricing &amp; Insurance</h2>
        </div>
        <div class="space-y-4">
          <p class="font-lato text-on-surface-variant leading-relaxed font-normal text-sm">
            Seavaint Health operates as a transparent, cash-based practice. We do not bill insurance directly, which allows us to prioritize your care over paperwork.
          </p>
          <div class="flex items-start gap-4 p-4 border border-outline-variant/30 rounded-lg">
            <span class="material-symbols-outlined text-primary shrink-0">credit_card</span>
            <div>
              <h4 class="font-manrope font-medium text-sm uppercase tracking-wider mb-1 text-on-surface">Advance Care Cards</h4>
              <p class="text-xs font-lato text-on-surface-variant font-normal">
                We proudly accept Advance Care Cards for flexible healthcare financing and payment plans.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Psychiatry Services -->
      <div class="md:col-span-7 bg-surface-container-low p-8 md:p-10 rounded-xl">
        <div class="flex items-center gap-4 mb-8">
          <div class="w-12 h-12 bg-primary-container/10 rounded-full flex items-center justify-center text-primary">
            <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">psychology</span>
          </div>
          <h2 class="text-2xl font-manrope font-medium text-on-surface">Psychiatry Services</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div class="p-6 bg-surface-container-lowest rounded-lg border-l-4 border-primary shadow-sm">
            <h4 class="font-manrope font-medium text-on-surface mb-3">Medication Management</h4>
            <p class="text-sm font-lato text-on-surface-variant font-normal">
              Virtual psychiatric evaluations and continuous management for behavioral health needs.
            </p>
          </div>
          <div class="p-6 bg-surface-container-lowest rounded-lg shadow-sm">
            <h4 class="font-manrope font-medium text-on-surface mb-3">Holistic Wellness</h4>
            <p class="text-sm font-lato text-on-surface-variant font-normal">
              Integrating mental health with primary care to treat the whole person, not just symptoms.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
