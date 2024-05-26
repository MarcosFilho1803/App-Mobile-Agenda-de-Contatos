import React from "react";
import { TextInput, View, Text, TouchableOpacity, StyleSheet, Alert, Button, Image } from "react-native";
import { db } from '../config/firebase';
import { ref, push, update } from "firebase/database";

class AdcionarContato extends React.Component {
    state = {
        imagem: '',
        nome: '',
        numero: '',
        key: null
    }

    componentDidMount() {
        const { route } = this.props;
        if (route.params) {
            const { nome, numero, key, imagem } = route.params;
            this.setState({ nome, numero, key, imagem });
        }
    }

    alterarContato = () => {
        const { key, nome, numero, imagem } = this.state;
        console.log(this.state);
        if (key) {
            const contatoRef = ref(db, `/contatos/${key}`);
            update(contatoRef, { nome, numero, imagem }).then(() => {
                Alert.alert('Contato atualizado com sucesso!');
            }).catch(error => {
                Alert.alert('Erro ao atualizar o contato: ', error.message);
            });
        } else {
            Alert.alert('Erro: Chave do contato não encontrada.');
        }
    }

    apagarContato = () => {
        const { key } = this.state;
        console.log(this.state);
        if (key) {
            const contatoRef = ref(db, `/contatos/${key}`);
            update(contatoRef, { nome: null, numero: null, imagem: null }).then(() => {
                Alert.alert('Contato excluído com sucesso!');
            }).catch(error => {
                Alert.alert('Erro ao excluir o contato: ', error.message);
            });
        } else {
            Alert.alert('Erro: Chave do contato não encontrada.');
        }
    }

    salvarContato = () => {
        const contatosRef = ref(db, '/contatos');
        push(contatosRef, {
            numero: this.state.numero,
            nome: this.state.nome,
            imagem: this.state.imagem
        }).then(() => {
            Alert.alert('Contato Salvo!');
        }).catch(error => {
            Alert.alert('Erro ao salvar o contato: ', error.message);
        });
    }

    render() {
        return (
            <View style={styles.principal}>
                <Image
                    style={styles.tinyLogo}
                    source={{ uri: this.state.imagem ? this.state.imagem : 'https://static.vecteezy.com/ti/vetor-gratis/p3/9292244-default-avatar-icon-vector-of-social-media-user-vetor.jpg' }}
                />
                <View style={styles.titulo}>
                    {
                        this.props.route.params
                            ? <Text style={styles.titleText}>{this.state.nome}</Text>
                            : <Text style={styles.titleText}>Novo Contato</Text>
                    }
                </View>
                <View style={styles.contatoContainer}>
                    <TextInput
                        style={styles.input}
                        value={this.state.imagem}
                        placeholder='Link da Imagem'
                        onChangeText={imagem => { this.setState({ imagem }) }}
                    />
                    <TextInput
                        style={styles.input}
                        value={this.state.nome}
                        placeholder='Nome'
                        onChangeText={nome => { this.setState({ nome }) }}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Número'
                        value={this.state.numero}
                        onChangeText={numero => { this.setState({ numero }) }}
                    />
                    {
                        this.props.route.params
                            ? <View>
                                <TouchableOpacity style={styles.button} onPress={this.alterarContato}>
                                    <Text style={styles.buttonText}>Alterar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonApaga} onPress={this.apagarContato}>
                                    <Text style={styles.buttonText}>Excluir</Text>
                                </TouchableOpacity>
                            </View>
                            : <TouchableOpacity style={styles.button} onPress={this.salvarContato}>
                                <Text style={styles.buttonText}>Adicionar</Text>
                            </TouchableOpacity>
                    }
                </View>
            </View>
        );
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
        padding: 10
    },
    contatoContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: "#eee",
        padding: 20
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5
    },
    tinyLogo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        margin: 20,
        borderRadius: 50
    },
    titleText: {
        fontSize: 30,
        fontWeight: '900',
        textAlign: 'center'
    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonApaga:{
        backgroundColor: 'gray',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default AdcionarContato;
