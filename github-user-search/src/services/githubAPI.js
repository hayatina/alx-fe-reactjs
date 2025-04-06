// src/services/githubAPI.js
const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export async function fetchFromGitHub(endpoint) {
  const response = await fetch(`https://api.github.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${GITHUB_API_KEY}`,
    },
  });

  if (!response.ok) throw new Error("GitHub API error");

  return response.json();
}
