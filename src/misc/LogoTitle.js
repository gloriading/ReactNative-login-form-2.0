import React from 'react'
import { StyleSheet, Text, View, Button, Image } from 'react-native'

const LogoTitle = props => (
  <Image source={require('../images/header_logo.png')} style={{ width: 32, height: 32 }} />
)

export { LogoTitle }
