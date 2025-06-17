import React, {useEffect, useState} from 'react';
import {
    Dimensions,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Controller, useForm} from 'react-hook-form';
import {StackNavigationProp} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import {loadAuthState, useAuthStore} from '../store/useAuthStore.ts';
import AuthServices from '../service/authService';
import Colors from '../../src/constants/Colors';
import Ionicons from '@react-native-vector-icons/ionicons';
import {AuthStackParamList} from "./navigation/AuthNavigator";
import {useLoadingDialogStore} from "../store/useLoadingStore.ts";
import CustomButton from "../../src/components/CustomButton";

const {width, height} = Dimensions.get('window');

type FormData = {
    employee_id: string; password: string;
};

type NavigationProp = StackNavigationProp<AuthStackParamList, 'Login'>;

export default function LoginScreen() {
    const navigation = useNavigation<NavigationProp>();
    const {setAuthenticated, setUser, setToken} = useAuthStore();
    const {showLoadingDialog, hideLoadingDialog} = useLoadingDialogStore();

    const {
        control, handleSubmit, formState: {errors}, setValue,
    } = useForm<FormData>();

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [employee_id, setEmployeeId] = useState('farid.rafi@limamail.net');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [deviceId, setDeviceId] = useState('');
    const [ipAddress, setIpAddress] = useState('');
    const platform = 'mobile';

    useEffect(() => {
      const initialize = async () => {
        showLoadingDialog('Loading...');
        try {
          const ip = 'network-dw-1234';
          const id = 'sdsd';
          const savedEmail = await AsyncStorage.getItem('rememberedEmail');
          const savedPassword = await AsyncStorage.getItem(
            'rememberedPassword',
          );
          const savedRemember = await AsyncStorage.getItem('rememberMe');

          setIpAddress(ip);
          setDeviceId(id);

          if (savedRemember === 'true') {
            setEmployeeId(savedEmail || '');
            setValue('employee_id', savedEmail || '');
            setPassword(savedPassword || '');
            setValue('password', savedPassword || '');
            setRememberMe(true);
          }

          await loadAuthState(useAuthStore.setState);
        } catch (e) {
          console.error(e);
        } finally {
          hideLoadingDialog();
        }
      };
      initialize();
    }, []);

    const handleLogin = async (data: FormData) => {
        const {employee_id, password} = data;
        if (!employee_id || !password) return;

        try {
            showLoadingDialog('Loading...');
            const res = await AuthServices.login(employee_id, password, ipAddress, deviceId, platform);
            console.log(res)

            if (res.statusCode === 200) {
                if (rememberMe) {
                    await AsyncStorage.setItem('rememberedEmail', employee_id);
                    await AsyncStorage.setItem('rememberedPassword', password);
                    await AsyncStorage.setItem('rememberMe', 'true');
                } else {
                    await AsyncStorage.multiRemove(['rememberedEmail', 'rememberedPassword', 'rememberMe',]);
                }

                setToken(res.data.accessToken);
                setUser(res.data.user);
                setAuthenticated(true);

                Toast.show({type: 'success', text1: 'Login Successful'});
            }
        } catch (error: any) {
            const message = error?.response?.data?.message || 'Login failed';
            Toast.show({type: 'error', text1: 'Error', text2: message});
        } finally {
            hideLoadingDialog();
        }
    };

    return (<KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{flex: 1}}>
        <ScrollView
            contentContainerStyle={styles.container}
            keyboardShouldPersistTaps="handled">
            <Image
                source={require('../assets/images/sfa.png')}
                style={styles.logo}
            />
            <Text style={styles.label}>NIK</Text>
            <Controller
                control={control}
                name="employee_id"
                defaultValue={employee_id}
                render={({field: {onChange, onBlur, value}}) => (
                    <TextInput
                        style={[styles.input, errors.employee_id && styles.errorInput]}
                        placeholder="NIK"
                        onBlur={onBlur}
                        onChangeText={text => {
                            onChange(text);
                            setEmployeeId(text);
                        }}
                        keyboardType="default"
                        autoCapitalize="none"
                        value={value}
                    />)}
            />
            <Text style={styles.label}>Password</Text>
            <View style={{width: '100%'}}>
                <Controller
                    control={control}
                    name="password"
                    rules={{required: 'Password is required'}}
                    render={({field: {onChange, onBlur, value}}) => (<TextInput
                        style={[styles.input, errors.password && styles.errorInput]}
                        placeholder="Password"
                        secureTextEntry={!passwordVisible}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        autoCapitalize="none"
                        value={value}
                    />)}
                />
                <TouchableOpacity
                    style={styles.eyeIcon}
                    onPress={() => setPasswordVisible(!passwordVisible)}>
                    <Ionicons name={passwordVisible ? 'eye-off-outline' : 'eye-outline'} size={24}/>
                </TouchableOpacity>
            </View>

            <View style={styles.rememberContainer}>
                <TouchableOpacity onPress={() => setRememberMe(!rememberMe)}>
                    <View style={[styles.checkbox, rememberMe && styles.checkedBox]}>
                        {rememberMe && (<Ionicons name="checkmark" size={16} color="#fff"/>)}
                    </View>
                </TouchableOpacity>
                <Text style={styles.rememberText}>Remember Me</Text>
            </View>
            <CustomButton
                title="Masuk"
                onPress={handleSubmit(handleLogin)}
                style={styles.button}
                textStyle={styles.buttonText}
            />

            <TouchableOpacity onPress={() => navigation.replace('ForgotPassword')}>
                <Text style={styles.forgot}>Lupa Password?</Text>
            </TouchableOpacity>

            <Toast/>
            <Image
                source={require('../assets/images/background-login.png')}
                style={styles.backgroundImage}
            />
        </ScrollView>
    </KeyboardAvoidingView>);
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: width * 0.08,
        backgroundColor: '#fff',
    }, logo: {
        width: width * 0.25, height: height * 0.25, resizeMode: 'contain',
    }, input: {
        width: '100%',
        height: 48,
        backgroundColor: '#EFF0F6',
        borderColor: Colors.primeColor,
        borderRadius: 8,
        paddingHorizontal: 12,
        marginBottom: 12,
        color: '#000',
    }, errorInput: {
        borderColor: 'red',
    }, label: {
        width: '100%', marginBottom: 4, fontSize: 16, fontWeight: '500', color: '#333',
    }, eyeIcon: {
        position: 'absolute', right: 12, top: 12,
    }, rememberContainer: {
        flexDirection: 'row', alignItems: 'center', marginBottom: 20, alignSelf: 'flex-start',
    }, checkbox: {
        width: 30,
        height: 30,
        borderWidth: 1,
        backgroundColor: '#EFF0F6',
        borderColor: '#ccc',
        borderRadius: 30,
        marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center',
    }, checkedBox: {
        backgroundColor: '#2F3193',
    }, checkMark: {
        color: '#fff', fontSize: 16,
    }, rememberText: {
        fontSize: 16, color: '#333',
    }, button: {
        backgroundColor: '#2F3193',
        paddingVertical: 12,
        borderRadius: 30,
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
    }, buttonText: {
        color: '#fff', fontWeight: 'bold', fontSize: 16,
    }, forgot: {
        color: Colors.secondaryColor, fontSize: 16, textAlign: 'center',
    }, backgroundImage: {
        position: 'absolute', bottom: 0, width: '100%', height: height * 0.2, resizeMode: 'cover', zIndex: -1,
    },
});
