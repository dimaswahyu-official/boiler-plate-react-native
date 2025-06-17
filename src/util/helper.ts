import { StackActions, NavigationProp } from '@react-navigation/native';
import { MainTabParamList } from '../screen/navigation/MainNavigator';
import {useDialogStore} from "../store/useGlobalDialog";


function isValidStackRoute(route: string): route is keyof MainTabParamList {
    return ['Home'].includes(route);
}

export function navigateToStack(
    navigation: NavigationProp<any>,
    stack: string,
    screenParams: any
) {
    if (isValidStackRoute(stack)) {
        navigation.navigate(stack, { screen: screenParams });
    } else {
        console.log("Invalid stack:", stack);
        useDialogStore.getState().showDialog('error', 'Terjadi kesalahan, menu tidak ditemukan!');
    }
}
