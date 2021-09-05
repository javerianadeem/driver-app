import React, { memo } from 'react';
import { TouchableOpacity, Image, StyleSheet, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, SIZES } from '../constants';

const LogoutButton = ({ logout }) => (
  <TouchableOpacity onPress={logout} style={styles.container}>
  <View style={{ backgroundColor: '#FFF', padding: 5, width:45, borderRadius: 30, marginHorizontal: 2, borderWidth: 1, borderColor: '#0d47a1'}}>
     <MaterialCommunityIcons
              name="logout"
              size={35}
              color={COLORS.darkblue}
            />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 5 + getStatusBarHeight(),
    right: 10,
  },
  image: {
    width: 24,
    height: 24,
  },
});

export default memo(LogoutButton);
