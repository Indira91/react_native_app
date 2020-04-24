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


  export default function Voto(){
    const [contVotos, somaVotos] = useState(0);
    return(
      <SafeAreaView>

        <Text style = {{fontSize: 25 }}>Total de votos contabilizado: {contVotos}{"\n"}</Text>

          <Button 
          onPress={()=>{
            somaVotos(contVotos + 1);
          }}
          title="aperte aqui para votar"
          color = '#182450'
          />

        <Text>{"\n"}</Text>

          <Button
          onPress={()=>{
            somaVotos(contVotos + 1);
          }}
          
          title="adicione mais um voto "
          color = '#dd2580'
          />

     

      </SafeAreaView>
    
      );
    }

  //07-04-2020 quarenteners
  //Atividade finalizada
  