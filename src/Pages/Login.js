import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';
import Perfil from './Perfil'
export default function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const { Login, error} = useContext(AuthContext);

    const [cadastro, setCadastro] = useState(false);

    function RealizaLogin() {
       Login( email, senha );
    }

    function Voltar()
    {
        setCadastro(false)
    }

    if(cadastro){
        return(
            <>
                
                <Perfil/>
                <TouchableOpacity style={css.botaos} onPress={Voltar}>
                <Text style={css.btnLoginText}>Voltar</Text>
                </TouchableOpacity>

            </>
        )
    }


    return (
        <ScrollView contentContainerStyle={css.container}>
            <Image source={require("../../assets/logo.png")} style={css.logo} />
            <TextInput
                inputMode="email"
                placeholder="Email do Usuário"
                style={css.input}
                value={email}
                onChangeText={(digitado) => setEmail(digitado)}
                placeholderTextColor="black"
            />
            <TextInput
                inputMode="text"
                placeholder="Senha"
                secureTextEntry={true}
                style={css.input}
                value={senha}
                onChangeText={(digitado) => setSenha(digitado)}
                placeholderTextColor="black"
            />
           
            <TouchableOpacity onPress={() => setCadastro(!cadastro)}>
                <Text style={css.cadastroText}>Ainda não tem uma conta? Cadastre-se</Text>
            </TouchableOpacity>
            <TouchableOpacity style={css.btnLogin} onPress={RealizaLogin}>
                <Text style={css.btnLoginText}>Entrar</Text>
            </TouchableOpacity>


            {error &&
                <View style={css.error}>
                    <Text style={css.errorText}>Revise os campos. Tente novamente!</Text>
                </View>
            }
        </ScrollView>
    )
}
const css = StyleSheet.create({
    container: {
        flexGrow: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "sandybrown"
    },
    logo: {
        width: "60%",
        resizeMode: "contain"
    },
    input: {
        width: "90%",
        height: 50,
        borderRadius: 10,
        marginBottom: 15,
        padding: 15,
        backgroundColor: "papayawhip",
        color: "black",
        borderWidth:1
    },
    forgot: {
        width: "90%",
        marginTop: 10,
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    forgotText: {
        color: "black",
        fontWeight: "bold"
    },
    btnLogin: {
        width: "90%",
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 30,
        backgroundColor: "papayawhip"
    },
    botaos: {
        width: "40%",
        height: 50,
        marginTop: -100
      
    },
    
    btnLoginText: {
        color: "black",
        lineHeight: 45,
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold",
        marginTop:5
    },
    error: {
        width: "100%",
        height: 50,
        marginTop: 30
    },
    errorText: {
        color: "white",
        textAlign: "center"
    }
});