const chroma = require('chroma-js')
const { getColors } = require('./colors')

// Choosing colors from primer/primitives
// There are multiple ways to define what color is used:

// 1. Global variable
//    e.g. "textLink.foreground": color.fg.default,
// 2. Color scale
//    e.g. "textLink.foreground": scale.blue[5],
// 3. Per theme. Useful when a certain theme needs an exception
//    e.g. "textLink.foreground": themes({ light: scale.blue[5], light_high_contrast: scale.blue[5], light_colorblind: scale.blue[5], dark: scale.blue[2], dark_high_contrast: scale.blue[3], dark_colorblind: scale.blue[2], dark_dimmed: scale.blue[3] }),

function getTheme({ name }) {
    const rawColors = getColors()
    const color = changeColorToHexAlphas(rawColors)
    const scale = color.scale // Usage: scale.blue[6]

    const alpha = (color, alpha) => {
        return chroma(color).alpha(alpha).hex()
    }

    return {
        name: name,
        colors: {
            focusBorder: color.accent.emphasis,
            foreground: color.fg.default,
            descriptionForeground: color.fg.muted,
            errorForeground: color.danger.fg,

            'textLink.foreground': color.accent.fg,
            'textLink.activeForeground': color.accent.fg,
            'textBlockQuote.background': color.canvas.inset,
            'textBlockQuote.border': color.border.default,
            'textCodeBlock.background': color.neutral.muted,
            'textPreformat.foreground': color.fg.muted,
            'textPreformat.background': color.neutral.muted,
            'textSeparator.foreground': color.border.muted,

            'icon.foreground': color.fg.muted,
            'keybindingLabel.foreground': color.fg.default,

            'button.background': color.btn.primary.bg,
            'button.foreground': color.btn.primary.text,
            'button.hoverBackground': color.btn.primary.hoverBg,

            'button.secondaryBackground': color.btn.activeBg,
            'button.secondaryForeground': color.btn.text,
            'button.secondaryHoverBackground': color.btn.hoverBg,

            'checkbox.background': color.canvas.subtle,
            'checkbox.border': color.border.default,

            'dropdown.background': color.canvas.overlay,
            'dropdown.border': color.border.default,
            'dropdown.foreground': color.fg.default,
            'dropdown.listBackground': color.canvas.overlay,

            'input.background': color.canvas.default,
            'input.border': color.border.default,
            'input.foreground': color.fg.default,
            'input.placeholderForeground': color.fg.subtle,

            'badge.foreground': color.fg.onEmphasis,
            'badge.background': color.accent.emphasis,

            'progressBar.background': color.accent.emphasis,

            'titleBar.activeForeground': color.fg.muted,
            'titleBar.activeBackground': color.canvas.default,
            'titleBar.inactiveForeground': color.fg.muted,
            'titleBar.inactiveBackground': color.canvas.inset,
            'titleBar.border': color.border.default,

            'activityBar.foreground': '#FFFFFF',
            'activityBar.inactiveForeground': '#6272A4',
            'activityBar.background': '#0D1117',
            'activityBarBadge.foreground': '#000000',
            'activityBarBadge.background': '#2ec27e',
            'activityBar.activeBorder': '#7EE787',
            'activityBar.border': color.border.default,

            'sideBar.foreground': color.fg.default,
            'sideBar.background': color.canvas.inset,
            'sideBar.border': color.border.default,
            'sideBarTitle.foreground': color.fg.default,
            'sideBarSectionHeader.foreground': color.fg.default,
            'sideBarSectionHeader.background': color.canvas.inset,
            'sideBarSectionHeader.border': color.border.default,

            'list.hoverForeground': color.fg.default,
            'list.inactiveSelectionForeground': color.fg.default,
            'list.activeSelectionForeground': color.fg.default,
            'list.hoverBackground': color.neutral.subtle,
            'list.inactiveSelectionBackground': color.neutral.muted,
            'list.activeSelectionBackground': color.neutral.muted,
            'list.focusForeground': color.fg.default,
            'list.focusBackground': color.accent.subtle,
            'list.inactiveFocusBackground': color.accent.subtle,
            'list.highlightForeground': color.accent.fg,

            'tree.indentGuidesStroke': '#6272A460',

            'notificationCenterHeader.foreground': color.fg.muted,
            'notificationCenterHeader.background': color.canvas.subtle,
            'notifications.foreground': color.fg.default,
            'notifications.background': color.canvas.overlay,
            'notifications.border': color.border.default,
            'notificationsErrorIcon.foreground': color.danger.fg,
            'notificationsWarningIcon.foreground': color.attention.fg,
            'notificationsInfoIcon.foreground': color.accent.fg,

            'pickerGroup.border': color.border.default,
            'pickerGroup.foreground': color.fg.muted,
            'quickInput.background': color.canvas.overlay,
            'quickInput.foreground': color.fg.default,

            'statusBar.foreground': color.fg.muted,
            'statusBar.background': color.canvas.default,
            'statusBar.border': color.border.default,
            'statusBar.focusBorder': alpha(color.accent.emphasis, 0.5),
            'statusBar.noFolderBackground': color.canvas.default,
            'statusBar.debuggingForeground': color.fg.onEmphasis,
            'statusBar.debuggingBackground': color.danger.emphasis,
            'statusBarItem.prominentBackground': color.neutral.muted,
            'statusBarItem.remoteForeground': color.fg.default,
            'statusBarItem.remoteBackground': color.scale.gray[6],
            'statusBarItem.hoverBackground': alpha(color.fg.default, 0.08),
            'statusBarItem.activeBackground': alpha(color.fg.default, 0.12),
            'statusBarItem.focusBorder': color.accent.emphasis,

            'editorGroupHeader.tabsBackground': color.canvas.inset,
            'editorGroupHeader.tabsBorder': color.border.default,
            'editorGroup.border': color.border.default,

            'tab.activeForeground': color.fg.default,
            'tab.inactiveForeground': color.fg.muted,
            'tab.inactiveBackground': color.canvas.inset,
            'tab.activeBackground': color.canvas.default,
            'tab.hoverBackground': color.canvas.default,
            'tab.hoverBorder': '#2ec27e',
            'tab.unfocusedHoverBackground': color.neutral.subtle,
            'tab.border': color.border.default,
            'tab.unfocusedActiveBorderTop': color.border.default,
            'tab.activeBorder': color.canvas.default,
            'tab.unfocusedActiveBorder': color.canvas.default,
            'tab.activeBorderTop': '#00ff00',

            'sash.hoverBorder': '#2ec27e',

            'breadcrumb.foreground': color.fg.muted,
            'breadcrumb.focusForeground': color.fg.default,
            'breadcrumb.activeSelectionForeground': color.fg.muted,
            'breadcrumbPicker.background': color.canvas.overlay,

            'editor.foreground': color.fg.default,
            'editor.background': color.canvas.default,
            'editorWidget.background': color.canvas.overlay,
            'editor.foldBackground': alpha(color.neutral.emphasis, 0.1),
            'editor.lineHighlightBackground': color.codemirror.activelineBg,
            'editorLineNumber.foreground': scale.gray[4],
            'editorLineNumber.activeForeground': color.fg.default,
            'editorIndentGuide.background': alpha(color.fg.default, 0.12),
            'editorIndentGuide.activeBackground': alpha(color.fg.default, 0.24),
            'editorWhitespace.foreground': scale.gray[5],
            'editorCursor.foreground': color.accent.fg,

            'editor.findMatchBackground': color.attention.emphasis,
            'editor.findMatchHighlightBackground': alpha(scale.yellow[1], 0.5),
            'editor.linkedEditingBackground': alpha(color.accent.fg, 0.07),
            'editor.inactiveSelectionBackground': alpha(color.accent.fg, 0.07),
            'editor.selectionBackground': alpha(color.accent.fg, 0.2),
            'editor.selectionHighlightBackground': alpha(scale.green[3], 0.25),
            'editor.wordHighlightBackground': alpha(color.neutral.subtle, 0.5),
            'editor.wordHighlightBorder': alpha(color.neutral.muted, 0.6),
            'editor.wordHighlightStrongBackground': alpha(
                color.neutral.muted,
                0.3,
            ),
            'editor.wordHighlightStrongBorder': alpha(color.neutral.muted, 0.6),
            'editorBracketMatch.background': alpha(scale.green[3], 0.25),
            'editorBracketMatch.border': alpha(scale.green[3], 0.6),
            // text selection for High Contrast themes

            'editorInlayHint.background': alpha(scale.gray[3], 0.2),
            'editorInlayHint.foreground': color.fg.muted,
            'editorInlayHint.typeBackground': alpha(scale.gray[3], 0.2),
            'editorInlayHint.typeForeground': color.fg.muted,
            'editorInlayHint.paramBackground': alpha(scale.gray[3], 0.2),
            'editorInlayHint.paramForeground': color.fg.muted,

            'editorGutter.modifiedBackground': color.attention.muted,
            'editorGutter.addedBackground': color.success.muted,
            'editorGutter.deletedBackground': color.danger.muted,

            'diffEditor.insertedLineBackground': alpha(scale.green[5], 0.15),
            'diffEditor.insertedTextBackground': alpha(scale.green[3], 0.3),
            'diffEditor.removedLineBackground': alpha(scale.red[5], 0.15),
            'diffEditor.removedTextBackground': alpha(scale.red[3], 0.3),

            'scrollbar.shadow': alpha(scale.gray[5], 0.2),
            'scrollbarSlider.background': alpha(scale.gray[3], 0.2),
            'scrollbarSlider.hoverBackground': alpha(scale.gray[3], 0.24),
            'scrollbarSlider.activeBackground': alpha(scale.gray[3], 0.28),
            'editorOverviewRuler.border': scale.black,

            'minimapSlider.background': alpha(scale.gray[3], 0.2),
            'minimapSlider.hoverBackground': alpha(scale.gray[3], 0.24),
            'minimapSlider.activeBackground': alpha(scale.gray[3], 0.28),

            'panel.background': color.canvas.inset,
            'panel.border': color.border.default,
            'panelTitle.activeBorder': color.primer.border.active,
            'panelTitle.activeForeground': color.fg.default,
            'panelTitle.inactiveForeground': color.fg.muted,
            'panelInput.border': color.border.default,

            'debugIcon.breakpointForeground': color.danger.fg,

            'debugConsole.infoForeground': scale.gray[3],
            'debugConsole.warningForeground': scale.yellow[3],
            'debugConsole.errorForeground': scale.red[2],
            'debugConsole.sourceForeground': scale.yellow[2],
            'debugConsoleInputIcon.foreground': scale.purple[3],

            'debugTokenExpression.name': scale.blue[2],
            'debugTokenExpression.value': scale.blue[1],
            'debugTokenExpression.string': scale.blue[1],
            'debugTokenExpression.boolean': scale.green[2],
            'debugTokenExpression.number': scale.green[2],
            'debugTokenExpression.error': scale.red[2],

            'symbolIcon.arrayForeground': scale.orange[3],
            'symbolIcon.booleanForeground': scale.blue[3],
            'symbolIcon.classForeground': scale.orange[3],
            'symbolIcon.colorForeground': scale.blue[2],
            'symbolIcon.constructorForeground': scale.purple[2],
            'symbolIcon.enumeratorForeground': scale.orange[3],
            'symbolIcon.enumeratorMemberForeground': scale.blue[3],
            'symbolIcon.eventForeground': scale.gray[4],
            'symbolIcon.fieldForeground': scale.orange[3],
            'symbolIcon.fileForeground': scale.yellow[3],
            'symbolIcon.folderForeground': scale.yellow[3],
            'symbolIcon.functionForeground': scale.purple[3],
            'symbolIcon.interfaceForeground': scale.orange[3],
            'symbolIcon.keyForeground': scale.blue[3],
            'symbolIcon.keywordForeground': scale.red[3],
            'symbolIcon.methodForeground': scale.purple[3],
            'symbolIcon.moduleForeground': scale.red[3],
            'symbolIcon.namespaceForeground': scale.red[3],
            'symbolIcon.nullForeground': scale.blue[3],
            'symbolIcon.numberForeground': scale.green[3],
            'symbolIcon.objectForeground': scale.orange[3],
            'symbolIcon.operatorForeground': scale.blue[2],
            'symbolIcon.packageForeground': scale.orange[3],
            'symbolIcon.propertyForeground': scale.orange[3],
            'symbolIcon.referenceForeground': scale.blue[3],
            'symbolIcon.snippetForeground': scale.blue[3],
            'symbolIcon.stringForeground': scale.blue[2],
            'symbolIcon.structForeground': scale.orange[3],
            'symbolIcon.textForeground': scale.blue[2],
            'symbolIcon.typeParameterForeground': scale.blue[2],
            'symbolIcon.unitForeground': scale.blue[3],
            'symbolIcon.variableForeground': scale.orange[3],
            'symbolIcon.constantForeground': scale.green,

            'terminal.foreground': color.fg.default,
            'terminal.ansiBlack': color.ansi.black,
            'terminal.ansiRed': color.ansi.red,
            'terminal.ansiGreen': color.ansi.green,
            'terminal.ansiYellow': color.ansi.yellow,
            'terminal.ansiBlue': color.ansi.blue,
            'terminal.ansiMagenta': color.ansi.magenta,
            'terminal.ansiCyan': color.ansi.cyan,
            'terminal.ansiWhite': color.ansi.white,
            'terminal.ansiBrightBlack': color.ansi.blackBright,
            'terminal.ansiBrightRed': color.ansi.redBright,
            'terminal.ansiBrightGreen': color.ansi.greenBright,
            'terminal.ansiBrightYellow': color.ansi.yellowBright,
            'terminal.ansiBrightBlue': color.ansi.blueBright,
            'terminal.ansiBrightMagenta': color.ansi.magentaBright,
            'terminal.ansiBrightCyan': color.ansi.cyanBright,
            'terminal.ansiBrightWhite': color.ansi.whiteBright,

            'editorBracketHighlight.foreground1': scale.blue[2],
            'editorBracketHighlight.foreground2': scale.green[2],
            'editorBracketHighlight.foreground3': scale.yellow[2],
            'editorBracketHighlight.foreground4': scale.red[2],
            'editorBracketHighlight.foreground5': scale.pink[2],
            'editorBracketHighlight.foreground6': scale.purple[2],
            'editorBracketHighlight.unexpectedBracket.foreground':
                color.fg.muted, // gray

            'gitDecoration.addedResourceForeground': color.success.fg,
            'gitDecoration.modifiedResourceForeground': color.attention.fg,
            'gitDecoration.deletedResourceForeground': color.danger.fg,
            'gitDecoration.untrackedResourceForeground': color.success.fg,
            'gitDecoration.ignoredResourceForeground': color.fg.subtle,
            'gitDecoration.conflictingResourceForeground': color.severe.fg,
            'gitDecoration.submoduleResourceForeground': color.fg.muted,

            'debugToolBar.background': color.canvas.overlay,
            'editor.stackFrameHighlightBackground': color.attention.muted,
            'editor.focusedStackFrameHighlightBackground': color.success.muted,

            'peekViewEditor.matchHighlightBackground': color.attention.muted,
            'peekViewResult.matchHighlightBackground': color.attention.muted,
            'peekViewEditor.background': color.neutral.subtle,
            'peekViewResult.background': scale.gray[9],

            'settings.headerForeground': color.fg.default,
            'settings.modifiedItemIndicator': color.attention.muted,
            'welcomePage.buttonBackground': color.btn.bg,
            'welcomePage.buttonHoverBackground': color.btn.hoverBg,
        },
        semanticHighlighting: true,
        tokenColors: [
            {
                scope: [
                    'comment',
                    'punctuation.definition.comment',
                    'string.comment',
                ],
                settings: {
                    foreground: '#6272A4',
                },
            },
            {
                scope: ['constant.other.placeholder', 'constant.character'],
                settings: {
                    foreground: scale.red[3],
                },
            },
            {
                scope: [
                    'constant',
                    'entity.name.constant',
                    'variable.other.constant',
                    'variable.other.enummember',
                    'variable.language',
                    'entity',
                ],
                settings: {
                    foreground: scale.blue[2],
                },
            },
            {
                scope: [
                    'constant.numeric',
                    'meta.object.type',
                    'punctuation.definition.parameters.block',
                    'punctuation.definition.parameters.begin',
                    'punctuation.definition.parameters.end',
                    'punctuation.definition.typeparameters.begin',
                    'punctuation.definition.typeparameters.end',
                    'punctuation.definition.binding-pattern.object',
                ],
                settings: {
                    foreground: '#FFFFFF',
                },
            },
            {
                scope: [
                    'entity.name',
                    'meta.export.default',
                    'meta.definition.variable',
                ],
                settings: {
                    foreground: scale.orange[2],
                },
            },
            {
                scope: [
                    'variable.parameter.function',
                    'meta.jsx.children',
                    'meta.block',
                    'meta.tag.attributes',
                    'entity.name.constant',
                    'meta.object.member',
                    'meta.embedded.expression',
                ],
                settings: {
                    foreground: color.fg.default,
                },
            },
            {
                scope: 'entity.name.function',
                settings: {
                    foreground: scale.purple[2],
                },
            },
            {
                scope: ['entity.name.tag', 'support.class.component'],
                settings: {
                    foreground: '#FF79C6',
                },
            },
            {
                scope: 'entity.name.tag.body.css',
                settings: {
                    foreground: '#74D4FF',
                },
            },
            {
                scope: 'keyword',
                settings: {
                    foreground: scale.red[3],
                },
            },
            {
                scope: ['storage', 'storage.type'],
                settings: {
                    foreground: scale.red[3],
                },
            },
            {
                scope: [
                    'storage.modifier.package',
                    'storage.modifier.import',
                    'storage.type.java',
                ],
                settings: {
                    foreground: color.fg.default,
                },
            },
            {
                scope: [
                    'string',
                    'support.constant.vendored.property-value',
                    'support.constant.property-value',
                    'support.constant.property-value.misc',
                    'support.constant.media.css',
                    'keyword.other.unit',
                    'string punctuation.section.embedded source',
                ],
                settings: {
                    foreground: '#85E89D',
                },
            },
            {
                scope: 'support',
                settings: {
                    foreground: scale.blue[2],
                },
            },
            {
                scope: 'meta.property-name',
                settings: {
                    foreground: scale.blue[2],
                },
            },
            {
                scope: 'variable',
                settings: {
                    foreground: scale.orange[2],
                },
            },
            {
                scope: 'variable.other',
                settings: {
                    foreground: color.fg.default,
                },
            },
            {
                scope: 'invalid.broken',
                settings: {
                    fontStyle: 'italic',
                    foreground: scale.red[2],
                },
            },
            {
                scope: 'invalid.deprecated',
                settings: {
                    fontStyle: 'italic',
                    foreground: scale.red[2],
                },
            },
            {
                scope: 'invalid.illegal',
                settings: {
                    fontStyle: 'italic',
                    foreground: scale.red[2],
                },
            },
            {
                scope: 'invalid.unimplemented',
                settings: {
                    fontStyle: 'italic',
                    foreground: scale.red[2],
                },
            },
            {
                scope: 'carriage-return',
                settings: {
                    fontStyle: 'italic underline',
                    background: scale.red[3],
                    foreground: scale.gray[0],
                    content: '^M',
                },
            },
            {
                scope: 'message.error',
                settings: {
                    foreground: scale.red[2],
                },
            },
            {
                scope: 'string variable',
                settings: {
                    foreground: scale.blue[2],
                },
            },
            {
                scope: ['source.regexp', 'string.regexp'],
                settings: {
                    foreground: scale.blue[1],
                },
            },
            {
                scope: [
                    'string.regexp.character-class',
                    'string.regexp constant.character.escape',
                    'string.regexp source.ruby.embedded',
                    'string.regexp string.regexp.arbitrary-repitition',
                ],
                settings: {
                    foreground: scale.blue[1],
                },
            },
            {
                scope: 'string.regexp constant.character.escape',
                settings: {
                    fontStyle: 'bold',
                    foreground: scale.green[1],
                },
            },
            {
                scope: 'support.constant',
                settings: {
                    foreground: scale.blue[2],
                },
            },
            {
                scope: 'support.variable',
                settings: {
                    foreground: scale.blue[2],
                },
            },
            {
                scope: [
                    'support.type.property-name.json',
                    'entity.name.type.interface',
                ],
                settings: {
                    foreground: '#79B8FF',
                },
            },
            {
                scope: 'meta.module-reference',
                settings: {
                    foreground: scale.blue[2],
                },
            },
            {
                scope: 'punctuation.definition.list.begin.markdown',
                settings: {
                    foreground: scale.orange[2],
                },
            },
            {
                scope: ['markup.heading', 'markup.heading entity.name'],
                settings: {
                    fontStyle: 'bold',
                    foreground: scale.blue[2],
                },
            },
            {
                scope: 'markup.quote',
                settings: {
                    foreground: scale.green[1],
                },
            },
            {
                scope: 'markup.italic',
                settings: {
                    fontStyle: 'italic',
                    foreground: color.fg.default,
                },
            },
            {
                scope: 'markup.bold',
                settings: {
                    fontStyle: 'bold',
                    foreground: color.fg.default,
                },
            },
            {
                scope: ['markup.underline'],
                settings: {
                    fontStyle: 'underline',
                },
            },
            {
                scope: ['markup.strikethrough'],
                settings: {
                    fontStyle: 'strikethrough',
                },
            },
            {
                scope: 'markup.inline.raw',
                settings: {
                    foreground: scale.blue[2],
                },
            },
            {
                scope: [
                    'markup.deleted',
                    'meta.diff.header.from-file',
                    'punctuation.definition.deleted',
                ],
                settings: {
                    background: scale.red[9],
                    foreground: scale.red[2],
                },
            },
            {
                scope: ['punctuation.section.embedded'],
                settings: {
                    foreground: scale.red[3],
                },
            },
            {
                scope: [
                    'punctuation.section.embedded.begin',
                    'punctuation.section.embedded.end',
                    'punctuation.definition.template-expression.begin',
                    'punctuation.definition.template-expression.end',
                ],
                settings: {
                    foreground: '#FF7B72',
                },
            },
            {
                scope: [
                    'markup.inserted',
                    'meta.diff.header.to-file',
                    'punctuation.definition.inserted',
                ],
                settings: {
                    background: scale.green[9],
                    foreground: scale.green[1],
                },
            },
            {
                scope: ['markup.changed', 'punctuation.definition.changed'],
                settings: {
                    background: scale.orange[8],
                    foreground: scale.orange[2],
                },
            },
            {
                scope: ['markup.ignored', 'markup.untracked'],
                settings: {
                    foreground: scale.gray[8],
                    background: scale.blue[2],
                },
            },
            {
                scope: 'meta.diff.range',
                settings: {
                    foreground: scale.purple[2],
                    fontStyle: 'bold',
                },
            },
            {
                scope: 'meta.diff.header',
                settings: {
                    foreground: scale.blue[2],
                },
            },
            {
                scope: 'meta.separator',
                settings: {
                    fontStyle: 'bold',
                    foreground: scale.blue[2],
                },
            },
            {
                scope: 'meta.output',
                settings: {
                    foreground: scale.blue[2],
                },
            },
            {
                scope: [
                    'brackethighlighter.tag',
                    'brackethighlighter.curly',
                    'brackethighlighter.round',
                    'brackethighlighter.square',
                    'brackethighlighter.angle',
                    'brackethighlighter.quote',
                ],
                settings: {
                    foreground: scale.gray[3],
                },
            },
            {
                scope: 'brackethighlighter.unmatched',
                settings: {
                    foreground: scale.red[2],
                },
            },
            {
                scope: ['constant.other.reference.link', 'string.other.link'],
                settings: {
                    foreground: scale.blue[1],
                },
            },
            {
                scope: [
                    'punctuation.definition.string.begin',
                    'punctuation.definition.string.end',
                    'entity.other.attribute-name',
                    'entity.other.ng-binding-name',
                ],
                settings: {
                    foreground: '#9ECBFF',
                },
            },
            {
                scope: ['entity.name.type'],
                settings: {
                    foreground: '#D2A8FF',
                },
            },
        ],
    }
}

// Convert to hex
// VS Code doesn't support other formats like hsl, rgba etc.

function changeColorToHexAlphas(obj) {
    if (typeof obj === 'object') {
        for (var keys in obj) {
            if (typeof obj[keys] === 'object') {
                changeColorToHexAlphas(obj[keys])
            } else {
                let keyValue = obj[keys]
                if (chroma.valid(keyValue)) {
                    obj[keys] = chroma(keyValue).hex()
                }
            }
        }
    }
    return obj
}

module.exports = getTheme
