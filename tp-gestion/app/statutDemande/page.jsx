"use client";
import React from "react";
import { Navbar, Container, Button, Form } from "react-bootstrap";
import Link from "next/link";
function App() {
  return (
    <>
      <Navbar bg="body-tertiary">
        <Container>
          <Navbar.Brand>
            {" "}
            <Link href="/homePage">Gestion|Inscription-Scolaire</Link>
          </Navbar.Brand>
          <div className="d-flex">
            <Button variant="outline-success" href="/login">
              Se connecter
            </Button>
          </div>
        </Container>
      </Navbar>
      <section className="container">
        <form>
          <div
            className="input-group"
            style={{ padding: "2px", margin: "5% auto" }}
          >
            <Form.Control
              type="text"
              placeholder="Veuillez entrer la référence de votre demande"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <Button variant="outline-warning" type="submit" id="button-addon2">
              Send
            </Button>
          </div>
        </form>
      </section>
    </>
  );
}

export default App;
