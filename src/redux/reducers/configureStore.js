import { createStore } from "redux";

import reducers from "./index.js";

export default function configureStore() {
  return createStore(reducers);
}
