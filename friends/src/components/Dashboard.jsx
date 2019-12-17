import React from "react";
import { connect } from 'react-redux';

import axiosWithAuth from '../axios'

export function Dashboard() {
  

  return (
    <div>
      {/* {friendsList.map(friend => {
        return (
          <div key={friend.id}>
            <h2>{friend.name}</h2>
            <h4>{friend.age}</h4>
            <h4>{friend.email}</h4>
          </div>
        );
      })} */}
    </div>
  );
}

export default Dashboard;
