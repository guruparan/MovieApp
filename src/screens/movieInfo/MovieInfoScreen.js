import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import MovieInfoView from '../../components/movieInfoView/MovieInfoView';
import Spinner from '../../components/spinner/Spinner';
import { get } from '../../utils/AxiosUtil';
import { API_BASE_PATH } from '../../utils/Constants';

const MovieInfoScreen = ({ route }) => {

    const [movie, setMovie] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        get(`${API_BASE_PATH}/movies/${route.params.movieId}`,
            setMovie,
            () => { setError('Something went wrong') });
    }, []);

    if (!movie)
        return <Spinner />;

    return (
        <View>
            <MovieInfoView movie={movie} />
        </View>
    );
};

export default MovieInfoScreen;