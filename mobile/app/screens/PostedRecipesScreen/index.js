import React from 'react'
import { View } from 'react-native'
import MaterialHeader from '../../components/MaterialHeader'
import PostedRecipesList from '../../components/PostedRecipesList'
import style from './style'

const PostedRecipesScreen = props => {
    return (
        <View style={style.container}>
            <MaterialHeader style={style.header} />
            <PostedRecipesList style={style.result} />
        </View>
    )
}

export default PostedRecipesScreen
