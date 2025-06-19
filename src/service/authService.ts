// src/services/authService.ts
import AsyncStorage from '@react-native-async-storage/async-storage';  // Use the correct AsyncStorage import
import axiosInstance from "../../src/config/axiosInstance.ts";
import Toast from "react-native-toast-message";

interface LoginResponse {
    statusCode: number;
    message: string;
    data: any;
}

interface ForgetPasswordResponse {
    statusCode: number;
    message: string;
    data: any;
}


class AuthServices {
    // Login function: Accepts credentials, performs authentication, and stores the token
    static async login(email: string, password: string , ip_address:string, device_info:string, platform:string): Promise<LoginResponse> {
        try {
            console.log(email, password, ip_address, device_info,platform);
            const response = await axiosInstance.post('/auth/login', {
                email,
                password,
                ip_address,
                device_info,
                platform
            });
            return response.data
        } catch (error: any) {
            Toast.show({
                type: 'error',
                text1: 'Login Failed',
                text2: error.response?.data?.message || 'An error occurred during login',
                position: 'top',
            });
            throw error
        }
    }

    static async forgotPassword(email: string): Promise<ForgetPasswordResponse> {
        try {
            const response = await axiosInstance.post('/auth/forgot-password', {
                email
            });
            return response.data;
        } catch (error: any) {
            console.error('Login failed:', error)
            throw error.response
        }
    }

    // Get token: Retrieves the token from AsyncStorage
    static async getToken(): Promise<string | null> {
        try {
            return await AsyncStorage.getItem('token')
        } catch (error: any) {
            console.error('Failed to get token:', error)
            throw error.response
        }
    }

    // Check if the user is authenticated: Returns a boolean indicating if the user is logged in
    static async isAuthenticated(): Promise<boolean> {
        try {
            const token = await this.getToken()
            return token !== null
        } catch (error: any) {
            console.error('Error checking authentication:', error)
            return false
        }
    }
}

export default AuthServices
