<template>
  <section class="section py-20 md:py-32 bg-white dark:bg-slate-900 relative overflow-hidden" id="contact">
    <!-- Decorative Background -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
    
    <div class="container mx-auto px-4 relative z-10">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-blue-500 to-amber-400 rounded-full mx-auto mb-6"></div>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12">
        <!-- Contact Info -->
        <div class="space-y-8 slide-in-left">
          <div class="space-y-6">
            <!-- Email -->
            <div class="flex items-start gap-4 group hover:translate-x-1 transition-transform">
              <div class="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-shadow">
                <svg class="w-7 h-7 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-lg mb-1">Email</h3>
                <a href="mailto:mohaalamen1234@gmail.com" class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                  mohaalamen1234@gmail.com
                </a>
              </div>
            </div>

            <!-- Phone -->
            <div class="flex items-start gap-4 group hover:translate-x-1 transition-transform">
              <div class="w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-shadow">
                <svg class="w-7 h-7 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-lg mb-1">Phone</h3>
                <a href="tel:+97451172313" class="text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors">
                  +974 5117 2313
                </a>
              </div>
            </div>

            <!-- Location -->
            <div class="flex items-start gap-4 group hover:translate-x-1 transition-transform">
              <div class="w-14 h-14 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900 dark:to-red-800 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:shadow-lg transition-shadow">
                <svg class="w-7 h-7 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-lg mb-1">Location</h3>
                <p class="text-gray-600 dark:text-gray-400">
                  Doha, Qatar
                </p>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="pt-4 border-t border-gray-200 dark:border-slate-700">
            <h3 class="font-semibold text-lg mb-4">Follow Me</h3>
            <div class="flex gap-3">
              <a href="https://github.com/MohmedAlamen" target="_blank" class="group relative p-4 rounded-xl bg-gray-100 dark:bg-slate-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 text-gray-800 dark:text-white hover:text-white transition-all hover:scale-110 shadow-md hover:shadow-lg">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/mohaalamen/" target="_blank" class="group relative p-4 rounded-xl bg-gray-100 dark:bg-slate-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 text-gray-800 dark:text-white hover:text-white transition-all hover:scale-110 shadow-md hover:shadow-lg">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.419-.103.249-.129.597-.129.946v5.44h-3.554s.047-8.842 0-9.769h3.554v1.383c.43-.664 1.199-1.609 2.915-1.609 2.129 0 3.72 1.391 3.72 4.378v5.617zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.71 0-.955.771-1.71 1.96-1.71 1.188 0 1.915.755 1.938 1.71 0 .951-.75 1.71-1.983 1.71zm1.582 11.597H3.635V9.683h3.284v10.769zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </a>
              <a href="mailto:mohaalamen1234@gmail.com" class="group relative p-4 rounded-xl bg-gray-100 dark:bg-slate-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-600 text-gray-800 dark:text-white hover:text-white transition-all hover:scale-110 shadow-md hover:shadow-lg">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <form @submit.prevent="submitForm" class="space-y-6 slide-in-right">
          <div class="space-y-2">
            <label for="name" class="block text-sm font-semibold">Your Name</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              class="w-full px-4 py-3 bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="John Doe"
            />
          </div>

          <div class="space-y-2">
            <label for="email" class="block text-sm font-semibold">Email Address</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              class="w-full px-4 py-3 bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="john@example.com"
            />
          </div>

          <div class="space-y-2">
            <label for="subject" class="block text-sm font-semibold">Subject</label>
            <input
              id="subject"
              v-model="form.subject"
              type="text"
              required
              class="w-full px-4 py-3 bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Project inquiry"
            />
          </div>

          <div class="space-y-2">
            <label for="message" class="block text-sm font-semibold">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              required
              rows="5"
              class="w-full px-4 py-3 bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all"
              placeholder="Your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            :disabled="submitting"
            class="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center gap-2"
          >
            <svg v-if="!submitting" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
            </svg>
            {{ submitting ? 'Sending...' : 'Send Message' }}
          </button>

          <div v-if="submitMessage" :class="['p-4 rounded-lg text-center font-medium', submitSuccess ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-700' : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-700']">
            {{ submitMessage }}
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

const submitForm = async () => {
  submitting.value = true
  submitMessage.value = ''

  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    submitSuccess.value = true
    submitMessage.value = '✅ Message sent successfully! I\'ll get back to you soon.'
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
    
    // Clear message after 5 seconds
    setTimeout(() => {
      submitMessage.value = ''
    }, 5000)
  } catch (error) {
    submitSuccess.value = false
    submitMessage.value = '❌ Failed to send message. Please try again.'
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
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

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(40px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.slide-in-left {
  animation: slideInLeft 0.8s ease-out;
}

.slide-in-right {
  animation: slideInRight 0.8s ease-out;
}

input:focus,
textarea:focus {
  box-shadow: inset 0 0 0 3px rgba(59, 130, 246, 0.1);
}
</style>
