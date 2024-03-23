import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, Text, View } from 'react-native';
import Budget from './components/Budget';
import Landing from './components/Landing';
import Login from './components/Login';
import Maps from './components/Maps';
import VerifyOTP from './components/VerifyOTP';
import QuestionPage1 from './components/QuestionPage1';
import { AppStateContext } from './components/Provider';
import Home from './components/Home';
const Stack = createStackNavigator();
export default function App() {
  return (

    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Zorko"  options={{
            headerTitle: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontSize: 30, fontWeight: 'bold', paddingLeft: 10 }}>Zorko</Text>
              </View>
              
              ),}} component={Landing} />
         <Stack.Screen 
          name="Budget" 
          component={Budget} 
          options={{
            headerTitle: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
               
              <Text style={{ fontSize: 30, fontWeight: 'bold', paddingLeft: 10 }}>Zorko</Text>
              </View>
              
              ),}} 
        />
         <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ title: 'Login' }} 
        />
        <Stack.Screen
          name="VerifyOTP"
          component={VerifyOTP}
          options={{ title: 'Verify OTP' }}
        />
        <Stack.Screen
          name="QuestionPage1"
          component={QuestionPage1}
          options={{ title: 'Question Page 1' }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Maps"
          component={Maps}
          options={{ title: 'Maps' }}
        />
     
    </Stack.Navigator>
  </NavigationContainer>
  );
}

