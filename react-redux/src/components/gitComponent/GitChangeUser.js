import React, { useState } from "react";
import { connect } from "react-redux";

// action
import { getGitData } from "../../actions/index";

const GitChangeUser = props => {
  const [newUser, setNewUser] = useState("");

  // change handler
  const handleChange = e => {
    const { value } = e.target;
    setNewUser(value);
  };

  // submit handler
  const handleSubmit = e => {
    e.preventDefault();
    // pass newUser to action
    props.getGitData(newUser);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="newUser"
        placeholder="Enter Username"
        value={newUser}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default connect(null, { getGitData })(GitChangeUser);
