import React, { useState } from "react";
import { fetchUserData, searchUsers } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);
    setPage(1);

  try {
    if (username && !location && !minRepos) {
      const user = await fetchUserData(username);
      setUsers([user]); // wrap single user in array
    } else {
      // Otherwise → advanced search
      const results = await searchUsers({ username, location, minRepos, page: 1 });
      if (results.length === 0) {
        setError("Looks like we cant find the user");
      } else {
        setUsers(results);
      }
    }
  } catch (err) {
    setError("Looks like we cant find the user");
  } finally {
    setLoading(false);
  }
};

  const loadMore = async () => {
    const nextPage = page + 1;
    try {
      const moreResults = await searchUsers({ username, location, minRepos, page: nextPage });
      setUsers([...users, ...moreResults]);
      setPage(nextPage);
    } catch (err) {
      setError("Looks like we cant find the user");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Filter by location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

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
        {users.length > 0 && (
          <div className="space-y-4">
            {users.map((u) => (
              <div key={u.id} className="p-4 border rounded bg-gray-50">
                <img
                  src={u.avatar_url}
                  alt={u.login}
                  className="w-20 h-20 rounded-full mx-auto"
                />
                <h3 className="text-lg font-semibold text-center mt-2">
                  {u.login}
                </h3>
                <p className="text-center text-gray-600">
                  Location: {u.location || "Not specified"}
                </p>
                <p className="text-center text-gray-600">
                  Public Repos: {u.public_repos ?? "N/A"}
                </p>
                <a
                  href={u.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center mt-2 text-blue-600 hover:underline"
                >
                  View Profile
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Pagination / Load More */}
        {users.length > 0 && (
          <div className="flex justify-center mt-4">
            <button
              onClick={loadMore}
              className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
