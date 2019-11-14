import React from 'react'
import { View, Text, Image } from 'react-native'
import style from './style'
import { TouchableRipple } from 'react-native-paper'

const MenuItem = props => {
    return (
        <TouchableRipple onPress={props.onPress}>
            <Text style={style.text}>{props.textName}</Text>
        </TouchableRipple>
    )
}

export default MenuItem
