import { useEffect, useState } from "react";
import { BASE_URL } from "../constants";
const Leaderboeard = () => {
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    const getTopUsers = async () => {
      const res = await fetch(`${BASE_URL}/user/top-ten`);
      const data = await res.json();
      setTopUsers(data.data.users);
    };
    getTopUsers();
  }, []);

  return (
    <div className="mx-auto mt-20 flex w-full justify-between">
      <div>
        <h2>Username</h2>
        <ul>
          {topUsers.map((user) => (
            <li key={user._id}>{user.username}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Submission Time (in Seconds)</h2>
        <ul>
          {" "}
          {topUsers.map((user) => (
            <li key={user._id}>{user.fastestTime}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Score</h2>
        <ul>
          {topUsers.map((user) => (
            <li key={user._id}>{user.highestScore}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Leaderboeard;
