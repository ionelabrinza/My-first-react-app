import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    <footer className="site-footer">
      <Container>
        <Row>
          <Col xs="6" sm="6" className="text-center text-md-left">
            <p>Copyright &copy; 2022 </p>
          </Col>
          <Col xs="6" sm="6" className="text-center text-md-left">
            <a className="btn" href="http://linkedin.com/">
              <i className="fa fa-linkedin" />
            </a>{' '}
            <a className="btn" href="http://www.facebook.com/">
              <i className="fa fa-github" />
            </a>{' '}
            <a className="btn" href="http://twitter.com/">
              <i className="fa fa-twitter" />
            </a>{' '}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
