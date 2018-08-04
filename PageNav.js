import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Landing from './src/pages/Landing';
import Entry from './src/pages/Entry';
import Login from './src/pages/Login';


const PageNav = createStackNavigator(
  {
    Home: Landing,
    Entry: Entry,
    Login: Login,
  },
  {
    initialRouteName: 'Home'
  }
);

export {PageNav};
