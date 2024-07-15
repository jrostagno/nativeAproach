/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/home/HomeScreen';

import Animation101Screen from '../screens/animations/Animation101Screen';
import Animation102Screen from '../screens/animations/Animation102Screen';
import SwitchetsScreen from '../screens/switchets/SwitchetsScreen';
import AlertsScreen from '../screens/alerts/AlertsScreen';
import InputsScreen from '../screens/inputs/InputsScreen';
import PullToRefresh from '../screens/pullToRefresh/PullToRefresh';
import CustonSectionListScreen from '../components/ui/CustonSectionListScreen';
import ModalScreen from '../screens/modal/ModalScreen';
import InfinityScrollScreen from '../screens/infinitScroll/InfinityScrollScreen';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
      <Stack.Screen name="SwitchScreen" component={SwitchetsScreen} />
      <Stack.Screen name="AlertScreen" component={AlertsScreen} />
      <Stack.Screen name="TextInputScreen" component={InputsScreen} />
      <Stack.Screen name="PullToRefreshScreen" component={PullToRefresh} />
      <Stack.Screen
        name="CustomSectionListScreen"
        component={CustonSectionListScreen}
      />
      <Stack.Screen name="ModalScreen" component={ModalScreen} />
      <Stack.Screen
        name="InfiniteScrollScreen"
        component={InfinityScrollScreen}
      />
    </Stack.Navigator>
  );
};
