import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { LogoTitle } from '../misc/LogoTitle';
import NavStyles from '../misc/NavStyles';

export default class SignUpStepOne extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
    ...NavStyles
  };

  constructor(props){
    super(props);
    this.state = { text: '' }
  }

  render(){
    return(
        <View style={ styles.container }>
          <StatusBar barStyle="dark-content"/>
          <Text style={ styles.inputLabel }>Please enter your email:</Text>
          <TextInput
            underlineColorAndroid="transparent"
            returnKeyType="next"
            keyboardType="email-address"
            autoCapitalize="none"
            autoFocus={true}
            autoCorrect={false}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            style={ styles.input } />

          <TouchableOpacity
            style={ styles.buttonContainer }
            onPress={()=> this.props.navigation.navigate('SignUpStepTwo')}
            >
            <Text style={ styles.buttonContent }>Next</Text>
          </TouchableOpacity>
        </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 40,
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    marginBottom: 20,
    color: 'rgba(0,0,0,0.8)',
    fontSize: 22,
    paddingHorizontal: 10
  },
  inputLabel: {
    marginVertical: 10,
    fontSize: 22,
  },
  buttonContainer: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingVertical: 10,
  },
  buttonContent: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    letterSpacing: 1,
  },


});
