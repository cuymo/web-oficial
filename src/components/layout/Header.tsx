import { useState } from "react";
import { NavLink } from "react-router-dom"

export const Header = () => {

    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => setMenuActive(!menuActive);

    return (
        <header className="site-header site-header--absolute is--white py-3" id="sticky-menu">
            <div className="global-container">
                <div className="flex items-center justify-between gap-x-8">
                    <NavLink to="/" className="">
                        <img src="/images/logo-light.png" alt="CÜYMO" width="96" height="24" />
                    </NavLink>
                    <div className="menu-block-wrapper">
                        <div className={`menu-overlay ${menuActive ? "active" : ""}`}></div>
                        <nav className={`menu-block ${menuActive ? "active" : ""}`} id="append-menu-header">
                            <div className="mobile-menu-head">
                                <div className="go-back">
                                    <img className="dropdown-icon" src="/images/icon-black-long-arrow-right.svg"
                                        alt="cheveron-right" width="16" height="16" />
                                </div>
                                <NavLink to="/" className=" ml-4">
                                    <img src="/images/logo-dark.png" alt="cuymo" width="60" height="24" />
                                </NavLink>
                                <div className="mobile-menu-close" onClick={toggleMenu}>&times;</div>
                            </div>
                            <ul className="site-menu-main is-text-white">
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link-item">Inicio</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/nosotros" className="nav-link-item">Nosotros</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/precios" className="nav-link-item">Precios</NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink to="/preguntas" className="nav-link-item">FAQs</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="flex items-center gap-6">
                        <a className="button hidden rounded-[50px] border-none bg-colorViolet text-white after:bg-[#111827] hover:bg-[#111827] hover:text-white lg:inline-block"
                            target="_blank"
                            href="https://api.whatsapp.com/send?phone=593939028131&text=%C2%A1Hola%21%2C+estoy+interesado+en+sus+servicios.+%0A%C2%BFMe+podr%C3%ADan+ayudar+m%C3%A1s+informaci%C3%B3n%3F+%F0%9F%98%84%F0%9F%92%BC">Contactar</a>

                    </div>
                    <div className="flex items-center gap-6">
                        <div className="block lg:hidden">
                            <button className="mobile-menu-trigger is-white" onClick={toggleMenu}>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
