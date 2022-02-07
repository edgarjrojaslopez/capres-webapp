import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavLinks(props) {
  const location = useLocation();
  const LinkItems = [
    { name: "Inicio", link: "/" },
    { name: "Nosotros", link: "/nosotros" },
    { name: "Socios", link: "/socios" },
    { name: "Delegados", link: "/delegados" },
    { name: "Servicios", link: "/servicios" },
    { name: "Descargas", link: "/descargas" },
    { name: "Contacto", link: "/contacto" },
  ];
  return (
    <div id="NavLinksContainer" className="flex-grow">
      <ul id="LinksWrapper" className="text-md flex space-x-4 font-semibold">
        {LinkItems.map((LinkItem) =>
          location.pathname === "/" ? (
            <li key={LinkItem.name} className="text-gris-capres-700">
              <Link to={LinkItem.link}>{LinkItem.name}</Link>
            </li>
          ) : (
            <li key={LinkItem.name} className="text-gris-capres-200">
              <Link to={LinkItem.link}>{LinkItem.name}</Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
