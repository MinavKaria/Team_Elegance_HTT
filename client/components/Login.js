import React, { useState } from 'react';
import { Button, Keyboard, StyleSheet, Text, TextInput, View } from 'react-native';
import axios from 'axios';
import qs from 'qs'; // Import qs library

function Login() {
  const [number, setNumber] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [message, setMessage] = useState('');

  const sendOTP = () => {
    const formData = qs.stringify({ number }); // Convert data to form-urlencoded format
    axios.post('https://team-elegance-htt.vercel.app/sendOTP', formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded' // Set the correct Content-Type header
      }
    })
      .then(response => {
        console.log(response.data);
        Keyboard.dismiss();
        setMessage(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  const verifyOTP = () => {
    const formData = qs.stringify({ number, otpCode }); // Convert data to form-urlencoded format
    axios.post('https://team-elegance-htt.vercel.app/verifyOTP', formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded' // Set the correct Content-Type header
      }
    })
      .then(response => {
        console.log(response.data);
        setMessage(response.data);
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
      <Button title="Send OTP" onPress={sendOTP} />
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
