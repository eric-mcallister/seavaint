<template>
  <section class="px-8 py-16 md:py-24 bg-surface-container-low">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-8">
        <div>
          <h2 class="font-manrope font-medium text-3xl md:text-4xl tracking-tight text-on-surface mb-4">
            Our Specialties
          </h2>
          <div class="h-1 w-20 bg-primary rounded-full" />
        </div>
        <div class="max-w-md md:text-right">
          <span class="font-manrope font-medium text-xs uppercase tracking-[0.2em] text-primary mb-2 block">Comprehensive Health Ecosystem</span>
          <p class="font-lato text-on-surface-variant text-sm font-normal leading-relaxed">
            Navigating the complexities of healthcare with sophisticated, data-driven treatment strategies.
          </p>
        </div>
      </div>

      <!-- Two rows × 3 columns: [Mental 2col | Chronic] / [Acute 2col | Sexual under Chronic] -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <!-- Mental Health — same width as Acute (spans 2 cols) -->
        <RouterLink
          to="/services/mental-health"
          class="lg:col-span-2 bg-surface-container-lowest p-8 rounded-xl border border-transparent shadow-sm transition-all duration-200 hover:border-primary hover:shadow-[0_12px_40px_-8px_rgba(154,37,29,0.4)] group block no-underline text-inherit cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
        >
          <div class="flex flex-col md:flex-row gap-8">
            <div class="flex-1 min-w-0">
              <span class="material-symbols-outlined text-4xl text-primary mb-6">psychology</span>
              <h3 class="font-manrope font-medium text-2xl text-on-surface mb-4">Mental Health</h3>
              <p class="font-lato text-on-surface-variant mb-6 leading-relaxed text-sm font-normal">
                Compassionate psychiatric care for anxiety, depression, and smoking cessation support. Our holistic approach integrates modern therapy with evidence-based medicine.
              </p>
              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <li
                  v-for="item in mentalBullets"
                  :key="item"
                  class="flex items-center gap-2 text-sm font-manrope font-light text-on-surface"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {{ item }}
                </li>
              </ul>
            </div>
            <div class="w-full md:w-1/3 shrink-0 rounded-lg overflow-hidden h-48 md:h-auto md:min-h-[200px]">
              <img
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="A peaceful and minimalist therapy office setting with soft natural light filtering through sheer curtains"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvlYXh7a2hDDDhOyF6KM6nWVrqWmvGnq__s2VnHQf3Hyw8Q7vkgwsIf5Ie3dy4BIY9NqLnnDw6csRa6iCmny-kdAiIFpXPypIZ6pX-mO0FHVJ34HGxMrkIUDS4VdOy0yIdVkfQkQZXKbK8K7Ocr3-DSZ_IerzT-9vVmF44uaGc1jMKevwog03zs6bNSQhx0YS_WFG1xpv5k0wbElTK6dk8NNpOgJxfQh8YjSz4ASp22dF6g-8zg9yU_K3dH-uPXpwEt2cHaZrAh27I"
              >
            </div>
          </div>
        </RouterLink>

        <!-- Chronic Conditions — top of column 3 -->
        <RouterLink
          to="/services/chronic-conditions"
          class="bg-surface-container-lowest p-8 rounded-xl border border-transparent shadow-sm transition-all duration-200 hover:border-primary hover:shadow-[0_12px_40px_-8px_rgba(154,37,29,0.4)] block no-underline text-inherit cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
        >
          <span class="material-symbols-outlined text-4xl text-primary mb-6">monitor_heart</span>
          <h3 class="font-manrope font-medium text-2xl text-on-surface mb-4">Chronic Conditions</h3>
          <p class="font-lato text-sm text-on-surface-variant mb-6 leading-relaxed font-normal">
            Expert management with proactive monitoring and personalized treatment plans.
          </p>
          <ul class="space-y-2">
            <li
              v-for="item in chronicBullets"
              :key="item"
              class="flex items-center gap-2 text-sm font-manrope font-light text-on-surface"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {{ item }}
            </li>
          </ul>
        </RouterLink>

        <!-- Acute Care — row 2, spans cols 1–2 -->
        <RouterLink
          to="/services/acute-care-general-issues"
          class="lg:col-span-2 bg-surface-container-lowest p-8 rounded-xl border border-transparent shadow-sm transition-all duration-200 hover:border-primary hover:shadow-[0_12px_40px_-8px_rgba(154,37,29,0.4)] block no-underline text-inherit cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
        >
          <span class="material-symbols-outlined text-4xl text-primary mb-6">medication</span>
          <h3 class="font-manrope font-medium text-2xl text-on-surface mb-4">Acute Care and General Issues</h3>
          <p class="font-lato text-sm text-on-surface-variant mb-6 leading-relaxed font-normal max-w-3xl">
            Rapid diagnostics and treatment for general illnesses, respiratory infections, and everyday concerns—without the wait.
          </p>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 max-w-3xl">
            <li
              v-for="item in acuteBullets"
              :key="item"
              class="flex items-center gap-2 text-sm font-manrope font-light text-on-surface"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {{ item }}
            </li>
          </ul>
        </RouterLink>

        <!-- Sexual Health — under Chronic (column 3, row 2) -->
        <RouterLink
          to="/services/sexual-health"
          class="bg-surface-container-lowest p-8 rounded-xl border border-transparent shadow-sm transition-all duration-200 hover:border-primary hover:shadow-[0_12px_40px_-8px_rgba(154,37,29,0.4)] block no-underline text-inherit cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
        >
          <span class="material-symbols-outlined text-4xl text-primary mb-6">health_and_safety</span>
          <h3 class="font-manrope font-medium text-2xl text-on-surface mb-4">Sexual Health</h3>
          <p class="font-lato text-sm text-on-surface-variant mb-6 leading-relaxed font-normal">
            Discreet, professional care with absolute privacy.
          </p>
          <ul class="space-y-2">
            <li
              v-for="item in sexualBullets"
              :key="item"
              class="flex items-center gap-2 text-sm font-manrope font-light text-on-surface"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {{ item }}
            </li>
          </ul>
        </RouterLink>
      </div>

      <!-- Row 3: Women's Health (2 cols) + Allergies & Immune Support -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <RouterLink
          to="/services/womens-health"
          class="lg:col-span-2 bg-surface-container-lowest p-8 rounded-xl border border-transparent shadow-sm transition-all duration-200 hover:border-primary hover:shadow-[0_12px_40px_-8px_rgba(154,37,29,0.4)] block no-underline text-inherit cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
        >
          <span class="material-symbols-outlined text-4xl text-primary mb-6">female</span>
          <h3 class="font-manrope font-medium text-2xl text-on-surface mb-4">Women's Health</h3>
          <p class="font-lato text-sm text-on-surface-variant mb-6 leading-relaxed font-normal max-w-3xl">
            Comprehensive gynecological and wellness support with discreet, evidence-based virtual care.
          </p>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 max-w-3xl">
            <li
              v-for="item in womensBullets"
              :key="item"
              class="flex items-center gap-2 text-sm font-manrope font-light text-on-surface"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {{ item }}
            </li>
          </ul>
        </RouterLink>
        <RouterLink
          to="/services/allergies-immune-support"
          class="bg-surface-container-lowest p-8 rounded-xl border border-transparent shadow-sm transition-all duration-200 hover:border-primary hover:shadow-[0_12px_40px_-8px_rgba(154,37,29,0.4)] block no-underline text-inherit cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
        >
          <span class="material-symbols-outlined text-4xl text-primary mb-6">allergy</span>
          <h3 class="font-manrope font-medium text-2xl text-on-surface mb-4">Allergies &amp; Immune Support</h3>
          <p class="font-lato text-sm text-on-surface-variant mb-6 leading-relaxed font-normal">
            Relief and guidance for seasonal symptoms and common eye irritation.
          </p>
          <ul class="space-y-2">
            <li
              v-for="item in allergiesBullets"
              :key="item"
              class="flex items-center gap-2 text-sm font-manrope font-light text-on-surface"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {{ item }}
            </li>
          </ul>
        </RouterLink>
      </div>

      <!-- Row 4: three equal cards (Men's, Eye & Ear, Skin) -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <RouterLink
          to="/services/mens-health"
          class="bg-surface-container-lowest p-8 rounded-xl border border-transparent shadow-sm transition-all duration-200 hover:border-primary hover:shadow-[0_12px_40px_-8px_rgba(154,37,29,0.4)] flex flex-col h-full block no-underline text-inherit cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
        >
          <span class="material-symbols-outlined text-4xl text-primary mb-6">male</span>
          <h3 class="font-manrope font-medium text-xl text-on-surface mb-4">Men's Health</h3>
          <ul class="space-y-2 mt-auto">
            <li
              v-for="item in mensBullets"
              :key="item"
              class="flex items-center gap-2 text-sm font-manrope font-light text-on-surface"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {{ item }}
            </li>
          </ul>
        </RouterLink>
        <RouterLink
          to="/services/eye-ear-issues"
          class="bg-surface-container-lowest p-8 rounded-xl border border-transparent shadow-sm transition-all duration-200 hover:border-primary hover:shadow-[0_12px_40px_-8px_rgba(154,37,29,0.4)] flex flex-col h-full block no-underline text-inherit cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
        >
          <span class="material-symbols-outlined text-4xl text-primary mb-6">visibility</span>
          <h3 class="font-manrope font-medium text-xl text-on-surface mb-4">Eye &amp; Ear Issues</h3>
          <ul class="space-y-2 mt-auto">
            <li
              v-for="item in eyeEarBullets"
              :key="item"
              class="flex items-center gap-2 text-sm font-manrope font-light text-on-surface"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {{ item }}
            </li>
          </ul>
        </RouterLink>
        <RouterLink
          to="/services/skin-minor-injuries"
          class="bg-surface-container-lowest p-8 rounded-xl border border-transparent shadow-sm transition-all duration-200 hover:border-primary hover:shadow-[0_12px_40px_-8px_rgba(154,37,29,0.4)] flex flex-col h-full block no-underline text-inherit cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
        >
          <span class="material-symbols-outlined text-4xl text-primary mb-6">healing</span>
          <h3 class="font-manrope font-medium text-xl text-on-surface mb-4">Skin &amp; Minor Injuries</h3>
          <ul class="space-y-2 mt-auto">
            <li
              v-for="item in skinBullets"
              :key="item"
              class="flex items-center gap-2 text-sm font-manrope font-light text-on-surface"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {{ item }}
            </li>
          </ul>
        </RouterLink>
      </div>

      <!-- Row 5: Medication Management — single-width card (Men's Health–style) -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <RouterLink
          to="/services/medication-management"
          class="bg-surface-container-lowest p-8 rounded-xl border border-transparent shadow-sm transition-all duration-200 hover:border-primary hover:shadow-[0_12px_40px_-8px_rgba(154,37,29,0.4)] flex flex-col h-full block no-underline text-inherit cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
        >
          <span class="material-symbols-outlined text-4xl text-primary mb-6">pill</span>
          <h3 class="font-manrope font-medium text-xl text-on-surface mb-4">Medication Management</h3>
          <ul class="space-y-2 mt-auto">
            <li
              v-for="item in medicationBullets"
              :key="item"
              class="flex items-center gap-2 text-sm font-manrope font-light text-on-surface"
            >
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
const mentalBullets = ['Anxiety', 'Depression', 'Help to Quit Smoking']

const chronicBullets = [
  'Acid Reflux (GERD)',
  'Asthma',
  'Gout',
  'High Blood Pressure',
  'High Cholesterol',
  'Hypothyroidism',
  'Weight Loss',
]

const sexualBullets = ['Genital Herpes', 'Oral Herpes (Cold Sores)']

const acuteBullets = [
  'Colds and Flu',
  'Hair Loss',
  'Headaches',
  'Sinus Infection',
  'Sore Throat',
  'Stomach Bugs',
  'Urinary Tract Infection (UTI)',
  'Vomiting',
]

const mensBullets = ['Erectile Dysfunction', 'Hair Loss']

const eyeEarBullets = ['Eye Issues', 'Pink Eye (Conjunctivitis)']

const skinBullets = ['Minor Cuts', 'Skin issues']

const womensBullets = [
  'Bacterial Vaginosis (BV)',
  'Period Cramp Relief',
  'Vaginal Dryness',
  'Vaginal Yeast Infection',
  'Yeast Infections',
]

const medicationBullets = ['Prescription Refill']

const allergiesBullets = ['Seasonal Allergies', 'Pink Eye (Conjunctivitis)']
</script>
