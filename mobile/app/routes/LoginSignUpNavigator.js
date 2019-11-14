import React from 'react'
import LoginScreen from '../screens/LoginScreen'
import SignUpScreen from '../screens/SignUpScreen'
import { createStackNavigator } from 'react-navigation'

const LoginStack = createStackNavigator({
    Login: LoginScreen,
    SignUp: SignUpScreen,
})

export default LoginStack
