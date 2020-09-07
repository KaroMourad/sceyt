import React from "react";
import {combineReducers, createStore} from "redux";
import {Provider} from 'react-redux';
import {devToolsEnhancer} from 'redux-devtools-extension';
import {users} from "./redux/reducers/usersReducer";
import {conversations} from "./redux/reducers/conversationsReducer";
import {messagesReducer} from "./redux/reducers/messagesReducer";

const store = createStore(combineReducers({
    conversations,
    users,
    messages: messagesReducer
}), devToolsEnhancer());


const ReduxProvider = (props) =>
{
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    );
};

export default ReduxProvider;
