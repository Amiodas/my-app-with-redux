import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import counterReducer from "./services/reducers/counterReducer";
import todosReducer from "./services/reducers/todosReducer";

const rootReducer = combineReducers({
  countR: counterReducer,
  todosR: todosReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
