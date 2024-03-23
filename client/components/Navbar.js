import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import SvgUri from 'react-native-svg';

const TransparentButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const App = ({navigation}) => {
  const handleButtonPress = (buttonIndex) => {
    // Handle button press here
    console.log(`Button ${buttonIndex} pressed`);
  };

  return (
    <View style={styles.container}>
      <View style={{alignItems:"center"}}>
        <Image source={require('../assets/home_icon.png')}  style={{ width: 30, height: 30 }} />
        <Text >Home</Text>
      </View>
      {/* <TransparentButton title="Button 1" onPress={() => handleButtonPress(1)} /> */}
      <View style={{alignItems:"center"}}>
        <Image source={require('../assets/search.png')}  style={{ width: 30, height: 30 }} />
        <Text >Search</Text>
      </View>
      <View style={{alignItems:"center"}}>
        <Image source={require('../assets/budget.png')}  style={{ width: 30, height: 30 }} onp/>
        <Text >Buy Budgetwise</Text>
      </View>
      <View style={{alignItems:"center"}} onPress={()=>{
            navigation.navigate('Profile');
      }}>
        <Image source={require('../assets/profile.png')}  style={{ width:30, height: 30 }} />
        <Text >Profile</Text>
      </View>
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
    width:'100%',
    paddingBottom:30,
    paddingTop:10,
    backgroundColor: 'white',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 1)',
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
