
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

    const handleBarCodeScanned = ({  barcode }) => {
      setScanned(true);
      navigation.goBack();
      navigation.navigate("Details",{barcode});
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
      onBarCodeScanned={scanned ? undefined : handleBarCodeScanned({type:"",barcode:""})}
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
