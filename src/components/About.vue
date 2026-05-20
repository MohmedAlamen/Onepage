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
        <div class="space-y-6">
          <div>
            <h2 class="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-amber-400 rounded-full"></div>
          </div>

          <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            I'm a passionate Full Stack Developer with expertise in building scalable, secure web applications. With 7+ years of experience, I've helped companies of all sizes transform their digital presence through innovative technology solutions.
          </p>

          <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            My specialization lies in creating robust microservices and cloud-native applications deployed on platforms like IBM Cloud and AWS. I excel at frontend development using modern JavaScript frameworks (Vue.js, React) and backend development with Node.js, Python, and Java.
          </p>

          <p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            I'm also passionate about leveraging AI and machine learning technologies. I've worked extensively with Watson Services, Natural Language Processing, and sentiment analysis tools to build intelligent applications that solve real-world problems.
          </p>

          <div class="flex flex-wrap gap-4 pt-4">
            <div class="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full font-semibold">
              Full Stack Development
            </div>
            <div class="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full font-semibold">
              Cloud Technologies
            </div>
            <div class="px-4 py-2 bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-300 rounded-full font-semibold">
              AI & Watson
            </div>
          </div>

          <button class="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl">
            Let's Work Together
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
