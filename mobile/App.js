import React from 'react'
<<<<<<< Updated upstream
import { Provider as PaperProvider } from 'react-native-paper'
import LoginScreen from './app/screens/HomeScreen'
=======
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper'
import SearchResultsScheen from './app/screens/About'

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: 'red',
        secondary: 'blue',
        primary: 'yellow',
    },
}
>>>>>>> Stashed changes

function App() {
    return (
        <PaperProvider>
            <LoginScreen />
        </PaperProvider>
    )
}

export default App
