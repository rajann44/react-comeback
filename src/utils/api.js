// Fetch API response of passed URL
const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch data");
  return await response.json();
};

export default fetchData;
