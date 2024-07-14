/* eslint-disable react-native/no-inline-styles */
import React, {PropsWithChildren} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {colors} from '../../../config/theme/theme';

interface Props extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
}

const Card = ({style, children}: Props) => {
  return (
    <View
      style={[
        {
          backgroundColor: colors.cardBackground,
          borderRadius: 10,
          padding: 10,
        },
        style,
      ]}>
      {children}
    </View>
  );
};

export default Card;
