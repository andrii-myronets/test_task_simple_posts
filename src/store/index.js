import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {MODULE_NAME as modalModuleName} from './modal/selectors';
import {reducer as modalReducer} from './modal/reducer';

import {MODULE_NAME as postsListModuleName} from './postsList/selectors';
import {reducer as postsListReducer} from './postsList/reducer';

import {MODULE_NAME as postModuleName} from './post/selectors';
import {reducer as postReducer} from './post/reducer';

const rootReducer = combineReducers({
    [modalModuleName]: modalReducer,
    [postsListModuleName]: postsListReducer,
    [postModuleName]: postReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));