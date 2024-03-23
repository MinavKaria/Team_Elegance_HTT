import React, { useState } from "react";
import { Keyboard, KeyboardAvoidingView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Navbar from './Navbar';
import AsyncStorage from "@react-native-async-storage/async-storage";

const ZorkoPage = ({ navigation }) => {
  const [budget, setBudget] = useState('');
  const [partyFood, setPartyFood] = useState(false); // State to track party food preference
  const [partyPeople, setPartyPeople] = useState('1'); 
  const [partyFoodBudget, setPartyFoodBudget] = useState('');

  const handleBudgetChange = (text) => {
    // Limiting input to accept only numeric values
    // if (/^\d*$/.test(text)) {
    //   setBudget(text);
    // }
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
            value={budget}
            keyboardType="numeric"
            maxLength={5}
            onChangeText={(text) => {
              setBudget(text);

            }}
            

          />
          {/* {budget && <Text style={{ padding: 12,color:'white' }}>Selected budget: {budget}</Text>} */}
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
            AsyncStorage.setItem('budget', budget);
            AsyncStorage.setItem('partyFood', partyFood.toString());
            AsyncStorage.setItem('partyPeople', partyPeople);
            AsyncStorage.setItem('partyFoodBudget', partyFoodBudget);
            navigation.navigate('LocationComponent'); 
          }}
        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>SUBMIT</Text>
        </TouchableOpacity>
          
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
    // justifyContent: 'center',
     alignItems: 'center',
    padding: 12,
    backgroundColor: 'white', // Black background color
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: 'black', // White text color
  },
  input: {
    borderWidth: 1,
    borderColor: 'black', // Orange border color
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '100%',
    backgroundColor: '#FFFFFF', // White background color
    color: '#000000', // Black text color
    borderWidth: 1.5
  },
  partyFoodContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '70%',
    marginTop: 20,
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    
    justifyItems: 'center'
  },
});

export default ZorkoPage;
