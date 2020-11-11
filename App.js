import React from "react";
import { View, Text } from "react-native";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import PlaceNavigator from "./Navigation/PlaceNavigator";
import PLaceRducer from "./store/PlaceReducer";
import {init} from './helpers/db'

init()
  .then(() => {
    console.log('Initialized database');
  })
  .catch(err => {
    console.log('Initializing db failed.');
    console.log(err);
  });
  
const rootReducer = combineReducers({
  places: PLaceRducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = () => {
  return (
    <Provider store={store}>
      <PlaceNavigator />
    </Provider>
  );
};

export default App;
