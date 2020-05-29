import { createStore, combineReducers } from 'redux';
import dispReducer from "./disp-reducer";
import directorReducer from './director-reducer'



let reducers = combineReducers({

    dispPage: dispReducer,
    directorPage: directorReducer

})

let store = createStore(reducers);

window.store = store;

export default store;