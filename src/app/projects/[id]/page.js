import Error from "./components/error/error";
import Header from "./components/header/header";
import ProjectDetails from "./components/project_details/project_details";
import ImagesHolder from "./components/images_holder/images_holder";
import getProjectsData from "@/app/_lib/getProjectData";

export default async function ProjectId({ params }) {
  const { id } = params;
  const data = await getProjectsData(id);

  if (data.length < 1) {
    return <Error />;
  }

  return (
    <div className="max-w-[100vw]">
      <div className="w-full px-7 flex flex-col items-center justify-center gap-12 lg:px-16">
        <Header projectTitle={params.id} />
        <ProjectDetails data={data[0]} />
        <ImagesHolder images={data[0].images} />
      </div>
    </div>
  );
}
