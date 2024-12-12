import React from "react";
import UserView from "./UserView";

const MyApp = () => {
  const user = {
    username: "Khaled",
    email: "khaled@gmail.com",
    url: "https://icons.iconarchive.com/icons/gartoon-team/gartoon-apps/256/adobe-air-icon.png",
  };

  return (
    <div>
      <h1 style={{ color: "red", fontSize: 33 }}>Welcome to react</h1>
      <UserView user={user} />
    </div>
  );
};

export default MyApp;
