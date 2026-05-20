<template>
  <header class="fixed top-0 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-sm z-50 transition-colors">
    <div class="container mx-auto px-4">
      <nav class="flex justify-between items-center h-20">
        <!-- Logo -->
        <a href="#" class="text-2xl font-bold bg-gradient-to-r from-blue-500 to-amber-400 bg-clip-text text-transparent">
          MA
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex gap-8">
          <button
            @click="emit('scroll-to', 'hero')"
            class="nav-link"
          >
            Home
          </button>
          <button
            @click="emit('scroll-to', 'about')"
            class="nav-link"
          >
            About
          </button>
          <button
            @click="emit('scroll-to', 'services')"
            class="nav-link"
          >
            Services
          </button>
          <button
            @click="emit('scroll-to', 'skills')"
            class="nav-link"
          >
            Skills
          </button>
          <button
            @click="emit('scroll-to', 'portfolio')"
            class="nav-link"
          >
            Portfolio
          </button>
          <button
            @click="emit('scroll-to', 'contact')"
            class="nav-link"
          >
            Contact
          </button>
        </div>

        <!-- Actions -->
        <div class="flex items-center gap-4">
          <!-- Theme Toggle -->
          <button
            @click="emit('toggle-theme')"
            class="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors"
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
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </nav>

      <!-- Mobile Menu -->
      <div
        v-if="mobileMenuOpen"
        class="md:hidden pb-4 border-t border-gray-200 dark:border-slate-700"
      >
        <button
          @click="closeMobileMenu('hero')"
          class="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded transition-colors"
        >
          Home
        </button>
        <button
          @click="closeMobileMenu('about')"
          class="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded transition-colors"
        >
          About
        </button>
        <button
          @click="closeMobileMenu('services')"
          class="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded transition-colors"
        >
          Services
        </button>
        <button
          @click="closeMobileMenu('skills')"
          class="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded transition-colors"
        >
          Skills
        </button>
        <button
          @click="closeMobileMenu('portfolio')"
          class="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded transition-colors"
        >
          Portfolio
        </button>
        <button
          @click="closeMobileMenu('contact')"
          class="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded transition-colors"
        >
          Contact
        </button>
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
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(to right, #007bff, #ffc107);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.nav-link:hover {
  color: #007bff;
}
</style>
