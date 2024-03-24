import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const AgeAndNameInput = ({navigation}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleAgeChange = (text) => {
    setAge(text);
  };

  const handleSubmit = () => {
    navigation.navigate('Budget');
    AsyncStorage.setItem('name', name);
    AsyncStorage.setItem('age', age);
    // You can perform further actions with the submitted data here
  };

  return (
    <View style={styles.container}>
      
      <TextInput
        style={styles.input}
        onChangeText={handleNameChange}
        value={name}
        placeholder="Enter your name"
      />
      
      <TextInput
        style={styles.input}
        onChangeText={handleAgeChange}
        value={age}
        keyboardType="numeric"
        placeholder="Enter your age"
      />
      
      <View style={{ width: "100%" }}>
        <TouchableOpacity
          style={{ 
            backgroundColor: 'black', 
            height: 40, 
            borderRadius: 5, 
            justifyContent: 'center', 
            alignItems: 'center', 
            marginBottom: 10, 
            opacity: 0.8, 
            width: '100%', 
            

          }}
          onPress={() => {
            console.log('Login');
            navigation.navigate('Budget');
          }}
        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '100%',
    fontSize: 20,
    borderColor:"black",
    backgroundColor: '#f9f9f9', 
  },
});

export default AgeAndNameInput;
