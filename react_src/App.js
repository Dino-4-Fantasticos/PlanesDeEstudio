import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { useToasts, ToastProvider } from 'react-toast-notifications';


import Header from '../src/components/shared/Header';
import Footer from '../src/components/shared/Footer';
import PlanDeEstudio from '../src/components/PlanDeEstudio/PlanDeEstudio';
import PlanesDeEstudio from '../src/components/PlanesDeEstudio/PlanesDeEstudio';
import Profile from '../src/components/Profile/Profile';

import { UserContext } from "../src/context";
import { PUBLIC_URL } from './components/utils'; 
import { authenticate } from "../utils/auth";

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
  const [loggedUser, setLoggedUser] = useState(undefined);

  const { addToast } = useToasts();

  const checarSesion = () => checkSession(setLoggedUser, addToast);

  useEffect(() => {
    checkSession(setLoggedUser, addToast);
  }, [addToast]);

  /** Función que verifica si la sesión está iniciada y cambia el loggedUser correspondientemente. */
  
  
  return (
    <Router basename={PUBLIC_URL}>
      <div className="App">
        <UserContext.Provider value={loggedUser}>
          <Header
            checarSesion={checarSesion}
            addToast={addToast}
          />
            <Route
              exact path="/"
              component={PlanesDeEstudio}
            />
            <Route
              path="/plan/:clave"
              component={PlanDeEstudio}
            />
            <Route
              path="/perfil/:matricula"
              component={Profile}
            />
            <div className="flex-grow-1"></div>
          <Footer />
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
