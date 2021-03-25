import React from 'react';
import './App.css';
import Home from './Home';
import ExampleWork from './ExampleWork';
import { NativeRouter, Route } from '../node_modules/react-native-router/index';
import { View } from '../node_modules/react-native/index';

function App() {
  return (
    <NativeRouter>
      <View>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/example-work' component={ExampleWork}></Route>
      </View>
    </NativeRouter>
  );
}

export default App;
