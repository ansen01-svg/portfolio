const getProjectsData = async (id) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/projects?projectTitle=${id}`
    );

    if (!response.ok) {
      const data = await response.json();
      console.log(data);
      return [];
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("fetching error- ", error);
  }
};

export default getProjectsData;
