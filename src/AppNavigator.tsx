import React, { useEffect } from 'react';

import AuthNavigator from './screen/navigation/AuthNavigator';
import { StatusBar } from 'react-native';
import MainNavigator from "./screen/navigation/MainNavigator";
import {useLoadingDialogStore} from './store/useLoadingStore.ts';
import {loadAuthState, useAuthStore} from "./store/useAuthStore";

const AppNavigator = () => {
    const { isAuthenticated } = useAuthStore();
    const { showLoadingDialog, hideLoadingDialog } = useLoadingDialogStore();

    useEffect(() => {
        const initializeAuthState = async () => {

            try{
                showLoadingDialog('Loading...')
                await loadAuthState(useAuthStore.setState);
            }catch (e){
                console.error(e);
            }finally {
                hideLoadingDialog();
            }

        };

        initializeAuthState();
    }, []);
    return (
        <>
            <StatusBar
                barStyle={ 'light-content'}
                backgroundColor={'#fff'}
            />
            {isAuthenticated ? <MainNavigator /> : <AuthNavigator />}
        </>
    );
};

export default AppNavigator;
