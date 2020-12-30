// import redux from 'redux'
const redux = require('redux')

const createStore = redux.createStore

const BUY_CAKE = 'BUY_CAKE'

function buyCake() { // action creater is function that returns an action
    return {// action is object with type property
        type: BUY_CAKE,
        info: 'First Redux Action'
    }
}

const initialState = {
    noOfCakes:10
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case BUY_CAKE :
            return {
                ...state,//make a copy of the state object an only update the noOfCakws
                noOfCakes:state.noOfCakes - 1
            }
        default : return state
    }
}

const store = createStore(reducer)
console.log('initial state ', store.getState())
const unsubscribe = store.subscribe(() => console.log('updated state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()

// responsibilities of redux store
// 1. Hold the application state
// 2. Allow access to the state via getState()
// 4. Register listeners via subscribe(listener)
// 3. Allow state to be updated via dispatch(action)
// 5. Handle unregistering of listeners via function returned bu subscribe(listener)