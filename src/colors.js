const darkColors = require('@primer/primitives/dist/json/colors/dark.json')

function getColors() {
    // Temp override until Primitives are updated
    darkColors.fg.default = '#e6edf3'
    darkColors.fg.muted = '#7d8590'
    darkColors.accent.fg = '#2f81f7'
    darkColors.severe.subtle = 'rgba(219, 109, 40, 0.1)'
    darkColors.danger.subtle = 'rgba(248, 81, 73, 0.1)'
    darkColors.done.subtle = 'rgba(163, 113, 247, 0.1)'
    darkColors.sponsors.subtle = 'rgba(219, 97, 162, 0.1)'

    return darkColors
}

module.exports = {
    getColors,
}
