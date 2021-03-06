import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LogoTitle } from '../misc/LogoTitle';
import NavStyles from '../misc/NavStyles';

export default class Entry extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
    ...NavStyles
  };

  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity
          style={ styles.largeBtnContainer }
          onPress={()=> this.props.navigation.navigate('Login')}
          >
          <Text style={ styles.largeBtnContent }>
            log in
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={ styles.largeBtnContainer }
          onPress={()=> this.props.navigation.navigate('SignUpStepOne')}
          >
          <Text style={ styles.largeBtnContent }>
            sign up
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffb142',
  },
  largeBtnContainer: {
    width: 300,
    height: 80,
    borderRadius: 5,
    backgroundColor: 'rgba(255,255,255,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15 ,
    shadowOffset : { width: 1, height: 13},
  },
  largeBtnContent: {
    textAlign: 'center',
    fontSize: 40,
    letterSpacing: 2,
    color: 'rgba(0,0,0,0.6)'
  }
});
