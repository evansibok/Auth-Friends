import * as types from './actionTypes';

const initialFriends = [];

export const friendsReducer = (friends = initialFriends, action) => {
  switch(action.type){
    case types.GET_FRIENDS:
      return action.payload;
    default:
      return friends;
  }
}