import "../App.css";
import Row from "./Row"
import Colum from "./Col"
import Container from "./Container"

function Footer() {
  return (
    <Container fluid>
      <footer style={{margin: '0 auto', alignContent: 'center', textAlign: 'center'}}>
        <Row>
          <Colum className="social-media" size="md-12">
          </Colum>
          <span style={{margin: '0 auto', alignContent: 'center', textAlign: 'center'}}>Denzale Houston 2021 </span>
        </Row>
      </footer>
    </Container>

  );
}

export default Footer;