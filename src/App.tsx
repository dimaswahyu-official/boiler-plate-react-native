import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import GlobalDialog from './components/GlobalDialog';
import LoadingDialog from './components/LoadingDialog';
import AppNavigator from './AppNavigator';
import { StatusBar, StyleSheet, View } from 'react-native';
import Colors from './constants/Colors.ts';  // Your color constants file

// Enable screens for better performance with navigation
enableScreens();

const Main = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeAreaBackground}>
        <NavigationContainer theme={DefaultTheme}>
          <GlobalDialog />
          <LoadingDialog />
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default function App() {
  return <Main />;
}

const styles = StyleSheet.create({
  safeAreaBackground: {
    flex: 1,  // Ensures it takes up the entire screen space
    backgroundColor: Colors.secondaryColor,  // Set the background color to your custom color
    paddingTop: 0, // Ensures that no extra padding is added on top, letting the status bar stay visible
  },
});
