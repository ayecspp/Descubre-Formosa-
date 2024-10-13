export function createPage() {
    const $container = document.createElement('div');
    
    $container.innerHTML = `
    <div class="flex">
        <!-- Sidebar -->
        <div class="w-60 bg-yellow-800 h-screen p-4">
            <h2 class="text-lg font-bold text-yellow-300 mb-6">DESCUBRE FORMOSA</h2>
            <ul>
                <li class="mb-4">
                    <a id="eventos-link" href="#" class="flex items-center text-yellow-200 text-sm">
                        📅 <span class="ml-2">Eventos</span>
                    </a>
                </li>
                <li class="mb-4">
                    <a id="canales-link" href="#" class="flex items-center text-yellow-200 text-sm">
                        📜 <span class="ml-2">Canales y roles</span>
                    </a>
                </li>
                <li class="text-yellow-400 text-sm mb-4">📣 WELCOME/BIENVENIDA</li>
                <li class="mb-4">
                    <a id="welcome-link" href="#" class="flex items-center text-yellow-200 text-sm">
                        👋 <span class="ml-2">Welcome-Bienvenida</span>
                    </a>
                </li>
                <li class="text-yellow-400 text-sm mb-4">❗ IMPORTANT/IMPORTANTE</li>
                <li class="mb-4">
                    <a id="general-link" href="#" class="flex items-center text-yellow-200 text-sm">
                        ⚠️ <span class="ml-2">GeneralChat</span>
                    </a>
                </li>
                <li class="text-yellow-400 text-sm mb-4">💬 CHATS</li>
                <li class="mb-4">
                    <a id="generalchat-link" href="#" class="flex items-center text-yellow-200 text-sm">
                        🌐 <span class="ml-2">GeneralChat</span>
                    </a>
                </li>
                <li class="mb-4">
                    <a id="chatspanish-link" href="#" class="flex items-center text-yellow-200 text-sm">
                        🇪🇸 <span class="ml-2">ChatEspañol</span>
                    </a>
                </li>
                <li class="text-yellow-400 text-sm mb-4">📸 MEDIA SHARING</li>
                <li class="mb-4">
                    <a id="art-link" href="#" class="flex items-center text-yellow-200 text-sm">
                        🖼 <span class="ml-2">Art</span>
                    </a>
                </li>
                <li class="mb-4">
                    <a id="writing-link" href="#" class="flex items-center text-yellow-200 text-sm">
                        📖 <span class="ml-2">Writing-Escritura</span>
                    </a>
                </li>
            </ul>
        </div>

        <!-- Content -->
        <div id="content" class="flex-grow p-6 bg-yellow-900 text-yellow-300">
            <h3 class="text-2xl font-bold mb-6">chistoso</h3>
            <div class="flex flex-wrap gap-4">
                <button class="flex items-center bg-yellow-700 hover:bg-yellow-600 text-yellow-100 py-2 px-4 rounded-md">
                    🪓 <span class="ml-2">chistosito</span>
                </button>
                <button class="flex items-center bg-yellow-700 hover:bg-yellow-600 text-yellow-100 py-2 px-4 rounded-md">
                    ◻️ <span class="ml-2">chistosito</span>
                </button>
                <button class="flex items-center bg-yellow-700 hover:bg-yellow-600 text-yellow-100 py-2 px-4 rounded-md">
                    🐉 <span class="ml-2">chistosito</span>
                </button>
                <button class="flex items-center bg-yellow-700 hover:bg-yellow-600 text-yellow-100 py-2 px-4 rounded-md">
                    ⚔️ <span class="ml-2">chistosito</span>
                </button>
                <button class="flex items-center bg-yellow-700 hover:bg-yellow-600 text-yellow-100 py-2 px-4 rounded-md">
                    🌲 <span class="ml-2">chistosito</span>
                </button>
                <button class="flex items-center bg-yellow-700 hover:bg-yellow-600 text-yellow-100 py-2 px-4 rounded-md">
                    🗡 <span class="ml-2">chistosito</span>
                </button>
                <button class="flex items-center bg-yellow-700 hover:bg-yellow-600 text-yellow-100 py-2 px-4 rounded-md">
                    🎮 <span class="ml-2">chistosito</span>
                </button>
                <button class="flex items-center bg-yellow-700 hover:bg-yellow-600 text-yellow-100 py-2 px-4 rounded-md">
                    ✨ <span class="ml-2">chistosito</span>
                </button>
            </div>
            <p class="mt-4 text-yellow-400">Elija todas las opciones que correspondan.</p>
        </div>
    </div>
    `;

    // JavaScript para manejar la lógica de clic en los elementos del aside
    const contentDiv = $container.querySelector('#content');

    const links = {
        'eventos-link': '<h3 class="text-2xl font-bold mb-6">Eventos</h3><p>Lista de eventos próximos...</p>',
        'canales-link': '<h3 class="text-2xl font-bold mb-6">Canales y roles</h3><p>Información sobre canales y roles...</p>',
        'welcome-link': '<h3 class="text-2xl font-bold mb-6">Welcome-Bienvenida</h3><p>¡Bienvenido a nuestro servidor!</p>',
        'general-link': '<h3 class="text-2xl font-bold mb-6">GeneralChat</h3><p>Chat general para todos los usuarios...</p>',
        'generalchat-link': '<h3 class="text-2xl font-bold mb-6">GeneralChat</h3><p>Únete a la conversación global...</p>',
        'chatspanish-link': '<h3 class="text-2xl font-bold mb-6">ChatEspañol</h3><p>Chat en español para nuestros usuarios hispanohablantes...</p>',
        'art-link': '<h3 class="text-2xl font-bold mb-6">Art</h3><p>Comparte y descubre arte de la comunidad...</p>',
        'writing-link': '<h3 class="text-2xl font-bold mb-6">Writing-Escritura</h3><p>Comparte tus escritos y explora obras de otros usuarios...</p>'
    };

    Object.keys(links).forEach(id => {
        const linkElement = $container.querySelector(`#${id}`);
        linkElement.addEventListener('click', (event) => {
            event.preventDefault();
            contentDiv.innerHTML = links[id];
        });
    });

    return $container;
}
