import React, { memo } from 'react';
import { StyleSheet, Text } from 'react-native';
import { theme } from '../core/theme';
import {COLORS} from '../constants/theme'

const Header = ({ children }) => <Text style={styles.header}>{children}</Text>;

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    color: COLORS.darkblue,
    fontWeight: 'bold',
    paddingVertical: 14,
  },
});

export default memo(Header);
