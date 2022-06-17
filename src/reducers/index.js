// yha root reducer hoga 

import changeTheNumber from "./upDown"

import { combineReducers } from "redux"

export const rootReducer = combineReducers({
    // yha per jitna task perfomed hoga usko call krna hai
    // es kai under sare state hoga  
    changeTheNumber
})