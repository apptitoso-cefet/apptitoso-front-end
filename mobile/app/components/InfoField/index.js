import React from 'react'
import { View, Text, Image } from 'react-native'
import style from './style'

export default function CampoInformacao (props) {

    return (
        <View style={style.field}>
            <Text style={style.text} >{props.textName}</Text>
            <Image
                style={style.arrow}
                source={require('../../assets/rightArrow.png')}  />
        </View>
    )
}
