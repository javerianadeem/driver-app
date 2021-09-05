import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import { theme } from '../core/theme';
import {COLORS} from '../constants/theme'
const Button = ({ mode, style, children, ...props }) => (
  <PaperButton
    style={[
      styles.button,
      mode === 'outlined' && { backgroundColor: '#483d8b' },
      style,
    ]}
    labelStyle={styles.text}
    mode={mode}
    {...props}
  >
    {children}
  </PaperButton>
);

const styles = StyleSheet.create({
  button: {
   backgroundColor: '#0d47a1', padding: 5, width:150, borderRadius: 30, marginHorizontal: 2 
  },
  text: {
    textAlign: 'center', color: '#FFF', fontSize: 15
  },
});

export default memo(Button);
