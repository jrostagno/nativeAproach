/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {colors, globalStyles} from '../../../config/theme/theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Text} from 'react-native';

interface Props {
  text: string;
  backgroundColor?: string;
  safe?: boolean;
}

const Subtitle = ({text, backgroundColor = colors.background, safe}: Props) => {
  const {top} = useSafeAreaInsets();
  return (
    <Text
      style={{
        ...globalStyles.subTitle,
        marginTop: safe ? top : 0,
        backgroundColor: backgroundColor,
        marginBottom: 10,
      }}>
      {text}
    </Text>
  );
};

export default Subtitle;
