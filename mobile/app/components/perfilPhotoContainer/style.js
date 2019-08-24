import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  photoContainer: {
      flex: 4,
      flexDirection: 'column',
      backgroundColor: '#ffffff',
  },
  perfilContainer: {
      flex: 2,
      alignSelf: 'center',
      flexDirection: 'column',
      backgroundColor: '#ffffff',
      justifyContent: 'center',
      marginBottom: 15
  },
  perfilData: {
    marginTop: 15,
    alignSelf: 'center',
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  icon: {
      height: 30,
      width: 30,
      marginLeft: 'auto',
      marginRight: 25,
      marginTop: 25
  },
  photo: {
      justifyContent: 'center',
      alignSelf: 'center',
      height: 100,
      width: 100,
      borderRadius: 50
  },
  userName:{
      fontSize: 20,
      color: '#1f1f1f',
      alignSelf: 'center',
      marginBottom: 5
  },
  userCity:{
      fontSize: 15,
      color: '#424242',
      alignSelf: 'center'
  }
})


export default style
