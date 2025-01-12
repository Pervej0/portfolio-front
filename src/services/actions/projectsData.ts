"use server";

export const ProjectsData = async () => {
  const response = await fetch("../../asset/projectsData.json");
  const json = await response.json();
};
