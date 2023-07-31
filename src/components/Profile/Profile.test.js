import React from "react";
import { render, screen } from '@testing-library/react';
import { Toaster } from 'react-hot-toast';
import { UserContext } from "../../context";

import Profile from "./Profile";

it("renderiza la vista de perfil de usuario", () => {
  const usuario = { 
    urlFoto: 'http://urlfalso.com/imagen.png',
    nombre: "Peter",
    apellido: "Parker",
    matricula: "A00000000"
  }
  const { container } = render(
    <UserContext.Provider value={usuario}>
        <Profile />
        <Toaster />
      </UserContext.Provider>
  );

  const nombreUsuario = screen.getByText(/Peter Parker/);
  expect(nombreUsuario).toBeInTheDocument();

  const matriculaUsuario = screen.getByText(/A00000000/);
  expect(matriculaUsuario).toBeInTheDocument();

  const imagenUsuario = container.querySelector(".imagen-perfil-vista")
  expect(imagenUsuario).toBeInTheDocument();
  expect(imagenUsuario.src).toBe("http://urlfalso.com/imagen.png");
});
