import React, { useEffect } from "react";
import { connect } from 'react-redux';

import * as actionCreators from '../redux/actionCreators'
import FriendsList from "./FriendsList";

export function Dashboard({ friends, getFriends }) {
  
  useEffect(() => {
    getFriends();
  }, [getFriends]);

  return (
    <div>
      {friends.map(friend => <FriendsList friend={friend} />)}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    friends: state.friends
  }
}
export default connect(
  mapStateToProps,
  actionCreators,
)(Dashboard);
