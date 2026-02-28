const fs = require('fs').promises
const getTheme = require('./theme')

const darkDefaultTheme = getTheme({
    name: 'GitHub Dark Default',
})

// Write themes

fs.mkdir('./themes', { recursive: true })
    .then(() =>
        Promise.all([
            fs.writeFile(
                './themes/dark-default.json',
                JSON.stringify(darkDefaultTheme, null, 2),
            ),
        ]),
    )
    .catch(() => process.exit(1))
