import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    modalView: {
        height: 360,
        width: '80%',
        borderWidth: 2,
        backgroundColor: 'white',
        borderColor: 'blue',
        alignSelf: 'center',
        justifyContent: 'space-between'
    },
    criteriaView: {
        flex: 1,
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 24,
        marginLeft: 10,
    },
    starsView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button:{
        backgroundColor: 'white',
        height: 35,
        width: '43%',
        margin: 10,
        borderWidth: 1,
        borderColor: 'black',
        paddingBottom: 20,
    },
    buttonContainer: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
})


export default style
