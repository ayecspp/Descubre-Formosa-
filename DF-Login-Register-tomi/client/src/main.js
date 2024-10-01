import '../Style/tailwind.css';
import { loginPage } from './pages/loginPage.js';
import { registerPage } from './pages/registerPage.js';

const pathname = window.location.pathname;

const $app = document.querySelector('#app');
switch (pathname) {
    case '/login':
        $app.appendChild(loginPage());
        break;
    case '/register':
        $app.appendChild(registerPage());
        break;
    default:
        break;
}

