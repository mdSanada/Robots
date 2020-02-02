const readLine = require('readline-sync')
const robots = {
    //userInput: require('./robots/user-input.js'),
    text: require('./robots/text.js'),
    input: require('./robots/input.js'),
    state: require('./robots/state.js'),
    image: require('./robots/images.js'),
    video: require('./robots/video.js')
}

async function start() {
    //robots.userInput(content)
    //await robots.text(content)

    //console.log(JSON.stringify(content, null, 4))
    //robots.input()
    //await robots.text()
    await robots.image()
        //await robots.video()

    const content = robots.state.load()
    console.dir(content, { depth: null })
}

start()