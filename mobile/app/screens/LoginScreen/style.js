import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        flex: 3.6,
        width: 420,
    },
    input: {
        margin: 5,
        width: 300,
        height: 60,
        padding: 5,
        borderWidth: 1.5,
        alignSelf: 'center',
        backgroundColor: 'white',
    },
    inputsContainer: {
        flex: 6,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#6200ee',
    },
    button: {
        backgroundColor: 'white',
        alignSelf: 'center',
        width: 300,
        margin: 5,
    },
    text: {
        fontSize: 17,
    },
})

export default style
