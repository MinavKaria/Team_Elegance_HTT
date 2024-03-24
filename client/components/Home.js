import { FontAwesome5 } from '@expo/vector-icons';
import axios from 'axios';
import { default as React, useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Cashbacks from './Cashbacks';

import Carousel from './Cashbacks';
import Navbar from './Navbar';

const FoodMenuPage = ({ navigation, route }) => {
  const { budget } = route.params;
  const [menuData, setMenuData] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [addedItem, setAddedItem] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://team-elegance-htt-e3iv.vercel.app/getAdmin');
      setMenuData(response.data);
    } catch (error) {
      console.error('Error fetching menu data:', error);
      setError('Error fetching menu data. Please check your network connection.');
    } finally {
      setLoading(false);
    }
  };





const FoodMenuPage = ({ navigation }) => {
   
  const addToCart = (item) => {
    const updatedCart = { ...cartItems };
    updatedCart[item._id] = (updatedCart[item._id] || 0) + 1;
    setCartItems(updatedCart);
    setAddedItem(item);
    cartItems.local
  };
  // console.log(cartItems)

  const removeFromCart = (item) => {
    const updatedCart = { ...cartItems };
    if (updatedCart[item._id] > 0) {
      updatedCart[item._id] -= 1;
      setCartItems(updatedCart);
    }
  };

  const handleUpvote = (foodItemId) => {
    // Implement logic to increment upvote count for food item with the given ID
  };

  const handleDownvote = (foodItemId) => {
    // Implement logic to increment downvote count for food item with the given ID
  };

  const handleComment = (foodItemId, comment) => {
    // Implement logic to add a comment for the food item with the given ID
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Carousel />
        <Text style={styles.sectionTitle}>Menu</Text>
        {loading ? (
          <Text>Loading...</Text>
        ) : error ? (
          <Text>{error}</Text>
        ) : (
          Array.isArray(menuData) &&
          menuData.map((menuItem) =>
            menuItem.foodMenu.map((foodItem) => {
              if (foodItem.price <= budget) {
                return (
                  <View key={foodItem._id} style={styles.itemContainer}>
                    <Image source={require('../assets/advertisement.jpg')} style={styles.itemImage} resizeMode="cover" />
                    <View style={styles.itemDetails}>
                      <Text style={styles.itemName}>{foodItem.foodName}</Text>
                      <Text style={styles.itemPrice}>₹ {foodItem.price}</Text>
                      <View style={styles.interactionContainer}>
                      <TouchableOpacity onPress={() => handleUpvote(foodItem._id)}>
                        <FontAwesome5 name={foodItem.upvoted ? "thumbs-up" : "thumbs-up"} size={20} color={foodItem.upvoted ? "green" : "gray"} />
                      </TouchableOpacity>
                      <Text>{foodItem.upVotes || 0}</Text>
                      <TouchableOpacity onPress={() => handleDownvote(foodItem._id)}>
                        <FontAwesome5 name={foodItem.downvoted ? "thumbs-down" : "thumbs-down"} size={20} color={foodItem.downvoted ? "red" : "gray"} />
                      </TouchableOpacity>
                      <Text>{foodItem.downVotes || 0}</Text>

                        <TouchableOpacity onPress={() => handleComment(foodItem._id, 'Your comment')}>
                          <FontAwesome5 name="comment" size={20} color="blue" />
                        </TouchableOpacity>
                        <Text>{foodItem.comments ? foodItem.comments.length : 0}</Text>
                      </View>
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
          )
        )}
      </ScrollView>
      <View style={styles.navbar}>
        <Navbar />
      </View>
    </SafeAreaView>
  )

  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} resizeMode="cover" />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.foodName}</Text>
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
      {cartItems[item.id] > 0 && <FontAwesome5 name="check-circle" size={24} color="green" />}
    </View>
  );

  return (
    <View style={styles.container}>
      <Cashbacks />
      <Text style={styles.sectionTitle}>Menu</Text>
      <FlatList
        data={menuData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      {cartItems && (
        <View style={{position: 'absolute'}}>
          
          <Text>{JSON.stringify(cartItems)}</Text>
        </View>
      )}
      <View style={styles.cartButtonContainer}>
        <TouchableOpacity
          style={styles.cartButton}
          onPress={() => {console.log({cartItems}) 
          navigation.navigate('Cart', { cartItems }
          
          )
          }
        
          }

          

        >
          <Text style={styles.cartButtonText}>GO TO CART</Text>
        </TouchableOpacity>
      </View>
      <Navbar />
    </View>
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
    position: 'relative',
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
  interactionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    gap: 10,
  },
});

export default FoodMenuPage;