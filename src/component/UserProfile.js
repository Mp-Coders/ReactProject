import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/UserProfile.css';

function UserProfile() {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = {
        johnDoe: { username: "johnDoe", email: "johndoe@example.com", joinedDate: "2023-01-15" },
        janeDoe: { username: "janeDoe", email: "janedoe@example.com", joinedDate: "2023-02-20" },
      };
      setUser(userData[username]);
    };
    fetchUser();
  }, [username]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="user-profile-container">
      <h1>User Profile: {user.username}</h1>
      <p>Email: {user.email}</p>
      <p>Joined on: {user.joinedDate}</p>
    </div>
  );
}

export default UserProfile;
