<template>
  <article
    class="lg:col-span-1 bg-primary p-8 md:p-10 rounded-xl flex flex-col justify-between text-on-primary editorial-shadow"
  >
    <div>
      <span class="font-label text-xs font-bold tracking-[0.2em] uppercase opacity-70 mb-6 block">
        Stay Informed
      </span>
      <h3 class="font-headline text-2xl md:text-3xl font-extrabold leading-tight mb-6">
        The Meridian Briefing
      </h3>
      <p class="text-on-primary/80 text-sm font-light leading-relaxed mb-8">
        Weekly intelligence on the intersection of healthcare, maritime logistics, and global commerce.
      </p>
      <form
        class="space-y-4"
        @submit.prevent
      >
        <label class="sr-only" for="blog-newsletter-email">Professional email</label>
        <input
          id="blog-newsletter-email"
          type="email"
          autocomplete="email"
          placeholder="Professional Email"
          class="w-full bg-white/10 border-b border-white/30 p-3 text-white placeholder-white/50 focus:outline-none focus:border-white transition-all text-sm rounded-lg"
        >
        <button
          type="button"
          class="w-full bg-on-primary text-primary py-4 rounded-lg font-bold text-sm hover:bg-surface transition-colors"
        >
          Subscribe Now
        </button>
      </form>
    </div>
    <p class="text-[10px] opacity-50 mt-6 font-label uppercase tracking-widest italic">
      Zero spam. Pure intelligence.
    </p>
  </article>
</template>
