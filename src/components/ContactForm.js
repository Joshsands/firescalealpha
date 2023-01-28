import React from "react";
import { Container, Form, Button } from "react-bootstrap"

function ContactForm() {
    return (
        <Container>
            <Form>
                <h1 className="text-center">Need a Design?</h1>
                <Form.Group className="mb-3" controlId="company">
                    <Form.Label>Company</Form.Label>
                    <Form.Control type="text" placeholder="Fire Protection Company" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="john.doe@company.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="tel" placeholder="555-555-5555" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Questions?</Form.Label>
                    <Form.Control as="textarea" rows={6} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Button type="submit">Submit</Button>
                </Form.Group>
            </Form>
        </Container>
    )
}

export default ContactForm;
