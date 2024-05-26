import React from "react";
import { View, Text, StyleSheet, TouchableHighlight, Image } from "react-native";
import { db } from '../config/firebase';
import { ref, onValue } from "firebase/database";

class ListarContatos extends React.Component {
    state = {
        contatos: []
    };

    componentDidMount() {
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
                        this.state.contatos.map(({ key, nome, numero, imagem }) => {
                            return (
                                <View key={key} style={styles.cardContato}>
                                    <TouchableHighlight
                                        underlayColor={"#f0f0f0"} 
                                        onPress={() => navigation.navigate('Adcionar Contato', { nome, numero, key, imagem })}
                                    >
                                        <View style={styles.cardContent}>
                                            <Image
                                                style={styles.tinyLogo}
                                                source={{ uri: imagem }}
                                            />
                                            <View style={styles.textContainer}>
                                                <Text style={styles.nome}>{nome}</Text>
                                                <Text style={styles.numero}>{numero}</Text>
                                            </View>
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
    cardContato: {
        marginBottom: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    tinyLogo: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    nome: {
        fontSize: 16,
        fontWeight: '600'
    },
    numero: {
        fontSize: 14,
        color: 'gray'
    }
});

export default ListarContatos;
