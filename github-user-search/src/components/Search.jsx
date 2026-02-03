import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUser(null);

    try {
      const data = await fetchUserData(username);
      
      // Apply extra filters manually
      if (
        (location && data.location?.toLowerCase() !== location.toLowerCase()) ||
        (minRepos && data.public_repos < parseInt(minRepos))
      ) {
        throw new Error("Filtered out");
      }

      setUser(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Username */}
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Location */}
        <input
          type="text"
          placeholder="Filter by location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Minimum Repositories */}
        <input
          type="number"
          placeholder="Minimum repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Search
        </button>
      </form>

      {/* Results */}
      <div className="mt-6">
        {loading && <p className="text-gray-500">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {user && (
          <div className="p-4 border rounded-lg bg-gray-50">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-24 h-24 rounded-full mx-auto"
            />
            <h3 className="text-lg font-semibold text-center mt-2">
              {user.name || user.login}
            </h3>
            <p className="text-center text-gray-600">{user.location}</p>
            <p className="text-center text-gray-600">
              Public Repos: {user.public_repos}
            </p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center mt-2 text-blue-600 hover:underline"
            >
              View Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
