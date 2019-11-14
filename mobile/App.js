import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
<<<<<<< HEAD
import LoginScreen from './app/screens/RecipePreviewScreen'
=======
import LoginScreen from './app/routes/BottomTabAppNavigator'
>>>>>>> babi/navigation

function App() {
    return (
        <PaperProvider>
            <LoginScreen />
        </PaperProvider>
    )
}

export default App
