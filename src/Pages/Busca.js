import { View, Text, TextInput, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function Busca() {
    const [animal, setAnimal ] = useState( [] );
    const [error, setError ] = useState(false);
    const [busca, setBusca] = useState(false);
    const [filtro, setFiltro ] = useState(false);

    async function getAnimal()
    {
        await fetch('http://10.139.75.34:5251/api/Animal/GetAllAnimal', {
            method: 'GET',
            headers: {
              'content-type': 'application/json'
            }
          })
            .then( res => ( res.ok == true ) ? res.json() : false )
            .then( json => setAnimal( json ) )
            .catch( err => setError( true ) )
    }

    useEffect( () => {
        getAnimal();
    }, [] );

    useEffect( () => {
        setFiltro( animal.filter( (item) => item.nomeAnimal == busca )[0] );
    }, [busca] );

    return (
        <View style={css.container}>
            <View style={css.searchBox}>
                <TextInput
                    style={css.search}
                    placeholder="Buscar animais"
                    placeholderTextColor="white"
                    TextInput={busca}
                    onChangeText={(digitado) => setBusca( digitado ) }
                />
            </View>
            { filtro && <Text style={css.text}>{filtro.nomeAnimal}</Text> }
            { ( !filtro && busca ) && <ActivityIndicator size="large" color="white" /> }
        </View>
    )
}
const css = StyleSheet.create({
    container: {
        flexGrow: 1,
        width: "100%",
        alignItems: "center",
        backgroundColor: "sandybrown",
    },
    text: {
        color: "white"
    },
    searchBox: {
        width: "100%",
        height: 100,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    search: {
        width: "96%",
        height: 60,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 8,
        padding: 10,
        color: "white"
    }
})