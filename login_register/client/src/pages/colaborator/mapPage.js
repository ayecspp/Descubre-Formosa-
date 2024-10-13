export function mapPage() {
    const $mapDiv = document.createElement('div');
    $mapDiv.innerHTML = `
        <h3 class="text-2xl font-bold mb-6">Mapa Interactivo</h3>
        <p>Explora el mapa interactivo de Formosa.</p>
    `;
    return $mapDiv;
}
