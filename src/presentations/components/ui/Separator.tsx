/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleProp, View, ViewProps} from 'react-native';
import {colors} from '../../../config/theme/theme';

interface Props {
  style?: StyleProp<ViewProps>;
}

export const Separator = ({style}: Props) => {
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
