import axios from 'axios'

class GitlabService {
  // Temporary token for challenge
  authToken = "CnXzsqtTyptVKwyB2N9t";

  constructor() {
    this.axios = axios.create({
      baseURL: 'https://gitlab.com'
    })

    this.axios.defaults.headers.common['PRIVATE-TOKEN'] = this.authToken
  }

  async get(url, config) {
    return await this.axios.get(url, config)
  }

  async getIssues() {
    return this.get(`/api/v4/issues`)
  }
}
const Gitlabservice = new GitlabService()
export default Gitlabservice