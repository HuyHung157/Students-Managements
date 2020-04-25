import * as ActionType from "../contants/ActionTypes";

let initialState = {
    listStudent: [],
    firstPage: false,
    lastPage: false,
    pageSize: 2,
    pageNumber: 0,
};

const locateReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_LIST_STUDENT:
            state.listStudent = action.listStudent;
            return { ...state };
        case ActionType.SET_PAGE_NUMBER:
            state.pageNumber = action.pageNumber;
            return { ...state };
        default:
            return { ...state };
    }
};

export default locateReducer;
