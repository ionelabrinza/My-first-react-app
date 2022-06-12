import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ProjectDetail from '../features/projects/ProjectDetail';
import ProjectsList from '../features/projects/ProjectsList';
import { selectProjectById } from '../features/projects/projectsSlice';

const ProjectsDirectoryPage = () => {
  const [projectId, setProjectId] = useState(0);
  const selectedProject = selectProjectById(projectId);

  return (
    <Container>
      <Row>
        <Col sm="5" md="7">
          <ProjectsList setProjectId={setProjectId} />
        </Col>
        <Col sm="7" md="5">
          <ProjectDetail project={selectedProject} />
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectsDirectoryPage;
