import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import GlobalDialog from './components/GlobalDialog';
import LoadingDialog from './components/LoadingDialog';
import AppNavigator from './AppNavigator';


enableScreens();

const Main = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={DefaultTheme}>
        <GlobalDialog />
        <LoadingDialog />
        <AppNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default function App() {
  return (
    <Main />
);
}

