import React from 'react'
import { View } from 'react-native'
import MaterialHeader from '../../components/MaterialHeader'
import StepsList from '../../components/StepsList'
import style from './style'

const PostedRecipesScreen = props => {
    return (
        <View style={style.container}>
            <MaterialHeader style={style.header} />
            <StepsList style={style.result} />
        </View>
    )
}

export default PostedRecipesScreen
