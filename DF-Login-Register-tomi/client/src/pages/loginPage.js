import logo from '../Assets/Formosa-removebg-preview.png';
import mapApp from '../Assets/undraw_my_location_re_r52x.svg';
import wave from '../Assets/wave.png';
export function loginPage() {
  const $container = document.createElement('div');
  
  $container.innerHTML = `
  <img
    src="${wave}"
    class="fixed hidden lg:block inset-0 h-full"
    style="z-index: -1;"
  />
  <div
    class="w-screen h-screen flex flex-col justify-center items-center lg:grid lg:grid-cols-2"
  >
    <img
      src="${mapApp}"
      class="hidden lg:block w-1/2 hover:scale-150 transition-all duration-500 transform mx-auto"
    />
    <form id="loginForm" class="flex flex-col justify-center items-center w-1/2 mx-auto -translate-x-3">
      <img src="${logo}" class="w-3/4" />
      <h2
        class="my-8 font-display font-bold text-3xl text-gray-700 text-center"
      >
        Descubre Formosa
      </h2>
      <div class="relative">
        <i class="fa fa-envelope absolute text-primarycolor text-xl"></i>
        <input
          id="email"
          type="email"
          placeholder="email"
          class="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
        />
      </div>
      <div class="relative mt-8">
        <i class="fa fa-lock absolute text-primarycolor text-xl"></i>
        <input
          id="password"
          type="password"
          placeholder="Contraseña"
          class="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
        />
      </div>
      <a href="/register" class="self-end mt-4 text-gray-600 font-bold"
        >¿No tienes una cuenta? Registrate</a
      >
      <button
        type="submit"
        class="py-3 px-20 bg-primarycolor rounded-full text-white font-bold uppercase text-lg mt-4 transform hover:translate-y-1 transition-all duration-500"
      >Sign in</button>
    </form>
  </div>`;

  // Event listener para manejar el login
  const loginForm = $container.querySelector('#loginForm');
  loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const email = $container.querySelector('#email').value;
      const password = $container.querySelector('#password').value;

      try {
          const response = await fetch('http://localhost:4000/user/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email, password }),
          });

          const data = await response.json();

          if (response.ok) {
              // Login exitoso, redirigir al dashboard o guardar el token JWT
              localStorage.setItem('token', data.token);
              console.log('Login exitoso');
              window.location.href = '/';
          } else {
              alert('Login fallido: ' + data.message);
          }
      } catch (error) {
          console.error('Error en el login:', error);
      }
  });

  return $container;
}


