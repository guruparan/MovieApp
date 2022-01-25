import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#D5D3D3',
        width: '95%',
        marginVertical: 8,
        marginHorizontal: 10,
        borderRadius: 5,
        padding: 10,
        flexDirection: 'row',
        borderBottomLeftRadius: 40,
    },
    image: {
        width: 58,
        height: 80,
        marginRight: 10,
        borderRadius: 5,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    detailContainer: {
        width: '80%'
    },
    ratingContainer: {
        backgroundColor: 'white',
        height: 30,
        width: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: -5,
        left: 25,
        borderBottomWidth: 5,
        borderTopWidth: 0,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
});

export default styles;