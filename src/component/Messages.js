import React from "react";
import "../styles/Messages.css";

function Messages({ messages }) {
  return (
    <div className="card messages">
      <h2>Messages</h2>
      <p>{messages.msg1}</p>
    </div>
  );
}

export default Messages;
