import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LibraryList from './components/LibraryList';

const app = () => {
    return (
        /* Provider tag serves as glue from react and redux */
        <Provider store={createStore(reducers)}>
            <View style={{ flex: 1 }}>
                <Header headerText="Tech Stack"/>
                <LibraryList />
            </View>
        </Provider>
    );
};

export default app;