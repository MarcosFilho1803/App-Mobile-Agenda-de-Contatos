import {View, Text, StyleSheet, TextInput, TouchableHighlight, Button} from 'react-native';
import React from "react";
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();



function Home ({navigation}){
  return(
    <View style={styles.principal}>

      <View style={styles.menu}>
        <TouchableHighlight underlayColor={"white"} onPress={ () => navigation.navigate('Adcionar Contato') } style = {styles.btnADD}>
          <Text style={{fontSize: 30, fontWeight: '600'}}>+</Text>
        </TouchableHighlight>
      </View>

        <View style={styles.titulo}>
          <Text style={{fontSize: 30, fontWeight: '900', textAlign: 'center'}}>Contatos</Text>
        </View>

        <View style={styles.contatoContainer}>
        <TouchableHighlight underlayColor={"white"} onPress={ () => navigation.navigate('Editar') } style={styles.cardContato}>
          <Text style={{ fontWeight: '400'}}>João clóvão</Text>
        </TouchableHighlight>
        <TouchableHighlight underlayColor={"white"} onPress={ () => navigation.navigate('Editar') } style={styles.cardContato}>
          <Text style={{ fontWeight: '400'}}>Shaolin matador de porco</Text>
        </TouchableHighlight>
        </View>
    </View>
  )
}


function AdcionarContato ({ navigation }){
  return(
    <View style={styles.principal}>
     <View style={styles.titulo}>
        <Text style={{fontSize: 30, fontWeight: '900', textAlign: 'center'}}>Novo Contato</Text>
      </View>
      <View style={styles.contatoContainer}>
        <TextInput
          style={styles.input}
          placeholder='Nome'
        />
        <TextInput
          style={styles.input}
          placeholder='Número'
        />
        <Button
        title='Adcionar'
        ></Button>
      </View>
    </View>
  )
}

function EditarContato ({ navigation }){
  return(
    <View style={styles.principal}>
     <View style={styles.titulo}>
        <Text style={{fontSize: 30, fontWeight: '900', textAlign: 'center'}}>Editar Contato</Text>
      </View>
      <View style={styles.contatoContainer}>
        <TextInput
          style={styles.input}
          value='João Clóvão'
        />
        <TextInput
          style={styles.input}
          value='996331803'
        />
        <Button
        title='Editar'
        ></Button>
      </View>
    </View>
  )
}

export default function HomeScreen() {
  return (
     <Stack.Navigator>
      <Stack.Screen name="Contatos" component={Home} />
      <Stack.Screen name="Adcionar Contato" component={AdcionarContato} />
      <Stack.Screen name="Editar" component={EditarContato} />
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
      flexDirection: 'row',
      justifyContent: 'flex-end'
  },
  btnADD:{
    paddingRight: 30,
    paddingTop: 20
  },
  titulo: {
    position: 'relative', // Define a posição absoluta para o título
    padding: 10
  },
  contatoContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      backgroundColor: "#eee",
      padding: 20
      
  },
  cardContato:{
    marginBottom: 10,
   
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})
