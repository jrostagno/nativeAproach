/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import CustomView from '../../components/ui/CustomView';
import Title from '../../components/ui/Title';
import {Modal, Platform, View} from 'react-native';
import Button from '../../components/ui/Button';

const ModalScreen = () => {
  const [isVisible, setIsvisible] = useState(false);
  return (
    <CustomView>
      <Title text="MODAL" safe />

      <Button text="open" onPress={() => setIsvisible(true)} />

      <Modal visible={isVisible} animationType="slide">
        <View style={{backgroundColor: 'rgba(0,0,0,0.1)'}}>
          <View style={{paddingHorizontal: 10}}>
            <Title text="MODAL CONTENT" safe />
          </View>
        </View>
        <View style={{flex: 1}} />

        <Button
          text="close"
          style={{
            height: Platform.OS === 'android' ? 40 : 60,
            borderRadius: 0,
          }}
          onPress={() => setIsvisible(false)}
        />
      </Modal>
    </CustomView>
  );
};

export default ModalScreen;
