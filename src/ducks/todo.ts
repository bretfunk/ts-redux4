import { defaultState } from "../State";

const KEYS = {
  ADD_TODO: "ADD_TODO",
  UPDATE_ITEM: "UPDATE_ITEM"
};

export const updateItem = (e: any) => {
  return {
    payload: e.target.value,
    type: KEYS.UPDATE_ITEM
  };
};

export const addTodo = () => {
  return {
    type: KEYS.ADD_TODO
  };
};

export const rootReducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case KEYS.UPDATE_ITEM: {
      return { ...state, item: action.payload };
    }
    case KEYS.ADD_TODO: {
      return { ...state, items: [...state.items, state.item], item: "" };
    }
    default:
      return state;
  }
};
