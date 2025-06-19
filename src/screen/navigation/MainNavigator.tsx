import React from 'react';
import { getFocusedRouteNameFromRoute, NavigatorScreenParams } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "../../constants/Colors";
import HomeStackNavigator, { HomeStackParamList } from "./HomeNavigator";
import Ionicons from '@react-native-vector-icons/ionicons';

// Define the param list for MainTab
export type MainTabParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

// Define a union type for allowed icon names
type IconNames = 'home-outline' | 'grid-outline' | 'person-outline' | 'settings-outline' | 'alert-circle';

const MainNavigator = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={({ route }) => {
      // Get the name of the currently focused route in nested navigator
      const routeName = getFocusedRouteNameFromRoute(route) ?? '';

      // Determine if tab bar should be hidden
      const hideTabBar = routeName === 'RequestScreen' || routeName === 'PrepareScreen';

      return {
        tabBarIcon: ({ color, size }) => {
          // Specify the iconName as one of the valid icon names in the IconNames type
          let iconName: IconNames = 'alert-circle'; // Default value

          // Assign correct icon based on the route name
          if (route.name === 'Home') iconName = 'home-outline';
          else if (route.name === 'Dashboard') iconName = 'grid-outline';
          else if (route.name === 'Profile') iconName = 'person-outline';
          else if (route.name === 'Utilize') iconName = 'settings-outline';

          // Return the Ionicons component with the correct icon
          return <Ionicons name={iconName} size={22} color={color} />;
        },
        tabBarActiveTintColor: Colors.secondaryColor,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#fff',
          paddingTop: 4,
          height: hideTabBar ? 0 : 60, // Hide tab bar by setting height 0
          display: hideTabBar ? 'none' : 'flex', // Also hide with display:none for Android/iOS
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '700',
          marginBottom: 0,
        },
        headerShown: false,
      };
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeStackNavigator}
      options={{
        headerShown: false,
      }}
    />
  </Tab.Navigator>
);

export default MainNavigator;
