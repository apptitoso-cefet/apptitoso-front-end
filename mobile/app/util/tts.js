import tts from 'react-native-tts'

tts.setDefaultLanguage('pt-BR')
tts.setDucking(true)

export function speak(...text) {
    tts.getInitStatus().then(
        () => {
            text.forEach(phrase => {
                tts.speak(phrase)
            })
        },
        error => {
            if (error.code === 'no_engine') {
                tts.requestInstallEngine()
            }
        }
    )
}
