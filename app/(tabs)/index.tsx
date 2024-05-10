import {View, Text, StyleSheet, Button} from 'react-native';
import React from "react";
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function Home ({ navigation }){
  return(
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Button
          title="Contatos"
          onPress={ () => navigation.navigate('Contatos')}
        />
    </View>
  )
}


function Contatos ({ navigation }){
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
      <Stack.Screen name="Contatos" component={Contatos} />
    </Stack.Navigator>


  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
