import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import { LogoTitle } from '../misc/LogoTitle';
import NavStyles from '../misc/NavStyles';


export default class Login extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
    ...NavStyles,
  };

  render(){
    return(
        <View style={ styles.container }>
          <StatusBar barStyle="dark-content"/>
          <Text style={ styles.inputLabel }>Email</Text>
          <TextInput
            underlineColorAndroid="transparent"
            returnKeyType="next"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus={true}
            onSubmitEditing={()=> this.passwordInput.focus()}
            style={ styles.input } />
          <Text style={ styles.inputLabel }>Password</Text>
          <TextInput
            underlineColorAndroid="transparent"
            returnKeyType="send"
            secureTextEntry
            style={ styles.input }
            ref={(input)=> this.passwordInput = input} />

          <TouchableOpacity
            style={ styles.buttonContainer }
            onPress={ ()=> alert('Logging in...')}
            >
            <Text style={ styles.buttonContent }>LOGIN</Text>
          </TouchableOpacity>
          <Text style={styles.forgetPassword}>Forget Password?</Text>
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
    backgroundColor: '#ffb142',
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
  forgetPassword: {
    textAlign: 'center',
    marginTop: 10,
  }

});
