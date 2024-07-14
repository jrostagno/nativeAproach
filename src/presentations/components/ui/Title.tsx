/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {colors, globalStyles} from '../../../config/theme/theme';
import {Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  text: string;
  safe?: boolean;
  white?: boolean;
}

const Title = (props: Props) => {
  const {text, safe = false, white = false} = props;

  const {top} = useSafeAreaInsets();

  return (
    <Text
      style={{
        ...globalStyles.title,
        marginTop: safe ? top : 0,
        marginBottom: 10,
        color: white ? 'white' : colors.text,
      }}>
      {text}
    </Text>
  );
};

export default Title;
