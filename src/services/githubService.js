import axios from 'axios'
import { API_ENDPOINTS, GITHUB_TOKEN } from '../config.js'

const headers = GITHUB_TOKEN ? { Authorization: `token ${GITHUB_TOKEN}` } : {}

export const githubAPI = {
  getUser() {
    return axios.get(API_ENDPOINTS.user, { headers })
  },
  
  getRepos() {
    return axios.get(API_ENDPOINTS.repos, {
      headers,
      params: {
        sort: 'updated',
        per_page: 100,
        type: 'owner'
      }
    })
  },

  getRepoDetails(repo) {
    return axios.get(`https://api.github.com/repos/${repo.owner.login}/${repo.name}`, { headers })
  }
}
