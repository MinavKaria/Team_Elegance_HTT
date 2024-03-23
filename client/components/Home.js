import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Navbar from './Navbar'


export default function Home({navigation}) {
  return (
    <View style={{ flex: 1 }}>
        <View style={{ flex: 1}}></View>
        <View>
            <Image source={require('../assets/images/Rectangle 1wave.png')} style={{width:"100%"}}/>
            <View style={{
        position: 'absolute',
        top: "35%",
        left: 20,
       
        justifyContent: 'center',
        alignItems: 'center',
        
      }}>
                <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>BUDGET YOUR BITES</Text>
                <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', position: 'relative' }}>INSTANTLY</Text>
            </View>
            <Image source={require('../assets/images/Vector 1ovall.png')} style={{position: 'absolute', top:"43%", left:"15%"}}/>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 20, position:"absolute", bottom: 15, left: 10 }}>
      <View style={{ width: 150 }}>
        <TouchableOpacity
          style={{ 
            backgroundColor: '#0F1730', 
            height: 40, 
            borderRadius: 5, 
            justifyContent: 'center', 
            alignItems: 'center', 
            marginBottom: 10, 
            opacity: 0.8, 
            width: '100%' 
          }}
          onPress={() => {
            console.log('Login');
            navigation.navigate('Login');
          }}
        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View style={{ width: 150 }}>
        <TouchableOpacity
          style={{ 
            backgroundColor: '#0F1730', 
            height: 40, 
            borderRadius: 5, 
            justifyContent: 'center', 
            alignItems: 'center', 
            marginBottom: 10, 
            opacity: 0.8, 
            width: '100%' 
          }}
          onPress={() =>navigation.navigate('Budget')}
        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });