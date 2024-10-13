export function formPage() {
    const $container = document.createElement('div');
    
    $container.innerHTML = `
      <div class="w-full max-w-lg p-8 rounded-lg shadow-lg color-fondo mx-auto">
          <h1 class="text-2xl font-bold mb-4 text-yellow-800 text-center">¿Qué quieres hacer en Descubre Formosa?</h1>
          <p class="text-yellow-800 mb-6 text-center">Selecciona una o más opciones:</p>
          
          <div class="grid grid-cols-2 gap-4">
              <button id="interactive-map" class="w-full bg-yellow-100 hover:bg-yellow-300 text-yellow-800 p-4 rounded-lg focus:outline-none">
                  🗺️ Mapa Interactivo | Interactive Map <br> 
                  <span class="text-sm text-yellow-700">Explora Formosa a través de un mapa interactivo.</span>
              </button>
              
              <button id="art-media" class="w-full bg-yellow-100 hover:bg-yellow-300 text-yellow-800 p-4 rounded-lg focus:outline-none">
                  🎨 Arte y Medios | Art and Media <br> 
                  <span class="text-sm text-yellow-700">Compartir y ver Multimedias de otros usuarios.</span>
              </button>
              
              <button id="audio" class="w-full bg-yellow-100 hover:bg-yellow-300 text-yellow-800 p-4 rounded-lg focus:outline-none">
                  🎵 Audio | Audio <br> 
                  <span class="text-sm text-yellow-700">Compartir información con audiolectura.</span>
              </button>
              
              <button id="all" class="w-full bg-yellow-100 hover:bg-yellow-300 text-yellow-800 p-4 rounded-lg focus:outline-none">
                  💬 De todo un poco | All of them <br> 
                  <span class="text-sm text-yellow-700">Sé libre de compartir en cada sección.</span>
              </button>
          </div>
          
          <div class="mt-6 flex justify-center">
              <button id="next-btn" class="w-full bg-yellow-400 text-yellow-800 font-semibold py-3 rounded-lg focus:outline-none hover:opacity-90">
                  Siguiente
              </button>
          </div>
      </div>
    `;
  
    $container.classList.add('min-h-screen', 'flex', 'items-center', 'justify-center', 'bg-yellow-50');
  
    const buttons = $container.querySelectorAll('button[id]');
    const selectedOptions = new Set(); // Para almacenar las selecciones del usuario
    
    // Añadir lógica para marcar los botones seleccionados y almacenar nombres de roles
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const optionId = button.id;
        let roleName = '';

        // Asignar nombres de roles más amigables según el botón
        switch(optionId) {
          case 'interactive-map':
            roleName = 'Mapa Interactivo';
            break;
          case 'art-media':
            roleName = 'Arte y Medios';
            break;
          case 'audio':
            roleName = 'Audio';
            break;
          case 'all':
            roleName = 'De todo un poco';
            break;
        }

        button.classList.toggle('border-4');
        button.classList.toggle('border-yellow-400');
        
        // Añadir o remover del set de opciones seleccionadas
        if (selectedOptions.has(roleName)) {
          selectedOptions.delete(roleName);
        } else {
          selectedOptions.add(roleName);
        }
      });
    });
  
    // Al hacer clic en "Siguiente", almacenar las selecciones y redirigir
    const nextBtn = $container.querySelector('#next-btn');
    nextBtn.addEventListener('click', () => {
      // Guardar las selecciones en localStorage
      localStorage.setItem('userSelections', JSON.stringify(Array.from(selectedOptions)));
      
      // Redirigir o cargar la página colaboratorPage
      // Esto depende de cómo estés manejando la navegación
      window.location.href = 'http://localhost:5173/colaborator'; // Ruta de colaboratorPage
    });
  
    return $container;
}
