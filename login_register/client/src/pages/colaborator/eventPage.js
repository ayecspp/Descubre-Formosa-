export function eventPage() {
    const $eventDiv = document.createElement('div');
    $eventDiv.innerHTML = `
        <h3 class="text-2xl font-bold mb-6">Eventos</h3>
        <p>Aquí puedes encontrar información sobre los próximos eventos.</p>
    `;
    return $eventDiv;
}
