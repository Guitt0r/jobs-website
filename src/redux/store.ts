import {Action, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import jobsReducer from "./jobsReducer";
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";

const rootReducer = combineReducers({
    job: jobsReducer
    //in case,we need more reducers in future
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<RootState, unknown, any>

export type AppActionTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never
export type AppThunk<A extends Action = Action, R = void> = ThunkAction<R, RootState, unknown, A>

//@ts-ignore
window.store = store