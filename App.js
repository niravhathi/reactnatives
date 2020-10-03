/* eslint-disable no-alert */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import Login from './components/Login';

const App = () => {
  function login1(){
    alert('login function');
  }
  return (
    <SafeAreaView>
      {/* <View></View> */}
      <Login />
      <Button onPress={login1} title="Press On" />
    </SafeAreaView>
  );
};
class App1 extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>Class Component</Text>
          <Button onPress={() => alert('Hello World')} title="Press On" />
        </View>
      </SafeAreaView>
    );
  }
}
export default App;