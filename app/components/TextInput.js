import React, { memo } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput as Input } from 'react-native-paper';
import { theme } from '../core/theme';

const TextInput = ({ errorText, ...props }) => (
  <View style={styles.container}>
    <Input
      style={styles.input}
    theme={{ colors: { primary: "#0d47a1"}}}
      underlineColor="#0d47a1"
      mode="outlined"
      outlineColor="#0d47a1"
      {...props}

    />
    {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 5,
    
  },
  input: {
     marginHorizontal: 0.5
  },
  error: {
    fontSize: 14,
    color: theme.colors.error,
    paddingHorizontal: 2,
    // paddingTop: 2,
  },
});

export default memo(TextInput);
