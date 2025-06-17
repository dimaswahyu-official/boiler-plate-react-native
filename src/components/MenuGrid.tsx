import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList, ImageSourcePropType, Image} from 'react-native';



type MenuItem = {
    title: string;
    image: string;
    onPress: () => void;
};

type MenuGridProps = {
    items: MenuItem[];
};

const iconMap: Record<string, ImageSourcePropType> = {
    'mulai-perjalanan': require('../assets/icons/mulai-perjalanan.png'),
    'persiapan': require('../assets/icons/persiapan.png'),
    'price-list': require('../assets/icons/price-list.png'),
    'req-barang': require('../assets/icons/req-barang.png'),
};



const MenuGrid: React.FC<MenuGridProps> = ({ items }) => {
    const chunked = [];
    for (let i = 0; i < items.length; i += 3) {
        chunked.push(items.slice(i, i + 3));
    }

    return (
        <View style={styles.container}>
            {chunked.map((row, index) => (
                <View key={index} style={styles.row}>
                    {row.map((item, i) => (
                        <TouchableOpacity key={i} style={styles.card} onPress={item.onPress}>
                            <Image source={iconMap[item.image]} style={styles.icon} />
                            <Text style={styles.title}>{item.title}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            ))}
        </View>
    );
};

export default MenuGrid;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 12,
        gap: 16,
    },
    icon: {
        width: 104,
        height: 92,
        marginBottom: 8,
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        width: "31%",
        padding: 10,
        borderRadius: 10,
    },
    title: {
        marginTop: 6,
        fontSize: 12,
        textAlign: 'center',
        color: '#333',
    },
});