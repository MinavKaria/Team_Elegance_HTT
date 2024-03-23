import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Navbar from './Navbar'


const menuData = [
  { id: 1, name: 'Pizza', price: '$10', image: require('../assets/advertisement.jpg') },
  { id: 2, name: 'Burger', price: '$8', image: require('../assets/advertisement.jpg') },
  { id: 3, name: 'Salad', price: '$6', image: require('../assets/advertisement.jpg') },
  // Add more items as needed
];

const FoodMenuPage = ({navigation}) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (item) => {
    const updatedCart = { ...cartItems };
    updatedCart[item.id] = (updatedCart[item.id] || 0) + 1;
    setCartItems(updatedCart);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} resizeMode="cover" />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
      {cartItems[item.id] > 0 && (
        <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
          <Text style={styles.addButtonText}>{`+${cartItems[item.id]}`}</Text>
        </TouchableOpacity>
      )}
      {cartItems[item.id] === undefined && (
        <TouchableOpacity style={styles.addButton} onPress={() => addToCart(item)}>
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Menu</Text>
      <FlatList
        data={menuData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
       <Button
        title="Submit"
        onPress={()=>{
            navigation.navigate('Maps');
        }}
        color="#841584"
        style={{ width: '100%'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
  },
  itemDetails: {
    flex: 1,
    marginLeft: 10,
  },
  itemName: {
    fontSize: 18,
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: 'green',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default FoodMenuPage;
