import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { NavBar, Sidebar, Footer, Homepage } from './js/temp';
import reportWebVitals from './reportWebVitals';

function loadTemp() {
  const nav = ReactDOM.createRoot(document.querySelector('nav'));
  nav.render(
    <React.StrictMode>
      <NavBar />
    </React.StrictMode>
  );

  const sidebar = ReactDOM.createRoot(document.getElementById('sidebar'));
  sidebar.render(
    <React.StrictMode>
      <Sidebar />
    </React.StrictMode>
  );

  const footer = ReactDOM.createRoot(document.getElementById('footer'));
  footer.render(
    <React.StrictMode>
      <Footer />
    </React.StrictMode>
  );
}
function updatePage() {
  const main = ReactDOM.createRoot(document.getElementById('main'));

  switch (window.location.pathname) {
    case '/':
      main.render(
        <React.StrictMode>
          <Homepage />
        </React.StrictMode>
      );
      document.title += ' | Home';
    break;
    case '/admin' :
      main.render(
        <React.StrictMode>
          <h1>Admin</h1>
        </React.StrictMode>
      );
      document.title += ' | Admin';
      break;
    default:
      main.render(
        <React.StrictMode>
          <h1>404</h1>
        </React.StrictMode>
      );
      document.title += ' | 404';
      break;
  }
}
window.onload = () => {
  loadTemp()
  updatePage();

};

reportWebVitals();
