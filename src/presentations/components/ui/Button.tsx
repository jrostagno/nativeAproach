import React, {useContext} from 'react';
import {Pressable, StyleProp, Text, ViewStyle} from 'react-native';
import {globalStyles} from '../../../config/theme/theme';
import {ThemeContext} from '../../context/ThemeContext';

interface Props {
  text: string;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}

const Button = ({text, style, onPress}: Props) => {
  const {colors} = useContext(ThemeContext);
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        globalStyles.btnPrimary,
        {
          opacity: pressed ? 0.8 : 1,
          backgroundColor: colors.primary,
        },
        style,
      ]}>
      <Text
        style={[globalStyles.btnPrimaryText, {color: colors.buttonTextColor}]}>
        {text}
      </Text>
    </Pressable>
  );
};

export default Button;
