import { combineReducers, createStore } from "redux"
import navLoadingReducer from "./reducers/navLoadingReducer"
    

const rootReducer = combineReducers({
    navLoading: navLoadingReducer
})

    
export const store = createStore(rootReducer)
export type RootState = ReturnType<typeof rootReducer>