// App.js

import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import BackgroundTimer from 'react-native-background-timer';

import Geolocation from 'react-native-geolocation-service';
import { BASE_URL } from '../config/index';

export default class PushLocation extends Component {
     constructor(props){
        super(props);
        this.state = {
            location: null,
            registrationNumber: props.route.params.registration
  };
    };
 

  counter = BackgroundTimer.runBackgroundTimer(() => {
    console.log('Uploading coordinates');
    
    Geolocation.getCurrentPosition(
      (position) => {
        const location = JSON.stringify(position);
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        this.setState({ location });

        //  Api call here
        async function post_to_api() {
          const temp = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          
          return await fetch(`${BASE_URL}/push_location`, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              time_stamp: position.timestamp,
              driver_id: this.state.registrationNumber,
            }),
          });
        }
        const response = post_to_api();
        console.log(response);
      },

      (error) => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, 3000);

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.counter}>
          <Text style={styles.welcome}>Start drive</Text>
          <Text>Location: {this.state.location}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
