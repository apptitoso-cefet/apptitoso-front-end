import HomeScreen from '../screens/HomeScreen'
import { createStackNavigator, createAppContainer } from 'react-navigation'

const LoginStack = createStackNavigator({
    Home: HomeScreen,
})

export default App = createAppContainer(LoginStack)
