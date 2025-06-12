import React, { useEffect, useContext, useCallback } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import PlanDeEstudio from './components/PlanDeEstudio/PlanDeEstudio';
import PlanesDeEstudio from './components/PlanesDeEstudio/PlanesDeEstudio';
import Profile from './components/Profile/Profile';

import UserContext from "./context/userContext";
import { PlanProvider } from "./context/planContext";
import { ColorProvider } from "./context/colorContext";
import { PUBLIC_URL } from './components/utils'; 
import { authenticate } from "./components/auth";

/** Función que verifica si la sesión está iniciada y cambia el loggedUser correspondientemente. */
async function checkSession(setLoggedUser, addToast) {
  const resAuth = await authenticate().catch((err) => err);
  if (resAuth instanceof Error) {
    if (!resAuth.response) {
      addToast('Error: Hubo un error de conexión al servidor para validar sesión iniciada.', {
        appearance: 'error',
        autoDismiss: true,
      });
    } else if (resAuth.response.data.msg) {
      addToast(`Error: ${resAuth.response.data.msg}`, {
        appearance: 'error',
        autoDismiss: true,
      });
    }
    setLoggedUser(null);
    return;
  }
  setLoggedUser(resAuth);
}

function App() {
  const { login } = useContext(UserContext);
  const { addToast } = useToasts();

  const checarSesion = useCallback(() => checkSession(login, addToast), [addToast, login]);

  useEffect(() => {
    checarSesion();
  }, [checarSesion]);

  return (
    <Router basename={PUBLIC_URL}>
      <div className="App">
        <Header
          checarSesion={checarSesion}
          addToast={addToast}
        />
          <Route
            exact path="/"
            component={PlanesDeEstudio}
          />
          <PlanProvider>
            <ColorProvider>
              <Route
                path="/plan/:clave"
                component={PlanDeEstudio}
              />
            </ColorProvider>
          </PlanProvider>
          <Route
            path="/perfil/:matricula"
            component={Profile}
          />
          <div className="flex-grow-1"></div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
