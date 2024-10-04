import React from 'react';

const Header = ({ onLogoClick }) => {
  return (
    <header className="w-full bg-serviu-blue-light fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between p-4">
        <img
          src="/sources/serviu.logo.png"
          alt="Logo Serviu"
          className="w-32 h-auto cursor-pointer"
          onClick={onLogoClick}
        />
        <h1 className="text-2xl md:text-3xl font-bold text-white font-montserrat text-right">
          Mapa de Procesos <br /> <span className="text-white">SERVIU Región del Biobío</span>
        </h1>
      </div>
    </header>
  );
};

export default Header;