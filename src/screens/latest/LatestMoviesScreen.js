import React, { useEffect, useState } from 'react';
import { View, Button, Text } from 'react-native';
import Spinner from '../../components/spinner/Spinner';
import { get } from '../../utils/AxiosUtil';
import { API_BASE_PATH } from '../../utils/Constants';

const LatestMovieScreen = ({ navigation }) => {

    const [latestMovie, setLatestMovie] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        get(`${API_BASE_PATH}/movies/latest`,
            setLatestMovie,
            () => { setError('Something went wrong') });
    }, []);

    if (!latestMovie)
        return <Spinner />;

    return (
        <View>
            <Text>
                {JSON.stringify(latestMovie)}
            </Text>
        </View>
    );
};

export default LatestMovieScreen;