import React, { createContext, useReducer, useContext, ReactNode } from 'react';

type Movie = any;

interface State {
    favorites: Movie[];
}

type Action =
    | { type: 'ADD_FAVORITE'; payload: Movie }
    | { type: 'REMOVE_FAVORITE'; payload: number };

const initialState: State = {
    favorites: [],
};

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'ADD_FAVORITE':
            return { ...state, favorites: [...state.favorites, action.payload] };
        case 'REMOVE_FAVORITE':
            return {
                ...state,
                favorites: state.favorites.filter((m) => m.id !== action.payload),
            };
        default:
            return state;
    }
}

const MovieContext = createContext<{
    state: State;
    dispatch: React.Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

export const MovieProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <MovieContext.Provider value={{ state, dispatch }}>
            {children}
        </MovieContext.Provider>
    );
};

export const useMovieContext = () => useContext(MovieContext);
