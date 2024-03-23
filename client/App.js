import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Zorko"  options={{
            headerTitle: () => (
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                source={require('../client/assets/images/logo.png')}
                style={{ width: 60, height: 50 }}
                resizeMode="contain"
              />
              <Text style={{ fontSize: 30, fontWeight: 'bold', paddingLeft: 10 }}>Zorko</Text>
              </View>
              
              ),}} component={Home} />
     
    </Stack.Navigator>
  </NavigationContainer>
  );
}

