import Container from "../componets/Container";
import Row from "../componets/Row";
import Col from "../componets/Col";
import Jumbotron from 'react-bootstrap/Jumbotron'


function Contact() {
    return (
        <div>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12">
                        <h3 style={{ fontSize: 40 }}>Give Me A Buzz</h3>
                    </Col>
                </Row>
                <Jumbotron>
                    <Row>
                        <Col size="md-12">
                            <p style={{ fontSize: 30 }}>Email: <a href="mailto:denzalethouston@gmail.com" rel="noreferrer" target="_blank" type="btn">denzalethouston@gmail.com</a>
                            </p>

                            <p style={{ fontSize: 30 }}>Cell: <a href="tel:480-514-8630" rel="noreferrer" target="_blank" type="btn">(480) 514-8630</a>
                            </p>

                            <p style={{ fontSize: 30 }}>LinkedIn: <a href="https://www.linkedin.com/in/denzale-houston-a36a971b2/" rel="noreferrer" target="_blank" type="btn">
                                <i class="fab fa-linkedin-in">Here</i>
                            </a>
                            </p>

                            <p style={{ fontSize: 30 }}>GitHub: <a href="https://github.com/Denzale" rel="noreferrer" target="_blank" type="btn">
                                <i class="fab fa-github">Here</i>
                            </a>
                            </p>
                        </Col>
                    </Row>
                </Jumbotron>
            </Container>
        </div>


    )
}

export default Contact