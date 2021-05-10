import axios from 'axios';

export const getTestData = () => {
    return (dispatch) => {
        return axios.get(`http://localhost:8080/getusers`)
            .then(response => {
                dispatch({
                    type: 'USER_DATA',
                    data: response.data
                })
                return response.data
            }).catch((error) => {
                dispatch({
                    type: 'USER_DATA',
                    data: {}
                })
            })
    };
}

export const addUser = (userData) => {
    return (dispatch) => {
        return axios.post(`http://localhost:8080/addusers`,
        {userData})
            .then(response => {
                dispatch({
                    type: 'ADD_USER_DATA',
                    data: response.data
                })
                return response.data
            }).catch((error) => {
                dispatch({
                    type: 'ADD_USER_DATA',
                    data: {status:'fail'}
                })
            })
    };
}
export const deletedata = (userData) => {
    return (dispatch) => {
        return axios.post(`http://localhost:8080/deleteuser`,
        {userData})
            .then(response => {
                dispatch({
                    type: 'DELETE_USER_DATA',
                    data: response.data
                })
                return response.data
            }).catch((error) => {
                dispatch({
                    type: 'DELETE_USER_DATA',
                    data: {status:'fail'}
                })
            })
    };
}

