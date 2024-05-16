import {View, Text, StyleSheet, Button, TouchableHighlight} from 'react-native';
import React from "react";
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();



function Home ({navigation}){
  return(
    <View style={styles.principal}>
      <View style={styles.menu}>

      <TouchableHighlight underlayColor={"white"} onPress={ () => navigation.navigate('AdcionarContato') } style = {styles.btnADD}>
        <Text style={{fontSize: 30, fontWeight: '600'}}>+</Text>
      </TouchableHighlight>

      <TouchableHighlight underlayColor={"white"} onPress={ () => navigation.navigate('AdcionarContato') } style = {styles.btnADD}>
        <Text style={{fontSize: 30, fontWeight: '600'}}>?</Text>
      </TouchableHighlight>
      </View>
        <View style={styles.titulo}>
          <Text style={{fontSize: 30, fontWeight: '900', textAlign: 'center'}}>Contatos</Text>
        </View>

        <View style={styles.contatoContainer}>
          <View style={styles.cardContato}>
            <Text>Junim Matador de Porco</Text>
          </View>
          <View style={styles.cardContato}>
            <Text>Flavim do pneu</Text>
          </View>
        </View>
        
        
    </View>
  )
}


function AdcionarContato ({ navigation }){
  return(
    <View style={styles.container}>
      <Text >Contatos</Text>
    </View>
  )
}

export default function HomeScreen() {
  return (
     <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AdcionarContato" component={AdcionarContato} />
    </Stack.Navigator>


  );
}


const styles = StyleSheet.create({
  
  principal: {
    flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      backgroundColor: 'white',
  },
  menu: {
    position: 'absolute', 
    top: 10, 
    right: 10,
    flexDirection: 'row'
  },
  btnADD:{
    padding: 10 
  },
  titulo: {
    position: 'absolute', // Define a posição absoluta para o título
    top: 60, // Posiciona o título no topo
    left: 0, // Posiciona o título à esquerda
    right: 0, // Posiciona o título à direita
    height: 40, // Define a altura do título
    justifyContent: 'center', // Centraliza verticalmente o texto do título
    alignItems: 'center', // Centraliza horizontalmente o texto do título
    backgroundColor: 'white', // Cor de fundo do título
    
  },
  contatoContainer: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 5,
    marginTop: 130
  },
  cardContato:{
    marginBottom: 10,
  }
})
