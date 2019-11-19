import React from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';

import { StyleSheet, Text, View } from 'react-native';
import FriendScreen from './screens/FriendScreen';
import HomeScreen from './screens/HomeScreen';
import ImageScreen from './screens/ImageScreen';

const navigator = createStackNavigator({
  Friend: FriendScreen,
  Home: HomeScreen,
  Image: ImageScreen
},{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerTitle: 'INFOLEPI',
    headerStyle: {
      backgroundColor: 'black'
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
      marginLeft: 'auto',
      marginRight: 'auto',
      padding: 20
    }
  }
});

export default createAppContainer(navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
