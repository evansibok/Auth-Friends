import * as types from './actionTypes';

const initialFriends = [];
export const friendsReducer = (friends = initialFriends, action) => {
  switch (action.type) {
    case types.GET_FRIENDS:
      return action.payload;
    case types.ADD_FRIEND:
      return [...friends, action.payload];
    default:
      return friends;
  }
}

const initialState = {
  isLoading: false,
}
export const userReducer = (user = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...user,
        isLoading: false,
      };
    case types.LOGIN_LOADING:
      return {
        ...user,
        isLoading: true,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...user,
        isLoading: false,
      }
    default:
      return user
  }
}