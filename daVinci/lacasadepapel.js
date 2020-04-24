import React, {useState, Component} from 'react';
import {
  Text, 
  SafeAreaView, 
  TextInput, 
  View, 
  Button,
  Alert,
  StyleSheet
} from 'react-native';


  const TextoPadrao = props => {
    return (<Text style={{fontFamily: 'Roboto'}}>{props.children}</Text>
       
    );
  }

  const TextoPadraoNegrito = props => {
    return (
        <TextoPadrao> <Text style={{fontWeight: "bold"}}> {props.children} </Text></TextoPadrao>
    );
  }

  const TextoTituloPadrao = props => {
    return (
      <TextoPadraoNegrito> <Text style={{ fontSize: 30, color: "red"}}>{props.children}</Text></TextoPadraoNegrito> 
    );
  }

  function series () {
    return(
    <SafeAreaView style={styles.layout}>

        <TextoTituloPadrao>
          LA CASA DE PAPEL 
        </TextoTituloPadrao>

        <TextInput 
        //style={styles.contenedor}
        multiline = {true}
        placeholder ={"Escreva aqui seu comentario: "}
        onChangeText = {(texto) => setState(texto)}
        />

       
 
    </SafeAreaView>
    );
  }
  export default series;

const styles = StyleSheet.create({
  contenedor: {
    flex: 2,
    justifyContent: "space-around",
    alignItems: "stretch",
    borderColor: 'black',
    padding: 10,
    width: 15
  },
  layout: {
    alignItems: "center"

  }
})

//09-04-2020 quarenteners

//Text, TextInput e Button 
 
//1 - Implemente os seguintes componentes para serem usados em um app: 

//● TextoPadrao - deve definir a família tipográfica (fontFamily)  que será herdado pelos outros componentes 
//● TextoPadraoNegrito - estende o TextoPadrao e define um peso da fonte maior (fontWeigh) 
//● TextoTituloPadrao - estende TextPadraoNegrito e define um tamanho maior de fonte. 
//Os componentes devem receber o texto que será mostrado ao usuário via children e não via props. 
 
//2 - Crie um app com as seguintes características: 

//● título, uma caixa de texto, um botão com o título 'postar' e um componente Text para exibir a última postagem
//● a caixa de texto admite mensagens de no máximo 140 caracteres e deve quebrar o texto em mais de uma linha 
//● o botão 'postar' fica desabilitado até que o usuário preencha a caixa de texto com no mínimo 50 caracteres 
//● quando o botão é clicado, a caixa de texto deve ser limpa e o que estava escrito nela aparece no 
//elemento Text, que exibe a última postagem