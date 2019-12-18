import React from 'react'
import FriendCard from './FriendCard';

const FriendsList = ({friends}) => {
  return (
    <div>
      {friends.map((friend, index) => (
        <FriendCard key={index} friend={friend} />
      ))}
    </div>
  );
}

export default FriendsList
