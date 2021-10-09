import { GET_CONTENT_SUCCESS, DELETE_CONTENT } from "./action-type";
import { addChildren, deleteChildren } from "./utils";

import { IReducer } from "../data-types";

const initialState = {
  content: {
    id: 0,
    title: "",
    children: [],
  },
};

const commonReducer = (state = initialState, { type, payload }: IReducer) => {
  switch (type) {
    case GET_CONTENT_SUCCESS:
      const newState =
        payload.id === 0
          ? payload
          : addChildren(state.content, payload.id, payload);
      return {
        ...state,
        content: { ...newState },
      };
    case DELETE_CONTENT:
      return {
        ...state,
        content: { ...deleteChildren(state.content, payload) },
      };
    default: {
      return state;
    }
  }
};

export { commonReducer };
