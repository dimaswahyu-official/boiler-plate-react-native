// src/navigators/AuthNavigator.tsx
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../Login";

export type AuthStackParamList = {
    Login: undefined;
    ForgotPassword: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthNavigator = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
        />
        {/*<AuthStack.Screen*/}
        {/*    name="ForgotPassword"*/}
        {/*    component={ForgotPasswordScreen}*/}
        {/*    options={({ navigation }) => ({*/}
        {/*        headerTitle: '',*/}
        {/*        headerShown: true, // Show header with back button*/}
        {/*        headerBackTitleVisible: false, // Hide default back text*/}
        {/*        headerTintColor: '#000', // Back button color*/}
        {/*        headerLeft: () => (*/}
        {/*            <TouchableOpacity*/}
        {/*                onPress={() => navigation.navigate('Login')}*/}
        {/*                style={globalStyles('light').headerLeft}*/}
        {/*            >*/}
        {/*                <Ionicons name="arrow-back" size={24} color="#000" />*/}
        {/*            </TouchableOpacity>*/}
        {/*        ),*/}
        {/*    })}*/}
        {/*/>*/}
    </AuthStack.Navigator>
);

export default AuthNavigator;
