import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import { theme } from '../core/theme';
import {COLORS} from '../constants/theme'
const WhiteButton = ({ mode, style, children, ...props }) => (
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
    backgroundColor: '#FFF', padding: 5, width:150, borderRadius: 30, marginHorizontal: 2, borderWidth: 1, borderColor: '#0d47a1'
  },
  text: {
textAlign: 'center', color: '#0d47a1', fontSize: 15
  },
});

export default memo(WhiteButton);
