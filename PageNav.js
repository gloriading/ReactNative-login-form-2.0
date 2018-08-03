import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Landing from './src/pages/Landing';
import Entry from './src/pages/Entry';


const PageNav = createStackNavigator(
  {
    Home: Landing,
    Entry: Entry,
  },
  {
    initialRouteName: 'Home'
  }
);

export {PageNav};
