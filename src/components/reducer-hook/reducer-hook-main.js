import React, { useReducer } from 'react'
import './App.css'
import CounterOne from './CounterOne'
import CounterTwo from './CounterTwo'
import CounterThree from './CounterThree'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'
import DataFetchingOne from './DataFetchingOne'
import DataFetchingTwo from './DataFetchingTwo'

const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

export const CountContext = React.createContext()

function ReducerHookMain() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <CountContext.Provider
            value={{ countState: count, countDispatch: dispatch }}
        >
            <div className="App">
                {/* <CounterOne /> */}
                {/* <CounterTwo /> */}
                {/* <CounterThree /> */}
                {/* {count} */}
                {/* <ComponentA /> */}
                {/* <ComponentB /> */}
                {/* <ComponentC /> */}
                {/* <DataFetchingOne /> */}
                <DataFetchingTwo />
            </div>
        </CountContext.Provider>
    )
}

export default ReducerHookMain
