/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';

import CustomView from '../../components/ui/CustomView';
import {globalStyles} from '../../../config/theme/theme';
import Title from '../../components/ui/Title';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import Card from '../../components/ui/Card';
import {KeyboardAvoidingView, Platform, Text, View} from 'react-native';

const InputsScreen = () => {
  const [form, setForm] = useState({
    email: '',
    name: '',
    phone: '',
  });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <CustomView style={globalStyles.globalMargin}>
          <Title text="Text imputs" safe />
          <Card>
            <TextInput
              style={globalStyles.input}
              placeholder="Name"
              autoCapitalize={'words'}
              autoCorrect={false}
              onChangeText={value => setForm({...form, name: value})}
            />

            <TextInput
              style={globalStyles.input}
              placeholder="email"
              autoCapitalize={'none'}
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={value => setForm({...form, email: value})}
            />

            <TextInput
              style={globalStyles.input}
              placeholder="phone"
              autoCorrect={false}
              keyboardType="phone-pad"
              onChangeText={value => setForm({...form, phone: value})}
            />
          </Card>

          <View style={{marginTop: 20}} />

          <Card>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
          </Card>

          <Card>
            <TextInput
              style={globalStyles.input}
              placeholder="phone"
              autoCorrect={false}
              keyboardType="phone-pad"
              onChangeText={value => setForm({...form, phone: value})}
            />
          </Card>
        </CustomView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default InputsScreen;
