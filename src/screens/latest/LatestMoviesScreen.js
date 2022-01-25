import React, { useEffect, useState } from 'react';
import { View, Button, Text, Image, TouchableOpacity } from 'react-native';
import images from '../../../images';
import Spinner from '../../components/spinner/Spinner';
import { get } from '../../utils/AxiosUtil';
import { API_BASE_PATH, IMAGE_BASE_PATH } from '../../utils/Constants';
import styles from './LatestMoviesScreenStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const LatestMovieScreen = () => {

    const [movie, setLatestMovie] = useState();
    const [error, setError] = useState();

    const getMovie = () => {
        get(`${API_BASE_PATH}/movies/latest`,
            setLatestMovie,
            () => { setError('Something went wrong') });
    };

    useEffect(() => {
        getMovie();
    }, []);

    if (!movie)
        return <Spinner />;

    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: 300 }}>
                <Image
                    style={styles.backdrop}
                    source={movie.backdrop_path ? {
                        uri: IMAGE_BASE_PATH + movie.backdrop_path,
                    } : images.backdrop}
                />
                <Image
                    style={styles.poster}
                    source={movie.poster_path ? {
                        uri: IMAGE_BASE_PATH + movie.poster_path,
                    } : images.poster}
                />
            </View>
            <Text style={styles.title}>{movie.title}</Text>
            {movie.overview!='' && <View style={styles.overviewContainer}>
                <Text style={styles.overview}>{movie.overview}</Text>
            </View>}
            <TouchableOpacity onPress={getMovie} style={styles.refreshButton}>
                <FontAwesome name="refresh" color={'grey'} size={50} />
            </TouchableOpacity>
        </View>
    );
};

export default LatestMovieScreen;