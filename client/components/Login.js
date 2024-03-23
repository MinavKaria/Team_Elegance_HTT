import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import qs from "qs"; // Import qs library
import React, { useState } from "react";

import {
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

function Login({ navigation }) {
  const [number, setNumber] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [message, setMessage] = useState("");
  const [NumberEntered, setNumberEntered] = useState(false);

  const sendOTP = () => {
    setNumberEntered(true);
    const formData = qs.stringify({ number }); // Convert data to form-urlencoded format
    axios
      .post("https://team-elegance-htt.vercel.app/sendOTP", formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded", // Set the correct Content-Type header
        },
      })
      .then(async (response) => {
        console.log(response.data);
        Keyboard.dismiss();
        setMessage(response.data);
       
      
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const verifyOTP = () => {
    const formData = qs.stringify({ number, otpCode }); // Convert data to form-urlencoded format
    axios
      .post("https://team-elegance-htt.vercel.app/verifyOTP", formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded", // Set the correct Content-Type header
        },
      })
      .then(async (response) => {
        console.log(response.data);
        await setMessage(response.data);
        await console.log(message);
        if (message == "OTP sent successfully") {
          navigation.navigate("QuestionPage1");
          await AsyncStorage.setItem("number", number);
        }
      })
      .catch((error) => {
        setMessage("OTP verification failed");
        console.error("Error:", error);
      });
  };

  return (
    <View style={styles.container}>
    <View style={{width: "100%", height: "50%", position: "absolute",top:0, display: "flex", flexDirection:"column", alignContent:"center",  alignItems:"center", borderColor:"black"}}>
      <Image  source={require('../assets/images/otp.png')} style={{width:"97%" , height:"97%", borderRadius: 5}}/>
    </View>
    <View style={{width: "100%", display: "flex"}}>
    <View style={{width:"100%", height: "50%", position: "absolute", bottom:5, display: "flex", flexDirection:"column", alignContent:"center",  alignItems:"center"}}>
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        onChangeText={(text) => setNumber(text)}
        value={number}
        keyboardType="numeric"
      />
      <TouchableOpacity title="Send OTP" onPress={()=>{
        sendOTP();
        navigation.navigate('QuestionPage1');}} 
        style={{ 
            backgroundColor: 'black', 
            height: 40, 
            borderRadius: 5, 
            justifyContent: 'center', 
            alignItems: 'center', 
            marginBottom: 10, 
            opacity: 0.8, 
            width: '80%', 
            color: 'white'
            

          }}

        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>SEND OTP</Text>
        </TouchableOpacity>
        
      {NumberEntered && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Enter OTP"
            onChangeText={(text) => setOtpCode(text)}
            value={otpCode}
          />
          <TouchableOpacity title="Send OTP" onPress={()=>{
        sendOTP();
        navigation.navigate('QuestionPage1');}} 
        style={{ 
          backgroundColor: 'black',  
            height: 40, 
            borderRadius: 5, 
            justifyContent: 'center', 
            alignItems: 'center', 
            marginBottom: 10, 
            opacity: 0.8, 
            width: '80%', 
            color: 'white'
            

          }}

        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>SEND OTP</Text>
        </TouchableOpacity>
          <Text>{message}</Text>
        </>
      )}
      </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "",
    position: "relative"
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});

export default Login;
