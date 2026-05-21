<template>
  <header class="fixed top-0 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg dark:shadow-xl z-50 transition-all duration-300 border-b border-gray-200 dark:border-slate-800">
    <div class="container mx-auto px-4">
      <nav class="flex justify-between items-center h-20">
        <!-- Logo -->
        <a href="#hero" class="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-amber-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
          MA
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex gap-1">
          <button
            @click="emit('scroll-to', 'hero')"
            class="nav-link"
          >
            <span class="relative px-3 py-2">
              Home
              <span class="nav-underline"></span>
            </span>
          </button>
          <button
            @click="emit('scroll-to', 'about')"
            class="nav-link"
          >
            <span class="relative px-3 py-2">
              About
              <span class="nav-underline"></span>
            </span>
          </button>
          <button
            @click="emit('scroll-to', 'services')"
            class="nav-link"
          >
            <span class="relative px-3 py-2">
              Services
              <span class="nav-underline"></span>
            </span>
          </button>
          <button
            @click="emit('scroll-to', 'skills')"
            class="nav-link"
          >
            <span class="relative px-3 py-2">
              Skills
              <span class="nav-underline"></span>
            </span>
          </button>
          <button
            @click="emit('scroll-to', 'portfolio')"
            class="nav-link"
          >
            <span class="relative px-3 py-2">
              Portfolio
              <span class="nav-underline"></span>
            </span>
          </button>
          <button
            @click="emit('scroll-to', 'contact')"
            class="nav-link"
          >
            <span class="relative px-3 py-2">
              Contact
              <span class="nav-underline"></span>
            </span>
          </button>
        </div>

        <!-- Actions -->
        <div class="flex items-center gap-4">
          <!-- CTA Button -->
          <a href="#contact" class="hidden sm:flex px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all shadow-md hover:shadow-lg hover:scale-105 items-center gap-2 group text-sm">
            <span>Hire Me</span>
            <svg class="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </a>

          <!-- Theme Toggle -->
          <button
            @click="emit('toggle-theme')"
            class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors text-gray-800 dark:text-white"
          >
            <svg v-if="isDark" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.121-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm5.657-9.193a1 1 0 00-1.414 0l-.707.707A1 1 0 005.05 6.464l.707-.707a1 1 0 001.414-1.414l-.707-.707zM5 8a1 1 0 100-2H4a1 1 0 100 2h1z" clip-rule="evenodd"/>
            </svg>
            <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
            </svg>
          </button>

          <!-- Mobile Menu Toggle -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors"
          >
            <svg class="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </nav>

      <!-- Mobile Menu -->
      <div
        v-if="mobileMenuOpen"
        class="md:hidden pb-4 border-t border-gray-200 dark:border-slate-700 space-y-1"
      >
        <button
          @click="closeMobileMenu('hero')"
          class="block w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-slate-800 rounded transition-colors font-medium text-gray-900 dark:text-white"
        >
          Home
        </button>
        <button
          @click="closeMobileMenu('about')"
          class="block w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-slate-800 rounded transition-colors font-medium text-gray-900 dark:text-white"
        >
          About
        </button>
        <button
          @click="closeMobileMenu('services')"
          class="block w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-slate-800 rounded transition-colors font-medium text-gray-900 dark:text-white"
        >
          Services
        </button>
        <button
          @click="closeMobileMenu('skills')"
          class="block w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-slate-800 rounded transition-colors font-medium text-gray-900 dark:text-white"
        >
          Skills
        </button>
        <button
          @click="closeMobileMenu('portfolio')"
          class="block w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-slate-800 rounded transition-colors font-medium text-gray-900 dark:text-white"
        >
          Portfolio
        </button>
        <button
          @click="closeMobileMenu('contact')"
          class="block w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-slate-800 rounded transition-colors font-medium text-gray-900 dark:text-white"
        >
          Contact
        </button>
        <a href="#contact" class="block w-full px-4 py-3 mt-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg transition-all hover:shadow-lg text-center">
          Hire Me
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

defineProps({
  isDark: Boolean
})

const emit = defineEmits(['scroll-to', 'toggle-theme'])

const closeMobileMenu = (section) => {
  mobileMenuOpen.value = false
  emit('scroll-to', section)
}
</script>

<style scoped>
.nav-link {
  position: relative;
  color: inherit;
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: color 0.3s ease;
  font-size: 0.95rem;
}

.nav-link:hover {
  color: #007bff;
}

.dark .nav-link:hover {
  color: #60a5fa;
}

.nav-underline {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #007bff, #7c3aed);
  border-radius: 1px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.nav-link:hover .nav-underline {
  transform: scaleX(1);
}
</style>
