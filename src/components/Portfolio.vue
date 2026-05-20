<template>
  <section class="section py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden" id="portfolio">
    <!-- Decorative Background -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>

    <div class="container mx-auto px-4 relative z-10">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">My Portfolio</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-amber-400 rounded-full mx-auto mb-6"></div>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore my latest projects showcasing expertise in full-stack development
        </p>
      </div>

      <!-- Filter Buttons -->
      <div class="mb-12">
        <div class="flex flex-wrap gap-3 justify-center">
          <button
            @click="filterType = 'all'"
            :class="['px-6 py-2 rounded-full font-semibold transition-all duration-300 hover-lift', filterType === 'all' ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg' : 'bg-white dark:bg-slate-700 text-gray-700 dark:text-white border border-gray-200 dark:border-slate-600 hover:border-blue-500']"
          >
            <span class="flex items-center gap-2">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>
              All Projects
            </span>
          </button>
          <button
            @click="filterType = 'github'"
            :class="['px-6 py-2 rounded-full font-semibold transition-all duration-300 hover-lift', filterType === 'github' ? 'bg-gradient-to-r from-gray-800 to-black text-white shadow-lg' : 'bg-white dark:bg-slate-700 text-gray-700 dark:text-white border border-gray-200 dark:border-slate-600 hover:border-gray-800']"
          >
            <span class="flex items-center gap-2">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub Projects
            </span>
          </button>
          <button
            @click="filterType = 'featured'"
            :class="['px-6 py-2 rounded-full font-semibold transition-all duration-300 hover-lift', filterType === 'featured' ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg' : 'bg-white dark:bg-slate-700 text-gray-700 dark:text-white border border-gray-200 dark:border-slate-600 hover:border-amber-500']"
          >
            <span class="flex items-center gap-2">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2l-2.81 6.63L2 9.24l5.46 4.73L5.82 21z"/></svg>
              Featured
            </span>
          </button>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="flex flex-col items-center justify-center py-20">
        <div class="relative w-16 h-16 mb-6">
          <div class="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 blur-lg animate-pulse"></div>
          <div class="absolute inset-0 border-4 border-blue-200 dark:border-slate-600 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
        <p class="text-gray-600 dark:text-gray-400 font-medium">Loading amazing projects...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="p-6 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-lg text-center mb-8 fade-in">
        <div class="flex items-center justify-center mb-3">
          <svg class="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
        </div>
        <p class="text-red-700 dark:text-red-300 font-semibold">{{ error }}</p>
      </div>

      <!-- Projects Grid -->
      <div v-else class="">
        <!-- Empty State -->
        <div v-if="displayedProjects.length === 0" class="text-center py-16">
          <div class="w-20 h-20 mx-auto mb-6 text-4xl opacity-50">📁</div>
          <p class="text-gray-600 dark:text-gray-400 text-lg font-medium">No projects found</p>
          <p class="text-gray-500 dark:text-gray-500 text-sm mt-2">Try changing the filter</p>
        </div>

        <!-- Projects Display -->
        <div v-else class="">
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <ProjectCard
              v-for="(project, index) in displayedProjects"
              :key="project.id || project.name"
              :project="project"
              :class="`fade-in fade-in-delay-${(index % 3) + 1}`"
            />
          </div>

          <!-- Stats Section -->
          <div v-if="repos.length > 0" class="mt-16 p-8 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800 rounded-2xl border border-blue-100 dark:border-slate-600">
            <h3 class="text-2xl font-bold text-center mb-8">GitHub Statistics</h3>
            <div class="grid md:grid-cols-3 gap-8">
              <div class="text-center group">
                <div class="text-5xl font-bold gradient-text mb-3 group-hover:scale-110 transition-transform">{{ repos.length }}</div>
                <p class="text-gray-600 dark:text-gray-400 font-medium">Public Repositories</p>
              </div>
              <div class="text-center group">
                <div class="text-5xl font-bold gradient-text mb-3 group-hover:scale-110 transition-transform">{{ repos.reduce((sum, r) => sum + (r.stats?.stars || 0), 0) }}</div>
                <p class="text-gray-600 dark:text-gray-400 font-medium">Total Stars</p>
              </div>
              <div class="text-center group">
                <div class="text-5xl font-bold gradient-text mb-3 group-hover:scale-110 transition-transform">{{ repos.reduce((sum, r) => sum + (r.stats?.forks || 0), 0) }}</div>
                <p class="text-gray-600 dark:text-gray-400 font-medium">Total Forks</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center pt-12 mt-8 border-t border-gray-200 dark:border-slate-700">
        <p class="text-gray-600 dark:text-gray-400 mb-6">Want to see more projects?</p>
        <a href="https://github.com/MohmedAlamen" target="_blank" class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105 group">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          <span>Visit My GitHub</span>
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import ProjectCard from './ProjectCard.vue'
import { githubAPI } from '../services/githubService'

const loading = ref(false)
const error = ref(null)
const filterType = ref('all')
const repos = ref([])

const featuredProjects = [
  {
    id: 'featured-1',
    name: 'Secure Chatbot Integration',
    description: 'Developed a secure website integrated with a chatbot for an automobile client using HTML, CSS, JavaScript, and IBM Watson Assistant.',
    image: '/assets/images/project-chatbot.svg',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Watson Assistant'],
    link: '#',
    type: 'featured',
    stats: {
      stars: 45,
      forks: 12,
      watchers: 8,
    }
  },
  {
    id: 'featured-2',
    name: 'Sentiment Analyzer',
    description: 'Developed and deployed a sentiment analyzer for the box reviews section of an eCommerce platform using IBM NLU.',
    image: '/assets/images/project-sentiment.svg',
    tags: ['Node.js', 'Watson NLU', 'React', 'MongoDB'],
    link: '#',
    type: 'featured',
    stats: {
      stars: 78,
      forks: 23,
      watchers: 15,
    }
  },
  {
    id: 'featured-3',
    name: 'E-commerce Fashion Website',
    description: 'Created a styled multi-page website for a new player in the fashion industry, integrated with a shopping cart and Stripe payment gateway.',
    image: '/assets/images/project-fashion.svg',
    tags: ['Vue.js', 'Stripe API', 'Bootstrap', 'Node.js'],
    link: '#',
    type: 'featured',
    stats: {
      stars: 102,
      forks: 34,
      watchers: 28,
    }
  }
]

const displayedProjects = computed(() => {
  let projects = []
  
  if (filterType.value === 'featured') {
    projects = featuredProjects
  } else if (filterType.value === 'github') {
    projects = repos.value
  } else {
    projects = [...featuredProjects, ...repos.value]
  }
  
  return projects.sort((a, b) => (b.stats?.stars || 0) - (a.stats?.stars || 0))
})

const fetchGitHubProjects = async () => {
  loading.value = true
  error.value = null
  
  try {
    const response = await githubAPI.getRepos()
    repos.value = response.data
      .filter(repo => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 9)
      .map(repo => ({
        ...repo,
        id: repo.id,
        name: repo.name,
        description: (repo.description || 'No description available').substring(0, 100) + (repo.description && repo.description.length > 100 ? '...' : ''),
        image: '/assets/images/project-placeholder.svg',
        tags: repo.language ? [repo.language] : ['Open Source'],
        link: repo.html_url,
        type: 'github',
        stats: {
          stars: repo.stargazers_count || 0,
          forks: repo.forks_count || 0,
          watchers: repo.watchers_count || 0,
        },
        updatedAt: new Date(repo.updated_at).toLocaleDateString('en-US')
      }))
  } catch (err) {
    console.error('Failed to fetch GitHub repos:', err.message || err)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchGitHubProjects()
})
</script>

<style scoped>
.gradient-text {
  background: linear-gradient(135deg, #007bff 0%, #ffc107 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-2px);
}
</style>

<script setup>
import { ref, computed, onMounted } from 'vue'
import ProjectCard from './ProjectCard.vue'
import { githubAPI } from '../services/githubService'

const loading = ref(false)
const error = ref(null)
const filterType = ref('all')
const repos = ref([])

const featuredProjects = [
  {
    id: 'featured-1',
    name: 'Secure Chatbot Integration',
    description: 'Developed a secure website integrated with a chatbot for an automobile client using HTML, CSS, JavaScript, and IBM Watson Assistant.',
    image: '/assets/images/project-chatbot.svg',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Watson Assistant'],
    link: '#',
    type: 'featured',
    stats: {
      stars: 45,
      forks: 12,
      watchers: 8,
    }
  },
  {
    id: 'featured-2',
    name: 'Sentiment Analyzer',
    description: 'Developed and deployed a sentiment analyzer for the box reviews section of an eCommerce platform using IBM NLU.',
    image: '/assets/images/project-sentiment.svg',
    tags: ['Node.js', 'Watson NLU', 'React', 'MongoDB'],
    link: '#',
    type: 'featured',
    stats: {
      stars: 78,
      forks: 23,
      watchers: 15,
    }
  },
  {
    id: 'featured-3',
    name: 'E-commerce Fashion Website',
    description: 'Created a styled multi-page website for a new player in the fashion industry, integrated with a shopping cart and Stripe payment gateway.',
    image: '/assets/images/project-fashion.svg',
    tags: ['Vue.js', 'Stripe API', 'Bootstrap', 'Node.js'],
    link: '#',
    type: 'featured',
    stats: {
      stars: 102,
      forks: 34,
      watchers: 28,
    }
  }
]

const displayedProjects = computed(() => {
  let projects = []
  
  if (filterType.value === 'featured') {
    projects = featuredProjects
  } else if (filterType.value === 'github') {
    projects = repos.value
  } else {
    projects = [...featuredProjects, ...repos.value]
  }
  
  // Sort by stars count (descending)
  return projects.sort((a, b) => (b.stats?.stars || 0) - (a.stats?.stars || 0))
})

const fetchGitHubProjects = async () => {
  loading.value = true
  error.value = null
  
  try {
    const response = await githubAPI.getRepos()
    console.log('GitHub API Response:', response.data)
    
    // Filter and map GitHub projects
    repos.value = response.data
      .filter(repo => !repo.fork) // Only show non-forked repos
      .sort((a, b) => b.stargazers_count - a.stargazers_count) // Sort by stars
      .slice(0, 9) // Limit to 9 repos for better grid layout
      .map(repo => ({
        ...repo,
        id: repo.id,
        name: repo.name,
        description: (repo.description || 'No description available').substring(0, 100) + (repo.description && repo.description.length > 100 ? '...' : ''),
        image: '/assets/images/project-placeholder.svg',
        tags: repo.language ? [repo.language] : ['Open Source'],
        link: repo.html_url,
        type: 'github',
        stats: {
          stars: repo.stargazers_count || 0,
          forks: repo.forks_count || 0,
          watchers: repo.watchers_count || 0,
        },
        updatedAt: new Date(repo.updated_at).toLocaleDateString('en-US')
      }))
    
    console.log('Processed repos:', repos.value.length)
  } catch (err) {
    console.error('Failed to fetch GitHub repos:', err.message || err)
    // Don't show error if featured projects exist - GitHub failure is not critical
    if (featuredProjects.length === 0) {
      error.value = 'Failed to load GitHub projects. Featured projects are available.'
    }
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchGitHubProjects()
})
</script>

<style scoped>
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>
