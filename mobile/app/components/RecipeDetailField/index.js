import React from 'react'
import { List } from 'react-native-paper'
import PropTypes from 'prop-types'

const RecipeDetailField = props => {
    return(
    <List.Accordion
      title="Detalhes"
      expanded={props.expanded}
      onPress={props.onPress}>
      <List.Subheader>Descricao:</List.Subheader>
      <List.Item
          title={props.description}
          titleNumberOfLines={8}
          />
       <List.Subheader>Ingredientes:</List.Subheader>
       {props.ingredients.map((ingredients, i) => (
         <List.Item
          title={ingredients}
          titleNumberOfLines={2}
          />
        ))}
      <List.Subheader>Preparo:</List.Subheader>
      {props.steps.map((steps, i) => (
        <List.Item
         title={steps}
         titleNumberOfLines={4}
         />
       ))}
    </List.Accordion>
  )
}

RecipeDetailField.propTypes = {
    description: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(String).isRequired,
    steps: PropTypes.arrayOf(String).isRequired,
    expanded: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired
}



export default RecipeDetailField
