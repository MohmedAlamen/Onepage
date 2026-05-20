<template>
  <div class="p-6 bg-white dark:bg-slate-700 rounded-lg shadow-lg hover-lift transition-all text-center">
    <div class="text-4xl mb-3">{{ icon }}</div>
    <h3 class="text-xl font-bold mb-2">{{ name }}</h3>
    <p class="text-sm font-semibold px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-600 dark:text-blue-300 rounded-full inline-block">
      {{ level }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  level: String,
  icon: String,
  color: String,
})
</script>

<style scoped>
.hover-lift {
  transform: translateY(0);
}

.hover-lift:hover {
  transform: translateY(-8px);
}
</style>
