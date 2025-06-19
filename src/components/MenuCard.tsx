import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import Colors from "../constants/Colors";

type MenuCardProps = {
    iconName: any;
    title: string;
    onPress?: () => void;
};

const MenuCard: React.FC<MenuCardProps> = ({ iconName, title, onPress }) => (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.7}>
        <View style={styles.left}>
            <Image source={require('../assets/icons/persiapan.png')} style={styles.icon} />
            <Text style={styles.title}>{title}</Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={20} color={Colors.secondaryColor} />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between', // space between icon+title and arrow
        alignItems: 'center',
        paddingVertical: 14,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 20,
        elevation: 2, // shadow android
        shadowColor: '#000', // shadow ios
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
    },
    icon: {
        width: 64,
        height: 52,
        marginBottom: 8,
    },
    left: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12, // spacing between icon and title (if gap not supported, use marginRight on icon)
    },
    title: {
        fontSize: 16,
        color: '#333',
        fontWeight: '600',
    },
});

export default MenuCard;
