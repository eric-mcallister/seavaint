<template>
  <section class="bg-surface-container-high py-16 md:py-24">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-8">
        <div>
          <span class="font-manrope font-medium text-xs uppercase tracking-[0.2em] text-primary mb-4 block">Knowledge Base</span>
          <h2 class="text-3xl md:text-4xl font-manrope font-medium text-on-surface max-w-lg leading-tight">
            Expert guides and clinical insights at your fingertips.
          </h2>
        </div>
        <a class="inline-flex items-center gap-2 font-manrope font-medium text-primary group" href="#">
          View All Resources
          <span class="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
        </a>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <article class="group cursor-pointer">
          <div class="aspect-[4/5] bg-stone-200 dark:bg-stone-800 rounded-xl mb-6 overflow-hidden relative">
            <img
              alt=""
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuBC6bYHYFSIkBv0opssFnLzXDqsf5J4oRmjJ0kTox2EqHgPjwuDsXrSshRWXfcY4qYHVWhTO0RzdZbQ98aofsWkxWFfrh5S9U499rXKfVwvqgmcx4W5S6RkdBlF_GV3vP6IJq4RXguRObaR4nhUrXI-UXEOOD0tvP4U0kiq8GmJ48z_oOOG7edmzusy6Z_uWRIwpSZ0aRVPioHrrocCMPpJfFCK47cBxJdp9xkPNwhVvjsqzfx16zYxjw3guTeCM1DIgOzsjTy5Sr"
            >
            <div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span class="material-symbols-outlined text-white text-4xl">download</span>
            </div>
          </div>
          <h3 class="font-manrope font-medium text-xl text-on-surface mb-2">Telehealth Best Practices</h3>
          <p class="font-lato text-on-surface-variant text-sm font-normal">PDF Guide • 2.4 MB</p>
        </article>
        <router-link to="/about" class="group cursor-pointer text-left block">
          <div class="aspect-[4/5] bg-stone-200 dark:bg-stone-800 rounded-xl mb-6 overflow-hidden relative">
            <img
              alt=""
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoOY6oX3PAN9amu9_8um53MAVHvUFUk-OPePafiEcK4qoZsPXTiYJj5VI8hGsoyY8--xo0MRKbx-RHRKV_Mxm5skjwFeQGTo4lQMxq6W5_CnP2y7axHCIxBZgiBV8dPnkkts_1xDn42BmaG1SUza-YMt5MKIhBLectyq17Kk0KafQXrAGU19cTFXABfpNu8bz5S11a3mzIibcFtCo5NfZxcD0tkKOjOT8KdRyhu5tKIvjM8-ZE3WQJWEqkm5xrcdDjhk9Xy-INEDoe"
            >
            <div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span class="material-symbols-outlined text-white text-4xl">group</span>
            </div>
          </div>
          <h3 class="font-manrope font-medium text-xl text-on-surface mb-2">Meet Our Clinical Experts</h3>
          <p class="font-lato text-on-surface-variant text-sm font-normal">Interactive Directory</p>
        </router-link>
        <article class="group cursor-pointer">
          <div class="aspect-[4/5] bg-stone-200 dark:bg-stone-800 rounded-xl mb-6 overflow-hidden relative">
            <img
              alt=""
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBWAwdELBSiiVYnnFACmVbqz23N6r8wQdl-dHMlw_0qsYqxcw8KebSu7dPi59aZ0gzf7TaxoeqKTkOmOLSVTSk0wG7s8Rb3jqi1p-jHIP70GrnX6kQ-_NDy4YYzUt8EeDDMXVkBKxKV4WysUVkkDxhDWJGWRz_OXd7QHdtMyct9Pnt7hM-HP5SJAJm2YpWQcyFxaU7WkN2VBhYWLTMYC7SuZMT-_DrKECi--VLn5GnjOKfpfSMcy5zs2kuphPL6Kp1sBRxqpDSpCUj"
            >
            <div class="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span class="material-symbols-outlined text-white text-4xl">download</span>
            </div>
          </div>
          <h3 class="font-manrope font-medium text-xl text-on-surface mb-2">Personalized Care Mapping</h3>
          <p class="font-lato text-on-surface-variant text-sm font-normal">Checklist • 1.1 MB</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup></script>
