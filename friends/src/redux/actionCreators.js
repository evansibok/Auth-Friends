import * as types from './actionTypes';
import axiosWithAuth from '../axios';

export const getFriends = () => dispatch => {
  axiosWithAuth()
    .get(`http://localhost:7000/api/friends`)
    .then(res => {
      debugger
      dispatch({
        type: types.GET_FRIENDS,
        payload: res.data,
      })
    })
    .catch(err => {
      debugger
    });
}