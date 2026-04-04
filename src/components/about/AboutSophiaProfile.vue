<template>
  <section class="py-16 md:py-24 bg-surface">
    <div class="max-w-7xl mx-auto px-8">
      <div class="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        <div class="w-full lg:w-1/3 lg:sticky lg:top-32">
          <div class="rounded-xl overflow-hidden bg-surface-container-high aspect-[3/4] mb-8 shadow-sm">
            <img
              alt="Sophia Nairima"
              class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              src="https://images.squarespace-cdn.com/content/v1/680734e550a37e25f5115e1a/a0cca222-30ff-4022-840c-a6941c6ecd0e/DSC03057.jpg"
            >
          </div>
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <span class="w-12 h-0.5 bg-primary" />
              <span class="text-primary font-manrope font-medium tracking-widest text-xs uppercase">Founding Partner</span>
            </div>
            <h2 class="text-3xl font-manrope font-medium text-on-surface">Sophia Nairima</h2>
            <p class="text-primary font-manrope font-light tracking-wide uppercase text-xs">
              Healthcare Strategy & Patient Experience
            </p>
          </div>
        </div>
        <div class="w-full lg:w-2/3 space-y-12">
          <div class="space-y-6">
            <h3 class="text-xl font-manrope font-medium text-on-surface border-b border-outline-variant/20 pb-4">
              Professional Overview
            </h3>
            <div class="space-y-4 text-lg font-lato text-on-surface-variant leading-relaxed font-normal">
              <p>
                Sophia is a passionate and devoted healthcare professional with a strong background in both inpatient and outpatient care. She earned her Bachelor of Science in Nursing and her Master of Science in Nursing – Family Nurse Practitioner from West Coast University in Los Angeles and Anaheim, respectively. She is currently advancing her expertise as a Psychiatric Mental Health Nurse Practitioner (PMHNP) candidate, graduated from Maryville University.
              </p>
              <p>
                With over a decade of healthcare experience—including roles in hospitals, rehabilitation centers, and treatment centers—Sophia brings a deep understanding of whole-person care. Her training has included urgent care services, chronic disease management, and telehealth visits, with additional experience in aesthetic procedures such as Botox, fillers, and microneedling with PRP.
              </p>
              <p>
                Sophia holds active certifications in Advanced Cardiac Life Support, Pediatric Advanced Life Support, and Basic Life Support, and she is fully licensed in California as both an RN and FNP.
              </p>
              <p>
                Whether you're seeking support for acute health issues, chronic disease management, or mental health services, Seavaint Health is committed to making quality care accessible and convenient through secure virtual visits.
              </p>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="p-8 bg-surface-container-low rounded-xl">
              <span class="material-symbols-outlined text-primary mb-4 block">school</span>
              <h4 class="font-manrope font-medium text-on-surface mb-4">Academic Credentials</h4>
              <ul class="space-y-3 text-on-surface-variant font-lato text-sm">
                <li class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-xs shrink-0 leading-none">check_circle</span>
                  <span>B.S. in Nursing from West Coast University in Los Angeles</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-xs shrink-0 leading-none">check_circle</span>
                  <span>M.S. in Nursing from Anaheim University in Los Angeles</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-xs shrink-0 leading-none">check_circle</span>
                  <span>PMHNP-C at Maryville University</span>
                </li>
              </ul>
            </div>
            <div class="p-8 bg-surface-container-low rounded-xl">
              <span class="material-symbols-outlined text-primary mb-4 block">verified</span>
              <h4 class="font-manrope font-medium text-on-surface mb-4">Advanced Certifications</h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="cert in advancedCertPills"
                  :key="cert"
                  class="bg-secondary-container text-on-secondary-fixed font-manrope font-light text-xs px-3 py-1 rounded-full"
                >
                  {{ cert }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const advancedCertPills = ['RN', 'MSN', 'FNP-BC', 'PMHNP-C']
</script>
