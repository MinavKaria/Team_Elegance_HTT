import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard,Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import qs from "qs";

function Login({ navigation }) {
  const [number, setNumber] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [message, setMessage] = useState("");
  const [NumberEntered, setNumberEntered] = useState(false);

  const sendOTP = () => {
    setNumberEntered(true);
    const formData = qs.stringify({ number });
    axios
      .post("https://team-elegance-htt.vercel.app/sendOTP", formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
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
    const formData = qs.stringify({ number, otpCode });
    axios
      .post("https://team-elegance-htt.vercel.app/verifyOTP", formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then(async (response) => {
        console.log(response.data);
        await setMessage(response.data);
        await console.log(message);
        if (message === "OTP sent successfully") {
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
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={{width: "70%", height: "35%", position: "absolute",top:0, display: "flex", flexDirection:"column", alignContent:"center",  alignItems:"center", borderColor:"black"}}>
      <Image  source={require('../assets/images/otp.png')} style={{width:"97%" , height:"97%", borderRadius: 5}}/>
    </View>
      

      <View style={styles.inner}>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          onChangeText={(text) => setNumber(text)}
          value={number}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            sendOTP();
            console.log("Send OTP");
           
          }}
        >
          <Text style={styles.buttonText}>SEND OTP</Text>
        </TouchableOpacity>
        {NumberEntered && (
          <>
            <TextInput
              style={styles.input}
              placeholder="Enter OTP"
              onChangeText={(text) => setOtpCode(text)}
              value={otpCode}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => verifyOTP()}
            >
              <Text style={styles.buttonText}>VERIFY OTP</Text>
            </TouchableOpacity>
            <Text>{message}</Text>
          </>
        )}
      </View>
    </KeyboardAvoidingView>
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
  inner: {
    width: "100%",
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "black",
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    opacity: 0.8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Login;
