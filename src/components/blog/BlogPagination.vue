<template>
  <section class="max-w-[1440px] mx-auto px-6 sm:px-8 mt-16 md:mt-20 flex justify-center">
    <div class="flex items-center gap-4">
      <button
        type="button"
        class="w-12 h-12 flex items-center justify-center rounded-full border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container-high transition-all"
        aria-label="Previous page"
        disabled
      >
        <span class="material-symbols-outlined">chevron_left</span>
      </button>
      <span class="font-label text-sm font-bold text-on-surface">Page 1 of 1</span>
      <button
        type="button"
        class="w-12 h-12 flex items-center justify-center rounded-full border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container-high transition-all"
        aria-label="Next page"
        disabled
      >
        <span class="material-symbols-outlined">chevron_right</span>
      </button>
    </div>
  </section>
</template>
