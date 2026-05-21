<template>
  <section class="section py-20 md:py-32">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Image -->
        <div class="relative hidden md:block">
          <div class="relative w-full aspect-square bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
            <img
              src="/assets/images/profile.jpg"
              alt="About Me"
              class="w-full h-full object-cover brightness-110 contrast-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <div class="absolute inset-0 border-2 border-white/10 rounded-2xl"></div>
          </div>
        </div>

        <!-- Content -->
        <div class="space-y-8">
          <div>
            <h2 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
            <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>

          <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm a passionate Full Stack Developer and Cloud Architect with 7+ years of experience building scalable, secure web applications. My journey in tech has been driven by a passion for solving complex problems through elegant code and innovative solutions.
          </p>

          <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Specializing in creating robust microservices and cloud-native applications deployed on IBM Cloud, AWS, and Azure. I excel at translating business requirements into technical solutions, working with modern tech stacks including Vue.js, React, Node.js, Python, and Java.
          </p>

          <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm also deeply passionate about AI, machine learning, and data analysis. I've successfully integrated Watson Services, NLP, and sentiment analysis into production applications, creating intelligent systems that solve real-world business challenges.
          </p>

          <div class="grid grid-cols-2 gap-4 pt-4">
            <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <p class="font-bold text-blue-600 dark:text-blue-400">Frontend Expertise</p>
              <p class="text-sm text-gray-700 dark:text-gray-300 mt-1">Vue.js, React, Tailwind</p>
            </div>
            <div class="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
              <p class="font-bold text-purple-600 dark:text-purple-400">Backend Mastery</p>
              <p class="text-sm text-gray-700 dark:text-gray-300 mt-1">Node.js, Java, Python</p>
            </div>
            <div class="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
              <p class="font-bold text-amber-600 dark:text-amber-400">Cloud Platforms</p>
              <p class="text-sm text-gray-700 dark:text-gray-300 mt-1">IBM Cloud, AWS, Azure</p>
            </div>
            <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <p class="font-bold text-green-600 dark:text-green-400">AI & Analytics</p>
              <p class="text-sm text-gray-700 dark:text-gray-300 mt-1">Watson, ML, Data Science</p>
            </div>
          </div>

          <div class="flex flex-wrap gap-3 pt-4">
            <div class="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-semibold text-sm">
              Full Stack Development
            </div>
            <div class="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full font-semibold text-sm">
              Cloud Architecture
            </div>
            <div class="px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded-full font-semibold text-sm">
              AI & Machine Learning
            </div>
            <div class="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full font-semibold text-sm">
              DevOps & CI/CD
            </div>
          </div>

          <button class="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-2 group">
            <span>Start a Project</span>
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
</style>
