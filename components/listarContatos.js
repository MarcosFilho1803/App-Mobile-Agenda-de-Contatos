import React from "react";
import {View,  Text, StyleSheet, TouchableHighlight} from "react-native";

class ListarContatos extends React.Component{
        
    render(){
        return(
                <View style={styles.contatoContainer}>
                    <TouchableHighlight underlayColor={"white"} onPress={ () => navigation.navigate('Editar') } style={styles.cardContato}>
                    <Text style={{ fontWeight: '400'}}>João clóvão</Text>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor={"white"} onPress={ () => navigation.navigate('Editar') } style={styles.cardContato}>
                    <Text style={{ fontWeight: '400'}}>Shaolin matador de porco</Text>
                    </TouchableHighlight>
                </View>
        )
    }
}

const styles = StyleSheet.create({
  
    
    contatoContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: "#eee",
        padding: 20
        
    },
    cardContato:{
      marginBottom: 10,
     
    }
  })

  export default ListarContatos;