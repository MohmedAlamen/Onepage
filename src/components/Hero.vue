<template>
  <section class="section py-20 md:py-40 bg-gradient-to-br from-white via-blue-50/50 to-white dark:from-slate-900 dark:via-blue-900/20 dark:to-slate-900 relative overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl -mr-48 -mt-48 animate-pulse"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/15 rounded-full blur-3xl -ml-48 -mb-48 animate-pulse" style="animation-delay: 2s"></div>
    <div class="absolute top-1/2 right-1/4 w-72 h-72 bg-pink-400/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 4s"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-6 slide-in-left">
          <div class="space-y-3 mb-6">
            <p class="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-widest">Welcome to My Digital Space</p>
            <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 text-gray-900 dark:text-white">
              Hi, I'm <span class="gradient-text">Mohamed Alamen</span>
            </h1>
            <div class="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          <p class="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
            Full Stack Developer & Cloud Architect
          </p>
          <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mb-8">
            With <span class="font-bold text-blue-600 dark:text-blue-400">7+ years</span> of expertise crafting scalable web applications, microservices, and cloud-native solutions. I specialize in turning complex challenges into elegant, high-performance applications that drive business growth.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 pt-8 pb-8">
            <a href="#contact" class="btn btn-primary group relative overflow-hidden">
              <span class="relative z-10 flex items-center gap-2">
                <span>Let's Work Together</span>
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </a>
            <a href="#portfolio" class="btn btn-secondary group">
              <span>View My Work</span>
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
          </div>

          <!-- Social Links -->
          <div class="flex gap-3 pt-4">
            <!-- GitHub -->
            <a href="https://github.com/MohmedAlamen" target="_blank" rel="noopener noreferrer" class="group relative p-3 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-700 dark:to-slate-600 text-gray-800 dark:text-white hover:shadow-lg hover:scale-110 transition-all duration-300" title="GitHub Profile">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">GitHub</span>
            </a>
            <!-- LinkedIn -->
            <a href="https://www.linkedin.com/in/mohaalamen/" target="_blank" rel="noopener noreferrer" class="group relative p-3 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/40 text-blue-600 dark:text-blue-400 hover:shadow-lg hover:scale-110 transition-all duration-300" title="LinkedIn Profile">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.419-.103.249-.129.597-.129.946v5.44h-3.554s.047-8.842 0-9.769h3.554v1.383c.43-.664 1.199-1.609 2.915-1.609 2.129 0 3.72 1.391 3.72 4.378v5.617zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.955.771-1.71 1.96-1.71 1.188 0 1.915.755 1.938 1.71 0 .951-.75 1.71-1.983 1.71zm1.582 11.597H3.635V9.683h3.284v10.769zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
              </svg>
              <span class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">LinkedIn</span>
            </a>
            <!-- Email -->
            <a href="mailto:mohaalamen1234@gmail.com" class="group relative p-3 rounded-full bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/40 dark:to-red-800/40 text-red-600 dark:text-red-400 hover:shadow-lg hover:scale-110 transition-all duration-300" title="Send Email">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Email Me</span>
            </a>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200 dark:border-slate-700">
            <div class="group text-center transform hover:scale-105 transition-transform">
              <p class="text-3xl font-bold gradient-text mb-1">7+</p>
              <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Years Experience</p>
              <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">Building Solutions</p>
            </div>
            <div class="group text-center transform hover:scale-105 transition-transform">
              <p class="text-3xl font-bold gradient-text mb-1">50+</p>
              <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Projects Done</p>
              <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">Successfully Delivered</p>
            </div>
            <div class="group text-center transform hover:scale-105 transition-transform">
              <p class="text-3xl font-bold gradient-text mb-1">30+</p>
              <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Happy Clients</p>
              <p class="text-xs text-gray-500 dark:text-gray-500 mt-1">Satisfied Partners</p>
            </div>
          </div>
        </div>

        <!-- Right Image -->
        <div class="relative hidden md:block">
          <div class="relative w-full aspect-square">
            <!-- Animated Border -->
            <div class="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl opacity-75 group-hover:opacity-100 blur animation-pulse"></div>
            
            <!-- Image Container -->
            <div class="relative w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <img
                src="/assets/images/profile.jpg"
                alt="Mohamed Alamen"
                class="w-full h-full object-cover brightness-110 contrast-110"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div class="absolute inset-0 border-2 border-white/20 rounded-3xl"></div>
            </div>

            <!-- Floating Elements -->
            <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
            <div class="absolute -top-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse" style="animation-delay: 1s;"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.slide-in-left {
  animation: slideInLeft 0.8s ease-out;
}

.gradient-text {
  background: linear-gradient(135deg, #007bff 0%, #ffc107 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: #007bff;
}

.animation-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
