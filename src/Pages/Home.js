import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Animal from '../Components/Animal';
import Detalhes from '../Components/Detalhes';



export default function Home() {
  const [animal, setAnimal] = useState([]);
  const [error, setError] = useState(false)
  const [detalhes, setDetalhes] = useState(false);
  const [item, setItem ] = useState();


  async function getAnimal() {
    try {
      const response = await fetch('http://10.139.75.34:5251/api/Animal/GetAllAnimal', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        const json = await response.json();
        setAnimal(json);

      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
  }

  /*
  const json = await response.json();
  setAnimal(json);
} catch (error) {
  console.error(error);
} finally {
  setLoading(false);
}
}*/

  useEffect(() => {
    getAnimal();
  }, []);

  function exibirdetalhes(item) {
    setItem( item );
    setDetalhes(true);
  }

  function renderAnimais({ item }) {
    return (
      <View>
        <Animal
          nomeAnimal={item.nomeAnimal}
          animalRaca={item.animalRaca}
          animalTipo={item.animalTipo}
          animalCor={item.animalCor}
          animalSexo={item.animalSexo}
          animalObservacao={item.animalObservacao}
          animalFoto={item.animalFoto}
          animalDtDesaperecimento={item.animalDtDesaperecimento}
          animalDtEncontro={item.animalDtEncontro}
          animalStatus={item.animalStatus}
        />
        <View>
          <TouchableOpacity onPress={ () => exibirdetalhes( item ) }>
            <Text style={css.botao}>Detalhes</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <View style={css.container}>
      {animal.length > 0 && !detalhes &&
        <>
          <FlatList style={css.flatlist}
            data={animal}
            renderItem={renderAnimais}
            keyExtractor={(item) => item.animalId}
            contentContainerStyle={css.listContainer}
          />
        </>
      }
      { !animal && !detalhes && 
        <Text style={css.text}>Nenhum animal encontrado.</Text>
      }
      { detalhes && <Detalhes handle={setDetalhes} item={item} /> }
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
  text: {
    color: "white",
    fontSize: 18,
  },
  listContainer: {
    paddingBottom: 20,
  },
  flatlist:{
 width:"100%"
  },
  botao:{
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
