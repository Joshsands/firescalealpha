import React from "react";
import ContactForm from "../components/ContactForm";
import { Container, Row } from "react-bootstrap"

function Home() {
    return (
        <Container>
            <Row>
                This is homepage
            </Row>
            <Row>
                <ContactForm />
            </Row>
        </Container>
    )
}
export default Home;
