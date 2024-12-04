import React from "react";
import "./App.css";
import UserInfo from "./component/UserInfo";
import Statistics from "./component/Statistics";
import Messages from "./component/Messages";

function App() {
  const userData = {
    name: "Anabia",
    email:<a href="url"> anabia@gmail.com </a> ,
    role: "Administrator",
    profilePicture: "femalepic.jpg"
  };

  const statisticsData = {
    totalUsers: 1200,
    activeUsers: 870,
    newSignups: 30,
    activePercentage: (870 / 1200) * 100
  };

  const messagesData = {
    msg1:"Welcome to the dashboard!",
    msg2:"Remember to check your tasks for today.",
    msg3:"Your weekly report is ready to view."
}



  return (
    <div className="dashboard">
      <div className="grid-container">
        <div className="grid-item">
          <UserInfo user={userData} />
        </div>
        <div className="grid-item">
          <Statistics stats={statisticsData} />
        </div>
        <div className="grid-item">
          <Messages messages={messagesData} />
        </div>
      </div>
    </div>
  );
}

export default App;
