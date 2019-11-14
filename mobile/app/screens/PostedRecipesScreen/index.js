import React from 'react'
import { View } from 'react-native'
import MaterialHeader from '../../components/MaterialHeader'
import PostedRecipesList from '../../components/PostedRecipesList'
import BottomTab from '../../routes/BottomTabAppNavigator'
import style from './style'

const PostedRecipesScreen = ({ navigation }) => {
    return (
        <View style={style.container}>
            <MaterialHeader style={style.header} />
            <PostedRecipesList style={style.result} />
            <BottomTab />
        </View>
    )
}

PostedRecipesScreen.navigationOptions = {
    title: 'PostedRecipes',
    header: null,
}

export default PostedRecipesScreen
