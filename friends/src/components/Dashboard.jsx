import React, { useEffect } from "react";
import { connect } from 'react-redux';

import * as actionCreators from '../redux/actionCreators'

export function Dashboard({ friends, getFriends }) {
  
  useEffect(() => {
    getFriends();
  }, [getFriends]);

  return (
    <div>
      {friends.map(friend => {
        return (
          <div key={friend.id}>
            <h2>{friend.name}</h2>
            <h4>{friend.age}</h4>
            <h4>{friend.email}</h4>
          </div>
        );
      })}
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
