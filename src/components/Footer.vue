<template>
  <footer class="bg-gray-900 dark:bg-slate-950 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-4 gap-8 mb-8">
        <!-- Brand -->
        <div>
          <h3 class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent mb-2">
            MA
          </h3>
          <p class="text-gray-400">
            Full Stack Developer & Cloud Enthusiast
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2 text-gray-400">
            <li><a href="#hero" class="hover:text-white transition-colors">Home</a></li>
            <li><a href="#about" class="hover:text-white transition-colors">About</a></li>
            <li><a href="#portfolio" class="hover:text-white transition-colors">Portfolio</a></li>
            <li><a href="#contact" class="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="font-semibold mb-4">Services</h4>
          <ul class="space-y-2 text-gray-400">
            <li><a href="#services" class="hover:text-white transition-colors">Web Development</a></li>
            <li><a href="#services" class="hover:text-white transition-colors">Backend APIs</a></li>
            <li><a href="#services" class="hover:text-white transition-colors">Cloud Solutions</a></li>
          </ul>
        </div>

        <!-- Follow -->
        <div>
          <h4 class="font-semibold mb-4">Follow Me</h4>
          <div class="flex gap-3">
            <a href="https://github.com/MohmedAlamen" target="_blank" class="p-2 rounded-full bg-gray-700 hover:bg-blue-500 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/mohaalamen/" target="_blank" class="p-2 rounded-full bg-gray-700 hover:bg-blue-500 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.419-.103.249-.129.597-.129.946v5.44h-3.554s.047-8.842 0-9.769h3.554v1.383c.43-.664 1.199-1.609 2.915-1.609 2.129 0 3.72 1.391 3.72 4.378v5.617zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.955.771-1.71 1.96-1.71 1.188 0 1.915.755 1.938 1.71 0 .951-.75 1.71-1.983 1.71zm1.582 11.597H3.635V9.683h3.284v10.769zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-800 pt-8">
        <div class="text-center text-gray-400">
          <p>&copy; {{ currentYear }} Mohamed Alamen. All rights reserved.</p>
          <p class="mt-2 text-sm">Built with Vue.js 3 • Powered by Modern Web Technologies</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
</style>
