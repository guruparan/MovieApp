import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './MoviesListItemStyles';
import { IMAGE_BASE_PATH } from '../../utils/Constants';
import { getRatingBackgroundColor } from '../../utils/Utils';

const MovieListItem = ({ movie, onclick }) => {

    return (
        <TouchableOpacity style={styles.container} key={movie.id} onPress={onclick}>
            <Image
                style={styles.image}
                source={{
                    uri: IMAGE_BASE_PATH + movie.poster_path,
                }}
            />
            <View
                style={[styles.ratingContainer, { borderColor: getRatingBackgroundColor(movie.vote_average) }]}>
                <Text style={{ color: getRatingBackgroundColor(movie.vote_average) }}>
                    {movie.vote_average}
                </Text>
            </View>
            <View style={styles.detailContainer}>
                <Text style={styles.title}>
                    {movie.title}{movie.release_date ? ` (${movie.release_date.split('-')[0]})` : ""}
                </Text>

                <Text style={{marginTop:10,fontSize:14}}>
                   Released on {movie.release_date}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default MovieListItem;
