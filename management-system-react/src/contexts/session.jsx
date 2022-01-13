import React, { useReducer } from 'react';

const initialState = {
    user: undefined,
};

const sessionContext = React.createContext();

function reducer(state, action) {
    switch(action.type) {
        case 'SAVE_USER':
            return {
                ...state,
                user: action.payload,
            }
        default:
            return state;
    }
}

function SessionContextProvider(props) {
    const [session, dispatch] = useReducer(reducer, initialState);
    return <sessionContext.Provider value={{ session, dispatch }}>{props.children}</sessionContext.Provider>
}

export { sessionContext, SessionContextProvider };