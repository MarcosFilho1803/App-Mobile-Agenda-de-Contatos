import React from "react";
import {View,  Text, StyleSheet, TouchableHighlight} from "react-native";

import { db } from '../config/firebase'
import { ref, onValue } from "firebase/database";

class ListarContatos extends React.Component{
    state = {
        contatos: []
    }

    componentDidMount(){
        
        const contatosRef = ref(db, 'contatos/');
        onValue(contatosRef, (snapshot) => {
            let data = snapshot.val();
            if (data) {
                let contatos = Object.values(data);
                this.setState( { contatos });
            } else {
                this.setState({ contatos: [] });
            }
        });
    }
    render() {

        return (
            <View style={styles.contatoContainer}>
                {
                    this.state.contatos.length > 0 ? (
                        this.state.contatos.map(({contato}, index) => {
                            return (
                            <View key={index} style={styles.cardContato}>
                                <TouchableHighlight
                                    underlayColor={"white"} // Certifique-se de que 'Editar' é a rota correta
                                >
                                    <Text style={{ fontWeight: '400' }}>{contato.nome}</Text>
                                </TouchableHighlight>
                            </View>
                            );
                        })
                    ) : (
                        <Text>Nenhum contato disponível.</Text>
                    )
                }
            </View>
        );
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