import React, { useState, useEffect } from 'react'
import { View, Button, Text, TouchableHighlight } from 'react-native'
import Voice from 'react-native-voice'

export default VoiceProvider = ({ children }) => {
    const [isRecord, setIsRecord] = useState(false)
    const [voice, setVoice] = useState([])

    useEffect(() => () => Voice.destroy().then(Voice.removeAllListeners), [])
    const _onSpeechStart = event => {
        setVoice('')
    }

    const _onSpeechEnd = event => {}

    const _onSpeechResults = event => {
        setVoice(event.value)
    }

    const _onSpeechError = event => {
        console.log(event.error)
    }

    const _onRecordVoice = () => {
        if (isRecord) {
            Voice.stop()
        } else {
            Voice.start('pt-BR')
        }
        setIsRecord(oldIsRecord => !oldIsRecord)
    }

    Voice.onSpeechStart = _onSpeechStart
    Voice.onSpeechEnd = _onSpeechEnd
    Voice.onSpeechResults = _onSpeechResults
    Voice.onSpeechError = _onSpeechError

    const voiceLabel = voice
        ? voice.toString()
        : isRecord
        ? 'Say something...'
        : 'press Start button'
    return (
        <TouchableHighlight onPress={_onRecordVoice}>
            <Text>{voiceLabel}</Text>
            {...children}
        </TouchableHighlight>
    )
}
