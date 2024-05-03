import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Footer() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Box
          component="footer"
          sx={{
            mt: "auto",
          }}
        >
          <div className="footer">
            <div className="sb__footer section__padding">
              <div className="sb__footer-links">
                <div className="sb__footer-links_div">
                  <h4>Contáctanos</h4>
                  <a href="/employer">
                    <p>Escríbenos</p>
                  </a>
                </div>
                <div className="sb__footer-links_div">
                  <h4>Recursos</h4>
                  <a
                    href="https://www.bajacalifornia.gob.mx/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>Gobierno de Baja Californía</p>
                  </a>
                  <a
                    href="http://www.imos.gob.mx/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <p>Instituto de Movilidad Sustentable</p>
                  </a>
                </div>
                <div className="sb__footer-links_div">
                  <h4>Sobre</h4>
                  <a href="/employer">
                    <p>Nosotros</p>
                  </a>
                  <a href="/employer">
                    <p>Nuestro Proyecto</p>
                  </a>
                </div>
                <div className="sb__footer-links_div">
                  <h4>Síguenos en</h4>
                  <div className="socialmedia">
                    <p>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faInstagram} size="3x" />
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faTwitter} size="3x" />
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://github.com/bryanlopez35"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faGithub} size="3x" />
                      </a>
                    </p>
                    <p>
                      <a
                        href="https://www.linkedin.com/in/bryan-lopez-hdz/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon icon={faLinkedin} size="3x" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <hr></hr>
              <div className="sb__footer-below">
                <div className="sb__footer-copyright">
                  <p>
                    &copy; {new Date().getFullYear()} Bryan López. Todos los
                    derechos reservados
                  </p>
                </div>
                <div className="sb__footer-below-links">
                  <a href="/terms">
                    <div>
                      <p>Terminos y Condiciones</p>
                    </div>
                  </a>
                  <a href="/privacy">
                    <div>
                      <p>Privacidad</p>
                    </div>
                  </a>
                  <a href="/security">
                    <div>
                      <p>Seguridad</p>
                    </div>
                  </a>
                  <a href="/cookie">
                    <div>
                      <p>Cookies</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
