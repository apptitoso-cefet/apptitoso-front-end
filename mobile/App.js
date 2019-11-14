import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
<<<<<<< HEAD
import LoginScreen from './app/screens/HomeScreen'
=======
import LoginScreen from './app/routes/BottomTabAppNavigator'
>>>>>>> master

function App() {
    return (
        <PaperProvider>
            <LoginScreen />
        </PaperProvider>
    )
}

export default App
