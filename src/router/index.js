import { nextTick } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ServicesView from '@/views/ServicesView.vue'
import AboutView from '@/views/AboutView.vue'
import FaqsView from '@/views/FaqsView.vue'
import SpecialtyView from '@/views/SpecialtyView.vue'
import TreatmentsHubView from '@/views/TreatmentsHubView.vue'
import TreatmentView from '@/views/TreatmentView.vue'
import PricingView from '@/views/PricingView.vue'
import BlogView from '@/views/BlogView.vue'
import BlogArticleView from '@/views/BlogArticleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/services',
      name: 'services',
      component: ServicesView,
    },
    {
      path: '/services/:slug',
      name: 'specialty',
      component: SpecialtyView,
    },
    {
      path: '/treatments',
      name: 'treatments',
      component: TreatmentsHubView,
    },
    {
      path: '/treatments/:slug',
      name: 'treatment',
      component: TreatmentView,
    },
    {
      path: '/faqs',
      name: 'faqs',
      component: FaqsView,
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: PricingView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/blog/:slug',
      name: 'blog-article',
      component: BlogArticleView,
      props: true,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return nextTick().then(
      () =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve({ top: 0, left: 0, behavior: 'auto' })
          }, 0)
        }),
    )
  },
})

export default router
