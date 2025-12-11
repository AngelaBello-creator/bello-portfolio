import "./Footer.scss";

export default function Footer() {
  return (
    <footer id="contact">
      <div className="footer-content">
        <h3 className="footer-title">
          Bridging Tech Development with Business Strategy
        </h3>

        <p className="footer-description">
          I am committed to leveraging my skills in full stack development and AI. My goal is to bridge the gap 
          between technology and strategy through clean architecture, thoughtful design, and 
          results-oriented development.
        </p>

        <div className="footer-sections">
          {/* NAVIGATION */}
          <div className="footer-section">
            <h4>NAVIGATION</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About me</a></li>
              <li><a href="#projects">Projects</a></li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div className="footer-section">
            <h4>SOCIAL LINKS</h4>
            <ul>
              <li>
                <a 
                  href="https://github.com/AngelaBello-creator" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/angela-bello-developer/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="footer-section">
            <h4>EMAIL</h4>
            <p>
              <a href="mailto:angelabello38@gmail.com">
                angelabello38@gmail.com
              </a>
            </p>

            <h4 style={{ marginTop: "20px" }}>LOCATION</h4>
            <p>Barcelona, Spain</p>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Angela Bello. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
