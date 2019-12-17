import React, { useState, useEffect } from "react";

import axiosWithAuth from "./axios";

export default function Dashboard() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth().get(`http://localhost:7000/api/friends`)
      .then(res => {
        debugger
        setFriends(res.data)
      })
      .catch(err => {
        debugger
        alert(err.message)
      });
  }, []);

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
