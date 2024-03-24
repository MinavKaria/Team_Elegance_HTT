import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Cart = ({ cartItems }) => {
    if (!cartItems) {
      return <View style={{flex:1, justifyContent:'center' , alignItems: 'center', fontWeight: 'bold'}}><Text>No items in cart</Text></View>;
    }
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Cart</Text>
        {Object.keys(cartItems).map((itemId) => (
          <View key={itemId} style={styles.item}>
            <Text style={styles.itemName}>Item: {cartItems[itemId].name}</Text>
            <Text style={styles.itemQuantity}>Quantity: {cartItems[itemId].quantity}</Text>
          </View>
        ))}
      </View>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    marginBottom: 5,
  },
  itemName: {
    fontSize: 16,
  },
  itemQuantity: {
    fontSize: 14,
    color: 'gray',
  },
});

export default Cart;
