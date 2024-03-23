import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, Image} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import RNPickerSelect from 'react-native-picker-select';


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
  onPress={() => {console.log("Button clicked+")}} 
/> 
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'start',
    padding: 12,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
});

export default ZorkoPage;