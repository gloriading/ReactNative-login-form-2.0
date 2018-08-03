import React from 'react';
import { StackNavigator } from 'react-navigation';
import Landing from './src/pages/Landing';
import Entry from './src/pages/Entry';


const PageNav = StackNavigator(
  {
    Home: Landing,
    Entry: Entry,
  },
  {
    initialRouteName: 'Home'
  }
);

export {PageNav};
