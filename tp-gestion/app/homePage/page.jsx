"use client";
import React, { Fragment } from "react";
import Head from "next/head";
import { Navbar, Container, Button } from "react-bootstrap";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <Head>
        <title>Gestion-Inscription | Accueil</title>

        <style>
          {`
            #banniere {
              background: url('/../public/Back_to_School_Banner.png') no-repeat;
              background-size: cover;
            }
          `}
        </style>
      </Head>
      <Navbar bg="body-tertiary">
        <Container>
          <Navbar.Brand>Gestion|Inscription-Scolaire</Navbar.Brand>
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
              href="/statutDemande"
            >
              Suivre ma demande
            </Button>
            <Button variant="outline-success" href="/login">
              Se connecter
            </Button>
          </div>
        </Container>
      </Navbar>

      <section
        className="container-fluid"
        style={{
          background: "url('Back_to_School_Banner.png') no-repeat",
          backgroundSize: "cover",
          padding: "2% 0",
        }}
      >
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
          <Link className="btn btn-danger" href="/validationInscription">
            Valider-inscription
          </Link>
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
                <Link
                  href="/formations"
                  className="card-link btn btn-outline-secondary"
                >
                  détails
                </Link>
                <Link
                  href="/preInscription"
                  className="card-link btn btn-primary"
                >
                  S'inscrire
                </Link>
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
                <Link
                  href="/formations"
                  className="card-link btn btn-outline-secondary"
                >
                  détails
                </Link>
                <Link
                  href="/preInscription"
                  className="card-link btn btn-primary"
                >
                  S'inscrire
                </Link>
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
                <Link
                  href="/formations"
                  className="card-link btn btn-outline-secondary"
                >
                  détails
                </Link>
                <Link
                  href="/preInscription"
                  className="card-link btn btn-primary"
                >
                  S'inscrire
                </Link>
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
