import React, {useState, Component} from 'react';
import {
  Text, 
  SafeAreaView, 
  TextInput, 
  View, 
  Button,
  Alert,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

const davinci = ['NOME: Leonardo da Vinci',
  'PAIS: Italia',
  'MOVIMENTO: Alto Renascimento',
  'OCUPAÇAO: Arquiteto, Pintor, Inventor',
  'NASCIMENTO: 15 de Abril de 1452',
  'FALECIMENTO: 02 de Maio de 1519',
  'OBRAS PRINCIPAIS:',
  '-"Mona Lisa"',
  '-"A Anunciação"',
  '-"Homen Vitruviano"',
  '-"A Ultima Ceia"' ];
  for (i=0;i<11;i++){ 
  }

//const leonardo = davinci[0,1,2];


class PerfilUsuario extends Component {
  constructor(props) {
    super(props);
      this.state ={
        num1: (davinci)
      }
    }
render()  {
  return(
    <SafeAreaView style ={styles.safe}>
      
        <Text style = {styles.textoTitulo}>GRANDES PINTORES</Text>

        <View style = {styles.botao}>
            <View> 
                <Button 
                  title = 'LEONARDO DA VINCI'
                  onPress = {() =>{}}
                /> 
            </View> 
            <View>  
                <Button 
                  title = 'PABLO PICASSO'
                  onPress = {() =>{}}
                />
            </View> 
            <View> 
                <Button 
                title = 'VINCENT VAN GOGH'
                onPress = {() =>{}}
                />
            </View>
            <View>  
                <Button 
                  title = 'MIGUEL ANGEL'
                  onPress = {() =>{}}
                /> 
              </View> 
              <View> 
                <Button 
                  title = 'SALVADOR DALI'
                  onPress = {() =>{}}
                />
              </View> 
              
            <View>  
                <Button 
                  title = 'FRIDA KAHLO'
                  onPress = {() =>{}}
                />
            </View> 
            <View> 
                <Button 
                  title = 'TARSILA DO AMARAL'
                  onPress = {() =>{}}
                /> 
            </View> 
            <View> 
                <Button 
                title = 'ANDY WARHOL'
                onPress = {() =>{}}
                />
            </View>
            <View> 
                <Button 
                  title = 'DI CAVALCANTI'
                  onPress = {() =>{}}
                />
            </View> 
            <View> 
                <Button 
                  title = 'PANCHO FIERRO'
                  onPress = {() =>{}}
                /> 
            </View>    
        </View>

          <View style={styles.caixa}> 
              <Text style = {{marginStart: 15, fontSize: 18, marginVertical: 15}}>{this.state.num1}</Text> 
             
          </View> 

    </SafeAreaView>

    )
  }
}

export default PerfilUsuario;

const styles = StyleSheet.create ({
  safe: {
    backgroundColor: '#DDA0DD',
    flex: 1,
    alignItems: 'center',
    width: '100%'

  },
  textoTitulo: {
    fontSize: 38,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: '#1F41EA',
    marginTop: 15
   
  },

  botao:{
    marginTop: 15,  
    flex: 1,
    width: '90%',
    alignContent: "space-around",
    flexDirection: 'row',
    flexWrap: "wrap",
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  caixa:{
    flex: 1,
    alignItems: 'stretch',
    borderWidth: 0.8,
    borderColor: 'black',
    width: "95%",
    marginVertical: 30,
    backgroundColor: '#ff99ff',
    opacity: 0.8,
    
  
  },

})


//Crie um app que mostre o perfil de um usuário com nome, idade e apelido e que possibilite a troca de usuário 
//a partir da seleção de uma lista fixa com seus nomes.  As informações dos usuários devem vir de uma função 
//assíncrona, chamada no momento da seleção. Enquanto as informações do novo usuário não chega, o app deve 
//renderizar algum indicativo de que está esperando algo acontecer (ex: 'carregando...')