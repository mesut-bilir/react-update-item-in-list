import { createStore, combineReducers} from 'redux';
import CarReducer from './reducers/carReducer';
 
const rootReducer = combineReducers({
  car: CarReducer,
});
 
export const store = createStore(rootReducer);