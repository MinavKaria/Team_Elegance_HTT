import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Navbar from './Navbar';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: null,
      myLocation: {
        latitude: 21.1663,
        longitude: 72.7833,
      }, // Example location
      destination: {
        latitude: 21.1663,
        longitude:72.8141,
      }, // Example destination
    };
  }

  calculateDistance = () => {
    const { myLocation, destination } = this.state;
    const R = 6371; // Radius of the Earth in kilometers
    const lat1 = myLocation.latitude;
    const lon1 = myLocation.longitude;
    const lat2 = destination.latitude;
    const lon2 = destination.longitude;

    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers

    this.setState({ distance });
  };

  render() {
    const { myLocation, destination, distance } = this.state;

    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
      
      }}>
      <View style={styles.container}>
        <MapView style={styles.map} initialRegion={{ ...myLocation, latitudeDelta: 0.5, longitudeDelta: 0.5 }}>
          <Marker coordinate={myLocation} title="My Location" />
          <Marker coordinate={destination} title="Destination" />
        </MapView>
        <Button color="#bdc3c7" onPress={this.calculateDistance} title="Calculate Distance" />
        {distance !== null && <Text>Distance: {distance.toFixed(2)} km</Text>}
        
      </View>
      <Navbar/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30
  },
  map: {
    flex: 1,
  },
});
