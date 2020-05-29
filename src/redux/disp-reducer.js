import React from 'react'
let initialState = {
    trucks: null
}
export let setTrucks = (trucks) => {
    return { type: 'SET_TRUCKS', trucks }
}
const dispReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TRUCKS': {
            
            return { ...state, trucks: action.trucks }
        }

        default: {
            
            return { ...state }
        }

    }

}
export default dispReducer;