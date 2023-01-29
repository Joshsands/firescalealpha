import React from "react";
import ContactForm from "../components/ContactForm";
import { Container, Row } from "react-bootstrap"
import InfoCards from "../components/InfoCards";

function Home() {
    return (
        <Container>
            <Row className="mb-5">
                <ContactForm />
            </Row>
            <Row>
                <InfoCards />
            </Row>
        </Container>
    )
}
export default Home;
