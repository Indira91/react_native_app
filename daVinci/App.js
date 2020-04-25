import React, {useState, Component} from 'react';
import {
  Text, 
  SafeAreaView, 
  TextInput, 
  View, 
  Button,
  Alert,
  StyleSheet,
  ImageBackground
} from 'react-native';


        const TextoPadrao = props => {
            return (<Text style={{fontFamily: 'Roboto'}}>{props.children}</Text>
            
            );
        }

        const TextoPadraoNegrito = props => {
            return (
                <TextoPadrao> <Text style={{fontWeight: "bold", color: "white"}}> {props.children} </Text></TextoPadrao>
            );
        }

        const TextoTituloPadrao = props => {
            return (
            <TextoPadraoNegrito> <Text style={{ fontSize: 40 }}>{props.children}</Text></TextoPadraoNegrito> 
            );
        }

  function series () {
    const [digTexto, setTexto] = useState ('');
    const [textPostado, setTextPostado] = useState('')


    return(
    <SafeAreaView>

       <ImageBackground source={image} style={styles.backgroundImage}>
            <TextoTituloPadrao>
             LA CASA DE PAPEL  {"\n"}
            </TextoTituloPadrao>

            <TextInput 
            style={styles.contenedor}
            multiline = {true}
            placeholder ={"Compartilhe conosco sua critica da serie: "}
            onChangeText = {(digTexto) => setTexto(digTexto)}
            maxLength = {140}
            value= {digTexto}
            />
            <Text>{'\n',"\n"}</Text>
            <Button 
            onPress = {() => {
               setTextPostado(digTexto)
               Alert.alert("Obrigada por compartilhar!!!") 
               setTexto('')
            }}
            title = "postar"
            color = 'black'
            disabled = {digTexto.length<=50}

            />

            <TextoPadraoNegrito> <Text  style= {{fontSize: 35}}> {"\n"} {"\n"} COMENTARIO: </Text> </TextoPadraoNegrito>

            <TextoPadrao><Text style={{fontSize: 20, fontWeight: "bold"}} >{textPostado}</Text></TextoPadrao>


        </ImageBackground>

    </SafeAreaView>
    );
  }
  export default series;

        const image = { uri: 'https://lacasadepapelexperience.com/assets/img/la-casa-de-papel-experience2.jpg' };
        const styles = StyleSheet.create({
        contenedor: {
            alignItems: "flex-start",
            borderColor: 'black',
            padding: 10,
            width: 380,
            backgroundColor: '#ff4d4d',
            borderWidth: 1,
            paddingTop: 1,
            height:170,
            fontSize: 20,
            opacity: 12
  
        },
        backgroundImage:{
            width:412,
            height:660,
            alignItems: "center",
            opacity: 0.8
        },
        
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