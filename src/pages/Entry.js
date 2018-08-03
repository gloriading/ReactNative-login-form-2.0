import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Entry extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={ styles.largeBtnContainer }>
          <Text style={ styles.largeBtnContent }>
            log in
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={ styles.largeBtnContainer }>
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
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  largeBtnContainer: {
    width: 300,
    height: 100,
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
