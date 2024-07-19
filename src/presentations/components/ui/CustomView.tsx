import React, {ReactNode, useContext} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {globalStyles} from '../../../config/theme/theme';
import {ThemeContext} from '../../context/ThemeContext';

interface Props {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
}

const CustomView = ({style, children}: Props) => {
  const {colors} = useContext(ThemeContext);

  return (
    <View
      style={[
        globalStyles.mainContainer,
        style,
        {backgroundColor: colors.background},
      ]}>
      {children}
    </View>
  );
};

export default CustomView;
