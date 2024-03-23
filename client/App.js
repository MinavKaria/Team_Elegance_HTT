import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
      <View>
        <Text style={{ color: 'black', fontSize: 22, fontWeight:900, right: '35%', bottom:'1100%'}}>ZORKO</Text>
      </View>
      <View>
        <Text style={{color:'black', fontWeight:'bold', fontSize:40}}>Control your <Text style={{color:'#FF8E5E'}}>Budget</Text> stress-free</Text>
      </View>
    </View>
  );
}

