const getProjectsData = async (id) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/projects?projectTitle=${id}`,
      {
        cache: "no-store", // Ensure fresh data
      }
    );

    if (!response.ok) {
      console.error("API response not ok:", response.status);
      return [];
    }

    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("fetching error:", error);
    return [];
  }
};

export default getProjectsData;
