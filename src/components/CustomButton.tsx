import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, ViewStyle, TextStyle } from 'react-native';
import Colors from "../constants/Colors";
import Ionicons from '@react-native-vector-icons/ionicons';

// Props for the custom button
interface CustomButtonProps {
    title: string;
    onPress: () => void;
    backgroundColor?: string;
    textColor?: string;
    icon?: any;
    iconSize?: number;
    iconColor?: string;
    style?: ViewStyle;
    textStyle?: TextStyle;
}

const CustomButton: React.FC<CustomButtonProps> = ({
                                                       title,
                                                       onPress,
                                                       backgroundColor = Colors.primeColor, // Default background color
                                                       textColor = '#fff', // Default text color
                                                       icon,
                                                       iconSize = 20, // Default icon size
                                                       iconColor = '#fff', // Default icon color (same as text color)
                                                       style,
                                                       textStyle,
                                                   }) => {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor }, style]} // Button container styles
            onPress={onPress}
        >
            <View style={styles.buttonContent}>
                {icon && <Ionicons name={icon} size={iconSize} color={iconColor} style={styles.icon} />}

                <Text style={[styles.text, { color: textColor }, textStyle]}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3, // Shadow for Android
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    buttonContent: {
        flexDirection: 'row', // Align icon and text horizontally
        alignItems: 'center', // Center them vertically
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 8, // Space between the icon and text
    },
    icon: {
        marginRight: 8, // Space between the icon and text
    },
});

export default CustomButton;
