/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';

import Title from '../../components/ui/Title';
import CustomView from '../../components/ui/CustomView';
import Button from '../../components/ui/Button';
import {Text, View} from 'react-native';
import {ThemeContext} from '../../context/ThemeContext';

export const ChangeThemeScreen = () => {
  const {setTheme, currentTheme, colors} = useContext(ThemeContext);

  return (
    <CustomView>
      <Title text={`Theme ${currentTheme}`} safe />

      <Button text="dark" onPress={() => setTheme('dark')} />

      <View style={{height: 10}} />

      <Button text="light" onPress={() => setTheme('light')} />

      <Text style={{color: colors.text}}>
        {JSON.stringify(colors, null, 2)}
      </Text>
    </CustomView>
  );
};
