// // src/utils/deviceId.ts
// // import * as SecureStore from 'expo-secure-store';
// import { Platform } from 'react-native';
//
// const DEVICE_ID_KEY = 'persistent_device_id';
//
// /**
//  * Generates a random device ID
//  */
// const generateDeviceId = (): string => {
//     return [
//         'SFA',
//         Platform.OS,
//         Date.now().toString(36),
//         Math.random().toString(36).substring(2, 10)
//     ].join('-');
// };
//
// /**
//  * Gets or creates a persistent device ID stored in SecureStore
//  * @returns Promise<string> - The device identifier
//  */
// export const getOrCreateDeviceId = async (): Promise<string> => {
//     try {
//         // Try to get existing ID
//         let deviceId = await SecureStore.getItemAsync(DEVICE_ID_KEY);
//
//         // If exists, return it
//         if (deviceId) {
//             return deviceId;
//         }
//
//         // Otherwise generate and store a new one
//         deviceId = generateDeviceId();
//         await SecureStore.setItemAsync(DEVICE_ID_KEY, deviceId);
//
//         return deviceId;
//     } catch (error) {
//         console.error('Failed to get/create device ID:', error);
//         // Fallback to in-memory ID if SecureStore fails
//         return generateDeviceId();
//     }
// };
//
// /**
//  * Clears the stored device ID
//  * @returns Promise<void>
//  */
// export const clearDeviceId = async (): Promise<void> => {
//     try {
//         await SecureStore.deleteItemAsync(DEVICE_ID_KEY);
//     } catch (error) {
//         console.error('Failed to clear device ID:', error);
//     }
// };
