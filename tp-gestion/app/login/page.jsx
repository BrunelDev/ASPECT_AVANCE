"use client";
import Link from "next/link";
import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";

export default function Login() {
  return (
    <>
      <Navbar bg="body-tertiary">
        <Container>
          <Navbar.Brand>
            <Link href="/homePage">Gestion|Inscription-Scolaire</Link>
          </Navbar.Brand>
          <div>
            <Button variant="outline-secondary">Mon compte</Button>
          </div>
        </Container>
      </Navbar>
      <section style={{ display: "flex" }}>
        <div
          style={{
            width: "30%",
            height: "90vh",
            padding: "2%",
            border: "2px dotted beige",
          }}
        >
          <div style={{ marginBottom: "2%" }}>
            <img src="#" alt="Personal Information" />
            <h6>
              <a href="#">Information personnelle</a>
            </h6>
          </div>
          <div>
            <ul>
              <li>
                <a href="#">Mes demandes</a>
              </li>
              <li>
                <a href="#">Mes documents</a>
              </li>
            </ul>
          </div>
        </div>
        <div></div>
      </section>
    </>
  );
}
