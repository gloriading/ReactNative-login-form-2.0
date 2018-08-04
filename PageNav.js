import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Landing from './src/pages/Landing';
import Entry from './src/pages/Entry';
import Login from './src/pages/Login';
import SignUpStepOne from './src/pages/SignUpStepOne';


const PageNav = createStackNavigator(
  {
    Home: Landing,
    Entry: Entry,
    Login: Login,
    SignUpStepOne: SignUpStepOne,
  },
  {
    initialRouteName: 'Home'
  }
);

export {PageNav};
