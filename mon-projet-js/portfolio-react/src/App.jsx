import "./App.css";

function handleContactSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  const body = encodeURIComponent(
    `Bonjour Hussein,\n\nNom : ${name}\nE-mail : ${email}\n\n${message}`,
  );

  window.location.href = `https://wa.me/221769871501?text=${body}`;
}

function App() {
  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <header className="navbar">
        <a href="/" className="logo">
          HUSSEIN DIALLO<span>.</span>
        </a>

        <nav className="nav-links">
          <a href="#accueil" className="active">Accueil</a>
          <a href="#apropos">À propos</a>
          <a href="#projets">Projets</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Me contacter
        </a>
      </header>

      {/* HERO */}
      <main>
        <section className="hero" id="accueil">

          <div className="hero-content">
            <p className="hero-label">
              <span></span> BIENVENUE SUR MON PORTFOLIO
            </p>

            <h1>
              Je conçois des expériences
              <span> web qui font la différence.</span>
            </h1>

            <p className="hero-description">
              Je suis <strong>Hussein Diallo</strong>, développeur web spécialisé
              dans la création d’interfaces modernes, performantes et faciles à
              utiliser pour les entreprises et les particuliers.
            </p>

            <div className="hero-buttons">
              <a href="#projets" className="primary-button">
                Voir mes projets
                <span>→</span>
              </a>

              <a href="#apropos" className="secondary-button">
                En savoir plus
              </a>
            </div>

          </div>

        </section>

        {/* ABOUT PREVIEW */}
        <section className="about-preview" id="apropos">
          <div>
            <p className="section-label">À PROPOS DE MOI</p>
            <h2>
              Transformer une idée en
              <span> expérience digitale.</span>
            </h2>
          </div>

          <p>
            J’aime concevoir des expériences numériques simples, efficaces et
            visuellement fortes. Mon objectif est de transformer vos idées en
            interfaces élégantes qui renforcent votre image de marque et offrent
            une expérience fluide à vos utilisateurs.
          </p>
        </section>

        <section className="skills-section" aria-label="Compétences">
          <div className="section-heading">
            <div>
              <p className="section-label">MES COMPÉTENCES</p>
              <h2>Ce que je maîtrise</h2>
            </div>
          </div>

          <div className="skills-grid">
            <article className="skill-card">
              <span className="skill-icon" role="img" aria-label="Frontend">💻</span>
              <h3>Développement Frontend</h3>
              <p>Je conçois des interfaces modernes, réactives et optimisées pour une meilleure expérience utilisateur.</p>
            </article>

            <article className="skill-card accent-card">
              <span className="skill-icon" role="img" aria-label="UX & Design">🎨</span>
              <h3>UX & Design Interface</h3>
              <p>Je mets en place une structure visuelle claire, élégante et orientée vers les besoins des utilisateurs.</p>
            </article>

            <article className="skill-card">
              <span className="skill-icon" role="img" aria-label="Performance">⚙️</span>
              <h3>Performance & Accessibilité</h3>
              <p>Je développe des sites rapides, fiables et accessibles pour garantir une navigation fluide et durable.</p>
            </article>
          </div>
        </section>

        {/* PROJECTS PREVIEW */}
        <section className="projects-preview" id="projets">
          <div className="section-heading">
            <div>
              <p className="section-label">MES PROJETS</p>
              <h2>Quelques réalisations</h2>
            </div>

            <a href="#projets" className="view-all">
              Voir tous les projets →
            </a>
          </div>

          <div className="projects-grid">

            <article className="project-card">
              <div className="project-image project-one">
                <span>01</span>
              </div>

              <div className="project-content">
                <p>Développement web</p>
                <h3>Projet personnel</h3>
                <a href="#projets">Voir le projet →</a>
              </div>
            </article>

            <article className="project-card">
              <div className="project-image project-two">
                <span>02</span>
              </div>

              <div className="project-content">
                <p>Design & développement</p>
                <h3>Projet créatif</h3>
                <a href="#projets">Voir le projet →</a>
              </div>
            </article>

            <article className="project-card">
              <div className="project-image project-three">
                <span>03</span>
              </div>

              <div className="project-content">
                <p>Application web</p>
                <h3>Projet digital</h3>
                <a href="#projets">Voir le projet →</a>
              </div>
            </article>

          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="contact-cta" id="contact">
          <p className="section-label">UN PROJET EN TÊTE ?</p>

          <h2>
            Construisons quelque chose
            <span> de remarquable.</span>
          </h2>

          <form className="contact-form" onSubmit={handleContactSubmit}>
            <div className="contact-fields">
              <label>
                Nom
                <input type="text" name="name" autoComplete="name" required />
              </label>

              <label>
                Adresse e-mail
                <input type="email" name="email" autoComplete="email" required />
              </label>
            </div>

            <label>
              Message
              <textarea name="message" rows="5" required />
            </label>

            <button className="primary-button" type="submit">
              Envoyer un message
              <span aria-hidden="true">→</span>
            </button>
          </form>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Hussein Diallo. Tous droits réservés.</p>

        <div className="footer-links">
          <a href="#accueil">Accueil</a>
          <a href="#projets">Projets</a>
          <a href="#contact">Contact</a>
          <a href="mailto:contact@husseindiallo.dev">Email</a>
        </div>
      </footer>

    </div>
  );
}

export default App;