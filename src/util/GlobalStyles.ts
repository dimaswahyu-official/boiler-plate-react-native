import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../constants/Colors';

// Get screen dimensions
const { height } = Dimensions.get('window');

const GlobalStyles = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            padding: 16,
        },
        header: {
            flexDirection: 'row',
            marginBottom: 20,
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        menuCard: {
            backgroundColor: '#fff',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            paddingHorizontal: 16,
            paddingTop: 10,
            paddingBottom: 10,
            zIndex: 10,
            height: 1.2*height,
            position: 'relative',
        },
        headerHome: {
            backgroundColor: Colors.secondaryColor,
            paddingTop: 10,
            paddingBottom: 40,
            paddingHorizontal: 16,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center', // Ensure it's centered horizontally
            zIndex: 1,
        },
        time: {
            fontSize: 16,
        },
        date: {
            fontSize: 16,
            color: '#666',
        },
        profileSection: {
            paddingTop:15,
            alignItems: 'flex-start',
        },
        profileText: {
            textAlign: 'left',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: 25,
        },
        profileSubtext: {
            fontSize: 16,
            color: '#fff',
        },
        menuContainer: {
            flexDirection: 'column',
            gap: 16,
        },
        menuRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 5,
        },
        menuItemContainer: {
            flex: 1,  // This ensures equal width for all items
            minWidth: 0, // Important for text truncation if needed
            paddingHorizontal: 4
        },
        menuItem: {
            borderWidth: 1,
            borderColor: '#ddd',
            borderRadius: 5,
            padding: 16,
            backgroundColor: 'white',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 3,
        },
        emptyMenuItem: {
            flex: 1,
        },
        menuTitle: {
            fontSize: 14,
            fontWeight: 'bold',
            marginBottom: 8,
            color: '#333',
        },
        subMenuItem: {
            paddingVertical: 8,
            paddingHorizontal: 12,
            marginVertical: 4,
            borderRadius: 4,
        },
        subMenuText: {
            fontSize: 14,
            color: '#555',
        },
        icon: {
            marginRight: 10,
            width: 24, // Fixed width for alignment
        },
        activitiesHeader: {
            borderTopLeftRadius: 5,     // Rounded top-left corner
            borderTopRightRadius: 5,    // Rounded top-right corner
            paddingVertical: 12,
            paddingHorizontal: 16,
            marginBottom: 10,
        },
        newsHeader: {
            backgroundColor: '#002761', // Purple-blue background
            borderTopLeftRadius: 5,     // Rounded top-left corner
            borderTopRightRadius: 5,    // Rounded top-right corner
            paddingVertical: 12,
            paddingHorizontal: 16,
            marginBottom: 16,
        },
        activitiesHeaderText: {
            color: 'black',
            fontSize: 20,
            fontWeight: '600',
        },
        newsHeaderText: {
            color: 'white',
            fontSize: 15,
            fontWeight: '600',
        },
    });
};

export default GlobalStyles;
