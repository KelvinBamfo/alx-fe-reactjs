import axios from "axios";

export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`, // ✅ use it here
    },
  });
  return response.data;
};

export const searchUsers = async ({ username, location, minRepos, page = 1 }) => {
  let query = "";
  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;
g
  const response = await axios.get(
    `https://api.github.com/search/users?q=${encodeURIComponent(query)}&page=${page}&per_page=10`,
    {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`, // ✅ here too
      },
    }
  );

  return response.data.items;
};
