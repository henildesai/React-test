const getData = (state = [], action) => {
    switch (action.type) {
        case 'TEMP_DATA':
            return { ...state, temp_data: action.data || {} }
        default:
            return state
    }
}

export default getData;