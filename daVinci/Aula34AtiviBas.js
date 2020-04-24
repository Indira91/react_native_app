import React, {useState, Component} from 'react';
import {
  Text, 
  SafeAreaView, 
  TextInput, 
  View, 
  Button,
  Alert,
  StyleSheet,
  ColorPropType
} from 'react-native';

      const styles = StyleSheet.create ({
        Safe: {
        
          marginLeft: 10,
          marginEnd: 10,
          marginHorizontal: 15,
          marginVertical: 15
          
        },
        TextCost:{
          color: "green",
          fontSize: 40,
          fontFamily: 'sans-serif-condensed',
          fontWeight: "bold",
          textAlign: 'center'
        },
        contenedor: {
          backgroundColor: '#98FB98',
          borderColor: 'black',
          borderWidth: 1,
          alignSelf: 'stretch',
          paddingLeft: 10,
          paddingTop: 10,
          padding: 60,
          fontSize: 20
        },
        novo: {
          fontSize: 25,
          color: "green",
          textAlign: 'left'
          
        },

      })

class ContadorDeCarateres extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caractere: '',
      tempo: 5,
     
    }
  }

  ticTac(){
    this.setState((state) =>({
      tempo: state.tempo - 1
    }))
  }

  boraJogar() {
    this.tempoID = setInterval(
       () =>this.ticTac(),
      1000
    )
  }
  componentDidUpdate() {
    if(this.state.tempo === 0) {
      clearInterval(this.tempoID)
      Alert.alert (`QUANTIDADE DE CARACTERES DIGITADA: ${this.state.caractere.length}`)
    }
  }



render() {
  return (
    <SafeAreaView style={styles.Safe}>

        <Text style={styles.TextCost}> VAMOS JOGAR </Text>
    
        <Text style = {{fontSize: 15}}>{'\n'}O jogo consiste em digitar a maior quantidade de carateres dentro do limite de tempo especificado...
          Good luck!!!
        </Text>

        <Text>{'\n'}</Text>

        <Button 
           onPress = {() => {
            this.setState({
              caractere: '', 
              tempo: 5,
            })
            this.boraJogar()
            }}
           title = "Começar"
           color = '#229954'
         
         />

        <Text>{'\n'}</Text>

        <TextInput
          style = {styles.contenedor}
          multiline = {true}
          placeholder = {"Comece a digitar: "}
          onChangeText = {caractere => this.setState({caractere})}
          
        />

        <Text>{'\n'}</Text>

        <Text style={styles.novo}>TEMPO REGRESSIVO: {this.state.tempo} </Text>
    
    </SafeAreaView>
  ) 
 }
}

export default ContadorDeCarateres;



//Ciclos de vida de componentes React 
 
//Básico​- Crie um app que conte a quantidade de caracteres que o usuário consegue digitar em determinado tempo.
// Deve ter um um display marcando contagem regressiva que quando chega a zero desabilita o usuário de continuar
 //digitando e apresenta a contagem total de caracteres. Use os métodos de ciclo de vida dos componentes React.

 //24/04/2020 finalizada