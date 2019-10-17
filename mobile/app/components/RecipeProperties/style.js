import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    title:{
      color: 'white',
      fontSize: 56,
    },
    subtitle:{
      color: 'white',
      fontSize: 32,
    },
    icon: {
        height: '10%',
        width: '12%',
        paddingTop: '12%',
        marginRight: '2%',
    },
    recipeProps: {
      flexDirection: 'row',
      alignSelf: 'center',
      width: '95%',
      alignContent: 'center',
    },
    text: {
        fontSize: 25,
        color: 'white',
        alignSelf: 'center',
    },
    containerField: {
      flex: 4,
      minHeight: 260,
      maxHeight: 260,
      flexDirection: 'column',
      backgroundColor: '#6200ee',
      borderColor: '#6200ee',
      borderWidth: 15,
      justifyContent: 'space-between',
    },
})

export default style
