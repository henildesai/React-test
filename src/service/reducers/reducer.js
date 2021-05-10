const getData = (state = [], action) => {
    switch (action.type) {
        case 'USER_DATA':
            return { ...state, user_data: action.data || {} }
        case 'ADD_USER_DATA':
                return { ...state, add_data: action.data || {} }
        case 'DELETE_USER_DATA':
                return { ...state, dalate_data: action.data || {} }
        default:
            return state
    }
}

export default getData;