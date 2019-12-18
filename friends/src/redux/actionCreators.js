import * as types from './actionTypes';
import axiosWithAuth from '../axios';


export const login = (loginDetails, history) => dispatch => {
  axiosWithAuth()
    .post(`http://localhost:7000/api/login`, loginDetails)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      history.push("/dashboard");
      dispatch({
        type: types.LOGIN
      })
    })
    .catch(err => err.message);
}

export const getFriends = () => dispatch => {
  axiosWithAuth()
    .get(`http://localhost:7000/api/friends`)
    .then(res => {
      dispatch({
        type: types.GET_FRIENDS,
        payload: res.data,
      })
    })
    .catch(err => err.message);
}

