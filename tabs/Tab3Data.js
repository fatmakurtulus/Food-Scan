import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { View, Text, ActivityIndicator, ScrollView, StyleSheet } from 'react-native';


export default class Tab3 extends Component {

  state = {
    loading:true,
    product:null,
    barcode:route.params.barcode
  };
  async componentDidMount(){
      const url=`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`
      const response= await fetch(url);
      const data= await response.json();
      this.setState({product:data.product,loading:false})
     
  }
  render () {
    return (
        alert(this.state.status_verbose),
<SafeAreaView>
<View>
        {this.state.loading||!this.state.product ?<Text>Loading...</Text>:<Text>{this.state.product.product_name_en}</Text>}
    
      </View>
</SafeAreaView>
     
    )
  }
}
 // -------------
  
import React, { useState, useEffect,Component } from 'react';
import { Text, View, StyleSheet, Button,Linking } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation, useRoute } from '@react-navigation/native';


export default function Scan() {

  const navigation = useNavigation();
  const route = useRoute();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  console.log(route);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);
  const navigateToDetails = () => {
    navigation.goBack();
    navigation.navigate("Details",{barcode:data});
  };
 
    const handleBarCodeScanned = ({ type, data }) => {
      setScanned(true);
      alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      navigation.goBack();
      navigation.navigate("Details",{barcode:data})
      //navigation.goBack();
    //  navigation.navigate("Details",{barcode:data});
         // const url=`https://world.openfoodfacts.org/api/v0/product/${data}.json`
    /*const response = await fetch(url);
    const data= await response.json();
    navigation.navigate("Tab3",{barcode:data});
       // this.setState({product:data.product,loading:false})
   // Linking.openURL(`https://world.openfoodfacts.org/api/v0/product/${data}.json`).catch(err=>
   //Alert.alert("invalid",`https://world.openfoodfacts.org/api/v0/product/${data}.json`))*/
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <BarCodeScanner
      onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
      //  onBarCodeScanned={this.props.navigation.navigate({handleBarCodeScanned},'Tab3',{scanned:barcode})/*scanned ? undefined : handleBarCodeScanned*/}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
