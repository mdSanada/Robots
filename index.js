const readLine = require('readline-sync')

function start() {
    const content = {}
    content.searchTerm = askAndReturnSearchTerm()

    function askAndReturnSearchTerm() {
        return readLine.question('Type a Wikipedia search term: ')
    }

    console.log(content)
}
start()