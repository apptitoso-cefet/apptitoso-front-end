import React from 'react'
import { Image, View, Text } from 'react-native'
import style from './style'
import PropTypes from 'prop-types'


const RecipeProperties = props => {
    return (
      <View style={style.containerField}>
        <View>
          <Text style={style.title}>{props.recipeProps.recipeName}
            <Text style={style.subtitle}>{"\n"} por {props.recipeProps.recipeAuthor}
            </Text>
          </Text>
        </View>
        <View>
          <View style={style.recipeProps}>
            <Image style={style.icon}
              source={require('../../assets/clock.png')}/>
            <Text style={style.text}>{props.recipeProps.prepareTime}</Text>
          </View>
          <View style={style.recipeProps}>
            <Image style={style.icon}
              source={require('../../assets/hat.png')}/>
            <Text style={style.text}>{props.recipeProps.portionNumber} Porcoes</Text>
          </View>
        </View>
      </View>
    )
}

RecipeProperties.propTypes = {
    recipeProps: PropTypes.any.isRequired,
}

export default RecipeProperties
