"use client";
import React from "react";
import { Container, Navbar, Button } from "react-bootstrap";
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
          <div>
            <Button variant="outline-primary">Tableau de bord</Button>
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
            <img src="#" alt="Placeholder" />
            <h6>lorem lorem</h6>
          </div>
          <div>
            <ul>
              <li>
                <a href="#">Formations</a>
              </li>
              <li>
                <a href="#">Demandes utilisateur</a>
              </li>
            </ul>
          </div>
        </div>
        <div></div>
      </section>
    </>
  );
}

export default App;
