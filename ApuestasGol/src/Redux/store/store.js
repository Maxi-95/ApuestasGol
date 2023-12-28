import { createStore } from "redux";
import rootReducer from "../reducers/reducers"; // Aún no hemos creado este archivo

const store = createStore(rootReducer);

export default store;
