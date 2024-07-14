/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';

import CustomView from '../../components/ui/CustomView';
import Card from '../../components/ui/Card';

import {CustomSwitch} from '../../components/ui/CustomSwitch';
import {Separator} from '../../components/ui/Separator';

const SwitchetsScreen = () => {
  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [state, setState] = useState({
    isActive: true,
    isHangry: false,
    isHappy: false,
  });

  return (
    <CustomView style={{marginTop: 100, paddingHorizontal: 20}}>
      <Card>
        <CustomSwitch
          onChange={value => setState({...state, isActive: value})}
          text={'Active ?'}
          isOn={state.isActive}
        />
        <Separator />

        <CustomSwitch
          onChange={value => setState({...state, isHangry: value})}
          text={'hangry ?'}
          isOn={state.isHangry}
        />
        <Separator />
        <CustomSwitch
          onChange={value => setState({...state, isHappy: value})}
          text={'happy ?'}
          isOn={state.isHappy}
        />
      </Card>
    </CustomView>
  );
};

export default SwitchetsScreen;
