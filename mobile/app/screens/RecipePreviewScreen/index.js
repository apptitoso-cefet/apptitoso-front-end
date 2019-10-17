import React, { useState } from 'react'
import { ImageBackground, View, ScrollView } from 'react-native'
import { Button, IconButton } from 'react-native-paper'

import  MaterialHeader  from '../../components/MaterialHeader'
import RecipeDetailField from '../../components/RecipeDetailField'
import RecipeProperties from '../../components/RecipeProperties'
import style from './style'


const description = 'O pão de queijo é a receita perfeita para o seu lanche da tarde! Delicioso, ele combina com o café quentinho ou um suco bem gelado.'

const ingredients = [ '500 g de polvilho azedo',
                      '1 copo (americano) de água',
                      '1 copo (americano) de leite',
                      '1/2 xícara de óleo',
                      '2 ovos',
                      '100 g de queijo parmesão ralado',
                      'sal a gosto' ]

const steps = [ 'Em uma panela, ferva a água e acrescente o leite, o óleo e o sal.',
                'Adicione o polvilho, misture bem e comece a sovar a massa com o fogo desligado.',
                'Quando a massa estiver morna, acrescente o queijo parmesão, os ovos e misture bem.',
                'Unte as mãos e enrole bolinhas de 2 cm de diâmetro.',
                'Disponha as bolinhas em uma assadeira untada com óleo, deixando um espaço entre elas.',
                'Asse em forno médio (180º C), preaquecido, por cerca de 40 minutos.' ]

const recipeProps = { key: '1',
                      recipeName: 'Bao de Queijo',
                      recipeAuthor: 'Fulanin',
                      prepareTime: '40 min',
                      portionNumber: 40,
                      photo: require('../../assets/recipePlaceholder.png') }

export default function(props) {
  const [expanded, setExpanded] = useState(false)
    return (
        <View style={style.container}>

          <MaterialHeader showBackAction/>

            <ImageBackground
              style={[style.photo, expanded ? style.photoSmall : style.photoBig]}
              source={recipeProps.photo}>
              <View style={style.iconContainer}>
                <IconButton
                  color= "white"
                  size= {36}
                  icon={require('../../assets/share.png')}/>
                <IconButton
                  color= "white"
                  size= {36}
                  icon={require('../../assets/saveEmpty.png')}/>
              </View>
            </ImageBackground>
            <ScrollView contentContainerStyle={style.scrollView}>
            <RecipeProperties recipeProps={recipeProps} />
            <View style={style.buttonContainer}>
              <Button style={style.button}>Iniciar Receita</Button>
              <Button style={style.button}>Editar Passos</Button>
            </View>
            <RecipeDetailField  style={style.detailContainer}
                                description={description}
                                ingredients={ingredients}
                                steps={steps}
                                expanded={expanded}
                                onPress={() => {setExpanded(!expanded)}} />
          </ScrollView>
        </View>
    )
}
