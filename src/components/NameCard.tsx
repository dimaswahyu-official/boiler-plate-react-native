import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type StatusCardProps = {
    title: string;
    description: string;
    endDate: string;
    status: string;
    statusColor?: string;
    route: string
    routeColor?: string;
};

const StatusCard: React.FC<StatusCardProps> = ({
                                                   title,
                                                   description,
                                                   status,
                                                   statusColor = '#E5FFF2',
                                                   route,
                                                   routeColor = '#EFF0F6',
                                                   endDate
                                               }) => {
    return (
        <View style={styles.card}>
            <View style={styles.titleStatus}>
                <View style={[styles.statusBadge, {backgroundColor: statusColor}]}>
                    <Text style={styles.statusText}>{status}</Text>
                </View>
                <View style={[styles.statusBadge, {backgroundColor: routeColor}]}>
                    <Text style={styles.routeText}>{route}</Text>
                </View>
            </View>
            <View style={styles.titleRow}>
                <Text style={styles.title}>{title}</Text>
            </View>

            <View style={styles.row}>
                <View style={styles.container}>
                    <Text style={styles.description}>Mulai</Text>
                    <Text style={styles.date}>{description}</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.description}>Akhir</Text>
                    <Text style={styles.date}>{endDate}</Text>
                </View>
            </View>


        </View>

    );
};

export default StatusCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
        marginVertical: 8,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 4,
    },
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8,
        borderBottomWidth: 0.3,
        paddingBottom: 8,
        borderColor: '#666',
    },
    titleStatus: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        flex: 1,
    },
    statusBadge: {
        borderRadius: 10,
        paddingVertical: 4,
        paddingHorizontal: 12,
        marginRight: 2
    },
    statusText: {
        color: '#00994D',
        fontWeight: 'bold',
        fontSize: 12,
    },
    routeText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 12,
    },
    description: {
        fontSize: 14,
        color: '#666',
    },
    date: {
        fontSize: 14,
        color: 'black',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between', // This ensures the content is spaced between
    },

});