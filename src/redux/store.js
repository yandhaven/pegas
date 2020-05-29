import { createStore, combineReducers } from 'redux';
import dispReducer from "./disp-reducer";
import directorReducer from './director-reducer'
import contabReducer from './contab-reducer';




let reducers = combineReducers({

    dispPage: dispReducer,
    directorPage: directorReducer,
    contabPage: contabReducer

})

let store = createStore(reducers);

window.store = store;

export default store;