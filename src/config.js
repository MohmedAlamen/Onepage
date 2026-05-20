export const GITHUB_USERNAME = 'MohmedAlamen'
export const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN || '' // Add token in .env file for higher rate limits
export const API_ENDPOINTS = {
  user: `https://api.github.com/users/${GITHUB_USERNAME}`,
  repos: `https://api.github.com/users/${GITHUB_USERNAME}/repos`,
}
