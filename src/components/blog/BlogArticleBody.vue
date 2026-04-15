<template>
  <article class="w-full editorial-text text-left">
    <template
      v-for="(section, idx) in sections"
      :key="idx"
    >
      <div
        v-if="section.type === 'lead'"
        class="text-on-surface font-body text-lg sm:text-xl leading-relaxed mb-10 md:mb-12"
      >
        {{ section.text }}
      </div>
      <h2
        v-else-if="section.type === 'h2'"
        class="text-3xl font-headline font-bold text-on-surface mb-6 tracking-tight"
      >
        {{ section.text }}
      </h2>
      <p
        v-else-if="section.type === 'paragraph'"
        class="text-on-surface-variant text-base sm:text-[1.0625rem] leading-[1.75]"
      >
        {{ section.text }}
      </p>
      <blockquote
        v-else-if="section.type === 'blockquote'"
        class="my-16 pl-12 border-l-4 border-primary italic"
      >
        <p class="text-2xl sm:text-3xl font-headline font-light text-on-surface leading-snug">
          “{{ section.quote }}”
        </p>
        <footer
          v-if="section.footer"
          class="mt-4 font-label text-sm text-primary font-bold uppercase tracking-widest not-italic"
        >
          — {{ section.footer }}
        </footer>
      </blockquote>
      <div
        v-else-if="section.type === 'callout'"
        class="my-12 p-8 bg-surface-container-low rounded-xl border-l-2 border-primary"
      >
        <h4 class="font-headline font-bold mb-3 text-on-surface">
          {{ section.title }}
        </h4>
        <ul class="space-y-4">
          <li
            v-for="(item, i) in section.items"
            :key="i"
            class="flex gap-3 text-on-surface-variant"
          >
            <span
              class="material-symbols-outlined text-primary shrink-0"
              style="font-variation-settings: 'FILL' 1"
            >check_circle</span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </template>

    <div
      v-if="tags?.length"
      class="mt-16 pt-8 border-t border-outline-variant/15 flex flex-wrap gap-3"
    >
      <span
        v-for="tag in tags"
        :key="tag"
        class="px-4 py-1.5 bg-surface-container text-on-surface-variant font-label text-xs rounded-full"
      >
        #{{ tag.replace(/^#/, '') }}
      </span>
    </div>
  </article>
</template>

<script setup>
defineProps({
  sections: {
    type: Array,
    default: () => [],
  },
  tags: {
    type: Array,
    default: () => [],
  },
})
</script>
