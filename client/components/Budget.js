import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, Image} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import RNPickerSelect from 'react-native-picker-select';
import Navbar from './Navbar'

const ZorkoPage = () => {

    const [selectedValue, setSelectedValue] = useState(null);
    const [buton, setButon] = useState(false);

    const placeholder = {
      label: 'Select an option...',
      value: null,
    };
  
    const options = [
      { label: '500', value: '500' },
      { label: '1000', value: '1000' },
      { label: '1500', value: '1500' },
      { label: '2000', value: '2000'},
      { label: '>2000', value:'>2000'}

    ];
    
  return (
    <View style={styles.container}>
      <View style={styles.idealworld}>
      <Text style={styles.title}>Control your <Text style={{color:'#FF8E5E'}}>Budget</Text> stress-free!</Text>
      <RNPickerSelect
        placeholder={placeholder}
        items={options}
        onValueChange={(value) => setSelectedValue(value)}
        value={selectedValue}
      />
      {selectedValue && <Text style={{padding:12}}>Selected: {selectedValue}</Text>}
      {console.log(selectedValue)}

      <View>
      <Button 
      
  title="Submit"
  onPress={() => {console.log("Button clicked")}} 
/> 
    </View>
      </View>
      
    <Navbar style={{padding:'1992px', height:'10vh'}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'start',
    padding: 12,
    position: "absolute",
    height: "100%"
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    position: "relative",
    top: 0
  },
  Navbar:{
    marginTop:'200px'
  },
  // idealworld:{
  //   position: "absolute",
  //   top: 2,
  //   minWidth: "100%"
    
  // }
});

export default ZorkoPage;