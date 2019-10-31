import React, { useState } from 'react'
import { Image, Text, View } from 'react-native'
import { Checkbox, TouchableRipple } from 'react-native-paper'
import style from './style'

const StepListItem = props => {
    const [checked, setChecked] = useState(false)
    const { name, imageSrc, move, moveEnd } = props
    return (
        <TouchableRipple
            onLongPress={() => console.log('Pressed')}
            onPressOut={() => console.log('Unpressed')}
        >
            <View style={{ ...style.container, ...props.style }}>
                <Image
                    resizeMode='contain'
                    style={style.image}
                    source={imageSrc}
                />
                <Text style={style.text}>{name}</Text>
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked(!checked)
                    }}
                />
            </View>
        </TouchableRipple>
    )
}

export default StepListItem
