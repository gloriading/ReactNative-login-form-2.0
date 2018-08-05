import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { LogoTitle } from '../misc/LogoTitle';

export default class SignUpStepTwo extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
  };

  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      preferredName: ''
    }
  }


  render(){
    return(
        <View style={ styles.container }>
          <StatusBar barStyle="dark-content"/>
          <Text style={ styles.inputLabel }>First Name:</Text>
          <TextInput
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(firstName) => this.setState({firstName})}
            onSubmitEditing={()=> this.lastNameInput.focus()}
            value={this.state.text}
            style={ styles.input } />

          <Text style={ styles.inputLabel }>Last Name:</Text>
          <TextInput
            returnKeyType="next"
            autoCapitalize="words"
            autoCorrect={false}
            onChangeText={(lastName) => this.setState({lastName})}
            ref={(input)=> this.lastNameInput = input}
            onSubmitEditing={()=> this.preferredNameInput.focus()}
            value={this.state.text}
            style={ styles.input } />

          <Text style={ styles.inputLabel }>Preferred Name:</Text>
          <TextInput
            returnKeyType="next"
            autoCapitalize="words"
            autoCorrect={false}
            onChangeText={(preferredName) => this.setState({preferredName})}
            ref={(input)=> this.preferredNameInput = input}
            value={this.state.text}
            style={ styles.input } />

          <TouchableOpacity style={ styles.buttonContainer }>
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
