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

        <Text>Total de votos contabilizado: {contVotos}</Text>

          <Button 
          onPress={()=>{
            somaVotos(contVotos + 1);
          }}
          title="aperte aqui para votar"
          color = '#182450'
          />
        
          <Button
          onPress={()=>{
            somaVotos(contVotos + 1);
          }}
          
          title="aperte de novo "
          color = '#dd2580'
          />

          <Button 
          onPress={()=>{
            somaVotos(contVotos + 1);
          }}
          title="adicione mais um voto aqui"
          color = '#182490'
          />

      </SafeAreaView>
    
      );
    }

  //07-04-2020 quarenteners
  //Atividade finalizada