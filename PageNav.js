import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Landing from './src/pages/Landing';
import Entry from './src/pages/Entry';
import Login from './src/pages/Login';
import SignUpStepOne from './src/pages/SignUpStepOne';
import SignUpStepTwo from './src/pages/SignUpStepTwo';


const PageNav = createStackNavigator(
  {
    Home: Landing,
    Entry: Entry,
    Login: Login,
    SignUpStepOne: SignUpStepOne,
    SignUpStepTwo: SignUpStepTwo
  },
  {
    initialRouteName: 'Home'
  }
);

export {PageNav};
