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
              <button class="w-full bg-yellow-400 text-yellow-800 font-semibold py-3 rounded-lg focus:outline-none hover:opacity-90">
                  Siguiente
              </button>
          </div>
      </div>
    `;
  
    // Añade clases de Tailwind para centrar el contenedor
    $container.classList.add('min-h-screen', 'flex', 'items-center', 'justify-center', 'bg-yellow-50');
  
    // Añade lógica para seleccionar múltiples botones
    const buttons = $container.querySelectorAll('button[id]');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        button.classList.toggle('bg-blue-200'); // Cambia el color para marcar el botón como seleccionado
        button.classList.toggle('bg-yellow-100');   // Alterna entre el color seleccionado y no seleccionado
      });
    });
  
    return $container;
  }
  