import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./footer.css"



function Footer() {
    return(
        <footer>
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        Jourdan Case
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        Designed by Jourdan Case
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;