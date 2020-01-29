const readLine = require('readline-sync')
const robots = {
    //userInput: require('./robots/user-input.js'),
    text: require('./robots/text.js'),
    input: require('./robots/input.js')
}

async function start() {
    //robots.userInput(content)
    //await robots.text(content)

    //console.log(JSON.stringify(content, null, 4))
    robots.input()
}
start()