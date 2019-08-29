import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import style from './style'

export default function Header (props) {
    return (
        <View style={{...style.header, ...props.style}}>
            <Text style={style.text}>Apptitoso</Text>
            <View style={style.headerIcons}>
                <Image
                    style={style.icon}
                    source={require('../../assets/home.png')}  />
                <Image
                    style={style.icon}
                    source={require('../../assets/menu.png')}  />
            </View>
        </View>
    )
} 