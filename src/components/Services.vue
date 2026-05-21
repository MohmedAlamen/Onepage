<template>
  <section class="section py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-slate-800 dark:to-slate-900 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute top-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -ml-48 -mt-48"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl -mr-48 -mb-48"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Services & Expertise</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Comprehensive solutions tailored to your business needs with cutting-edge technologies
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- Service 1 -->
        <div class="group p-8 bg-white dark:bg-slate-700 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-blue-500/50">
          <div class="relative mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4m0 6V4m0 0L8 8m6 12h8"/>
              </svg>
            </div>
          </div>
          <h3 class="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Web Development</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            Creating modern, responsive, and high-performance websites using Vue.js, React, and latest web technologies.
          </p>
          <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Responsive Design</li>
            <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>Performance Optimization</li>
            <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>SEO Friendly</li>
          </ul>
        </div>

        <!-- Service 2 -->
        <div class="group p-8 bg-white dark:bg-slate-700 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-purple-500/50">
          <div class="relative mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/40 dark:to-purple-800/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2.343-4.346a4 4 0 118.684 0"/>
              </svg>
            </div>
          </div>
          <h3 class="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Backend Development</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            Developing robust APIs and server-side solutions with Node.js, Java, and Python on scalable cloud infrastructure.
          </p>
          <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>RESTful & GraphQL APIs</li>
            <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>Database Design</li>
            <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>Microservices</li>
          </ul>
        </div>

        <!-- Service 3 -->
        <div class="group p-8 bg-white dark:bg-slate-700 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-amber-500/50">
          <div class="relative mb-6">
            <div class="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/40 dark:to-amber-800/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
              </svg>
            </div>
          </div>
          <h3 class="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">Cloud & DevOps</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            Deploying, managing, and scaling applications on IBM Cloud, AWS with containerization and CI/CD pipelines.
          </p>
          <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>Docker & Kubernetes</li>
            <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>CI/CD Pipelines</li>
            <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>Cloud Architecture</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
</style>
