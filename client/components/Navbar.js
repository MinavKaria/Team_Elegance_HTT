import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const TransparentButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const Navbar = () => {
  const navigation = useNavigation(); // Use useNavigation hook to get navigation object

  const handleButtonPress = (screenName) => {
    navigation.navigate(screenName,{budget:"10000"}); // Navigate to the specified screen
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navItem} onPress={() => handleButtonPress('Home')}>
        <Image source={require('../assets/home_icon.png')} style={styles.icon} />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => handleButtonPress('LocationComponent')}>
        <Image source={require('../assets/search.png')} style={styles.icon} />
        <Text>Find nearest Store</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => handleButtonPress('Budget')}>
        <Image source={require('../assets/budget.png')} style={styles.icon} />
        <Text>Buy Budgetwise</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={() => handleButtonPress('Profile')}>
        <Image source={require('../assets/profile.png')} style={styles.icon} />
        <Text>Profile</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    width: 370,
    paddingBottom: 30,
    paddingTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  navItem: {
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default Navbar;
