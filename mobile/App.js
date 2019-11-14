import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import LoginScreen from './app/screens/LoginScreen'

function App() {
    return (
        <PaperProvider>
            <LoginScreen />
        </PaperProvider>
    )
}

export default App
