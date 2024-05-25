import React from "react";
import {View,  Text, StyleSheet, TouchableHighlight} from "react-native";

import { db } from '../config/firebase'
import { ref, onValue } from "firebase/database";

class ListarContatos extends React.Component{
    state = {
        contatos: []
    }

    componentDidMount(){ 
        const contatosRef = ref(db, '/contatos');
        onValue(contatosRef, (snapshot) => {
            let data = snapshot.val();
            if (data) {
                const contatos = Object.keys(data).map(key => ({ key, ...data[key] }));
                this.setState({ contatos });
                console.log("\n Contatos carregados do banco: ", contatos);
                console.log("\n Contatos o estados: ", this.state.contatos);
            } else {
                this.setState({ contatos: [] });
            }
        });
    }
    render() {
        const { navigation } = this.props;

        return (
            <View style={styles.contatoContainer}>
                {
                    this.state.contatos.length > 0 ? (
                        this.state.contatos.map(({key,  nome, numero}) => {
                                return (
                                    <View key={key} style={styles.cardContato}>
                                        <TouchableHighlight
                                            underlayColor={"white"} // Certifique-se de que 'Editar' é a rota correta
                                            onPress={ () => navigation.navigate('Adcionar Contato',  { nome, numero, key }) }
                                        >
                                            
                                            <View>
                                                <Text style={{ fontWeight: '400' }}>{nome}</Text>
                                                <Text style={{ fontWeight: '400' }}>{numero}</Text>
                                            </View>
                                            
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