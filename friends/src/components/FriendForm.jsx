import React, { useState } from "react";
import { connect } from "react-redux";

import { addNewFriend } from "../redux/actionCreators";

const initialFriendForm = {
  id: "",
  fullName: "",
  age: "",
  email: ""
};

function FriendForm({ addNewFriend }) {
  const [friendForm, setFriendForm] = useState(initialFriendForm);

  const onInputChange = evt => {
    setFriendForm({
      ...friendForm,
      [evt.target.name]: evt.target.value
    });
  };

  const submitFriend = evt => {
    evt.preventDefault();
    const newFriend = {
      name: friendForm.fullName,
      age: friendForm.age,
      email: friendForm.email
    };
    if (newFriend) {
      addNewFriend(newFriend);
    }
    setFriendForm(initialFriendForm);
  };

  return (
    <div>
      <form onSubmit={submitFriend}>
        <label>
          Name
          <input
            type="text"
            id="fullName"
            name="fullName"
            onChange={onInputChange}
            value={friendForm.fullName}
          />
        </label>
        <br />
        <label>
          Age
          <input
            type="text"
            id="age"
            name="age"
            onChange={onInputChange}
            value={friendForm.age}
          />
        </label>
        <br />
        <label>
          Email
          <input
            type="email"
            id="email"
            name="email"
            onChange={onInputChange}
            value={friendForm.email}
          />
        </label>
        <br />
        <button>Add Friend</button>
      </form>
    </div>
  );
}

export default connect(state => state, { addNewFriend })(FriendForm);
