import {View, Text, StyleSheet, Button} from 'react-native';
import React from "react";
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function Home ({ navigation }){
  return(
    <View style={styles.container}>
      <View>
      <Text style={styles.titulo}>Agenda de Contatos</Text>
      </View>
      <Text>Hello World</Text>
      <Button title="Adcionar Contato" onPress={ () => navigation.navigate('Adcionar Contato')} />
    </View>
  )
}


function AdcionarContato ({ navigation }){
  return(
    <View style={styles.container}>
      <Text>Contatos</Text>
    </View>
  )
}

export default function HomeScreen() {
  return (
     <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Adcionar Contato" component={AdcionarContato} />
    </Stack.Navigator>


  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 500,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10,
  },
  titulo:{
    marginBottom: 40,
    fontSize: 20,
    fontWeight: '900',
  }
})
