import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'


export default function Detalhes({handle, item, animal, animalFoto}) {
  return (
    <View>
        <Text>{item.nomeAnimal}</Text>
        <Image source={{uri:item.animalFoto}}></Image>
        <TouchableOpacity onPress={() => handle(false)} >
        <Text style={css.voltar}>Voltar</Text>
        </TouchableOpacity>
        
    </View>
  )
}
const css = StyleSheet.create({
container: {
    backgroundColor: "sandybrown",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  voltar:{
    backgroundColor:"white",
    height:40,
    padding:10,
    alignItems:"center",
    width:"30%",
    marginLeft:140,
    marginBottom:10,
    elevation:15,
    textAlign:"center"

  }
})