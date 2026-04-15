<template>
  <div class="min-h-screen flex flex-col bg-background text-on-surface font-manrope">
    <AppHeader />
    <main class="pt-16 flex-1">
      <!-- Hero -->
      <section class="relative min-h-[min(870px,100svh)] flex items-center overflow-hidden px-5 sm:px-8">
        <div class="absolute inset-0 z-0">
          <img
            alt=""
            class="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSCiI4FaKn2Kgo4Bw60XRgycMoAYcH8s76LXaSHgovpMHWP6h6SSULR2RXqlKw39tcpR30gc4oQZEyYM21lOQiJYBNjeU7PLdsvOu4lFBYUsuGDDIgE-E7LfIesx-B3FVg0QiLkJYptei5jYPofF7lY9ijiS89jddzYP1zZVnwgvfmzFoNqj6k0slOdiqhOfN-UxaSE_y8s1ht1MKqydl-strsT_ij5cdhP5BPVwK1vrW9boOzXE0klrqswJX2L8Eu1AXIChWK5hwL"
          >
          <div class="absolute inset-0 bg-gradient-to-r from-surface/90 via-surface/40 to-transparent" />
        </div>
        <div class="relative z-10 max-w-7xl mx-auto w-full py-20 md:py-0">
          <div class="max-w-2xl">
            <span class="font-label text-sm uppercase tracking-[0.2em] text-primary font-semibold mb-6 block">
              Psychiatry &amp; Wellness
            </span>
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-on-surface tracking-tighter leading-[1.05] mb-8">
              Personalized Mental Health Care Through Secure
              <span class="text-primary italic"> Telehealth</span>
            </h1>
            <p class="text-lg md:text-xl text-on-surface-variant leading-relaxed mb-10 max-w-lg font-light">
              Orchestrating mental wellness with clinical precision and compassionate care, delivered to the comfort of your sanctuary.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <router-link
                :to="{ path: '/', hash: '#contact' }"
                class="inline-flex justify-center items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-primary/20 transition-all"
              >
                Schedule Consultation
                <span class="material-symbols-outlined">arrow_forward</span>
              </router-link>
              <a
                href="#psychiatry-services-offered"
                class="inline-flex justify-center bg-surface-container-lowest/80 backdrop-blur-sm border border-outline-variant/30 text-on-surface px-8 py-4 rounded-lg font-semibold hover:bg-white transition-all"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Narrative -->
      <section class="py-20 md:py-32 bg-surface">
        <div class="max-w-7xl mx-auto px-5 sm:px-8 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div class="order-2 md:order-1">
            <div class="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative">
              <img
                alt="Clinical consultation environment"
                class="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2SBJTFV6Xjkj1oLD6l7Ve3QXF6qcdpcO5jKpOxaHKLiBxOkhb0jNOqxLN-BCm2GPJZc1gbMTeM4wfYWR-R3x1tgNu2COmIbdWtkebA0OhrchcJTmYySdnppErGbhbYAIZes7orwMfzTPTouZf2xAZPh6JPZ7L7Fk2yTtSvZS3kSruBHiFyesgsxkgRzgLN6QwIgDhQOgz0iGRp7E7JUqMs7I_nAN68cw65FqYO_PCVW8QbTh2bySaeBF8qNCh3Xc7yfZrL8lO34JU"
              >
              <div class="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-auto p-5 sm:p-6 bg-white/90 backdrop-blur-md rounded-xl max-w-xs shadow-xl">
                <p class="font-label text-xs text-primary font-bold uppercase tracking-widest mb-2">
                  Our Philosophy
                </p>
                <p class="text-on-surface text-sm italic leading-relaxed">
                  “True wellness is the harmony of clinical excellence and personal understanding.”
                </p>
              </div>
            </div>
          </div>
          <div class="order-1 md:order-2">
            <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-8">
              Psychiatry Care at Seavaint Health
            </h2>
            <div class="space-y-6 text-base md:text-lg text-on-surface-variant leading-relaxed font-light">
              <p>
                We provide comprehensive psychiatric support for adults navigating life's complex mental health challenges. Our approach is rooted in the belief that every individual requires a unique path to recovery.
              </p>
              <p>
                Whether you are dealing with chronic conditions or acute episodes, our practitioners utilize evidence-based protocols to ensure your treatment plan is both effective and sustainable. We focus on the whole person—integrating medication management with lifestyle optimization.
              </p>
            </div>
            <div class="mt-12 grid grid-cols-2 gap-8 border-t border-outline-variant/20 pt-12">
              <div>
                <p class="text-3xl font-bold text-primary">
                  100%
                </p>
                <p class="font-label text-sm text-on-surface-variant uppercase tracking-wider">
                  Secure Telehealth
                </p>
              </div>
              <div>
                <p class="text-3xl font-bold text-primary">
                  24h
                </p>
                <p class="font-label text-sm text-on-surface-variant uppercase tracking-wider">
                  Response Window
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Conditions -->
      <section class="py-16 md:py-24 bg-surface-container-low">
        <div class="max-w-7xl mx-auto px-5 sm:px-8">
          <div class="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
            <div>
              <span class="font-label text-sm text-primary font-bold uppercase tracking-widest">Specializations</span>
              <h2 class="text-3xl md:text-4xl font-bold tracking-tight mt-2">
                Conditions We Treat
              </h2>
            </div>
            <p class="max-w-md text-on-surface-variant font-light">
              Expert care for a wide spectrum of psychological conditions using the latest clinical methodologies.
            </p>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            <div
              v-for="c in conditions"
              :key="c.label"
              class="bg-surface-container-lowest p-5 md:p-6 rounded-xl hover:bg-primary-fixed transition-colors cursor-default group"
            >
              <span class="material-symbols-outlined text-primary mb-3 md:mb-4 block text-2xl md:text-3xl">{{ c.icon }}</span>
              <h3 class="font-bold text-on-surface text-sm md:text-base group-hover:text-primary transition-colors">
                {{ c.label }}
              </h3>
            </div>
            <div class="bg-primary/5 p-5 md:p-6 rounded-xl border border-primary/10 flex items-center justify-center italic text-primary font-medium text-center text-sm">
              Comprehensive Evaluation Required
            </div>
          </div>
        </div>
      </section>

      <!-- Psychiatry Services Offered -->
      <section
        id="psychiatry-services-offered"
        class="py-20 md:py-32 bg-surface scroll-mt-24"
      >
        <div class="max-w-7xl mx-auto px-5 sm:px-8">
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-12 md:mb-16 text-center">
            Psychiatry Services Offered
          </h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div class="group p-6 md:p-8 rounded-2xl bg-surface-container-low hover:bg-surface-container-high transition-all duration-300">
              <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-on-primary mb-6 shadow-lg shadow-primary/20">
                <span class="material-symbols-outlined">assignment_ind</span>
              </div>
              <h3 class="text-xl font-bold mb-4">
                Comprehensive Psychiatric Evaluations
              </h3>
              <p class="text-on-surface-variant text-sm leading-relaxed font-light">
                Initial evaluations focused on understanding symptoms, psychiatric history, and treatment needs.
              </p>
            </div>
            <div class="group p-6 md:p-8 rounded-2xl bg-surface-container-low hover:bg-surface-container-high transition-all duration-300">
              <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-on-primary mb-6 shadow-lg shadow-primary/20">
                <span class="material-symbols-outlined">pill</span>
              </div>
              <h3 class="text-xl font-bold mb-4">
                Medication Management
              </h3>
              <p class="text-on-surface-variant text-sm leading-relaxed font-light">
                Careful prescribing, monitoring, and adjustment of psychiatric medications when clinically appropriate.
              </p>
            </div>
            <div class="group p-6 md:p-8 rounded-2xl bg-surface-container-low hover:bg-surface-container-high transition-all duration-300">
              <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-on-primary mb-6 shadow-lg shadow-primary/20">
                <span class="material-symbols-outlined">event_repeat</span>
              </div>
              <h3 class="text-xl font-bold mb-4">
                Follow-Up Appointments
              </h3>
              <p class="text-on-surface-variant text-sm leading-relaxed font-light">
                Ongoing visits to assess treatment effectiveness, address concerns, and support long-term mental health stability.
              </p>
            </div>
            <div class="group p-6 md:p-8 rounded-2xl bg-surface-container-low hover:bg-surface-container-high transition-all duration-300">
              <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-on-primary mb-6 shadow-lg shadow-primary/20">
                <span class="material-symbols-outlined">video_call</span>
              </div>
              <h3 class="text-xl font-bold mb-4">
                Telehealth Psychiatry
              </h3>
              <p class="text-on-surface-variant text-sm leading-relaxed font-light">
                All appointments are conducted via secure, HIPAA-compliant telehealth platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Providers -->
      <section class="py-16 md:py-24 bg-surface-container-low">
        <div class="max-w-7xl mx-auto px-5 sm:px-8">
          <div class="mb-12 md:mb-16">
            <span class="font-label text-sm text-primary font-bold uppercase tracking-widest">Expert Practitioners</span>
            <h2 class="text-3xl md:text-4xl font-bold tracking-tight mt-2">
              Clinical Leadership
            </h2>
          </div>
          <div class="grid md:grid-cols-2 gap-8 md:gap-12">
            <div class="flex flex-col md:flex-row gap-8 bg-surface-container-lowest p-6 md:p-8 rounded-3xl shadow-sm">
              <div class="w-full md:w-48 h-64 rounded-2xl overflow-hidden shrink-0 bg-surface-container-high">
                <img
                  alt="Sophia Nairima"
                  class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  src="https://images.squarespace-cdn.com/content/v1/680734e550a37e25f5115e1a/a0cca222-30ff-4022-840c-a6941c6ecd0e/DSC03057.jpg"
                >
              </div>
              <div>
                <h3 class="text-2xl font-bold mb-1">
                  Sophia Nairima
                </h3>
                <p class="text-primary font-label font-semibold text-sm mb-4">
                  Psychiatric Nurse Practitioner
                </p>
                <p class="text-on-surface-variant leading-relaxed text-sm mb-6 italic font-light">
                  Specializing in anxiety disorders and complex medication management for high-performing professionals.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter">PMHNP-BC</span>
                  <span class="bg-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter">12+ Years Exp</span>
                </div>
              </div>
            </div>
            <div class="flex flex-col md:flex-row gap-8 bg-surface-container-lowest p-6 md:p-8 rounded-3xl shadow-sm">
              <div class="w-full md:w-48 h-64 rounded-2xl overflow-hidden shrink-0 bg-surface-container-high">
                <img
                  alt="Dr. Kenneth Van Williams"
                  class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  src="https://images.squarespace-cdn.com/content/v1/680734e550a37e25f5115e1a/539d9c8e-5bc5-4484-b0f7-c816c1eb871a/IMG_3811.JPG"
                >
              </div>
              <div>
                <h3 class="text-2xl font-bold mb-1">
                  Dr. Kenneth Van Williams
                </h3>
                <p class="text-primary font-label font-semibold text-sm mb-4">
                  Board-Certified Psychiatrist
                </p>
                <p class="text-on-surface-variant leading-relaxed text-sm mb-6 italic font-light">
                  Expert in mood disorders and trauma-informed care with a focus on holistic treatment integration.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="bg-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter">MD, Psychiatrist</span>
                  <span class="bg-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter">Board Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Journey -->
      <section class="py-20 md:py-32 bg-surface">
        <div class="max-w-7xl mx-auto px-5 sm:px-8">
          <div class="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Your Journey to Wellness
            </h2>
            <p class="text-on-surface-variant font-light">
              A structured, three-phase approach designed to provide clarity and results from day one.
            </p>
          </div>
          <div class="relative grid md:grid-cols-3 gap-10 md:gap-12">
            <div class="absolute top-1/2 left-0 w-full h-px bg-outline-variant/30 hidden md:block -z-10" />
            <div class="text-center group">
              <div class="w-16 h-16 bg-surface border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-8 transition-all group-hover:bg-primary group-hover:text-on-primary">
                <span class="text-xl font-bold">01</span>
              </div>
              <h3 class="text-xl font-bold mb-4">
                Initial Appointment
              </h3>
              <p class="text-on-surface-variant text-sm leading-relaxed font-light">
                A comprehensive 90-minute psychiatric evaluation to understand your history and goals.
              </p>
            </div>
            <div class="text-center group">
              <div class="w-16 h-16 bg-surface border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-8 transition-all group-hover:bg-primary group-hover:text-on-primary">
                <span class="text-xl font-bold">02</span>
              </div>
              <h3 class="text-xl font-bold mb-4">
                Treatment Planning
              </h3>
              <p class="text-on-surface-variant text-sm leading-relaxed font-light">
                Collaborative strategy involving medication, therapy referrals, and lifestyle adjustments.
              </p>
            </div>
            <div class="text-center group">
              <div class="w-16 h-16 bg-surface border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-8 transition-all group-hover:bg-primary group-hover:text-on-primary">
                <span class="text-xl font-bold">03</span>
              </div>
              <h3 class="text-xl font-bold mb-4">
                Ongoing Care
              </h3>
              <p class="text-on-surface-variant text-sm leading-relaxed font-light">
                Regular follow-ups to monitor progress and refine treatment for long-term stability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Investment -->
      <section class="py-16 md:py-24 bg-surface-container-high/30">
        <div class="max-w-7xl mx-auto px-5 sm:px-8">
          <div class="bg-surface-container-lowest rounded-[2rem] p-8 md:p-12 lg:p-20 overflow-hidden relative shadow-sm border border-outline-variant/10">
            <div class="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none" />
            <div class="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <span class="font-label text-sm text-primary font-bold uppercase tracking-[0.3em] mb-4 block">Investment in You</span>
                <h2 class="text-3xl md:text-4xl font-bold tracking-tighter mb-8 leading-tight">
                  Professional, Transparent, Private.
                </h2>
                <div class="space-y-6 text-on-surface-variant font-light">
                  <div class="flex gap-4">
                    <span class="material-symbols-outlined text-primary shrink-0">payments</span>
                    <div>
                      <p class="font-bold text-on-surface">
                        Cash-Only Practice
                      </p>
                      <p class="text-sm">
                        We operate as a private-pay clinic to ensure the highest level of confidentiality and focus on care without insurance constraints.
                      </p>
                    </div>
                  </div>
                  <div class="flex gap-4">
                    <span class="material-symbols-outlined text-primary shrink-0">credit_card</span>
                    <div>
                      <p class="font-bold text-on-surface">
                        Advance Care Cards
                      </p>
                      <p class="text-sm">
                        We proudly accept Advance Care Cards for flexible healthcare financing and payment plans. Interest-free financing may be available for eligible care through Advance Care.
                      </p>
                      <a
                        href="https://www.advancecarecard.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-primary font-medium text-sm mt-2 inline-block hover:underline underline-offset-2"
                      >
                        Check if you qualify at www.advancecarecard.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-surface-container-low p-8 md:p-10 rounded-2xl">
                <h4 class="text-xl font-bold mb-6">
                  Investment Schedule
                </h4>
                <div class="space-y-4 mb-8">
                  <div class="flex justify-between items-center pb-4 border-b border-outline-variant/30 gap-4">
                    <span class="text-on-surface-variant text-sm">Psychiatric Intake (90m)</span>
                    <span class="font-bold shrink-0">$450</span>
                  </div>
                  <div class="flex justify-between items-center pb-4 border-b border-outline-variant/30 gap-4">
                    <span class="text-on-surface-variant text-sm">Follow-up Visit (30m)</span>
                    <span class="font-bold shrink-0">$225</span>
                  </div>
                  <div class="flex justify-between items-center gap-4">
                    <span class="text-on-surface-variant text-sm">Complex Med Mgmt (45m)</span>
                    <span class="font-bold shrink-0">$300</span>
                  </div>
                </div>
                <router-link
                  :to="{ path: '/', hash: '#contact' }"
                  class="block w-full text-center bg-on-surface text-surface py-4 rounded-lg font-bold hover:bg-primary hover:text-on-primary transition-all"
                >
                  Schedule Consultation
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ -->
      <section class="py-20 md:py-32 bg-surface">
        <div class="max-w-3xl mx-auto px-5 sm:px-8">
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-12 md:mb-16 text-center">
            Frequently Asked Questions
          </h2>
          <div class="space-y-4">
            <details
              class="group bg-surface-container-low rounded-xl"
              open
            >
              <summary class="flex justify-between items-center p-6 cursor-pointer list-none">
                <span class="font-bold text-on-surface">Do you prescribe controlled medications?</span>
                <span class="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div class="px-6 pb-6 text-on-surface-variant text-sm leading-relaxed font-light">
                Controlled substances may be prescribed when clinically indicated and following a thorough evaluation. We strictly adhere to DEA guidelines and telehealth regulations regarding these medications.
              </div>
            </details>
            <details class="group bg-surface-container-low rounded-xl">
              <summary class="flex justify-between items-center p-6 cursor-pointer list-none">
                <span class="font-bold text-on-surface">Are telehealth visits confidential?</span>
                <span class="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div class="px-6 pb-6 text-on-surface-variant text-sm leading-relaxed font-light">
                Absolutely. We use end-to-end encrypted, HIPAA-compliant video conferencing platforms. Your medical records are stored in a secure, high-security EHR system accessible only to your care provider.
              </div>
            </details>
            <details class="group bg-surface-container-low rounded-xl">
              <summary class="flex justify-between items-center p-6 cursor-pointer list-none">
                <span class="font-bold text-on-surface">What if I need an emergency appointment?</span>
                <span class="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div class="px-6 pb-6 text-on-surface-variant text-sm leading-relaxed font-light">
                While we offer priority scheduling for existing patients, Seavaint Health is not an emergency crisis center. If you are experiencing a mental health emergency, please dial 988 or go to the nearest emergency room.
              </div>
            </details>
          </div>
        </div>
      </section>

      <!-- Final CTA -->
      <section class="py-20 md:py-32 bg-surface-container-lowest">
        <div class="max-w-7xl mx-auto px-5 sm:px-8">
          <div class="bg-primary-container text-on-primary-container rounded-[3rem] p-10 md:p-16 lg:p-24 text-center overflow-hidden relative">
            <div class="relative z-10">
              <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-8">
                Ready to Get Started?
              </h2>
              <p class="text-lg md:text-xl opacity-90 mb-12 max-w-2xl mx-auto font-light">
                Take the first step toward a more balanced life. Our practitioners are ready to partner with you on your journey to wellness.
              </p>
              <router-link
                :to="{ path: '/', hash: '#contact' }"
                class="inline-block bg-on-primary-container text-primary-container px-10 md:px-12 py-4 md:py-5 rounded-full text-base md:text-lg font-bold hover:scale-105 active:scale-95 transition-all shadow-2xl"
              >
                Schedule a Consultation
              </router-link>
            </div>
            <div class="absolute inset-0 opacity-10 pointer-events-none">
              <svg
                class="w-full h-full"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="0"
                  cy="0"
                  fill="white"
                  r="40"
                />
                <circle
                  cx="100"
                  cy="100"
                  fill="white"
                  r="40"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

const conditions = [
  { label: 'Anxiety', icon: 'psychology' },
  { label: 'Depression', icon: 'mood_bad' },
  { label: 'ADHD', icon: 'bolt' },
  { label: 'Bipolar', icon: 'contrast' },
  { label: 'Panic', icon: 'warning' },
  { label: 'OCD', icon: 'repeat' },
  { label: 'Trauma', icon: 'history_edu' },
  { label: 'Sleep', icon: 'bedtime' },
  { label: 'Mood', icon: 'spa' },
]

onMounted(() => {
  document.title = 'Psychiatry Services | Seavaint Health'
})
</script>
