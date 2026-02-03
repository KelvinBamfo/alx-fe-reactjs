import axios from "axios";

// Basic single-user fetch (still useful for direct lookups)
export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

// Advanced search with filters
export const searchUsers = async ({ username, location, minRepos }) => {
  // Construct query string
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
  );

  return response.data.items; // returns an array of matching users
};
