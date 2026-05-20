<template>
  <section class="section py-20 md:py-32 bg-white dark:bg-slate-900 relative">
    <div class="container mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">Technical Skills</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-amber-400 rounded-full mx-auto mb-6"></div>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Proficient in a diverse range of technologies and frameworks, with hands-on experience in modern development practices
        </p>
      </div>

      <!-- Skills Grid -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
        <SkillCard
          v-for="(skill, index) in skills"
          :key="skill.name"
          :name="skill.name"
          :level="skill.level"
          :icon="skill.icon"
          :color="skill.color"
          :class="`fade-in fade-in-delay-${(index % 3) + 1}`"
        />
      </div>

      <!-- Skills Categories -->
      <div class="mt-16 grid md:grid-cols-3 gap-8">
        <!-- Frontend -->
        <div class="card fade-in fade-in-delay-1 group">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-1 h-10 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full group-hover:scale-110 transition-transform"></div>
            <div>
              <h3 class="text-2xl font-bold">Frontend</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">User Interface</p>
            </div>
          </div>
          <div class="space-y-4">
            <div v-for="tech in frontendTechs" :key="tech" class="flex items-center gap-3 group/item">
              <div class="w-2 h-2 bg-blue-500 rounded-full group-hover/item:scale-150 transition-transform"></div>
              <span class="text-gray-700 dark:text-gray-300 group-hover/item:text-blue-500 dark:group-hover/item:text-blue-400 transition-colors">{{ tech }}</span>
            </div>
          </div>
        </div>

        <!-- Backend -->
        <div class="card fade-in fade-in-delay-2 group">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-1 h-10 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full group-hover:scale-110 transition-transform"></div>
            <div>
              <h3 class="text-2xl font-bold">Backend</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">Server & Database</p>
            </div>
          </div>
          <div class="space-y-4">
            <div v-for="tech in backendTechs" :key="tech" class="flex items-center gap-3 group/item">
              <div class="w-2 h-2 bg-purple-500 rounded-full group-hover/item:scale-150 transition-transform"></div>
              <span class="text-gray-700 dark:text-gray-300 group-hover/item:text-purple-500 dark:group-hover/item:text-purple-400 transition-colors">{{ tech }}</span>
            </div>
          </div>
        </div>

        <!-- DevOps & Tools -->
        <div class="card fade-in fade-in-delay-3 group">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-1 h-10 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full group-hover:scale-110 transition-transform"></div>
            <div>
              <h3 class="text-2xl font-bold">DevOps</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">Tools & Deployment</p>
            </div>
          </div>
          <div class="space-y-4">
            <div v-for="tech in devopsTechs" :key="tech" class="flex items-center gap-3 group/item">
              <div class="w-2 h-2 bg-orange-500 rounded-full group-hover/item:scale-150 transition-transform"></div>
              <span class="text-gray-700 dark:text-gray-300 group-hover/item:text-orange-500 dark:group-hover/item:text-orange-400 transition-colors">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Proficiency Levels -->
      <div class="mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-xl">
        <h3 class="text-2xl font-bold mb-8 text-center">Experience Levels</h3>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="text-5xl font-bold gradient-text mb-2">Expert</div>
            <p class="text-gray-600 dark:text-gray-400">Deep knowledge & 5+ years experience</p>
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">HTML5, CSS3, JavaScript, Vue.js, Node.js, Java</p>
          </div>
          <div class="text-center">
            <div class="text-5xl font-bold gradient-text mb-2">Advanced</div>
            <p class="text-gray-600 dark:text-gray-400">Solid knowledge & 3+ years experience</p>
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">React, MongoDB, PostgreSQL, AWS, Docker</p>
          </div>
          <div class="text-center">
            <div class="text-5xl font-bold gradient-text mb-2">Intermediate</div>
            <p class="text-gray-600 dark:text-gray-400">Working knowledge & 1+ years experience</p>
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">Kubernetes, GraphQL, Microservices</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SkillCard from './SkillCard.vue'

const skills = [
  { name: 'HTML5 & CSS3', level: 'Expert', icon: '🎨', color: 'bg-red-500' },
  { name: 'JavaScript', level: 'Expert', icon: '⚡', color: 'bg-yellow-500' },
  { name: 'Vue.js', level: 'Advanced', icon: '🖖', color: 'bg-green-500' },
  { name: 'React', level: 'Advanced', icon: '⚛️', color: 'bg-cyan-500' },
  { name: 'Node.js', level: 'Expert', icon: '🔧', color: 'bg-green-600' },
  { name: 'Java', level: 'Expert', icon: '☕', color: 'bg-orange-600' },
  { name: 'MongoDB', level: 'Advanced', icon: '🗄️', color: 'bg-green-700' },
  { name: 'SQL', level: 'Advanced', icon: '📊', color: 'bg-blue-600' },
  { name: 'IBM Cloud', level: 'Advanced', icon: '☁️', color: 'bg-indigo-500' },
  { name: 'Docker', level: 'Intermediate', icon: '🐳', color: 'bg-blue-500' },
  { name: 'Git', level: 'Expert', icon: '📚', color: 'bg-orange-700' },
  { name: 'REST APIs', level: 'Expert', icon: '🌐', color: 'bg-purple-500' },
]

const frontendTechs = [
  'Vue.js 3 (Composition API)',
  'React with Hooks',
  'Tailwind CSS & Bootstrap',
  'Responsive Design',
  'Web Animations',
  'State Management (Vuex, Redux)',
]

const backendTechs = [
  'Express.js & Node.js',
  'Spring Boot & Java',
  'MongoDB & PostgreSQL',
  'MySQL & Firebase',
  'Authentication & Security',
  'REST & GraphQL APIs',
]

const devopsTechs = [
  'Docker & Containerization',
  'Kubernetes Basics',
  'CI/CD Pipelines',
  'Git Version Control',
  'AWS & Cloud Services',
  'Server Deployment',
]
</script>

<style scoped>
.card {
  @apply bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all;
}

.gradient-text {
  background: linear-gradient(135deg, #007bff 0%, #ffc107 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
