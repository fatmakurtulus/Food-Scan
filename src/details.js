import React, { Component, useEffect, useState } from "react";
import { TextInput, View, Text, ActivityIndicator, ScrollView, Image, FlatList } from "react-native";
import { styles } from "./styles";
import { useNavigation, useRoute } from '@react-navigation/native';
import DetailsCard from './DetailsCard'
import axios from "axios";
import { Alert } from "react-native";
import { Value } from "react-native-reanimated";

export default Details = ({ navigation }) => {


  //  const barcode: 737628064502
  const route = useRoute();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [alergen, setAlergen] = useState([]);

  //const url= `https://world.openfoodfacts.org/api/v0/product/${route.params.barcode}.json`;


  useEffect(() => {
    setLoading(true)
    fetch(`https://world.openfoodfacts.org/api/v0/product/${route.params.barcode}.json`)
      .then((response) => response.json())
      .then((json) => {
        setData(json.product);
        setLoading(false);
      })
      .catch((error) => { console.error(error); setLoading(false); setError(error); })
      .finally(() => setLoading(false));
  }, []);


if (isLoading) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#5500dc"/>
    </View>
  );
}

if (error) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 18 }}>
        Error fetching data... Check your network connection!
      </Text>
    </View>
  );
}

return (
  <ScrollView>
    <View style={styles.cardView}>
      <Image style={styles.image} source={{ uri: data.image_front_url }} />
      <Text style={styles.textInput}>{route.params.barcode}</Text>
      <Text style={styles.food_title}>{data.generic_name}</Text>
      <Text style={styles.labelTags}>{data.labels_tags}</Text>
      <Text style={styles.food_title}>ingredients: </Text>
      <Text style={styles.icerik}>{data.ingredients_text}</Text>

      
     

    </View>
  </ScrollView>

);
};
/*/ <View>{alergen.filter(value=>value==='peanut')
.map(value=>(<Text>Bu ürün {value} içerdiği için tüketmeniz sakıncalıdır.</Text>))}</View>
     // <Image style={styles.image} source={{ uri: data.image_front_url }} />
 */