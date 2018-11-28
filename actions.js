export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_STARTED = "ADD_TODO_STARTED";
export const ADD_TODO_FAILURE = "ADD_TODO_FAILURE";

export const addTodo = () => {
    return dispatch => {
        dispatch(addTodoStarted());

        setTimeout(() => {
            dispatch(addTodoSuccess({ text: 'xin chao' }));
        }, 3000);
    };
};

const addTodoSuccess = todo => ({
    type: ADD_TODO_SUCCESS,
    payload: {
        ...todo
    }
});

const addTodoStarted = () => ({
    type: ADD_TODO_STARTED
});

const addTodoFailure = error => ({
    type: ADD_TODO_FAILURE,
    payload: {
        error
    }
});