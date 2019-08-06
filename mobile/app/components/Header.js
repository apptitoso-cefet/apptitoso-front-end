import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function Header (props) {
    return (
        <View style={style.header}>
            <Text style={style.texto}>Apptitoso</Text>
            <View style={style.headerIcons}>
                <Image
                    style={style.icon}
                    source={require('../assets/home.png')}  />
                <Image
                    style={style.icon}
                    source={require('../assets/menu.png')}  />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    icon: {
        height: 25,
        width: 25,
    },
    texto: {
        fontSize: 20,
    },
    header: {
        flex: .05,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f49678',
    },
    headerIcons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
})