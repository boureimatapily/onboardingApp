import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import OnlineShoppingScreen from './src/screens/OnlineShoppingScreen';
import PaymentSuccessfulScreen from './src/screens/PaymentSuccessfulScreen';
import AddToCart from './src/screens/AddToCart';



export default function App() {
  return (
    <View style={styles.container}>
      <OnlineShoppingScreen />
      {/* <AddToCart />
       <PaymentSuccessfulScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   marginTop:100
  },
});
