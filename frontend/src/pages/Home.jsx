import artemisLogo from "../assets/artemis-logo.png";
import img1 from "../assets/hero/praxis1.jpg";
import img2 from "../assets/hero/praxis2.jpg";
import img3 from "../assets/hero/praxis3.jpg";
import img4 from "../assets/hero/team.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>

      {/* INTRO CARD */}
      <section className="intro-card-section">
        <div className="intro-card intro-card-split">

          {/* TEXT LINKS */}
          <div className="intro-card-text">
            <h1>Lernplattform Kreditorenbuchhaltung</h1>
            <p>
              Interne Plattform zur strukturierten und praxisnahen
              Einarbeitung in die Prozesse der Kreditorenbuchhaltung
              im medizinischen Umfeld.
            </p>
          </div>

          {/* LOGO RECHTS */}
          <div className="intro-card-logo">
            <img
              src={artemisLogo}
              alt="ARTEMIS Augenkliniken"
            />
          </div>

        </div>
      </section>

      {/* IMAGE GRID */}
      <section className="image-grid-section">
        <div className="image-grid">

          <div className="image-tile">
            <img src={img1} alt="Praxisstandorte" />
            <div className="image-overlay">
              <h3>Praxisstandorte</h3>
              <p>Einheitliche Abläufe</p>
            </div>
          </div>

          <div className="image-tile">
            <img src={img2} alt="Kreditorenprozesse" />
            <div className="image-overlay">
              <h3>Kreditorenprozesse</h3>
              <p>Strukturiert & nachvollziehbar</p>
            </div>
          </div>

          <div className="image-tile">
            <img src={img3} alt="Einarbeitung" />
            <div className="image-overlay">
              <h3>Einarbeitung</h3>
              <p>Modular & praxisnah</p>
            </div>
          </div>

          <div className="image-tile">
            <img src={img4} alt="Zusammenarbeit" />
            <div className="image-overlay">
              <h3>Zusammenarbeit</h3>
              <p>Abgestimmt auf den Arbeitsalltag</p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <Link to="/module">
          <button className="primary-button">
            Zu den Lernmodulen
          </button>
        </Link>
      </section>

    </div>
  );
}

export default Home;