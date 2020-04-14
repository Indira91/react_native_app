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


function TextoPadrao(font) {
  return (
    <View>
      <Text style={{fontFamily: 'AlNile-Bold'}}>{font.titulo}</Text>
      {font.children}
      </View>
  );
}

function TextoPadraoNegrito(tam) {
  return (
    <View>
      <Text style={{fontFamily: 'AlNile-Bold', height: 30}}>
        {tam.titulo}</Text> {tam.children}
    </View>
  );
}

function TextoTituloPadrao(cor) {
  return (
    <View>
      <Text style={{fontFamily: 'AlNile-Bold', height: 30}}>
        {cor.titulo}</Text> {cor.children}
    </View>
  );
}

export default function Series() {
  const [texDig, settexDig] = useState('');
  const [foiHabilitado, setFoiHabilidao] = useState(true)
    return (
  
      <SafeAreaView>
     
        <View>
          <TextoPadrao font="LA CASA DE PAPEL "></TextoPadrao>
        </View>

        <TextInput
          style={{
            height: 40,
            borderWidth: 5,
            borderColor: 'black'
           
            }}
          placeholder={"Digite seu aqui comentario"}
          multiline={true}
          maxLength={150}
          onChangeText={texDig => settexDig(texDig)}
          color= "green"
        /> 

        <Button 
          onPress={()=>true}
          
          title="POSTAR AQUI"
          color= '#182450'
        />  

     </SafeAreaView>
    )
  }
  
//09-04-2020 quarenteners