// Index.ios.js - place code in here for IOS!!!!

// Import a library to help create a component
import React from 'react';
import ReactNative from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList.js';


// Create a component
const App = () => (
    <View>
        <Header headerText={'Albums'} />
        <AlbumList />
    </View>
);

// Render it to the device
// Note: 'albums' is the app's name passed in
ReactNative.AppRegistry.registerComponent('albums', () => App);