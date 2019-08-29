import React from 'react'
import { View, Text, Image } from 'react-native'
import style from './style'

export default function CampoInformacao (props) {

    return (
        <View style={style.campo}>
            <Text style={style.text} >{props.textName}</Text>
            <Image
                style={style.seta}
                source={require('../../assets/rightArrow.png')}  />
        </View>
    )
}
