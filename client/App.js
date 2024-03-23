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
                style={{ width: 100, height: 50 }}
                resizeMode="contain"
              />
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Zorko</Text>
              </View>
              
              ),}} component={Home} />
     
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
