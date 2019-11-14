import React from 'react'
import MenuScreen from '../screens/MenuScreen'
import AboutScreen from '../screens/AboutScreen'
import CulinaryConceptScreen from '../screens/CulinaryConceptScreen'
import HelpScreen from '../screens/HelpScreen'
import PerfilScreen from '../screens/PerfilScreen'
import PostedRecipesScreen from '../screens/PostedRecipesScreen'
import { createStackNavigator } from 'react-navigation'

const MenuStack = createStackNavigator({
    Menu: MenuScreen,
    About: AboutScreen,
    CulinaryConcept: CulinaryConceptScreen,
    Help: HelpScreen,
    Perfil: PerfilScreen,
    PostedRecipes: PostedRecipesScreen,
})

export default MenuStack
