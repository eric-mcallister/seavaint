<template>
  <section class="py-16 md:py-24 bg-surface-container-low">
    <div class="max-w-7xl mx-auto px-8">
      <div class="flex flex-col lg:flex-row-reverse gap-12 lg:gap-16 items-start">
        <div class="w-full lg:w-1/3 lg:sticky lg:top-32">
          <div class="rounded-xl overflow-hidden bg-surface-container-high aspect-[3/4] mb-8 shadow-sm">
            <img
              alt="Dr. Kenneth Van Williams"
              class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              src="https://images.squarespace-cdn.com/content/v1/680734e550a37e25f5115e1a/539d9c8e-5bc5-4484-b0f7-c816c1eb871a/IMG_3811.JPG"
            >
          </div>
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <span class="w-12 h-0.5 bg-primary" />
              <span class="text-primary font-manrope font-medium tracking-widest text-xs uppercase">Medical Director</span>
            </div>
            <h2 class="text-3xl font-manrope font-medium text-on-surface">Dr. Kenneth Van Williams</h2>
            <p class="text-on-surface-variant font-lato text-sm leading-relaxed font-normal">DO, Board-Certified Family Medicine</p>
          </div>
        </div>
        <div class="w-full lg:w-2/3 space-y-12">
          <div class="space-y-6">
            <h3 class="text-xl font-manrope font-medium text-on-surface border-b border-outline-variant/20 pb-4">
              Professional Overview
            </h3>
            <p class="text-lg font-lato text-on-surface-variant leading-relaxed font-normal">
              Dr. Kenneth Van Williams, DO, one of our collaborative doctors, is a board-certified Family Medicine physician with over 30 years of clinical experience. He earned his Doctor of Osteopathic Medicine degree from the Philadelphia College of Osteopathic Medicine and is also certified in Osteopathic Manipulative Treatment (OMT). Dr. Williams is dedicated to providing compassionate, patient-centered care and is known for his clear communication and approachable style.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="p-8 bg-surface-container-lowest rounded-xl shadow-sm">
              <span class="material-symbols-outlined text-primary mb-4 block">stethoscope</span>
              <h4 class="font-manrope font-medium text-on-surface mb-4">Clinical Mastery</h4>
              <p class="text-on-surface-variant font-lato text-sm leading-relaxed font-normal">
                Decades of experience in managing multi-generational patient health and overseeing complex primary care environments.
              </p>
            </div>
            <div class="p-8 bg-surface-container-lowest rounded-xl shadow-sm">
              <span class="material-symbols-outlined text-primary mb-4 block">workspace_premium</span>
              <h4 class="font-manrope font-medium text-on-surface mb-4">Qualifications</h4>
              <ul class="space-y-3 text-on-surface-variant font-lato text-sm">
                <li class="flex items-start gap-2">
                  <span class="material-symbols-outlined text-xs mt-1 shrink-0">check_circle</span>
                  Philadelphia College of Osteopathic Medicine (DO)
                </li>
                <li class="flex items-start gap-2">
                  <span class="material-symbols-outlined text-xs mt-1 shrink-0">check_circle</span>
                  Certified in Osteopathic Manipulative Treatment (OMT)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
