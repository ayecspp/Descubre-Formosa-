export function artPage() {
    const $artDiv = document.createElement('div');
    $artDiv.innerHTML = `
        <h3 class="text-2xl font-bold mb-6">Arte y Medios</h3>
        <p>Comparte y descubre arte y medios de la comunidad.</p>
    `;
    return $artDiv;
}
