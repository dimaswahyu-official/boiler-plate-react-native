import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer
import { ThemeProvider } from '@react-navigation/native';
import GlobalDialog from "./components/GlobalDialog";
import LoadingDialog from "./components/LoadingDialog";
import AppNavigator from './AppNavigator';

const Main = () => {
  return (
    <NavigationContainer theme={DefaultTheme}> {/* Wrap with NavigationContainer */}
      <GlobalDialog />
      <LoadingDialog />
      <AppNavigator /> {/* Your AppNavigator goes here */}
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <Main />
  );
}
