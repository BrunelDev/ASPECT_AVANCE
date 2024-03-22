"use client";
import React from "react";
import { Navbar, Button, Container } from "react-bootstrap";
import Link from "next/link";
export default function formation() {
  return (
    <>
      <Navbar bg="body-tertiary">
        <Container>
          <Navbar.Brand>
            {" "}
            <Link href="/homePage">Gestion|Inscription-Scolaire</Link>
          </Navbar.Brand>
          <div className="d-flex">
            <a
              className="btn btn-danger"
              type="button"
              style={{ marginRight: "2px" }}
              href="statutdemande.html"
            >
              Suivre ma demande
            </a>
            <a
              className="btn btn-outline-success"
              href="formulaireconnexion.html"
            >
              Se connecter
            </a>
          </div>
        </Container>
      </Navbar>
      <section>
        <h3 style={{ textAlign: "center" }}>Détails formation</h3>
        <div
          className="container"
          style={{ border: "0.5px beige solid", padding: "2%" }}
        >
          <div style={{ display: "flex" }}>
            <h5>Formation</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ad
              distinctio sapiente, dolorem enim iure est eius consectetur vel,
              veniam quo quasi cum voluptatem ut corporis quis inventore
              tempora! Perspiciatis!
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <h5>Description</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ad
              distinctio sapiente, dolorem enim iure est eius consectetur vel,
              veniam quo quasi cum voluptatem ut corporis quis inventore
              tempora! Perspiciatis!
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <h5>Conditions</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ad
              distinctio sapiente, dolorem enim iure est eius consectetur vel,
              veniam quo quasi cum voluptatem ut corporis quis inventore
              tempora! Perspiciatis!
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <h5>frais d'inscription</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ad
              distinctio sapiente, dolorem enim iure est eius consectetur vel,
              veniam quo quasi cum voluptatem ut corporis quis inventore
              tempora! Perspiciatis!
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <h5>Nombre de place</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ad
              distinctio sapiente, dolorem enim iure est eius consectetur vel,
              veniam quo quasi cum voluptatem ut corporis quis inventore
              tempora! Perspiciatis!
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <h5>Date limite</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ad
              distinctio sapiente, dolorem enim iure est eius consectetur vel,
              veniam quo quasi cum voluptatem ut corporis quis inventore
              tempora! Perspiciatis!
            </p>
          </div>
          <div style={{ display: "flex" }}>
            <h5>Nombre d'inscrit</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ad
              distinctio sapiente, dolorem enim iure est eius consectetur vel,
              veniam quo quasi cum voluptatem ut corporis quis inventore
              tempora! Perspiciatis!
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <a
              type="button"
              className="btn btn-outline-warning"
              href="inscriptionformation.html"
            >
              S'inscrire
            </a>
          </div>
        </div>
      </section>
      <section
        className="container-fluid"
        style={{ padding: "5px", backgroundColor: "beige" }}
      >
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner container">
            <div
              className="carousel-item active"
              style={{ textAlign: "center" }}
            >
              <h6>Step 1</h6>
              <article>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
                earum quis sapiente a nobis nemo, voluptatibus aspernatur
                nesciunt deleniti reiciendis consectetur porro molestias in.
                Nihil quaerat dolores unde eum impedit.
              </article>
            </div>
            <div className="carousel-item" style={{ textAlign: "center" }}>
              <h6>Step 2</h6>
              <article>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
                earum quis sapiente a nobis nemo, voluptatibus aspernatur
                nesciunt deleniti reiciendis consectetur porro molestias in.
                Nihil quaerat dolores unde eum impedit.
              </article>
            </div>
            <div className="carousel-item" style={{ textAlign: "center" }}>
              <h6>Step 3</h6>
              <article>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
                earum quis sapiente a nobis nemo, voluptatibus aspernatur
                nesciunt deleniti reiciendis consectetur porro molestias in.
                Nihil quaerat dolores unde eum impedit.
              </article>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
}
