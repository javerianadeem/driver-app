import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, SafeAreaView, TouchableOpacity } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { images, COLORS, FONTS, SIZES } from '../constants';
import Button from '../components/Button'
import WhiteButton from '../components/WhiteButton'
const LandingScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={images.shuttle}
          resizeMode="contain"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </View>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ alignItems: 'center', marginHorizontal: SIZES.padding }}>
          <Text style={{ ...FONTS.h2 }}>Driver App</Text>
          <Text style={{ color: COLORS.gray, marginTop: SIZES.padding, marginBottom: SIZES.padding, textAlign: 'center', ...FONTS.body3 }}>
          Login to Proceed
            </Text>
        </View>
              <View style={{ flexDirection: 'row', margin: 20, paddingVertical: 20 }}>
              
          <TouchableOpacity
          onPress={ () => navigation.navigate('LoginScreen') }
          >
             <Button style={styles.button}>Login</Button>
          </TouchableOpacity>
        </View> 
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    // alignItems: 'center',
    padding: 18,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  }

});

export default LandingScreen;