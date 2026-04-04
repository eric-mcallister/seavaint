<template>
  <section class="relative min-h-[921px] flex items-center overflow-hidden">
    <div class="absolute inset-0 z-0">
      <img
        alt="A diverse group of patients of various ages and ethnicities actively engaged in a telehealth session from their varied home settings or a community center, with a virtual doctor providing empathetic care displayed on a large screen"
        class="w-full h-full object-cover object-center scale-105"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLsBpzaZDaJ6p0FmR1HOZK8UwhX6m8oLSmLePS9soQCo8IWuAH_TLbxtTql09oE3ht0bbSWY1i7eHnV_Pp6iM40tEWxHcV3iGrFc9Xq2x4ctWvaw8AKXHgx4u_k2u8CDhCVDRLqqGbkI1kV9F1nou__jHHkpAK_l-dV2yL7bp5wewDzCTdMIrFEI7D5zTljilLmW23wbmWOVNgKa1_S0w37leVphmTgav9BPnyPExGLvEsGi7h9Y16LjubT034qn2JZHtlPCpbMTRM"
      >
      <div class="absolute inset-0 hero-gradient" />
    </div>
    <div class="relative z-10 max-w-7xl mx-auto px-8 w-full">
      <div class="max-w-2xl">
        <span class="inline-block px-4 py-1.5 mb-6 rounded-full bg-secondary-container text-on-secondary-container font-manrope font-light text-xs tracking-widest uppercase">
          Virtual Healthcare Excellence
        </span>
        <h1 class="font-manrope font-medium text-5xl md:text-7xl tracking-tight text-on-surface leading-[1.1] mb-8">
          Providing Virtual Care in <span class="text-primary italic">California</span>
        </h1>
        <p class="font-lato text-xl md:text-2xl text-on-surface-variant font-normal mb-10 max-w-lg leading-relaxed">
          Empowering Wellness Through Personalized Care. Experience the future of medicine from the comfort of your home.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <button
            type="button"
            class="bg-primary text-on-primary px-10 py-4 rounded-lg font-manrope font-light text-lg shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2"
          >
            Learn More
            <span class="material-symbols-outlined">arrow_forward</span>
          </button>
          <router-link
            to="/services"
            class="px-10 py-4 rounded-lg font-manrope font-light text-lg border border-outline/20 text-on-surface hover:bg-surface-container-low transition-all text-center inline-block"
          >
            Our Services
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
