import Container from "../componets/Container";
import Row from "../componets/Row";
import Col from "../componets/Col";
import Jumbotron from 'react-bootstrap/Jumbotron'
import styled from 'styled-components';

const FormDiv = styled.div`
  margin: 0 auto;
  width: 50%;
`

const FormLabel = styled.label`
  display: block;
`

const FormInput = styled.input`
  width: 100%;
`

const CommentInput = styled.textarea`
  width: 100%;
  height: 6em;
`

function Contact () {
    return (
        <div>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-12">
                        <h3 style={{ fontSize: 40 }}>Contact</h3>
                    </Col>
                </Row>
                <Jumbotron>
                    <Row>
                             <FormDiv>
                                    <form action="https://formspree.io/denzalethouston@gmail.com" method="POST" id="contactform">
                                        <div>
                                            <FormLabel>Name:</FormLabel>
                                            <FormInput type="text" name="name" />
                                        </div>
                                        <div>
                                            <FormLabel>Email:</FormLabel>
                                            <FormInput type="text" name="_replyto" />
                                        </div>
                                        <div>
                                            <FormLabel>Comment:</FormLabel>
                                            <CommentInput name="comment" />
                                        </div>
                                        <button type="submit">Submit</button>
                                    </form>
                                </FormDiv>
\                       <Col size="md-12">
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
                            <div>


                            </div>
                        </Col>
                    </Row>
                </Jumbotron>
            </Container>
        </div>


    )
}

export default Contact
