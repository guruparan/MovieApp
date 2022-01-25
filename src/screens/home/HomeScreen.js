import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import LatestMovieScreen from '../latest/LatestMoviesScreen';
import PopularMovieScreen from '../popular/PopularMoviesScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeTabs = createMaterialBottomTabNavigator();

const HomeScreen = () => {
    return (
        <HomeTabs.Navigator
        
            activeColor="#D3D3D3"
            barStyle={{ backgroundColor: 'black' }}>
            <HomeTabs.Screen
                name="Popular"
                component={PopularMovieScreen}
                options={{

                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="star" color={color} size={26} />
                    )
                }} />
            <HomeTabs.Screen
                name="Latest"
                component={LatestMovieScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="movie" color={color} size={26} />
                    )
                }} />
        </HomeTabs.Navigator>
    );
};

export default HomeScreen;