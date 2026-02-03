import { useState } from "react";
import axios from "axios";
import Search from "./components/Search";

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
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">GitHub User Search</h1>
      <Search />
      {/* Conditional rendering for user */}
      {user && (
        <div>
          <p>{user.login}</p>
          <img src={user.avatar_url} alt={user.login} width={100} />
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default App;

