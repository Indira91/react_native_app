import 'react-native-gesture-handler';
import React, {useState, Component} from 'react';
import {Text, SafeAreaView, TextInput, View, Button, Alert, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'


const imagen = { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRLpvNB1LfSec1_OMux6uC7g5jQuFZr0HU5EyQVrV15UjUN16EX&usqp=CAU' };
const USUARIOS = {
  usuario: 'indirasingh',
  password: 'indira321',
  profile: {
    name: 'Indira Singh Ayta',
    nasc: '15/03/1991',
    licença: 'Premium',
  },
};

    function Login ({navigation}) {
      const [usuario, setUsuario] = useState('');
      const [senha, setSenha] = useState('');
      const acessa = () => {
        navigation.push('Sua Conta', USUARIOS.profile);
      }
      const validaLogin = (usuario, senha) => {
        return senha === USUARIOS.password && usuario === USUARIOS.usuario;
      };
    
      return (
        <SafeAreaView style={styles.safe}>
          <View style={styles.container}>
            <Text style={styles.texto}>DIGITE SUAS CREDENCIAIS</Text>
            <TextInput
              style ={styles.place}
              value={usuario}
              placeholder={"Digite seu nome de usuario:"}
              onChangeText={(textos) =>{setUsuario(textos)}}
            />
            <TextInput
              style ={styles.place}
              value={senha}
              placeholder={"Digite sua senha:"}
              onChangeText={(text)=>{setSenha(text)}}
            />
            <Button
            style={styles.botao}
            title="ENTRAR"
            autoCompleteType='password'
            onPress={validaLogin(usuario, senha)
              ? acessa
              : () => Alert.alert('Verifique o seu usuario ou senha!')
          }
            />
          </View>
        </SafeAreaView>
      );
    }

    
    function Dados ({route, navigation}) {
      const {name, nasc, licença} = route.params;
      return (
        <SafeAreaView style={styles.safe} >
          
          <View style={styles.containertwo}>
          <Image source={imagen} style={styles.foto}></Image>
            <Text style={styles.texto}>Nome: {name} </Text>
            <Text style={styles.texto}>Nascimento: {nasc}</Text>
            <Text style={styles.texto}>Licença: {licença}</Text>
          </View>
          <Button
          style={styles.botao}
          title="VOLTAR"
          onPress={()=>{navigation.navigate("Olá INDIRA")
          }}
          />
        </SafeAreaView>
      );
    }





    const Stack =createStackNavigator();


function AppCredenciais() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Olá INDIRA">
          <Stack.Screen  name="Olá INDIRA" component={Login}/>
          <Stack.Screen  name="Sua Conta" component={Dados}/>
          
        </Stack.Navigator>
      </NavigationContainer>
 );
}


export default AppCredenciais;


const styles = StyleSheet.create ({
  safe: {
    backgroundColor: "#FFD700",
    flex: 1,
    alignItems: 'center'
  },
  container: {
    marginVertical: 180,
   

  },
  texto: {
    fontSize: 25,
    fontFamily: "sans-serif-light",
    fontWeight: '700',
    marginVertical: 10
  },
  place: {
    borderWidth: 0.8,
    borderColor: 'black',
    backgroundColor: "#ffdb4d", 
    fontSize: 18,
    marginBottom:25,
    padding: 10,
  },
  containertwo: {
    marginVertical: 80,
    marginBottom: 50
  },
  foto: {
    width: 150,
    height:180,
    alignSelf: 'center',
    borderColor: 'red',
    borderRadius: 55

  }
});

/*Navegação 
 
Faça um app com uma tela de login e uma tela que mostre os dados da sua conta. Crie um módulo para 
simular chamadas a um banco de dados para recuperar dados dos usuários. A tela de login deve conter 
inputs de nome de usuário e de senha e um botão 'Entrar'. A tela de ‘sua conta’ deve exibir o avatar 
do usuário e as suas infos: Nome completo, data de nascimento, tipo de licença para o app e um botão 
para sair.*/ 