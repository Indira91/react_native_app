

import React, {useState} from 'react';
import {View, Text, Button, TextInput, Alert} from 'react-native';
// import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const DATA = {
  user: 'italomarca',
  password: 'italo123',
  profile: {
    name: 'Italo Marca',
    age: 23,
    gender: 'male',
  },
};

function HomeScreen({navigation}) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const validaLogin = (usuario, senha) => {
    return senha === DATA.password && usuario === DATA.user;
  };

  const acessa = () => {
    navigation.push('Details', DATA.profile);
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <TextInput
        placeholder="Usuário"
        value={usuario}
        onChangeText={(text) => setUsuario(text)}
      />
      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={(text) => setSenha(text)}
      />
      <Button
        title="Acessar"
        onPress={
          validaLogin(usuario, senha)
            ? acessa
            : () => Alert.alert('Usuário ou Senha incorreta!')
        }
      />
    </View>
  );
}

function DetailsScreen({route, navigation}) {
  const {name, age, gender} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
      <Text>Gender: {gender}</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

import PasswordInputText from 'react-native-hide-show-password-input'