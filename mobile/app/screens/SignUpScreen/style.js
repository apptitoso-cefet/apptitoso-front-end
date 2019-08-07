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
        margin: 1.5,
        width: 320,
        padding: 10,
        borderWidth: 1.5,
        borderColor: 'grey',
        alignSelf: 'center',
        backgroundColor: 'white',
    },
    inputsContainer: {
        flex: 6,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#f49678',
    },
    button: {
        backgroundColor: '#f5c7b3',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        height: 40,
        width: 315,
        margin: 3,
    },
    text: {
        fontSize: 17,
    }
})

export default style