const initialState = {
    myList: [],
    openInfoBook: {},
    popupOpen: false,
    listOpen: false
};

let newState;

export const appStateReducer = (state = initialState, action) => {
    switch (action.type) {
        // ADD BOOK CASE
        case 'ADD_BOOK':
            var myList = [...state.myList, 
                action.payload];
            
            newState = Object.assign({}, state, {
                myList: myList });
            
            return newState;
            break;

            // REMOVE BOOK CASE
        case 'REMOVE_BOOK':
                 myList = state.myList.filter(item => 
                item.id !== action.payload);
                
                newState = Object.assign({}, state, {
                myList: myList });
                
                return newState;

            // OPEN INFO BOOK CASE
        case 'OPEN_INFO_BOOK':
                newState = Object.assign({}, state, {
                openInfoBook: action.payload,
                popupOpen: true });
                
                return newState;
                break;

            // CLOSE INFO BOOK CASE
        case 'CLOSE_INFO_BOOK':
                newState = Object.assign({}, state, {
                popupOpen: false });

                return newState;
                break;
    
            // OPEN MYLIST CASE
        case 'OPEN_MYLIST':
                newState = Object.assign({}, state, {
                listOpen: true });
                
                return newState;
                break;

            // CLOSE MYLIST CASE
        case 'CLOSE_MYLIST':
                newState = Object.assign({}, state, {
                listOpen: false });

                return newState;
                break;
    
        default:
            return state;
    }

}

