import React, { useEffect } from 'react';
import { PermissionsAndroid, Alert } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const LocationExample = () => {
  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'App needs access to your location.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Location permission granted');
        // Access the user's location
        Geolocation.getCurrentPosition(
          position => {
            console.log('Current position:', position);
          },
          error => {
            console.error('Error getting location:', error);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
        );
      } else {
        console.log('Location permission denied');
        Alert.alert('Location Permission', 'Please grant location permission to use this feature.');
      }
    } catch (err) {
      console.error('Error requesting location permission:', err);
    }
  };

  return (
    // Your component UI here
    // For demonstration purposes, this component doesn't render anything
    null
  );
};

export default LocationExample;
