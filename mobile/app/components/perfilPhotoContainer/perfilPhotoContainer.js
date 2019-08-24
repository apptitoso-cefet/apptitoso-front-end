import React from 'react'
import { View, Text, Image } from 'react-native'
import style from './style'

export default function perfilPhotoContainer (props) {

    return (
      <View style={style.photoContainer}>
        <Image
            style={style.icon}
            source={require('../../assets/edit.png')} />
        <View style={style.perfilContainer}>
            <Image
                style={style.photo}
                source={require('../../assets/placeholderPhoto.jpg')} />
            <View style={style.perfilData}>
                <Text style={style.userName}>Ricardao</Text>
                <Text style={style.userCity}>Belô, MG</Text>
            </View>
        </View>
      </View>
    )
}
