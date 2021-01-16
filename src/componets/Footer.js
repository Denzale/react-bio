import "../App.css";
import Row from "./Row"
import Col from "./Col"
import Container from "./Container"

function Footer() {
  return (
    <Container fluid>
      <footer style={{margin: '0 auto', alignContent: 'center', textAlign: 'center'}}>
        <Row>
          <Col className="social-media" size="md-12">
          </Col>
          <span style={{margin: '0 auto', alignContent: 'center', textAlign: 'center'}}>Denzale Houston 2021 </span>
        </Row>
      </footer>
    </Container>

  );
}

export default Footer;