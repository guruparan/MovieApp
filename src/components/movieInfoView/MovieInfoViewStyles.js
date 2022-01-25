import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 10,
        width:'100%'
    },
    poster: {
        height: 140,
        width: 90,
        position: 'absolute',
        borderWidth: 3,
        borderColor: 'white',
        bottom:0,
        left: 10,
    },
    backdrop: {
        width: '100%',
        height: 160,
    },
    overview: {
        backgroundColor: '#D3D3D3',
        borderRadius: 5,
        padding: 10,
        marginTop: 10,
    },
    overviewTitle: {
        marginBottom: 5,
        fontWeight: 'bold',
    },
    titleContainer: {
        marginBottom: 10
    },
    ratingContainer: {
        position: 'absolute',
        zIndex: 1000,
        backgroundColor: 'white',
        height: 30,
        width: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        right: 5,
        top: 5,
        borderWidth: 2
    },
    movieTitleContainer: {
        alignSelf: 'flex-end',
        width: '73%',
        marginTop: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    }
});

export default styles;