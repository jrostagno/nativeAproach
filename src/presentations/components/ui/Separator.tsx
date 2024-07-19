/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {StyleProp, View, ViewProps} from 'react-native';
import {ThemeContext} from '../../context/ThemeContext';

interface Props {
  style?: StyleProp<ViewProps>;
}

export const Separator = ({style}: Props) => {
  const {colors} = useContext(ThemeContext);
  return (
    <View
      style={[
        {
          backgroundColor: colors.cardBackground,
        },
        style,
      ]}>
      <View
        style={[
          {
            alignSelf: 'center',
            height: 1,
            marginVertical: 8,
            width: '80%',
            backgroundColor: colors.text,
            opacity: 0.1,
          },
          style,
        ]}
      />
    </View>
  );
};
