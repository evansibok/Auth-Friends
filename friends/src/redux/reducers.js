import * as types from './actionTypes';

const initialFriends = [];

export const friendsReducer = (friends = initialFriends, action) => {
  switch(action.type){
    default:
      return friends;
  }
}