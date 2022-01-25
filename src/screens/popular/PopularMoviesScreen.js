import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import MovieListItem from '../../components/movieListItem/MovieListItemView';
import Spinner from '../../components/spinner/Spinner';
import { get } from '../../utils/AxiosUtil';
import { API_BASE_PATH } from '../../utils/Constants';

const PopularMovieScreen = ({ navigation }) => {

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState();
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    const getMore = () => {
        get(`${API_BASE_PATH}/movies/popular/${page}`,
            data => {
                setMovies([...movies, ...data.results]);
                setLoading(false);
                setPage(page + 1);
            },
            () => { setError('Something went wrong') });
    };

    useEffect(() => {
        setLoading(true);
        getMore();
    }, []);

    if (loading)
        return <Spinner />;
        
    return (
        <FlatList
            data={movies}
            renderItem={({ item }) => <MovieListItem
                movie={item}
                onclick={() => navigation.navigate("MovieInfo", { movieId: item.id })}
            />}
            keyExtractor={(item) => item.id}
            onEndReachedThreshold={0.1}
            onEndReached={getMore}
        />
    );
};

export default PopularMovieScreen;