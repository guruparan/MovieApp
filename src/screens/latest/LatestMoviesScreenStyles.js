import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    backdrop: { width: '100%', height: 160 },
    poster: {
        height: 200,
        width: 150,
        position: 'absolute',
        borderWidth: 3,
        borderColor: 'white',
        bottom: 0,
        top: 90,
        alignSelf: 'center',
    },
    title: {
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: 'bold',
        marginTop: 5,
        marginHorizontal: 15,
        textAlign: 'justify',
    },
    overview: {
        alignSelf: 'center',
        textAlign: 'justify',
    },
    overviewContainer: {
        marginVertical: 5,
        marginHorizontal: 10,
        backgroundColor: '#D3D3D3',
        padding: 10,
        borderRadius: 15,
    },
    refreshButton: {
        marginTop: 'auto',
        marginBottom: 20,
        alignSelf: 'center',
        width: 50,
        height: 50
    }
});

export default styles;