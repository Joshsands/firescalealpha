import React from "react";
import { Container, Form, Button } from "react-bootstrap"

function ContactForm() {
    return (
        <Container>
            <Form className="w-50 mx-auto">
                <h1 className="text-center m-2 text-light">Need a Fire Alarm Design?</h1>
                <Form.Group className="mb-3" controlId="company">
                    <Form.Label className="text-light">Company</Form.Label>
                    <Form.Control type="text" placeholder="Fire Protection Company" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label className="text-light">Email address</Form.Label>
                    <Form.Control type="email" placeholder="john.doe@company.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                    <Form.Label className="text-light">Phone</Form.Label>
                    <Form.Control type="tel" placeholder="555-555-5555" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="text-light">Questions?</Form.Label>
                    <Form.Control as="textarea" rows={6} />
                </Form.Group>

                <Form.Group className="d-grid mb-3 w-50 mx-auto">
                    <Button type="submit" variant="secondary" size="lg"><h2>Submit</h2></Button>
                </Form.Group>
            </Form>
        </Container>
    )
}

export default ContactForm;
