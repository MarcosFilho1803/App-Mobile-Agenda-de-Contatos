import React from "react";
import { TextInput,  View,  Text,  TouchableHighlight, StyleSheet, Alert} from "react-native";

import { db } from '../config/firebase'
import { ref, push, update } from "firebase/database";

class AdcionarContato extends React.Component{
    state = {
        nome: '',
        numero: '',
        key: null
    }
    componentDidMount() {
        
        const { route } = this.props;
        if (route.params) {
            const { nome, numero, key } = route.params;
            this.setState({ nome, numero, key });
        }
    }
    alterarContato = () => {
        const { key, nome, numero } = this.state;
        console.log(this.state)
        if (key) {
            const contatoRef = ref(db, `/contatos/${key}`);
            update(contatoRef, {
                    nome,
                    numero
            }).then(() => {
                Alert.alert('Contato atualizado com sucesso!');
            }).catch(error => {
                Alert.alert('Erro ao atualizar o contato: ', error.message);
            });
        } else {
            Alert.alert('Erro: Chave do contato não encontrada.');
        }
    }

    salvarContato = () => {
        const contatosRef = ref(db, '/contatos');
        push(contatosRef, {
                numero: this.state.numero,
                nome: this.state.nome
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
                    {
                        this.props.route.params ? <Text style={{fontSize: 30, fontWeight: '900', textAlign: 'center'}}>{this.state.nome}</Text> : <Text style={{fontSize: 30, fontWeight: '900', textAlign: 'center'}}>Novo Contato</Text>
                    }
                    
                </View>
                    <View style={styles.contatoContainer}>
                    <TextInput
                        style={styles.input}
                        value={this.state.nome}
                        placeholder='Nome'
                        onChangeText={
                            nome => { this.setState({nome})} 
                            
                        }
                        />
                    <TextInput
                        style={styles.input}
                        placeholder='Número'
                        value={this.state.numero}

                        onChangeText={
                            numero => { this.setState({numero})} 
                        }
                        />
                    {
                        this.props.route.params ? 
                        <TouchableHighlight underlayColor={"white"} onPress={ this.alterarContato }>
                            <Text>
                                Alterar
                            </Text>
                        </TouchableHighlight> 
                        
                        : 
                        
                        <TouchableHighlight underlayColor={"white"} onPress={ this.salvarContato }>
                            <Text>
                                Adicionar
                            </Text>
                        </TouchableHighlight>
                    }
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