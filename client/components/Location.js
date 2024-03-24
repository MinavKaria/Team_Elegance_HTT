import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location'; // Import Expo Location
import Navbar from './Navbar';

const locations = [
  { latitude: 21.1505555, longitude: 72.831373 },
  { latitude: 21.166096, longitude: 72.837839 },
  { latitude: 21.1618574, longitude: 72.8209844 },
  { latitude: 21.1862198, longitude: 72.8103599 },
  { latitude: 21.1873286, longitude: 72.7787588 },
  { latitude: 21.16195, longitude: 72.8206729 },
  { latitude: 21.1672615, longitude: 72.8116913 },
  { latitude: 21.1435839, longitude: 72.7854542 },
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
