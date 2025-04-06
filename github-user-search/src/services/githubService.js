import axios from "axios";

export const searchUsers = async ({ username, location, minRepos }) => {
  // Construct the GitHub Search API query
  let query = username ? `${username} in:login` : "";

  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(
    query
  )}&per_page=10`;

  const response = await axios.get(url);
  const users = response.data.items;

  // Fetch additional user details (repos, location) if needed
  const detailedUsers = await Promise.all(
    users.map(async (user) => {
      const details = await axios.get(user.url); // Gets full profile
      return details.data;
    })
  );

  return detailedUsers;
};
