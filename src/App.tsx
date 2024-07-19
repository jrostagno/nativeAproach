import 'react-native-gesture-handler';
import React, {PropsWithChildren, useContext} from 'react';

import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {StackNavigation} from './presentations/navigator/StackNavigator';
import {
  ThemeContext,
  ThemeProvider,
} from './presentations/context/ThemeContext';

const AppNavitation = ({children}: PropsWithChildren) => {
  const {currentTheme} = useContext(ThemeContext);
  return (
    <NavigationContainer
      theme={currentTheme === 'dark' ? DarkTheme : DefaultTheme}>
      {children}
    </NavigationContainer>
  );
};

const AppTheme = ({children}: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <AppNavitation>{children}</AppNavitation>
    </ThemeProvider>
  );
};

export const App = () => {
  return (
    <AppTheme>
      <StackNavigation />
    </AppTheme>
  );
};
