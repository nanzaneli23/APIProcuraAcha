import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useState } from 'react';
import React from 'react';

export default function Inserir() {
  const [usuarioNome, setUsuarioNome] = useState("");
  const [usuarioTelefone, setUsuarioTelefone] = useState("");
  const [usuarioEmail, setUsuarioEmail] = useState("");
  const [usuarioSenha, setUsuarioSenha] = useState("");

  async function InsertUsuario() {
    await fetch('http://10.139.75.34:5251/api/Usuario/InsertUsuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset-UTF-8',
      },
      body: JSON.stringify({
        usuarioTelefone: usuarioTelefone,
        usuarioEmail: usuarioEmail,
        usuarioNome: usuarioNome,
        usuarioSenha: usuarioSenha
      })
    })
      .then((response) => response.json())
      .then(json => { 
        setUsuarioTelefone(''); 
        setUsuarioEmail(''); 
        setUsuarioNome('');  
        setUsuarioSenha(''); 
      })
      .catch(err => console.log(err));
  }

  return (
    <ScrollView contentContainerStyle={css.container}>
      <Image source={require("../../assets/logo.png")} style={css.logo} />
      <TextInput
        inputMode="text"
        placeholder='Nome'
        style={css.input}
        value={usuarioNome}
        onChangeText={(digitado) => setUsuarioNome(digitado)}
        placeholderTextColor='black'
      />
      <TextInput
        inputMode="text"
        placeholder='Telefone'
        style={css.input}
        value={usuarioTelefone}
        onChangeText={(digitado) => setUsuarioTelefone(digitado)}
        placeholderTextColor='black'
      />
      <TextInput
        inputMode="email"
        placeholder='E-mail'
        style={css.input}
        value={usuarioEmail}
        onChangeText={(digitado) => setUsuarioEmail(digitado)}
        placeholderTextColor='black'
      />
      <TextInput
        inputMode="text"
        placeholder='Senha'
        style={css.input}
        value={usuarioSenha}
        onChangeText={(digitado) => setUsuarioSenha(digitado)}
        placeholderTextColor='black'
      />
      <TouchableOpacity style={css.btn} onPress={InsertUsuario}>
        <Text style={css.btnText}>Cadastrar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
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
    borderWidth: 1
  },
  btn: {
    width: "90%",
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 30,
    backgroundColor: "papayawhip"
  },
  btnText: {
    color: "black",
    lineHeight: 45,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold"
  }
});
