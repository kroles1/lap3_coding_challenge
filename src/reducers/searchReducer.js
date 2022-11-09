const initialState = { 
    username: ""
};

export default function  searchReducer (state=initialState, action) {
    switch(action.type){
        case 'SEARCH':
            return { ...state, username: action.payload };
        default:
            return state;
    };
};
