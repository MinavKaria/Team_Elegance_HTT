import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function Home({navigation}) {
  return (
    <View style={{ flex: 1 }}>
        <View style={{ flex: 1,display:"flex",justifyContent:"center"}}>
        <Image
              source={require('../assets/images/logo.png')}
              style={{ width: 200, height: 200, position: 'absolute', top: 100, left: 100}}
               
              />
        </View>
        <View>
            <Image source={require('../assets/images/Rectangle 1wave.png')} style={{width:"100%" , objectFit: 'cover'}}/>
           
            <View style={{
        position: 'absolute',
        top: "35%",
        left: 75,
       
        justifyContent: 'center',
        alignItems: 'center',
        
      }}>
                <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>BUDGET YOUR BITES</Text>
                <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', position: 'relative' }}>INSTANTLY</Text>
            </View>
            <Image source={require('../assets/images/Vector 1ovall.png')} style={{position: 'absolute', top:"42%", left:"28%"}}/>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center',  alignContent:'center', justifyItmes:'center',alignItems:'center', position:"absolute", bottom: 15}}>
      <View style={{ width: "95%" , flexDirection: 'row', justifyContent: 'center',  alignContent:'center', justifyItmes:'center',alignItems:'center',}}>
        <TouchableOpacity
          style={{ 
            backgroundColor: 'black', 
            height: 40, 
            borderRadius: 5, 
            justifyContent: 'center', 
            alignItems: 'center', 
            alignContent:'center', justifyItmes:'center',alignItems:'center',
            marginBottom: 10, 
            opacity: 0.8, 
            width: '100%', 
            

          }}
          onPress={() => {
            console.log('Login');
            navigation.navigate('Login');
          }}
        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>LOGIN</Text>
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