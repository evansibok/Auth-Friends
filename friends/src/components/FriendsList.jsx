import React from 'react'

const FriendsList = ({friend}) => {
  return (
    <div>
      <div key={friend.id}>
        <h2>{friend.name}</h2>
        <h4>{friend.age}</h4>
        <h4>{friend.email}</h4>
      </div>
    </div>
  );
}

export default FriendsList
