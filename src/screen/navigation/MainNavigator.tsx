import React from 'react';
import {getFocusedRouteNameFromRoute, NavigatorScreenParams} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Colors from "../../constants/Colors";
import {Ionicons} from "@expo/vector-icons";
import HomeStackNavigator, {HomeStackParamList} from "./HomeNavigator";

export type MainTabParamList = {
    Home: NavigatorScreenParams<HomeStackParamList>;

};
const Tab = createBottomTabNavigator<MainTabParamList>();

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
                    let iconName: keyof typeof Ionicons.glyphMap = 'alert-circle';

                    if (route.name === 'Home') iconName = 'home-outline';
                    else if (route.name === 'Dashboard') iconName = 'grid-outline';
                    else if (route.name === 'Profile') iconName = 'person-outline';
                    else if (route.name === 'Utilize') iconName = 'settings-outline';

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
        {/*<Tab.Screen*/}
        {/*    name="Utilize"*/}
        {/*    component={VisitNavigator}*/}
        {/*    options={{headerShown: false}}*/}
        {/*/>*/}
        {/*<Tab.Screen*/}
        {/*    name="Dashboard"*/}
        {/*    component={DashboardNavigator}*/}
        {/*    options={{headerShown: false}}*/}
        {/*/>*/}
        {/*<Tab.Screen*/}
        {/*    name="Profile"*/}
        {/*    component={ProfileNavigator}*/}
        {/*    options={{headerShown: false}}*/}
        {/*/>*/}
    </Tab.Navigator>
);


export default MainNavigator;
