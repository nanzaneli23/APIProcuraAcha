import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';

export default function Detalhes({ handle, item, animal, animalFoto }) {

  const [observacao, setObservacao] = useState(false);
  const [observacoesId, setObservacoesId] = useState(0);
  const [observacoesDescricao, setObservacoesDescricao] = useState('');
  const [observacoesLocal, setObservacoesLocal] = useState('');
  const [observacoesData, setObservacoesData] = useState('');
  const [animalId, setAnimalId] = useState('');
  const [usuarioId, setUsuarioId] = useState('');
  const [error, setError] = useState(false);

  async function SalvarObservacao() {
    await fetch('http://10.139.75.34:5251/api/Observacoes/InsertObservacoes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        observacoesId: observacoesId,
        observacoesDescricao: observacoesDescricao,
        observacoesLocal: observacoesLocal,
        observacoesData: observacoesData,
        animalId: animalId,
        usuarioId: usuarioId
      })
    })
      .then(res => res.json())
      .then(json => {
        // Assuming the response contains the data we need to update
        setObservacoesDescricao(json.ObservacoesDescricao);
        setObservacoesLocal(json.ObservacoesLocal);
        setObservacoesData(json.ObservacoesData);
        setAnimalId(json.animalId);
        setUsuarioId(json.usuarioId);
      })
      .catch(err => console.log(err));
  }

  return (
    <ScrollView>
      <Text style={css.nome}>{item.nomeAnimal}</Text>
      <Image style={css.foto} source={{ uri: item.animalFoto }}></Image>
      <Text style={css.campo}>{item.animalRaca}</Text>
      <Text style={css.campo}>{item.animalTipo}</Text>
      <Text style={css.campo}>{item.animalCor}</Text>
      <Text style={css.campo}>{item.animalSexo}</Text>
      <Text style={css.campo}>{item.animalObservacao}</Text>
      <Text style={css.campo}>{item.animalDtDesaperecimento}</Text>
      <Text style={css.campo}>{item.animalDtEncontro}</Text>
      <Text style={css.campo}>{item.animalStatus}</Text>

      <TouchableOpacity onPress={() => handle(false)}>
        <Text style={css.voltar}>Voltar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setObservacao(true)}>
        <Text style={css.observacao}>Nova Observação</Text>
      </TouchableOpacity>

      {observacao && 
        <View>
          <TextInput
            inputMode="text"
            style={css.input}
            value={observacoesDescricao}
            onChangeText={(digitado) => setObservacoesDescricao(digitado)}
            placeholderTextColor="black"
            placeholder='Descrição do animal'
          />
          <TextInput
            inputMode="text"
            style={css.input}
            value={observacoesLocal}
            onChangeText={(digitado) => setObservacoesLocal(digitado)}
            placeholderTextColor="black"
            placeholder='Local da descrição do animal'
          />
          <TextInput
            inputMode="text"
            style={css.input}
            value={observacoesData}
            onChangeText={(digitado) => setObservacoesData(digitado)}
            placeholderTextColor="black"
            placeholder='Data da descrição do animal'
          />
          <TextInput
            inputMode="text"
            style={css.input}
            value={animalId}
            onChangeText={(digitado) => setAnimalId(digitado)}
            placeholderTextColor="black"
            placeholder='Animal'
          />
          <TextInput
            inputMode="text"
            style={css.input}
            value={usuarioId}
            onChangeText={(digitado) => setUsuarioId(digitado)}
            placeholderTextColor="black"
            placeholder='Usuário'
          />
          <TouchableOpacity onPress={SalvarObservacao}>
            <Text style={css.observacao}>Salvar</Text>
          </TouchableOpacity>
        </View>
      }
    </ScrollView>
  )
}

const css = StyleSheet.create({
  container: {
    backgroundColor: "sandybrown",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  voltar: {
    backgroundColor: "papayawhip",
    height: 40,
    padding: 10,
    alignItems: "center",
    width: "30%",
    marginLeft: 100,
    marginBottom: 15,
    elevation: 15,
    textAlign: "center",
    marginTop: 10,
    borderRadius: 10
  },
  foto: {
    width: 300,
    height: 300,
    borderRadius: 30,
    marginTop: 10,
  },
  campo: {
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: 8,
    marginTop: 4,
    padding: 5,
    elevation:5
  },
  nome: {
    fontWeight: "bold",
    marginTop: 20
  },
  observacao: {
    backgroundColor: "papayawhip",
    height: 40,
    padding: 10,
    alignItems: "center",
    width: "60%",
    marginLeft: 60,
    marginBottom: 15,
    elevation: 15,
    textAlign: "center",
    marginTop: 10,
    borderRadius: 10
  },
  input: {
    backgroundColor: "white",
    borderRadius: 4,
    marginBottom: 5,
    marginTop: 4,
    padding: 5,
    elevation:6
  }
});
