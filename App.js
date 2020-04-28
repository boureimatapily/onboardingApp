import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OnlineShoppingScreen from './Components/OnlineShoppingScreen';
import AddToCart from './Components/AddToCart';
import PaymentSuccessfulScreen from './Components/PaymentSuccessfulScreen';


export default function App() {
  return (
    <View style={styles.container}>
      {/* <OnlineShoppingScreen /> */}
      <AddToCart />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   marginTop:100
  },
});
