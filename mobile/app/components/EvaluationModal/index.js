import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { Portal, Modal, IconButton, Button } from 'react-native-paper'
import PropTypes from 'prop-types'

import style from './style'

const EvaluationModal = props => {
      [tastyGrade, setTastyGrade] = useState(0),
      [easyGrade, setEasyGrade] = useState(0),
      [cheapGrade, setCheapGrade] = useState(0)
      return (
          <Portal>
              <Modal visible={props.visible}
                     onDismiss={props.onDismiss}>
                  <View style={style.modalView}>
                      <View style={style.criteriaView}>
                          <Text style={style.text}>Tava Gostoso?</Text>
                          <View style={style.starsView}>
                              <IconButton color= "black"
                                          size={36}
                                          icon={tastyGrade >= 1 ? require('../../assets/starFilled.png') : require('../../assets/starEmpty.png')}
                                          onPress={() => {setTastyGrade(1)}}/>
                              <IconButton color="black"
                                          size={36}
                                          icon={tastyGrade >= 2 ? require('../../assets/starFilled.png') : require('../../assets/starEmpty.png')}
                                          onPress={() => {setTastyGrade(2)}}/>
                              <IconButton color="black"
                                          size= {36}
                                          icon={tastyGrade >= 3 ? require('../../assets/starFilled.png') : require('../../assets/starEmpty.png')}
                                          onPress={() => {setTastyGrade(3)}}/>
                              <IconButton color="black"
                                          size={36}
                                          icon={tastyGrade >= 4 ? require('../../assets/starFilled.png') : require('../../assets/starEmpty.png')}
                                          onPress={() => {setTastyGrade(4)}}/>
                              <IconButton color="black"
                                          size={36}
                                          icon={tastyGrade >= 5 ? require('../../assets/starFilled.png') : require('../../assets/starEmpty.png')}
                                          onPress={() => {setTastyGrade(5)}}/>
                          </View>
                      </View>

                      <View style={style.criteriaView}>
                          <Text style={style.text}>Foi Fácil?</Text>
                          <View style={style.starsView}>
                              <IconButton color= "black"
                                          size={36}
                                          icon={easyGrade >= 1 ? require('../../assets/starFilled.png') : require('../../assets/starEmpty.png')}
                                          onPress={() => {setEasyGrade(1)}}/>
                              <IconButton color="black"
                                          size={36}
                                          icon={easyGrade >= 2 ? require('../../assets/starFilled.png') : require('../../assets/starEmpty.png')}
                                          onPress={() => {setEasyGrade(2)}}/>
                              <IconButton color="black"
                                          size= {36}
                                          icon={easyGrade >= 3 ? require('../../assets/starFilled.png') : require('../../assets/starEmpty.png')}
                                          onPress={() => {setEasyGrade(3)}}/>
                              <IconButton color="black"
                                          size={36}
                                          icon={easyGrade >= 4 ? require('../../assets/starFilled.png') : require('../../assets/starEmpty.png')}
                                          onPress={() => {setEasyGrade(4)}}/>
                              <IconButton color="black"
                                          size={36}
                                          icon={easyGrade >= 5 ? require('../../assets/starFilled.png') : require('../../assets/starEmpty.png')}
                                          onPress={() => {setEasyGrade(5)}}/>
                          </View>
                      </View>

                      <View style={style.criteriaView}>
                          <Text style={style.text}>Custo Benefício?</Text>
                          <View style={style.starsView}>
                              <IconButton color= "black"
                                          size={36}
                                          icon={cheapGrade >= 1 ? require('../../assets/starFilled.png') : require('../../assets/starEmpty.png')}
                                          onPress={() => {setCheapGrade(1)}}/>
                              <IconButton color="black"
                                          size={36}
                                          icon={cheapGrade >= 2 ? require('../../assets/starFilled.png') : require('../../assets/starEmpty.png')}
                                          onPress={() => {setCheapGrade(2)}}/>
                              <IconButton color="black"
                                          size= {36}
                                          icon={cheapGrade >= 3 ? require('../../assets/starFilled.png') : require('../../assets/starEmpty.png')}
                                          onPress={() => {setCheapGrade(3)}}/>
                              <IconButton color="black"
                                          size={36}
                                          icon={cheapGrade >= 4 ? require('../../assets/starFilled.png') : require('../../assets/starEmpty.png')}
                                          onPress={() => {setCheapGrade(4)}}/>
                              <IconButton color="black"
                                          size={36}
                                          icon={cheapGrade >= 5 ? require('../../assets/starFilled.png') : require('../../assets/starEmpty.png')}
                                          onPress={() => {setCheapGrade(5)}}/>
                          </View>
                      </View>
                      <View style={style.buttonContainer}>
                        <Button style={style.button}>Cancelar</Button>
                        <Button style={style.button}>Enviar</Button>
                      </View>
                  </View>
              </Modal>
          </Portal>
      )
}

EvaluationModal.propTypes = {
    visible: PropTypes.bool.isRequired,
    onDismiss: PropTypes.func.isRequired
}

export default EvaluationModal
