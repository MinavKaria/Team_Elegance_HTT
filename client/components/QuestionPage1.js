import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleNameChange}
        value={name}
        placeholder="Enter your name"
      />
      <Text style={styles.label}>Age:</Text>
      <TextInput
        style={styles.input}
        onChangeText={handleAgeChange}
        value={age}
        keyboardType="numeric"
        placeholder="Enter your age"
      />
      <View>
      <Button
        title="Submit"
        onPress={handleSubmit}
        color="#841584"
        style={{ width: '100%'}}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
    backgroundColor: '#f9f9f9', 
  },
});

export default AgeAndNameInput;
