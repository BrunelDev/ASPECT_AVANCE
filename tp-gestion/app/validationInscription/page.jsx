"use client";
import React from "react";
import { Navbar, Container, Form, Button } from "react-bootstrap";
import Link from "next/link";

export default function Validation() {
  return (
    <>
      <Navbar bg="body-tertiary">
        <Container>
          <Navbar.Brand>
            {" "}
            <Link href="/homePage">Gestion|Inscription-Scolaire</Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <section className="container">
        <h3 style={{ textAlign: "center" }}>Validation inscription</h3>
        <div style={{ border: "0.5px beige solid" }}>
          <Form style={{ padding: "1%" }}>
            <div className="row">
              <div className="col-md-6">
                <Form.Label htmlFor="inputNom" className="form-label">
                  Nom
                </Form.Label>
                <Form.Control type="text" id="inputNom" />
              </div>
              <div className="col-md-6">
                <Form.Label htmlFor="inputPrenom" className="form-label">
                  Prénom
                </Form.Label>
                <Form.Control type="text" id="inputPrenom" />
              </div>
            </div>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="formFile" className="form-label">
                Charger votre fiche de préinscription
              </Form.Label>
              <Form.Control type="file" id="formFile" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="formFileMultiple" className="form-label">
                Charger vos justificatifs de paiement
              </Form.Label>
              <Form.Control type="file" id="formFileMultiple" multiple />
            </Form.Group>
            <div className="md-12">
              <Form.Label htmlFor="inputEmail4" className="form-label">
                Email
              </Form.Label>
              <Form.Control type="email" id="inputEmail4" />
            </div>
            <div style={{ marginTop: "2px" }}>
              <Button type="submit" variant="outline-warning">
                Soumettre
              </Button>
              <div style={{ textAlign: "center" }}>
                <a href="préinscription_scolaire.html">
                  Je n'ai pas de fiche de préinscription ?
                </a>
              </div>
            </div>
          </Form>
        </div>
      </section>
    </>
  );
}
