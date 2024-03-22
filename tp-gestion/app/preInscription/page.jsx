"use client";
import React from "react";
import Head from "next/head";
import { Navbar, Container, Button } from "react-bootstrap";
import Link from "next/link";
export default function Login() {
  return (
    <>
      <Head>
        <title>Gestion-Inscription | Accueil</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
        <script
          src="https://code.jquery.com/jquery-3.7.1.min.js"
          integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
          integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
          integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy"
          crossOrigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
          crossOrigin="anonymous"
        />
      </Head>

      <Navbar bg="body-tertiary">
        <Container>
          <Navbar.Brand>
            {" "}
            <Link href="/homePage">Gestion|Inscription-Scolaire</Link>
          </Navbar.Brand>
          <div
            className="input-group"
            style={{ width: "18rem", padding: "2px" }}
          >
            <input
              type="text"
              className="form-control"
              placeholder="Rechercher une formation"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Search
            </Button>
          </div>
          <div className="d-flex">
            <Button
              variant="danger"
              style={{ marginRight: "2px" }}
              href="statutdemande.html"
            >
              Suivre ma demande
            </Button>
            <Button variant="outline-success" href="formulaireconnexion.html">
              Se connecter
            </Button>
          </div>
        </Container>
      </Navbar>

      <section className="container-fluid" id="banniere">
        <div style={{ padding: "2% 0 0 2%" }}>
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" style={{ width: "20rem" }}>
                <h6>Step 1</h6>
                <article>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Rerum earum quis sapiente a nobis nemo, voluptatibus
                  aspernatur nesciunt deleniti reiciendis consectetur porro
                  molestias in. Nihil quaerat dolores unde eum impedit.
                </article>
              </div>
              <div className="carousel-item" style={{ width: "20rem" }}>
                <h6>Step 2</h6>
                <article>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minus illum maxime enim, velit veniam fugit ex et repudiandae
                  accusantium eius molestias sequi saepe, nobis commodi sint hic
                  debitis numquam. Mollitia.
                </article>
              </div>
              <div className="carousel-item" style={{ width: "20rem" }}>
                <h6>Step 3</h6>
                <article>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum magni fugit error repellendus laboriosam expedita quas
                  eos, iusto laudantium aspernatur dolorem unde veritatis maxime
                  nam, praesentium a totam commodi exercitationem!
                </article>
              </div>
            </div>
          </div>
        </div>
        <div style={{ margin: "1% auto", width: "40%" }}>
          <a className="btn btn-danger" href="Validation_inscription.html">
            Valider-inscription
          </a>
          <ul
            style={{
              display: "flex",
              justifyContent: "space-around",
              listStyle: "none",
              textDecoration: "none",
              paddingTop: "5px",
            }}
          >
            <li>
              <a href="#" className="btn btn-outline-primary">
                Cours-Primaire
              </a>
            </li>
            <li>
              <a href="#" className="btn btn-outline-secondary">
                Cours-Secondaire
              </a>
            </li>
            <li>
              <a href="#" className="btn btn-outline-warning">
                Cours-Universitaire
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="container text-center">
          <div className="row">
            <div className="card col" style={{ width: "15rem" }}>
              <div className="card-body">
                <h5 className="card-title">formation</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  Card subtitle
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a
                  href="detailsformation.html"
                  className="card-link btn btn-outline-secondary"
                >
                  détails
                </a>
                <a
                  href="préinscription_scolaire.html"
                  className="card-link btn btn-primary"
                >
                  S'inscrire
                </a>
              </div>
            </div>
            <div className="card col" style={{ width: "15rem" }}>
              <div className="card-body">
                <h5 className="card-title">formation</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  Card subtitle
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a
                  href="detailsformation.html"
                  className="card-link btn btn-outline-secondary"
                >
                  détails
                </a>
                <a
                  href="préinscription_scolaire.html"
                  className="card-link btn btn-primary"
                >
                  S'inscrire
                </a>
              </div>
            </div>
            <div className="card col" style={{ width: "15rem" }}>
              <div className="card-body">
                <h5 className="card-title">formation</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  Card subtitle
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a
                  href="detailsformation.html"
                  className="card-link btn btn-outline-secondary"
                >
                  détails
                </a>
                <a
                  href="préinscription_scolaire.html"
                  className="card-link btn btn-primary"
                >
                  S'inscrire
                </a>
              </div>
            </div>
            <div className="card col" style={{ width: "15rem" }}>
              <div className="card-body">
                <h5 className="card-title">formation</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">
                  Card subtitle
                </h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a
                  href="detailsformation.html"
                  className="card-link btn btn-outline-secondary"
                >
                  détails
                </a>
                <a
                  href="préinscription_scolaire.html"
                  className="card-link btn btn-primary"
                >
                  S'inscrire
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container"
          style={{ textAlign: "center", padding: "1% 0" }}
        >
          <button className="btn btn-outline-warning">Voir-tout</button>
        </div>
      </section>
    </>
  );
}
