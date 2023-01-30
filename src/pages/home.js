import React from "react";
import ContactForm from "../components/ContactForm";
import { Container, Row } from "react-bootstrap"
import InfoCards from "../components/InfoCards";
import fslogoname from '../assets/fslogoname.png'
import '../App.css'

function Home() {
    return (
        <Container>

            <Row className="mb-5 bgimage">
<img src={fslogoname} className="mx-auto fslogoname" />
                <ContactForm />
            </Row>
            <Row>
                <InfoCards />
            </Row>
        </Container>
    )
}
export default Home;
