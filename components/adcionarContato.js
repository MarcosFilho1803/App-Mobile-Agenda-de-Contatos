import React from "react";
import { TextInput,  View,  Text,  TouchableHighlight, StyleSheet, Alert} from "react-native";

import { db } from '../config/firebase'
import { ref, push } from "firebase/database";

class AdcionarContato extends React.Component{
    state = {
        nome: '',
        numero: ''
    }

    salvarContato = () => {
        const contatosRef = ref(db, 'contatos/');
        push(contatosRef, {
            contato: {
                nome: this.state.nome,
                numero: this.state.numero
            }
        }).then( () => {
            Alert.alert('Contato Salvo!');
        }).catch( error => {
            Alert.alert('Erro ao salvar o contato: ', error.message);
        })
    }

    render(){
        return(
            <View style={styles.principal}>
                <View style={styles.titulo}>
                    <Text style={{fontSize: 30, fontWeight: '900', textAlign: 'center'}}>Adicionar Contato</Text>
                </View>
                    <View style={styles.contatoContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder='Nome'
                        onChangeText={
                            nome => { this.setState({nome})} 
                            
                        }
                        />
                    <TextInput
                        style={styles.input}
                        placeholder='Número'
                        onChangeText={
                            numero => { this.setState({numero})} 
                        }
                        />
                    <TouchableHighlight
                    
                    underlayColor={"white"}
                    onPress={ this.salvarContato }
                >
                    <Text>
                        Adicionar
                    </Text>
                </TouchableHighlight>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
  
    principal: {
      flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
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
export default AdcionarContato