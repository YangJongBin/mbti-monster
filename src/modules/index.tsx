import { combineReducers } from 'redux';
import initReducer from './init';

const rootReducer = combineReducers({
  initReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
