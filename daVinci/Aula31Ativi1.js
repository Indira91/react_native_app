import React, {useState} from 'react';
import {
  Text, 
  SafeAreaView, 
  TextInput, 
  View, 
  Button,
  Alert,
  StyleSheet
} from 'react-native';


class VotosContab extends React.Component {
  constructor(){
    super();
    this.state = {
      votos: 0,
   };
  }
  render(){
    return (

      <SafeAreaView>

        <Text style={styles.header}> ADICIONAR UM VOTO </Text>
        <Text style={{fontSize: 18}}> NUMERO TOTAL DE VOTOS: {this.state.votos} </Text>

        <Button 
          onPress={()=>
            this.setState({votos: this.state.votos + 1})}
          
          title ="VOTAR AQUI"
          color = '#182490'
          disabled = {this.state.votos >= 100}
        />
        

      </SafeAreaView>
    );
  } 
}

export default VotosContab; 


 

  const styles = StyleSheet.create({
    header: {
      fontSize: 35,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      color: '#FF4500'
    },
  })  


 
  //Desenvolva o aplicativo contador de votos da aula 28 usando class components. 
  //Lembre-se, o app deve ter: - botão que ao ser clicado incrementa o número de votos 
  //- texto que mostra o número de votos atual

   //13-04-2020 quarenteners 
   //exercicio finalizado