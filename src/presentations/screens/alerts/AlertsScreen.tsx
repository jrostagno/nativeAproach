/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import CustomView from '../../components/ui/CustomView';
import Title from '../../components/ui/Title';
import {globalStyles} from '../../../config/theme/theme';
import Button from '../../components/ui/Button';
import {Alert, View} from 'react-native';

const AlertsScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const showPrompt = () => {
    Alert.prompt(
      'Email ?',
      'iofhsioufhosf soifejoseinf',
      (value: string) => console.log(value),
      'secure-text',
      'defecto',
      'number-pad',
    );
  };

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title text="Alerts 2 buttons" safe />
      <Button text="Button 2" onPress={createTwoButtonAlert} />
      <View style={{height: 10}} />

      <Button text="Button 3 buttons" onPress={createThreeButtonAlert} />
      <View style={{height: 10}} />

      <Button text="prompt - Input  " onPress={showPrompt} />
      <View style={{height: 10}} />
    </CustomView>
  );
};

export default AlertsScreen;
