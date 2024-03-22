"use client";
import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import Link from "next/link";
export default function Signup() {
  return (
    <>
      <Navbar bg="body-tertiary">
        <Container>
          <Navbar.Brand>
            <Link href="/homePage">Gestion|Inscription-Scolaire</Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <section className="container">
        <h3 style={{ textAlign: "center" }}>Inscription</h3>
        <div style={{ border: "0.5px beige solid", padding: "1%" }}>
          <form className="row g-3">
            <div className="col-12">
              <label htmlFor="inputNom" className="form-label">
                Nom
              </label>
              <input type="text" className="form-control" id="inputNom" />
            </div>
            <div className="col-12">
              <label htmlFor="inputPrenom" className="form-label">
                Prénom
              </label>
              <input type="text" className="form-control" id="inputPrenom" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Définir un mot de passe
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
              />
            </div>
            <div className="col-md-2">
              <label htmlFor="inputTel" className="form-label">
                Téléphone
              </label>
              <input type="tel" className="form-control" id="inputTel" />
            </div>
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" htmlFor="gridCheck">
                  Newsletter
                </label>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Soumettre
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
