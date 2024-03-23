import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, Text, View } from 'react-native';
import Budget from './components/Budget';
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
         <Stack.Screen 
          name="Budget" 
          component={Budget} 
          options={{ title: 'Another Component' }} 
        />
     
    </Stack.Navigator>
  </NavigationContainer>
  );
}

