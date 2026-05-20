<template>
  <section class="section py-20 md:py-32 bg-gray-50 dark:bg-slate-800">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-4">My Services</h2>
      <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-amber-400 rounded-full mx-auto mb-12"></div>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- Service 1 -->
        <div class="p-8 bg-white dark:bg-slate-700 rounded-xl shadow-lg hover-lift transition-all">
          <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <h3 class="text-2xl font-bold mb-3">Web Development</h3>
          <p class="text-gray-600 dark:text-gray-300">
            Building modern, fast, and interactive websites using the latest JavaScript frameworks with clean, maintainable code.
          </p>
        </div>

        <!-- Service 2 -->
        <div class="p-8 bg-white dark:bg-slate-700 rounded-xl shadow-lg hover-lift transition-all">
          <div class="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
            </svg>
          </div>
          <h3 class="text-2xl font-bold mb-3">Backend Development</h3>
          <p class="text-gray-600 dark:text-gray-300">
            Designing and developing robust, scalable APIs using Node.js, Python, and Java with modern databases.
          </p>
        </div>

        <!-- Service 3 -->
        <div class="p-8 bg-white dark:bg-slate-700 rounded-xl shadow-lg hover-lift transition-all">
          <div class="w-16 h-16 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/>
            </svg>
          </div>
          <h3 class="text-2xl font-bold mb-3">Cloud Integration</h3>
          <p class="text-gray-600 dark:text-gray-300">
            Expertise in deploying and managing applications on cloud platforms like IBM Cloud and AWS with AI service integration.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.hover-lift {
  transform: translateY(0);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.hover-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

:deep(.dark) .hover-lift {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

:deep(.dark) .hover-lift:hover {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
}
</style>
