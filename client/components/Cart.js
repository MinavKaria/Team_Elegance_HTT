import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Cart = ({ cartItems }) => {
  const selectedItems = Object.keys(cartItems ?? {}).filter((itemId) => cartItems[itemId] > 0);
  console.log({cartItems})
  if (!selectedItems || selectedItems.length === 0) {
    return <View style={styles.container}><Text>No items in cart</Text></View>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      {selectedItems.map((itemId) => (
        <View key={itemId} style={styles.item}>
          <Text style={styles.itemName}>Item: {cartItems[itemId].foodName}</Text>
          <Text style={styles.itemQuantity}>Quantity: {cartItems[itemId]}</Text>
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
