export default class Website {
  constructor() {
    this.websiteID = this.getWebsiteID()
    console.log(this)
  }

  getWebsiteID() {
    console.log(this)
    const tags = document.head.querySelectorAll('meta')
    const websiteIDTag = Array.from(tags).find(
      ({ name }) => name === "konsent/website-id"
    )
    if(!websiteIDTag) {
      throw new Error('[Konsent]: Website not found')
    }
    return websiteIDTag.content
  }

  async getWebsite() {
    console.log(this)
    const url = `https://organizations.api.konsent.com.br/websites/${this.websiteID}`
    const response = await fetch(url)
    return response.json()
  }
}