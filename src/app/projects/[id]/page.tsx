import ProjectDetailComponent from "@/features/projects/components/ProjectDetail";

const ProjectDetail = ({ params }: { params: { id: string } }) => {
  return <ProjectDetailComponent id={params.id} />;
};

export default ProjectDetail;
