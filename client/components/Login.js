import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

function Login() {
  const [number, setNumber] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [message, setMessage] = useState('');

  const sendOTP = () => {
    fetch('http://localhost:3000/sendOTP', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ number: number }),
    })
    .then(response => response.text())
    .then(data => {
      console.log(data);
      setMessage(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  const verifyOTP = () => {
    fetch('http://localhost:3000/verifyOTP', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ number: number, otpCode: otpCode }),
    })
    .then(response => response.text())
    .then(data => {
      console.log(data);
      setMessage(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <View style={styles.container}>
      <Text>Login Page</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        onChangeText={text => setNumber(text)}
        value={number}
      />
      <Button title="Send OTP" onPress={()=>{
        console.log("sendOTP");
        sendOTP();
      }} />
      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        onChangeText={text => setOtpCode(text)}
        value={otpCode}
      />
      <Button title="Verify OTP" onPress={verifyOTP} />
      <Text>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
});

export default Login;
