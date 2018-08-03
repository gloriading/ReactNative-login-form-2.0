import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Landing extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={ styles.logo }
            source={require('../images/dragon_logo.png')}
          />
          <Text style={ styles.title }>CHANGE.HAPPENS.HERE</Text>
        </View>
        <Text style={ styles.name }>
          <Text style={ styles.pink }>Glorious </Text>
           App Design
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    marginTop: 20,
    letterSpacing: 1,
  },
  name: {
    alignSelf: 'center',
    paddingBottom: 30,
  },
  pink: {
    color: 'deeppink',
  }
});
