const google = require('googleapis').google
const customSearch = google.customsearch('v1')
const state = require('./state.js')

const googleSearchCredentials = require('../credentials/google-search.json')

async function robot() {
    const content = state.load()

    await fetchImagesOfAllSentences(content)

    state.save(content)

    async function fetchImagesOfAllSentences(content) {
        for (const sentence of content.sentences) {
            const query = `${content.searchTerm} ${sentence.keywords[0]}`
            sentence.images = await fetchGoogleAndReturnImagesLink(query)
            sentence.googleSearchQuery
        }
    }

    async function fetchGoogleAndReturnImagesLink(query) {
        console.log(googleSearchCredentials.apiKey)
        console.log(googleSearchCredentials.searchEngineId)
        console.log(query)
        const response = await customSearch.cse.list({
            auth: googleSearchCredentials.apiKey,
            cx: googleSearchCredentials.searchEngineId,
            q: query,
            searchType: 'image',
            num: 2
        })

        let imagesUrl

        if (response.data.items == null) {
            imagesUrl = ""
        } else {
            imagesUrl = response.data.items.map((item) => {
                return item.link
            })
        }
        return imagesUrl
    }

}

module.exports = robot