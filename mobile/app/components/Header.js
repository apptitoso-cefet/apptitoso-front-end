import React, {View} from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function Header (props) {
    return (
        <View style={style.header}>
            <Text>Apptitoso</Text>
            <View>
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
        height: 20,
        width: 20,
    },
    header: {
        flex: .05,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'red',
    }
    
})