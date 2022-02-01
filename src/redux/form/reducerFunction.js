export const deleteFormFromStore = (state, action) => {
    return {
        forms: [...state.forms.filter((form) => (form.id !== action.id))]
    }
}

export const updateFormOnStore = (state, action) => {
    console.log(action);
    const index = state.forms.findIndex((form) => form.id === action.id)
    const newForms = [...state.forms];
    newForms[index] = {...newForms[index], 
        title: action.title,
        body: action.body
    }
    return {
        ...state,
        forms: newForms
    }
}

export const addFormFromStore = (state, action) => {
    return {
        // const newElement = {}
        // ...state.forms.push(newElement);
        forms: []
    }
}
