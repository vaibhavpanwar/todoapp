import {
  FETCH_TASKS,
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  COMPLETE_TASK,
  UNCOMPLETE_TASK,
  FAIL,
  UPDATE_INPUT,
} from "./types";

export default (state, action) => {
  switch (action.type) {
    case FETCH_TASKS:
      return {
        ...state,
        loading: false,
        tasks: action.payload,
      };
    case UPDATE_INPUT:
      return {
        ...state,
        updateInput: action.payload.taskUpdateData,
        updateInputId: action.payload.taskId,
      };
    case UPDATE_TASK: {
      return {
        ...state,
        loading: true,
        updateInput: "",
        updateInputId: null,
      };
    }
    case COMPLETE_TASK:
    case UNCOMPLETE_TASK:
    case DELETE_TASK:
    case ADD_TASK:
    case UPDATE_TASK:
      return {
        ...state,
        loading: true,
      };

    case FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
