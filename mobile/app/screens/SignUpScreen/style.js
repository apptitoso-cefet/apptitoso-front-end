import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        flex: 3,
        width: 420,
    },
    input: {
        margin: 2.5,
        width: 320,
        height: 50,
        padding: 0.5,
        borderRadius: 5,
        alignSelf: 'center',
        backgroundColor: 'white',
    },
    inputsContainer: {
        flex: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#6200ee',
    },
    button: {
        backgroundColor: 'white',
        alignSelf: 'center',
        width: 320,
        height: 35,
        margin: 5,
    },
    text: {
        fontSize: 1,
    },
})

export default style
