import { PROJECTS } from '../../app/shared/PROJECTS';
import ProjectCard from './ProjectCard';
import { Row, Col } from 'reactstrap';
import { selectAllProjects } from './projectsSlice';

const ProjectsList = ({ setProjectId }) => {
  const projects = selectAllProjects();
  return (
    <Row className="ms-auto">
      {projects.map((project) => {
        return (
          <Col
            md="5"
            className="m-4"
            key={project.id}
            onClick={() => setProjectId(project.id)}
          >
            <ProjectCard project={project} />
          </Col>
        );
      })}
    </Row>
  );
};

export default ProjectsList;
