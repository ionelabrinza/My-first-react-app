import { Container, Row, Col } from 'reactstrap';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <Container>
      <Row className="row-content align-items-center">
        <Col sm="4">
          <h5>Get in touch</h5>
        </Col>
        <Col>
          <a role="button" className="btn btn-link" href="github">
            <i className="fa fa-github" /> Github
          </a>
          <br />
          <a
            role="button"
            className="btn btn-link"
            href="mailto:ionela.brinza@yahoo.com"
          >
            <i className="fa fa-envelope-o" /> ionela.brinza@yahoo.com
          </a>
        </Col>
      </Row>
      <Row className="row-content">
        <Col xs="12">
          <h2>Get in Touch</h2>
          <hr />
        </Col>
        <Col md="10">
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
