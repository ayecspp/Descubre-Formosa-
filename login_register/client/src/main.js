import '../Style/tailwind.css';
import { loginPage } from './pages/loginPage.js';
import { registerPage } from './pages/registerPage.js';
import { formPage } from './pages/formPage.js';
import { createPage } from './pages/createPage.js';

const pathname = window.location.pathname;

const $app = document.querySelector('#app');
switch (pathname) {
    case '/login':
        $app.appendChild(loginPage());
        break;
    case '/register':
        $app.appendChild(registerPage());
        break;
    case '/form':
        $app.appendChild(formPage());
        break;
    case '/create':
        $app.appendChild(createPage());
        break;
    default:
        break;
}

