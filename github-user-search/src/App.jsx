import { useState } from "react";
import axios from "axios";

function App() {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await axios.get("https://api.github.com/users/octocat");
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <button onClick={fetchUser}>Fetch Octocat</button>
      {user && (
        <div>
          <p>{user.login}</p>
          <img src={user.avatar_url} alt={user.login} width={100} />
          <a href={user.html_url} target="_blank">View Profile</a>
        </div>
      )}
    </div>
  );
}

export default App;

