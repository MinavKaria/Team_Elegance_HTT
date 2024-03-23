import { FontAwesome5 } from '@expo/vector-icons'; // Import the icon component
import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Navbar from './Navbar';

const menuData = [
  { id: 1, name: 'Pizza', price: '$10', image: require('../assets/advertisement.jpg') },
  { id: 2, name: 'Burger', price: '$8', image: require('../assets/advertisement.jpg') },
  { id: 3, name: 'Salad', price: '$6', image: require('../assets/advertisement.jpg') },
  // Add more items as needed
];

const FoodMenuPage = ({ navigation }) => {
  const [cartItems, setCartItems] = useState({});
  const [addedItem, setAddedItem] = useState(null); // State to store the added item

  const addToCart = (item) => {
    const updatedCart = { ...cartItems };
    updatedCart[item.id] = (updatedCart[item.id] || 0) + 1;
    setCartItems(updatedCart);
    setAddedItem(item); // Update the addedItem state
    console.log(cartItems);
  };

  const removeFromCart = (item) => {
    const updatedCart = { ...cartItems };
    if (updatedCart[item.id] > 0) {
      updatedCart[item.id] -= 1;
      setCartItems(updatedCart);
      console.log(cartItems);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} resizeMode="cover" />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
      <View style={styles.quantityContainer}>
        <TouchableOpacity style={styles.quantityButton} onPress={() => removeFromCart(item)}>
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantity}>{cartItems[item.id] || 0}</Text>
        <TouchableOpacity style={styles.quantityButton} onPress={() => addToCart(item)}>
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <Text>
      {addedItem && addedItem.id === item.id && <FontAwesome5 name="check-circle" size={24} color="green" />} {/* Display check icon for added item */}
      
        </Text>
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
     
        <View style={{position: 'absolute', bottom: 150, width: "100%", alignSelf:"center", height:40}}>
      {/* Display cart items if cartItems is not null */}
     

      {/* TouchableOpacity to go to cart */}
      {cartItems && (
        <TouchableOpacity style={{backgroundColor:'black', width: "100%", alignSelf:"center",justifyContent:'center',alignContent:'center', alignItems:'center',height:'100%', borderRadius: 10}} >
          <Text style={{color:'white'}}>GO TO CART</Text>
        </TouchableOpacity>
      )}
    </View>
      <Navbar />
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
    position: 'relative'
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
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: 'green',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  quantityButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  quantity: {
    marginHorizontal: 10,
    fontSize: 18,
  },
});

export default FoodMenuPage;
