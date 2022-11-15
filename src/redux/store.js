import {applyMiddleware, legacy_createStore} from "redux";
import jobsReducer from "./jobsReducer";
import thunk from "redux-thunk";



export const store = legacy_createStore(jobsReducer, applyMiddleware(thunk))
window.store = store