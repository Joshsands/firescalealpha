import React from "react";
import ContactForm from "../components/ContactForm";
import { Container, Row } from "react-bootstrap"
import InfoCards from "../components/InfoCards";
import fslogoname from '../assets/fslogoname.png'
import '../App.css'
import { SocialIcon } from 'react-social-icons';

function Home() {
    return (
        <Container>

            <Row className="mb-5 bgimage">
                <h1 className="bg-light py-2 my-2 text-danger d-flex align-items-center justify-content-center mx-auto">Fire Alarm System Drawings</h1>
                <img src={fslogoname} className="mx-auto fslogoname" />
                <ContactForm />
            </Row>

            <Row xs lg="2" className="d-flex justify-content-center align-items-center mt-5 mx-auto">
                <a className="emailLink" href="mailto:info@firescaledesign.com"> <h3 className="text-center bg-danger text-light roundIntro py-1">Contact us at: info@firescaledesign.com</h3> </a>
            </Row>

            <Row xs lg="2" className="d-flex justify-content-center align-items-center mx-auto mb-5">
                <a className="phoneLink" href="tel:5125545803"> <h3 className="text-center bg-danger text-light roundIntro py-1">(512) 554-5803</h3> </a>
            </Row>

            <Row>
                <InfoCards />
            </Row>

            <Row className="d-flex justify-content-center align-items-center my-2 py-2">
                <SocialIcon className="mx-2" url="https://twitter.com/firescaledesign" />
                <SocialIcon className="mx-2" url="https://www.linkedin.com/in/firescaledesign" />
                <SocialIcon className="mx-2" url="https://www.facebook.com/FireScaleDesign" />
                <SocialIcon className="mx-2" url="https://www.reddit.com/user/FireScaleDesign" />
            </Row>

        </Container>
    )
}
export default Home;