const initialState = {
    myList: [],
    openInfoBook: {},
    popupOpen: false,
    listOpen: false
};

let newState;

const AppStateReducer = (state = initialState, action) => {
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
            var myList = state.myList.filter(item => 
                item.id !== action.payload);
            
            newState = Object.assign({}, state, {
                myList: myList });
            
            return newState;
            break;

            // OPEN INFO BOOK CASE
        case 'OPEN_INFO_BOOK':
                newState = Object.assign({}, state, {
                popupOpen: true });
                
                return newState;
                break;

            // CLOSE INFO BOOK CASE
        case 'CLOSE_INFO_BOOK':
                newState = Object.assign({}, state, {
                popupOpen: false });

                return newState;
                break;
    
        default:
            return state;
            break;
    }
}