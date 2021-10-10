import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {horizontalSlide, routes, verticalSlide} from '../utils/constants';

import ListPopularMovieScreen from '../screen/Movie/ListPopularMovieScreen';
import ListNowPlayingScreen from '../screen/NowPlaying/ListNowPlayingScreen';
import DetailScreen from '../screen/DetailScreen';
import DetailTVScreen from '../screen/TVShow/DetailTVScreen';
import ListTVShowScreen from '../screen/TVShow/ListPopularTVScreen';
import ListPopularPeopleScreen from '../screen/People/ListPopularPeopleScreen';
import DetailPeopleScreen from '../screen/People/DetailPeopleScreen';
import ListUpcomingScreen from '../screen/Upcoming/ListUpcomingScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MovieStack() {
  return (
    <Stack.Navigator screenOptions={{headerMode: 'none'}}>
      <Stack.Screen
        name={routes.list}
        component={ListPopularMovieScreen}
        options={{cardStyleInterpolator: verticalSlide}}
      />
      <Stack.Screen
        name={routes.detail}
        component={DetailScreen}
        options={{cardStyleInterpolator: horizontalSlide}}
      />
    </Stack.Navigator>
  );
}

function NowPlayingStack() {
  return (
    <Stack.Navigator screenOptions={{headerMode: 'none'}}>
      <Stack.Screen
        name={routes.list}
        component={ListNowPlayingScreen}
        options={{cardStyleInterpolator: verticalSlide}}
      />
      <Stack.Screen
        name={routes.detail}
        component={DetailScreen}
        options={{cardStyleInterpolator: horizontalSlide}}
      />
    </Stack.Navigator>
  );
}

function UpcomingStack() {
  return (
    <Stack.Navigator screenOptions={{headerMode: 'none'}}>
      <Stack.Screen
        name={routes.list}
        component={ListUpcomingScreen}
        options={{cardStyleInterpolator: verticalSlide}}
      />
      <Stack.Screen
        name={routes.detail}
        component={DetailScreen}
        options={{cardStyleInterpolator: horizontalSlide}}
      />
    </Stack.Navigator>
  );
}

function TVShowStack() {
  return (
    <Stack.Navigator screenOptions={{headerMode: 'none'}}>
      <Stack.Screen
        name={routes.list}
        component={ListTVShowScreen}
        options={{cardStyleInterpolator: verticalSlide}}
      />
      <Stack.Screen
        name={routes.detail}
        component={DetailTVScreen}
        options={{cardStyleInterpolator: horizontalSlide}}
      />
    </Stack.Navigator>
  );
}

function PeopleStack() {
  return (
    <Stack.Navigator screenOptions={{headerMode: 'none'}}>
      <Stack.Screen
        name={routes.list}
        component={ListPopularPeopleScreen}
        options={{cardStyleInterpolator: verticalSlide}}
      />
      <Stack.Screen
        name={routes.detail}
        component={DetailPeopleScreen}
        options={{cardStyleInterpolator: horizontalSlide}}
      />
    </Stack.Navigator>
  );
}

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          activeTintColor: '#42f44b',
        }}>
        <Tab.Screen
          name="MOVIES"
          component={MovieStack}
          options={{
            tabBarLabel: 'Movie',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="movie" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="NOW PLAYING"
          component={NowPlayingStack}
          options={{
            tabBarLabel: 'Now Playing',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="movie" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="UPCOMING"
          component={UpcomingStack}
          options={{
            tabBarLabel: 'Upcoming',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="film" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="TV SHOW"
          component={TVShowStack}
          options={{
            tabBarLabel: 'TV Show',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="remote-tv"
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name="PEOPLE"
          component={PeopleStack}
          options={{
            tabBarLabel: 'People',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="human" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
