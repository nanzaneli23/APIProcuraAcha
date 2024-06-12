import { View, Text, StyleSheet, Image, Button,TouchableOpacity } from 'react-native';
import React from 'react';

export default function Animal({ id, nomeAnimal, animalRaca, animalTipo, animalCor, animalSexo, animalDtdesaparecimento, animalDtencontro, animalStatus, animalFoto, animalObservacao }) {
    

    return (
        <View style={css.container}>
            <View style={css.boxTitle}>
                <View style={css.circleAvatar}></View>
                <Text style={css.title}>{nomeAnimal}</Text>
            </View>
            <View style={css.boxImage}>
                <Image source={{ uri: animalFoto }} style={css.imagem} />
            </View>
        </View>
    );
}

const css = StyleSheet.create({
    container: {
        width: "100%",
        height: 500,
        backgroundColor: "#ffdead",
        borderRadius: 10,
        marginBottom: 20,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    boxTitle: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
        paddingLeft: 5
    },
    circleAvatar: {
        width: 30,
        height: 30,
        borderRadius: 50,
        backgroundColor: "white",
        marginRight: 10
    },
    title: {
        color: "#333",
        fontSize: 18,
        fontWeight: "bold"
    },
    boxImage: {
        width: "100%",
        height: 390,
        borderRadius: 10,
        overflow: "hidden"
    },
    imagem: {
        width: "100%",
        height: "100%",
        resizeMode: "cover"
    },
    descriptionBox: {
        width: "100%",
        marginTop: 15,
        padding: 10,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: 10,
    },
    descriptionText: {
        color: "#333",
        textAlign: "justify"
    },
    categoryBox: {
        width: "100%",
        marginTop: 15,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    categoryText: {
        color: "#333",
        fontSize: 14,
        fontWeight: "bold"
    },
    botao: {
        marginTop: 10,
        backgroundColor:"white",
        color:"white",
        alignItems:"center",
        height:30,
        width:200,
        padding:5,
        marginLeft:80,
        elevation:8,
        marginBottom:50
      
    }

});