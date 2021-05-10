import axios from 'axios';

export const getTestData = () => {
    return (dispatch) => {
        return axios.get(`http://localhost:8080/`)
            .then(response => {
                dispatch({
                    type: 'TEMP_DATA',
                    data: response.data
                })
                return response.data
            }).catch((error) => {
                dispatch({
                    type: 'TEMP_DATA',
                    data: {}
                })
            })
    };
}
