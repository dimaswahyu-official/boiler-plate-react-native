import React, {useState} from 'react';
import { StyleSheet, ScrollView, Text, TouchableOpacity, View, Image} from "react-native";
import {useAuthStore} from "../store/useAuthStore";
import Ionicons from '@react-native-vector-icons/ionicons';
import GlobalStyles from "../../../../../../Personal/Project/BoilerPlateReactNative/src/util/GlobalStyles";
import Colors from "../constants/Colors";
import StatusCard from "../components/NameCard";
import MenuGrid from "../components/MenuGrid";
import {useDialogStore} from "../store/useGlobalDialog";
import {useLoadingDialogStore} from "../store/useLoadingStore";

function HomeScreen() {
    const styles = GlobalStyles();
    const { user } = useAuthStore();
    const [showMainCard, setShowMainCard] = useState(true);
    const [showMenuCards, setShowMenuCards] = useState(false);
    const { showLoadingDialog, hideLoadingDialog } = useLoadingDialogStore();

    const menus = [
        {title: 'Persiapan', image: 'persiapan', onPress: () => {}},
        {title: 'Mulai Perjalnaan', image: 'mulai-perjalanan', onPress: () => console.log('Tasks')},
        ];

    const menus_informasi = [
        {title: 'Permintaan Barang', image: 'req-barang', onPress: () => {}},
        {title: 'Price List', image: 'price-list', onPress: () => console.log('Messages')},
    ];

    const handleToggle = () => {
        try {
            console.log('user', JSON.stringify(user));
            showLoadingDialog('Downloading Geotree & Call Plan');
            setShowMainCard(false);
            setTimeout(() => {
                useDialogStore.getState().showDialog('success', 'Download Geotree & Call Plan Berhasil');
                hideLoadingDialog();
            }, 3000);

            setTimeout(() => {
                useDialogStore.getState().hideDialog()
                setShowMenuCards(true);
            }, 5000);

        } catch (err) {
            hideLoadingDialog();
        }
    };

    return (
        <View style={{flex: 1, backgroundColor: Colors.secondaryColor}}>
            {/* Header */}
            <View style={styles.headerHome}>
                <View style={styles.profileSection}>
                    <Text style={styles.profileText}>{user?.employee_name}</Text>
                    <Text style={styles.profileSubtext}>Selamat beraktifitas, jaga selalu kesehatan rumah tanggamu</Text>
                </View>
            </View>
            {/* Main Scrollable Content */}
            <ScrollView contentContainerStyle={styles.menuContainer} stickyHeaderIndices={[2]}>
                <View style={styles.menuCard}>
                    {showMenuCards && (
                        <StatusCard
                            title="JAT/2025/12/04.0001"
                            description="16/02/2024"
                            endDate="16/02/2025"
                            status="Active"
                            statusColor="#E5FFF2"
                            route="Luar Kota"
                        />
                    )}

                    <View style={styles.activitiesHeader}>
                        <Text style={styles.activitiesHeaderText}>List Aktifitas</Text>
                    </View>

                    {showMainCard && (
                        <TouchableOpacity style={stylez.card} onPress={handleToggle}>
                            <Image
                                source={require('../assets/icons/mulai-harimu.png')}
                                style={stylez.icon}
                            />
                            <Text style={stylez.title}>Mulai Harimu</Text>
                            <Ionicons
                                name="chevron-forward-outline"
                                size={20}
                                color={Colors.secondaryColor}
                            />
                        </TouchableOpacity>
                    )}

                    {showMenuCards &&
                        <>
                            <MenuGrid items={menus}/>

                            <View style={styles.activitiesHeader}>
                                <Text style={styles.activitiesHeaderText}>Informasi dan Data</Text>
                            </View>

                            <MenuGrid items={menus_informasi}/>
                        </>
                    }
                    <View style={styles.activitiesHeader}>
                        <Text style={styles.activitiesHeaderText}>Berita Harian</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default HomeScreen;

const stylez = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        gap: 10,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        backgroundColor: '#fff',
    },
    icon: {
        width: 70,
        height: 70,
        marginRight: 10,
        color: '#333',
    },
    title: {
        flex: 1,
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
    },
    cardx: {
        backgroundColor: '#fff',
        padding: 24,
        borderRadius: 16,
        alignItems: 'center',
        elevation: 10,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: {width: 0, height: 3},
        shadowRadius: 6,
    },
    titlex: {
        marginTop: 12,
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
});

