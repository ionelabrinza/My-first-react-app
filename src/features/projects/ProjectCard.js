import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const ProjectCard = ({ project }) => {
  const { image, name } = project;
  return (
    <Card>
      <CardImg width="100%" src={image} alt={name} />
      <CardImgOverlay>
        <CardTitle>{name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
};

export default ProjectCard;
