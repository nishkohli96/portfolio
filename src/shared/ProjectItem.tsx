import { ProjectItemObj } from '_Constants/ProjectsList';

interface ProjectItemProps {
    project: ProjectItemObj;
}

const ProjectItem = (props: ProjectItemProps) => {
    const { project } = props;
    return (
        <div className="respdiv my-3 bg-gray-700 p-4 rounded-md">
            <div className="mb-3">
                <span className="text-blue-400 underline font-bold">
                    <a href={project.url} target="_blank" rel="noreferrer">
                        {project.name}
                    </a>
                </span>
            </div>
            <div>{project.desc}</div>
        </div>
    );
};

export default ProjectItem;
