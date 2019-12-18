import React from "react";

const FriendCard = ({ friend }) => {
  return (
    <div key={friend.id}>
      <h2>{friend.name}</h2>
      <h4>{friend.age}</h4>
      <h4>{friend.email}</h4>
    </div>
  );
};

export default FriendCard;
