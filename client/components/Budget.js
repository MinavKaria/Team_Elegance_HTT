import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput, Switch, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Navbar from './Navbar';

const ZorkoPage = ({ navigation }) => {
  const [budget, setBudget] = useState('');
  const [partyFood, setPartyFood] = useState(false); // State to track party food preference
  const [partyPeople, setPartyPeople] = useState(''); 
  const [partyFoodBudget, setPartyFoodBudget] = useState('');

  const handleBudgetChange = (text) => {
    // Limiting input to accept only numeric values
    if (/^\d*$/.test(text)) {
      setBudget(text);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.title}>
            Control your <Text style={{ color: '#FF8E5E' }}>Budget</Text> stress-free!
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your budget"
            onChangeText={()=>{
              setBudget(budget.toString())
            }}
            value={budget.toString()}
            keyboardType="numeric"
            maxLength={5} // Limiting input to 5 characters
          />
          {budget && <Text style={{ padding: 12,color:'white' }}>Selected budget: {budget}</Text>}
          <View style={styles.partyFoodContainer}>
            <Text style={{ marginRight: 10, color: '#FF8E5E' }}>Need food for the party?</Text>
            <Switch
              value={partyFood}
              onValueChange={(value) => setPartyFood(value)}
              trackColor={{ false: "#767577", true: "#FF8E5E" }}
              thumbColor={partyFood ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
            />
          </View>
          {partyFood && (
            <>
              <View style={{width:"100%"}}>
                <Text style={{ color: '#FF8E5E' }}>Party food budget</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your budget"
                  onChangeText={(text) => {
                    setPartyFoodBudget(text)
                    setBudget((parseInt(text) / parseInt(partyPeople)).toString())
                    }}
                  value={partyFoodBudget.toString()}
                  keyboardType="numeric"
                  maxLength={5} 
                />
                <Text style={{ color: '#FF8E5E' }}>Number of people</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter number of people"
                  onChangeText={(text) => {
                    setPartyPeople(text)
                    setBudget((parseInt(setPartyFoodBudget) /parseInt(text)).toString())
                    }}
                  value={partyPeople}
                  keyboardType="numeric"
                  maxLength={5} 
                />
              </View>
            </>
          )}
          <View style={styles.buttonContainer}>
            <Button
              title="Submit"
              onPress={() => {
                navigation.navigate('Maps');
              }}
              disabled={!budget} 
              color="#FF8E5E"
            />
          </View>
          <Navbar/>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#000000', // Black background color
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#FFFFFF', // White text color
  },
  input: {
    borderWidth: 1,
    borderColor: '#FF8E5E', // Orange border color
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '100%',
    backgroundColor: '#FFFFFF', // White background color
    color: '#000000', // Black text color
  },
  partyFoodContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
});

export default ZorkoPage;
