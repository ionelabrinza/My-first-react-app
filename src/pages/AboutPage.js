import {
  Col,
  Row,
  Container,
  Card,
  CardBody,
  CardHeader,
  List,
} from 'reactstrap';

const AboutPage = () => {
  return (
    <Container>
      <Row className="row-content">
        <Col sm="6">
          <h3>About Me</h3>
          <p>
            Hello there! My name is Nicoleta Brinza. I am a web developer, and
            I’m very passionate and dedicated to my work. With 3 years
            experience as a professional web designer/developer, I have acquired
            the skills and knowledge necessary to make your project a success.
          </p>
        </Col>
        <Col sm="6">
          <Card>
            <CardHeader className="text-dark">
              <h3>Facts at a Glance</h3>
            </CardHeader>
            <CardBody>
              <dl className="row">
                <dt className="col-6">Name</dt>
                <dd className="col-6">Nicoleta</dd>
                <dt className="col-6">Address</dt>
                <dd className="col-6">Chicago, USA</dd>
                <dt className="col-6">Study</dt>
                <dd className="col-6">Politehnica Timisoara</dd>
                <dt className="col-6">Degree</dt>
                <dd className="col-6">Master in Digital Media</dd>
              </dl>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row className="row-content">
        <Col sm="6">
          <Card>
            <CardHeader className="text-dark">
              <h3>Services</h3>
            </CardHeader>
            <CardBody>
              <List type="unstyled">
                <li>
                  <i className="fa fa-caret-right"></i>
                  Web Development
                </li>
                <li>
                  <i className="fa fa-caret-right"></i>
                  UX/UI Design
                </li>
                <li>
                  <i className="fa fa-caret-right"></i>
                  Wordpress
                </li>
                <li>
                  <i className="fa fa-caret-right"></i>
                  Digital Marketing
                </li>
              </List>
            </CardBody>
          </Card>
        </Col>
        <Col sm="6">
          <Card>
            <CardHeader className="text-dark">
              <h3>Interests</h3>
            </CardHeader>
            <CardBody>
              <List type="unstyled">
                <li>
                  <i className="fa fa-caret-right"></i>
                  Painting
                </li>
                <li>
                  <i className="fa fa-caret-right"></i>
                  Music
                </li>
                <li>
                  <i className="fa fa-caret-right"></i>
                  Travel & Picknik
                </li>
                <li>
                  <i className="fa fa-caret-right"></i>
                  Golden Retrivers
                </li>
              </List>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
