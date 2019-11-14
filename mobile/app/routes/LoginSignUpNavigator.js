import React from 'react'
import LoginScreen from '../screens/LoginScreen'
import SignUpScreen from '../screens/SignUpScreen'
import { createStackNavigator, createAppContainer } from 'react-navigation'

const LoginStack = createStackNavigator(
    {
        Login: LoginScreen,
        SignUp: SignUpScreen,
    },
    {
        initialRouteName: 'Login',
    }
)

export default createAppContainer(LoginStack)
