import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, TextInput, Switch } from 'react-native';
import Navbar from './Navbar';

const ZorkoPage = ({ navigation }) => {
  const [budget, setBudget] = useState('');
  const [partyFood, setPartyFood] = useState(false); // State to track party food preference

  const handleBudgetChange = (text) => {
    // Limiting input to accept only numeric values
    if (/^\d*$/.test(text)) {
      setBudget(text);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
      Control your 
      <Text style={{ color: 'black' }}> Budget</Text> stress-free!</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your budget"
        onChangeText={handleBudgetChange}
        value={budget}
        keyboardType="numeric"
        maxLength={5} // Limiting input to 5 characters
      />
      {budget && <Text style={{ padding: 12 }}>Selected: {budget}</Text>}
      <View style={styles.partyFoodContainer}>
        <Text style={{ marginRight: 10 }}>Need food for the party?</Text>
        <Switch
          value={partyFood}
          onValueChange={(value) => setPartyFood(value)}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={partyFood ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
        />
       
      </View>
      <View style={{alignSelf:'center'}}>
      {partyFood && (
          <>
            <View style={{width:"100%", display:'flex',gap:'10px'}}>
              <Text>Party food selected</Text>
              <TextInput
              style={styles.input}
              placeholder="Enter your budget"
              onChangeText={handleBudgetChange}
              value={budget}
              keyboardType="numeric"
              maxLength={5} 
              ></TextInput>

              <Text>Number of people</Text>
              <TextInput
              style={styles.input}
              placeholder="Enter your budget"
              onChangeText={handleBudgetChange}
              value={budget}
              keyboardType="numeric"
              maxLength={5} 
              ></TextInput>
            </View>
            
          </>
        )}
      </View>
      <View style={{
      backgroundColor:'black',color:"white"}} >
      
        <Button
          title="Submit"
          onPress={() => {
            navigation.navigate('Maps');
          }}
          disabled={!budget} 
          color="black"
        />
      </View>
      <Navbar/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#FFF7FC', // Orange color theme
    height:'100%',
    paddingTop:'10%'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 24,

  },
  input: {
    borderWidth: 1,
    borderColor: '#fff', // White border color
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '100%',
    backgroundColor: '#fff', // White background color
  },
  partyFoodContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
});

export default ZorkoPage;
