import { audioPage } from './colaborator/audioPage.js';
import { mapPage } from './colaborator/mapPage.js';
import { artPage } from './colaborator/artPage.js';
import { eventPage } from './colaborator/eventPage.js'; 
export function colaboratorPage() {
    const $container = document.createElement('div');
    
    $container.innerHTML = `
    <div class="flex">
        <!-- Sidebar -->
        <div class="w-60 bg-yellow-800 h-screen p-4">
            <h2 class="text-lg font-bold text-yellow-300 mb-6">DESCUBRE FORMOSA</h2>
            <ul>
                <li class="mb-4">
                    <a id="canales-link" href="#" class="flex items-center text-yellow-200 text-sm">
                        📜 <span class="ml-2">Roles</span>
                    </a>
                </li>
                <li class="text-yellow-400 text-sm mb-4">📣 WELCOME/BIENVENIDA</li>
                <li class="mb-4">
                    <a id="welcome-link" href="#" class="flex items-center text-yellow-200 text-sm">
                        👋 <span class="ml-2">Welcome-Bienvenida</span>
                    </a>
                </li>
                <li class="text-yellow-400 text-sm mb-4">📸 MULTIMEDIA</li>
                <li class="mb-4">
                    <a id="art-link" href="#" class="flex items-center text-yellow-200 text-sm">
                        🖼 <span class="ml-2">Art</span>
                    </a>
                </li>
                <li class="mb-4">
                    <a id="audio-link" href="#" class="flex items-center text-yellow-200 text-sm">
                        🎵 <span class="ml-2">Audio</span>
                    </a>
                </li>
                <li class="mb-4">
                    <a id="eventos-link" href="#" class="flex items-center text-yellow-200 text-sm">
                        📅 <span class="ml-2">Eventos</span>
                    </a>
                </li>
                <li class="mb-4">
                    <a id="map-link" href="#" class="flex items-center text-yellow-200 text-sm">
                        🗺 <span class="ml-2">Mapa Interactivo</span>
                    </a>
                </li>
            </ul>
        </div>

        <!-- Content -->
        <div id="content" class="flex-grow p-6 bg-yellow-900 text-yellow-300">
            <h3 class="text-2xl font-bold mb-6">Bienvenido a la Colaboración</h3>
        </div>
    </div>
    `;

    const contentDiv = $container.querySelector('#content');
  
    // Función para actualizar el contenido
    function updateContent(newContent) {
        contentDiv.innerHTML = ''; // Limpiar el contenido anterior
        contentDiv.appendChild(newContent);
    }

    // Cargar selecciones desde localStorage
    function loadUserSelections() {
        const storedSelections = localStorage.getItem('userSelections');
        return storedSelections ? JSON.parse(storedSelections) : [];
    }

    // Actualizar roles seleccionados
    function displayRolesAndAllowEdit() {
        const selectedRoles = loadUserSelections();
        const rolesContainer = document.createElement('div');
        rolesContainer.classList.add('text-yellow-300');

        rolesContainer.innerHTML = `
            <h3 class="text-xl font-bold mb-4">Roles Seleccionados</h3>
            <ul class="mb-6">
                ${selectedRoles.map(role => `<li class="mb-2">${role}</li>`).join('')}
            </ul>
            <button id="edit-roles" class="bg-yellow-400 text-yellow-800 font-semibold py-2 px-4 rounded-lg">Editar Roles</button>
        `;

        // Botón para editar roles
        const editButton = rolesContainer.querySelector('#edit-roles');
        editButton.addEventListener('click', () => {
            window.location.href = 'http://localhost:5173/form'; // Redirigir al formulario para editar roles
        });

        return rolesContainer;
    }

    // Agregar event listeners a los enlaces
    $container.querySelector('#audio-link').addEventListener('click', (e) => {
        e.preventDefault();
        updateContent(audioPage());
    });

    $container.querySelector('#map-link').addEventListener('click', (e) => {
        e.preventDefault();
        updateContent(mapPage());
    });

    $container.querySelector('#art-link').addEventListener('click', (e) => {
        e.preventDefault();
        updateContent(artPage());
    });

    $container.querySelector('#eventos-link').addEventListener('click', (e) => {
        e.preventDefault();
        updateContent(eventPage());
    });

    $container.querySelector('#canales-link').addEventListener('click', (e) => {
        e.preventDefault();
        updateContent(displayRolesAndAllowEdit());
    });

    $container.querySelector('#welcome-link').addEventListener('click', (e) => {
        e.preventDefault();
        updateContent(document.createTextNode('Welcome-Bienvenida: Mensaje de bienvenida para los colaboradores.'));
    });

    return $container;
}