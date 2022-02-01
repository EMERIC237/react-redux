import { deleteFormFromStore, updateFormOnStore, addFormFromStore } from "./reducerFunction";

const INITIAL_STATE = {
  forms: [],
};

//Actions creators
export const gotForms = (forms) => {
  return {
    type: "LOADFORM",
    forms,
  };
};

export default function formReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LOADFORM": {
      return {
        ...state,
        forms: action.forms,
      };
    }

    case "DELETEFORM": {
      return deleteFormFromStore(state, action);
    }

    case "ADDFORM": {
      return addFormFromStore(state, action);
    }

    case "UPDATEFORM": {
      return updateFormOnStore(state, action.payload);
    }

    default:
      console.log("ras");
  }
  return state;
}

export const getForm = () => (dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      dispatch(gotForms(data));
    });
};

export const deleteForm = (id) => {
  return {
    type: "DELETEFORM",
    id: id,
  };
};

export const updateForm = (id, title, body) => {
  return {
    type: "UPDATEFORM",
    payload: {
      id,
      title,
      body
    }
  };
};

export const addForm = () => {
  return {
    type: "ADDFORM",
  };
};

