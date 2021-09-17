// App.js

import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Header from '../components/Header'
import Button from '../components/Button';
import { images, icons, COLORS, FONTS, SIZES } from '../constants';
import BackgroundTimer from 'react-native-background-timer';

import Geolocation from 'react-native-geolocation-service';
import { BASE_URL } from '../config/index';

export default class PushLocation extends Component {
     constructor(props){
        super(props);
        this.state = {
            location: null,
            driver_id: null
  };
    };
  componentDidMount() {
        this.setState({ driver_id: this.props.route.params.registration });
  }

  counter = BackgroundTimer.runBackgroundTimer(() => {  
    Geolocation.getCurrentPosition(
      (position) => {
        const location = JSON.stringify(position);
        position.id = this.state.driver_id
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
              driver_id: position.id,
            }),
          });
          
        }
        const response = post_to_api();
        console.log("Successfully posted")
      },

      (error) => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, 10000);

  render() {
    return (
      <View style={styles.container}>
      
        <View style={styles.card}>
        <View style={styles.cardInfo}>
          <Text style={styles.cardDetails}>Location: {this.state.location}</Text>
          </View>
          </View>
          <TouchableOpacity>

             <Button style={styles.button}  onPress={this.counter}>Start Drive</Button> 
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
    padding: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
   card: {
    height: 100,
    marginVertical: 5,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    // marginBottom: 105
  },
    cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#0d47a1',
    borderWidth: 1,
  borderRadius: 8,
    backgroundColor: '#fff',
    
  },
  cardTitle: {
    fontWeight: 'bold',
    color: '#0d47a1',
     textDecorationLine: 'underline'
  },
  cardDetails: {
    fontSize: 12,
    // color: '#444',
    
  },
});
