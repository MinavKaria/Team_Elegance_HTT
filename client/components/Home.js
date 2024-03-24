import React, { useState, useEffect } from 'react';
import { ScrollView, Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import axios from 'axios';
import Navbar from './Navbar';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FoodMenuPage = ({ navigation,route }) => {

  const { budget } = route.params;
  const [menuData, setMenuData] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [addedItem, setAddedItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(budget);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://team-elegance-htt-e3iv.vercel.app/getAdmin');
      console.log('Menu data:', response.data);
      setMenuData(response.data);
    } catch (error) {
      console.error('Error fetching menu data:', error);
      setError('Error fetching menu data. Please check your network connection.');
    } finally {
      setLoading(false);
    }
  };

  const addToCart = (item) => {
    const updatedCart = { ...cartItems };
    updatedCart[item._id] = (updatedCart[item._id] || 0) + 1;
    setCartItems(updatedCart);
    setAddedItem(item);
  };

  const removeFromCart = (item) => {
    const updatedCart = { ...cartItems };
    if (updatedCart[item._id] > 0) {
      updatedCart[item._id] -= 1;
      setCartItems(updatedCart);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.sectionTitle}>Menu</Text>
        {loading ? (
          <Text>Loading...</Text>
        ) : error ? (
          <Text>{error}</Text>
        ) : (
          Array.isArray(menuData) && menuData.map((menuItem) => (
  menuItem.foodMenu.map((foodItem) => {
    if (foodItem.price <= (budget)) {
      console.log('Food item:', foodItem.price <= (budget));
      return (
        <View key={foodItem._id} style={styles.itemContainer}>
          <Image source={require('../assets/advertisement.jpg')} style={styles.itemImage} resizeMode="cover" />
          <View style={styles.itemDetails}>
            <Text style={styles.itemName}>{foodItem.foodName}</Text>
            <Text style={styles.itemPrice}>	₹ {foodItem.price}</Text>
          </View>
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.quantityButton} onPress={() => removeFromCart(foodItem)}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{cartItems[foodItem._id] || 0}</Text>
            <TouchableOpacity style={styles.quantityButton} onPress={() => addToCart(foodItem)}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          {addedItem && addedItem._id === foodItem._id && (
            <FontAwesome5 name="check-circle" size={24} color="green" />
          )}
        </View>
      );
    } else {
      return null; // Exclude items exceeding budget
    }
  })
))

        )}
      </ScrollView>
      <View style={styles.navbar}>
        <Navbar />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingHorizontal: 20,
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
    position: 'relative',
    paddingHorizontal: 20,
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
  navbar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default FoodMenuPage;
