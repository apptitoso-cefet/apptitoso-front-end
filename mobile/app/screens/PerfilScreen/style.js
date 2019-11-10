import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    icon: {
        height: 24,
        width: 24,
        marginLeft: 'auto',
        marginRight: 15,
        marginTop: 15,
    },
    photo: {
        justifyContent: 'center',
        alignSelf: 'center',
        height: 120,
        width: 120,
        borderRadius: 60,
    },
    containerField: {
        flex: 4.5,
        flexDirection: 'column',
        justifyContent: 'center',
    },
})

export default style
