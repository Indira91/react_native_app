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
          
          title="votar mais de uma vez"
          color = '#ffdb58'
          />

          <Button
          onPress={()=>{
            somaVotos(contVotos + 1);
          }}
          title="aqui tambem pode votar"
          color = '#ff0000'
           />
      </SafeAreaView>
    
      );
    }

  