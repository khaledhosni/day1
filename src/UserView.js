import React from "react";

const UserView = ({ user }) => {
  return (
    <div>
      <img src={user.url} className="avatar" />
      <h4> {user.username}</h4>
    </div>
  );
};

export default UserView;
