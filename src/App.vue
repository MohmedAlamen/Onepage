<template>
  <div class="min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-colors">
    <!-- Navigation -->
    <Navigation @scroll-to="scrollToSection" :isDark="isDark" @toggle-theme="toggleTheme" />

    <!-- Main Content -->
    <main class="pt-20">
      <!-- Hero Section -->
      <Hero ref="heroSection" />

      <!-- About Section -->
      <About ref="aboutSection" />

      <!-- Services Section -->
      <Services ref="servicesSection" />

      <!-- Skills Section -->
      <Skills ref="skillsSection" />

      <!-- Portfolio Section with GitHub Projects -->
      <Portfolio ref="portfolioSection" />

      <!-- Contact Section -->
      <Contact ref="contactSection" />
    </main>

    <!-- Footer -->
    <Footer />

    <!-- Scroll to Top Button -->
    <ScrollToTop />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Navigation from './components/Navigation.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Services from './components/Services.vue'
import Skills from './components/Skills.vue'
import Portfolio from './components/Portfolio.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import ScrollToTop from './components/ScrollToTop.vue'

const isDark = ref(false)

const heroSection = ref(null)
const aboutSection = ref(null)
const servicesSection = ref(null)
const skillsSection = ref(null)
const portfolioSection = ref(null)
const contactSection = ref(null)

const sectionRefs = {
  hero: heroSection,
  about: aboutSection,
  services: servicesSection,
  skills: skillsSection,
  portfolio: portfolioSection,
  contact: contactSection,
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  const html = document.documentElement
  if (isDark.value) {
    html.classList.add('dark')
  } else {
    html.classList.remove('dark')
  }
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

const scrollToSection = (sectionName) => {
  const ref = sectionRefs[sectionName]
  if (ref && ref.value) {
    const element = ref.value.$el || ref.value
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  // Load theme preference
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})
</script>

<style scoped>
</style>
