import React from "react";
import { Container, Form, Button } from "react-bootstrap"
import { useState, useEffect } from "react";
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from "firebase/firestore";
  import { db } from "../firebase"
import { setDoc } from "firebase/firestore";

function ContactForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState();
    const [company, setCompany] = useState('');
    const [phone, setPhone] = useState('');


    const usersCollectionRef = collection(db, "users");

    const handleSubmit = async (e) => {
        e.preventDefault()

        await addDoc(usersCollectionRef, { name: name, company: company, email: email, phone: phone });
        setName('')
        setEmail('')
        setCompany('')
        setPhone('')
        setMessage('')
    };


    return (
        <Container>
            <Form onSubmit={handleSubmit} className="resize mx-auto">
                <h2 className="text-center mb-5 p-1 text-light bg-danger roundIntro">Need a Fire Alarm Design?</h2>
                <Form.Group className="mb-3" controlId="company">
                    <Form.Label className="bg-danger text-light p-1 roundTitles">Company</Form.Label>
                    <Form.Control value={company}
                        onChange={(e) => { setCompany(e.target.value) }} className="bg-light" type="text" placeholder="Fire Protection Company" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label className="bg-danger text-light p-1 roundTitles">Email address</Form.Label>
                    <Form.Control
              value={email}
              onChange={(e) => {setEmail(e.target.value)}}
                    className="bg-light" type="email" placeholder="john.doe@company.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                    <Form.Label className="bg-danger text-light p-1 roundTitles">Phone</Form.Label>
                    <Form.Control
                                  value={phone}
                                  onChange={(e) => {setPhone(e.target.value)}}
                    className="bg-light" type="tel" placeholder="555-555-5555" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="bg-danger text-light p-1 roundTitles">Questions?</Form.Label>
                    <Form.Control
                     value={message}
                     onChange={(e) => {setMessage(e.target.value)}}
                    className="bg-light" as="textarea" rows={6} />
                </Form.Group>

                <Form.Group className="d-grid mb-3 w-50 mx-auto">
                    <Button type="submit" variant="danger" size="lg"><h2>Submit</h2></Button>
                </Form.Group>
            </Form>
        </Container>
    )
}

export default ContactForm;
