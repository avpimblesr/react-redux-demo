import { BUY_CAKE } from './cakeTypes'

// bake 10 cakes before opening the shop
const initialState = {
  numOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE: return {
      ...state,
      numOfCakes: state.numOfCakes - 1
    }
    default: return state
  }
}

export default cakeReducer