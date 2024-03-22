import "./page.css";
export default function home() {
  return (
    <body>
      <nav>
        <div className="navbar">
          <a class="navbar-brand">Gestion|Inscription-Scolaire</a>
          <div class="navbar-right">
            <form role="search" className="pr-1 ml-1;">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Rechercher formation"
                aria-label="Search"
              />
              <button className="btn btn1" type="submit">
                Search
              </button>
            </form>
            <button className="btn btn2">Se connecter</button>
          </div>
        </div>
      </nav>
      <section className="container-fluid" id="banniere">
        <div className="p-3">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <h6>Step 1</h6>
                <article>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Rerum earum quis sapiente a nobis nemo, voluptatibus
                  aspernatur nesciunt deleniti reiciendis consectetur porro
                  molestias in. Nihil quaerat dolores unde eum impedit.
                </article>
              </div>
              <div className="carousel-item">
                <h6>Step 2</h6>
                <article>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Minus illum maxime enim, velit veniam fugit ex et repudiandae
                  accusantium eius molestias sequi saepe, nobis commodi sint hic
                  debitis numquam. Mollitia.
                </article>
              </div>
              <div className="carousel-item">
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
        <div style={{ margin: "2% auto", width: "40%" }}>
          <ul className="cursus">
            <li>
              <a href="#" className="">
                Cours-Primaire
              </a>
            </li>
            <li>
              <a href="#" className="">
                Cours-Secondaire
              </a>
            </li>
            <li>
              <a href="#" className="">
                Cours-Universitaire
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <h3 style={{ textAlign: "center" }}>Formations Scolaires</h3>
        <div>
          {/* Définir une boucle pour afficher quelques formations (06) dans la base de donnée */}
          <div className="container text-center">
            <div className="row">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">formation</h5>
                  <h6 className="card-subtitle mb-2">Card subtitle</h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">formation</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    Card subtitle
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">formation</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    Card subtitle
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="container text-center">
            <div className="row">
              <div className="card col">
                <div className="card-body">
                  <h5 className="card-title">formation</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    Card subtitle
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
              <div className="card col">
                <div className="card-body">
                  <h5 className="card-title">formation</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    Card subtitle
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
              <div className="card col">
                <div className="card-body">
                  <h5 className="card-title">formation</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    Card subtitle
                  </h6>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="card-link">
                    Card link
                  </a>
                  <a href="#" className="card-link">
                    Another link
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="container"
            style={{ textAlign: "center", padding: "1% 0" }}
          >
            <button className="btn btn3">Voir-tout</button>
          </div>
        </div>
      </section>
      <footer>
        <div className="author">Réalisé par OdounLAOUROU</div>
      </footer>
    </body>
  );
}
