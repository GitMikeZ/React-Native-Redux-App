// Index.ios.js - place code in here for IOS!!!!

// Import a library to help create a component
import React from 'react';
import ReactNative from 'react-native';
import Header from './src/components/header';

// Create a component
const App = () => (
    <text>Some Text</text>
);

// Render it to the device
// Note: 'albums' is the app's name passed in
ReactNative.AppRegistry.registerComponent('albums', () => App);