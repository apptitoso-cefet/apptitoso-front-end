import React from 'react'
import { Image, Text, View } from 'react-native'
import { Checkbox } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import style from './style'

const RecipeListItem = props => {
    const { name, imageSrc } = props
    return (
        <View style={{ ...style.container, ...props.style }}>
            <Image resizeMode='contain' style={style.image} source={imageSrc} />
            <Text style={style.text}>{name}</Text>
            <Checkbox
            //status={checked ? 'checked' : 'unchecked'}
            //onPress={() => {
            //    this.setState({ checked: !checked })
            //}}
            />
        </View>
    )
}

export default RecipeListItem
