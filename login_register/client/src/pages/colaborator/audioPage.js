export function audioPage() {
    const $audioDiv = document.createElement('div');
    $audioDiv.innerHTML = `
        <h3 class="text-2xl font-bold mb-6">Audio</h3>
        <p>Aquí puedes escuchar y compartir archivos de audio.</p>
    `;
    return $audioDiv;
}
