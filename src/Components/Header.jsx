import "./Styles/Header.css";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Formulario from "./Formulario";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <header>
      <div className="logoSection">
        <Link exact to="/">
          <img src="/images/logo-transparente.png" alt="Logo AJC" />
        </Link>
      </div>
      <div className="navSection">
          <ul className="linksHeader">
            <li>
              <NavLink activeClassName="activeLink" exact to="../">
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="activeLink" exact to="../Clientes/0">
                Clientes
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="activeLink" exact to="../Trabajadores">
                Trabajadores
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="activeLink" exact to="../Nosotros">
                Nosotros
              </NavLink>
            </li>
            <div className="logos" onClick={openModal}>
              <img
                src="/images/logo-email-2.png"
                alt="AJC usuario"
                style={{ width: "40px" }}
              />
            </div>
            <Formulario
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              closeModal={closeModal}
            />
            <NavLink activeClassName="activeLink" to="../Autenticacion">
              <div className="logos">
                <img
                  src="/images/user.png"
                  alt="AJC usuario"
                  style={{ width: "40px", height:"40px" }}
                />
              </div>
            </NavLink>
          </ul>
      </div>
    </header>
  );
};

export default Header;
