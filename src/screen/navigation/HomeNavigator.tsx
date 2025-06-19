import {createStackNavigator} from "@react-navigation/stack";
import HomeScreen from "../HomeScreen";
import Colors from "../../constants/Colors";
import {Image, View} from "react-native";
import Ionicons from '@react-native-vector-icons/ionicons';
import React from "react";


export type HomeStackParamList = {
    HomeMain: undefined;
    PrepareScreen: undefined;
    RequestScreen: undefined;
};

const HomeStack = createStackNavigator<HomeStackParamList>();

const HomeStackNavigator = () => (
    <HomeStack.Navigator initialRouteName="HomeMain">
        <HomeStack.Screen name="HomeMain" component={HomeScreen} options={{
            headerShown: true,
            headerStyle: {
                backgroundColor: Colors.secondaryColor, // Full header background
                elevation: 0, // Remove shadow on Android
                shadowOpacity: 0, // Remove shadow on iOS
                borderBottomWidth: 0, // Remove any border
            },
            headerTitle: () => (
                <View style={{
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <Image source={require('../../assets/images/icon-white-nna.png')}
                           style={{width: 100, height: 22, resizeMode: 'contain'}}/>
                    <Ionicons name="notifications-outline" size={24} color="#fff" style={{marginRight: 15}}/>
                </View>
            ),
        }}/>
    </HomeStack.Navigator>
);

export default HomeStackNavigator;
