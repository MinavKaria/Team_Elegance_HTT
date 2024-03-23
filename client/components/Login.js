import React, { useState } from "react";
import {
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import axios from "axios";
import qs from "qs"; // Import qs library
import AsyncStorage from '@react-native-async-storage/async-storage';

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
      <Text>Login Page</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        onChangeText={(text) => setNumber(text)}
        value={number}
      />
      <Button title="Send OTP" onPress={()=>{
        sendOTP();
        navigation.navigate('QuestionPage1');
      }} />
      {NumberEntered && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Enter OTP"
            onChangeText={(text) => setOtpCode(text)}
            value={otpCode}
          />
          <Button title="Verify OTP" onPress={verifyOTP} />
          <Text>{message}</Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
