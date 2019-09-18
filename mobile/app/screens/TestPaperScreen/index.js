import React from 'react'
import { View } from 'react-native'
import { Appbar } from 'react-native-paper'

const Test = props => {
    return (
        <View>
            <Appbar.Header>
                <Appbar.BackAction />
                <Appbar.Content title='Apptitoso' subtitle='oi' />
            </Appbar.Header>
        </View>
    )
}

export default Test
