import React from "react";
import "../styles/Statistics.css";

function Statistics({ stats }) {
  return (
    <div className="card statistics">
      <h2>Statistics</h2>
      <p>Total Users

      <strong>{stats.totalUsers}</strong>
      </p>
      <p>Active Users: <strong>{stats.activeUsers}</strong></p>
      <p>New Signups: <strong>{stats.newSignups}</strong></p>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${stats.activePercentage}%` }}
        >
          {stats.activePercentage.toFixed(1)}%
        </div>
      </div>
    </div>
  );
}

export default Statistics;
