import { produce, enableAllPlugins } from "immer";
import store from "../store";

enableAllPlugins();

export const initialState = {
  completed: [],
};

const projectReducer = (state = initialState, action) => {
  return produce((state, draft) => {
    switch (action.type) {
      case UPDATE_COMPLETED:
        draft.completed.push(action.payload);
        break;
    };
  })
}

export default projectReducer;
