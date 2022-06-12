import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from 'reactstrap';
import NicoletaLogo from '../app/assets/img/butterfly-logo.png';

const HomePage = () => {
  return (
    <Container>
      <Row>
        <Col xs="12" md="6">
          <Card>
            <CardImg top src={NicoletaLogo} alt="nicoleta" />
          </Card>
        </Col>
        <Col xs="12" md="6">
          <CardTitle tag="h2">NICOLETA BRINZA</CardTitle>
          <CardText>Creative Developer</CardText>
          <Button>Get in Touch</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
