// rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';

const rootReducer = combineReducers({
  user: userReducer,
  // Add more reducers here
});

export default rootReducer;
