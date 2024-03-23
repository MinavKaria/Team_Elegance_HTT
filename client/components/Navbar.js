import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const TransparentButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const App = () => {
  const handleButtonPress = (buttonIndex) => {
    // Handle button press here
    console.log(`Button ${buttonIndex} pressed`);
  };

  return (
    <View style={styles.container}>
      <TransparentButton title="Button 1" onPress={() => handleButtonPress(1)} />
      <TransparentButton title="Button 2" onPress={() => handleButtonPress(2)} />
      <TransparentButton title="Button 3" onPress={() => handleButtonPress(3)} />
      <TransparentButton title="Button 4" onPress={() => handleButtonPress(4)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display:"flex",
    flexDirection:"row",
    justifyContent: 'space-around',
    borderColor: 'transparent',
    alignItems: 'center',
    backgroundColor: 'transparent',
    position:'absolute',
    bottom:0,
    gap:12
  },
  button: {
    backgroundColor: 'transparent',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 0, 
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default App;
