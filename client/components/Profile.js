import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const CreditCard = ({ cardNumber, cardHolder, expiryDate }) => {
  return (
    <View>
    <Text style={styles.title}>MEMBERSHIP CARD</Text>
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')} style={styles.cardImage} />
      <Text style={styles.cardNumber}>XXXX &nbsp; XXXX &nbsp; XXXX &nbsp; 2345</Text>
      <Text style={styles.cardHolder}>ZORKO PLATINUM MEMBERSHIP</Text>
      
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222',
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  cardImage: {
    alignSelf: 'center',
    marginBottom: 20,
    width: 100,
    height: 50,
  },
  cardNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  cardHolder: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
    textTransform: 'uppercase',
  },
  expiryDate: {
    fontSize: 16,
    color: '#fff',
  },
});

export default CreditCard;
