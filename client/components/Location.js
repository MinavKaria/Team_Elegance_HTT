import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location'; // Import Expo Location
import Navbar from './Navbar';

const locations = [
  { latitude: 21.1663, longitude: 72.8141 }, // Example destination
  // Define additional close-by locations here
  { latitude: 21.1700, longitude: 72.8150 },
  { latitude: 21.1630, longitude: 72.8100 },
  { latitude: 21.1680, longitude: 72.8120 },
  { latitude: 21.1650, longitude: 72.8130 },
  { latitude: 21.1670, longitude: 72.8140 },
  { latitude: 21.1690, longitude: 72.8150 },
  { latitude: 21.1640, longitude: 72.8110 },
  { latitude: 21.1660, longitude: 72.8120 },
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closestLocations: [], // Closest locations to display
      myLocation: null, // Initialize myLocation as null
    };
  }

  componentDidMount() {
    this.getLocation(); // Call getLocation when the component mounts
  }

  getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync(); // Request location permission
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({}); // Get current location
    this.setState({ myLocation: location.coords }, () => {
      this.calculateClosestLocations();
    }); // Update myLocation state and calculate closest locations
  };

  calculateDistance = (location1, location2) => {
    const R = 6371; // Radius of the Earth in kilometers
    const lat1 = location1.latitude;
    const lon1 = location1.longitude;
    const lat2 = location2.latitude;
    const lon2 = location2.longitude;

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

    return distance;
  };

  calculateClosestLocations = () => {
    const { myLocation } = this.state;
    const distances = locations.map(location => ({
      ...location,
      distance: this.calculateDistance(myLocation, location),
    }));

    const closestLocations = distances
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 3);

    this.setState({ closestLocations });
  };

  render() {
    const { closestLocations, myLocation } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          {myLocation && (
            <MapView style={styles.map} initialRegion={{ ...myLocation, latitudeDelta: 0.5, longitudeDelta: 0.5 }}>
              {closestLocations.map((location, index) => (
                <Marker key={index} coordinate={location} title={`Location ${index + 1}`} />
              ))}
              <Marker coordinate={myLocation} title="My Location" />
            </MapView>
          )}
          <Button color="#bdc3c7" onPress={this.getLocation} title="Update Location" />
        </View>
        <Navbar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  map: {
    flex: 1,
  },
});
