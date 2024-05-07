import React, { useEffect } from "react";
import styled from "styled-components";
import BurgerButton from "./BurgerButton";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

function Navbar() {
  const [clicked, setClicked] = React.useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const [isReadyForInstall, setIsReadyForInstall] = React.useState(false);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      // Prevent the mini-infobar from appearing on mobile.
      event.preventDefault();
      console.log("👍", "beforeinstallprompt", event);
      // Stash the event so it can be triggered later.
      window.deferredPrompt = event;
      // Remove the 'hidden' class from the install button container.
      setIsReadyForInstall(true);
    });
  }, []);

  async function downloadApp() {
    console.log("👍", "butInstall-clicked");
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // The deferred prompt isn't available.
      console.log("oops, no prompt event guardado en window");
      return;
    }
    // Show the install prompt.
    promptEvent.prompt();
    // Log the result
    const result = await promptEvent.userChoice;
    console.log("👍", "userChoice", result);
    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;
    // Hide the install button.
    setIsReadyForInstall(false);
  }

  return (
    <>
      <NavContainer className={`links ${clicked ? "active" : ""}`}>
        <Link to="/">
          {" "}
          <h2>
            Muévete por <span>Tijuana</span>
          </h2>
        </Link>
        <div className={`links ${clicked ? "active" : ""}`}>
          <Link to="/">Inicio</Link>
          <Link to="/galeria">Galería</Link>
          <Link to="/acerca">Sobre Nosotros</Link>
          {isReadyForInstall && (
            <Button variant="contained" onClick={downloadApp}>
              Descargar
            </Button>
          )}
        </div>
        <BurgerButtonWrapper className="burger">
          <BurgerButton clicked={clicked} handleClick={handleClick} />
        </BurgerButtonWrapper>
        <BgDiv className={`initial ${clicked ? "active" : ""}`} />
      </NavContainer>
    </>
  );
}

export default Navbar;

const NavContainer = styled.nav`
  z-index: 1000;
  h2 {
    color: white;
    font-weight: 400;
    span {
      font-weight: bold;
    }
  }
  padding: 0.4rem;
  background-color: #161b22;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }

  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;
    a {
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
`;

const BgDiv = styled.div`
  background-color: #161b22;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.6s ease;

  &.active {
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const BurgerButtonWrapper = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;
