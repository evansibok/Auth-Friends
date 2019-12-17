import React, { useState, useEffect } from "react";

import axiosWithAuth from '../axios'

export function Dashboard() {
  const [friendsList, setFriendsList] = useState([]);

  // useEffect(() => {
  //   axiosWithAuth()
  //     .get(`http://localhost:7000/api/friends`)
  //     .then(res => {
  //       debugger
  //     })
  //     .catch(err => {
  //       debugger
  //     });
  // }, []);

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
