import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import NavStyles from '../misc/NavStyles';

export default class Landing extends React.Component {
  static navigationOptions = {
    ...NavStyles
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.logoContainer}
          onPress={()=> this.props.navigation.navigate('Entry')}
          >
          <Image
            style={ styles.logo }
            source={require('../images/dragon_logo.png')}
          />
          <Text style={ styles.title }>CHANGE.HAPPENS.HERE</Text>
        </TouchableOpacity>
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
    borderWidth: 0,
    backgroundColor: '#ffb142',
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
