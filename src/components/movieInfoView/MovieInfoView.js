import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
} from 'react-native';
import { IMAGE_BASE_PATH } from '../../utils/Constants';
import { getRatingBackgroundColor } from '../../utils/Utils';
import styles from './MovieInfoViewStyles';

const Rating = ({ rating, style }) => {
    return (
        <View style={[style, { borderColor: getRatingBackgroundColor(rating)}]}>
            <Text style={{ color: getRatingBackgroundColor(rating) }}>{rating}</Text>
        </View>
    );
};

const MovieInfoView = ({ movie }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Rating rating={movie.vote_average} style={styles.ratingContainer} />
                    <Image
                        style={styles.backdrop}
                        source={{
                            uri: IMAGE_BASE_PATH + movie.backdrop_path,
                        }}
                        resizeMode={'cover'}
                    />

                    <Image
                        style={styles.poster}
                        source={{
                            uri: IMAGE_BASE_PATH + movie.poster_path,
                        }}
                        resizeMode={'cover'}
                    />

                    <View style={styles.movieTitleContainer}>
                        <Text style={styles.title}>
                            {movie.title}
                        </Text>
                        <Text>Runtime {movie.runtime} Minutes</Text>
                    </View>
                </View>

                {movie.genres && movie.genres.length > 0 && (
                    <View style={styles.overview}>
                        <View style={{ flexDirection: 'row' }}>
                            {movie.genres.map((item) => (
                                <Text key={item.id} style={{ marginHorizontal: 5 }}>{item.name}</Text>
                            ))}
                        </View>
                    </View>
                )}

                <View style={styles.overview}>
                    <Text style={styles.overviewTitle}>Overview</Text>
                    <Text>{movie.overview}</Text>
                </View>

                {movie.spoken_languages && movie.spoken_languages.length > 0 && (
                    <View style={styles.overview}>
                        <Text style={styles.overviewTitle}>Available In</Text>
                        <View style={{ flexDirection: 'row' }}>
                            {movie.spoken_languages.map((item) => (
                                <Text key={item.name} style={{ marginHorizontal: 5 }}>{item.name}</Text>
                            ))}
                        </View>
                    </View>
                )}
            </View>
        </ScrollView>
    );
};

export default MovieInfoView;
