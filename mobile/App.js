import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import SearchResultsScheen from './app/screens/SearchResultsScreen'

function App() {
    return (
        <PaperProvider>
            <SearchResultsScheen />
        </PaperProvider>
    )
}

export default App
