"use client";

import React from "react";
import { Navbar } from "react-bootstrap";
import Link from "next/link";
export default function Profil() {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Navbar.Brand>
            {" "}
            <Link href="/homePage">Gestion|Inscription-Scolaire</Link>
          </Navbar.Brand>
          <div>
            <button className="btn btn-outline-secondary">Mon compte</button>
          </div>
        </div>
      </nav>
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
            <h6>
              <a href="#">Information personnelle</a>
            </h6>
          </div>
          <div>
            <ul className="list-group">
              <li className="list-group-item">
                <a href="#">Mes demandes</a>
              </li>
              <li className="list-group-item">
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
