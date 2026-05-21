<template>
  <div class="group relative overflow-hidden bg-white dark:bg-slate-700 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 border border-gray-100 dark:border-slate-600 hover:border-blue-500/50">
    <!-- Image Container -->
    <div class="relative overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 dark:from-slate-600 dark:to-slate-500 aspect-video">
      <img
        :src="project.image"
        :alt="project.name"
        class="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <a
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          class="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all shadow-lg transform scale-75 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-opacity delay-100 flex items-center gap-2 hover:shadow-xl"
        >
          <span>View Project</span>
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
          </svg>
        </a>
      </div>
    </div>

    <!-- Content -->
    <div class="p-6">
      <h3 class="text-xl font-bold mb-2 truncate text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{{ project.name }}</h3>
      
      <p class="text-gray-600 dark:text-gray-200 text-sm mb-4 line-clamp-2 leading-relaxed">
        {{ project.description }}
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-4">
        <span v-for="tag in project.tags" :key="tag" class="text-xs px-3 py-1.5 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 text-blue-700 dark:text-blue-300 rounded-full font-medium border border-blue-200 dark:border-blue-700/50">
          {{ tag }}
        </span>
      </div>

      <!-- Stats -->
      <div class="grid grid-cols-3 gap-3 text-sm text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-slate-600 pt-4">
        <div class="flex flex-col items-center gap-1">
          <svg class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2l-2.81 6.63L2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
          <span class="font-semibold text-gray-900 dark:text-white">{{ project.stats.stars }}</span>
        </div>
        <div class="flex flex-col items-center gap-1">
          <svg class="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 2a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V5a3 3 0 00-3-3H6zm.5 2h11a1.5 1.5 0 011.5 1.5v11a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 015 16.5V5.5A1.5 1.5 0 016.5 4z"/>
          </svg>
          <span class="font-semibold text-gray-900 dark:text-white">{{ project.stats.forks }}</span>
        </div>
        <div class="flex flex-col items-center gap-1">
          <svg class="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm0 2c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6z"/>
          </svg>
          <span class="font-semibold text-gray-900 dark:text-white">{{ project.stats.watchers }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
