import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './../sass/index.scss';
import { ToastProvider } from 'react-toast-notifications';

function IndexComponent() {
  return (
    <ToastProvider
      placement="bottom-center"
      autoDismissTimeout={7000}
    >
      <App />
    </ToastProvider>
  )
}

export default IndexComponent;
