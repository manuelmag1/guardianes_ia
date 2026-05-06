// ============================================
// NAVEGACIÓN FOOTER - PÁGINA 5
// ============================================

// Botón: Volver al Índice
document.addEventListener("DOMContentLoaded", function() {
    // Botón: Volver al Índice
    const btnBackIndex = document.getElementById('btn-back-index');
    if (btnBackIndex) {
        btnBackIndex.addEventListener('click', function() {
            console.log('Navegando al Índice...');
            window.location.href = 'index.html'; 
        });
    }

    // Botón: Reiniciar Simulación
    const btnRestart = document.getElementById('btn-restart');
    if (btnRestart) {
        btnRestart.addEventListener('click', function() {
            console.log('Reiniciando Simulación...');
            window.location.href = 'pagina2.html'; 
        });
    }

    // Compartir por WhatsApp
    const btnShareText = document.getElementById('btn-share-text');
    const btnShareIcon = document.getElementById('btn-share-icon');

    function compartirPorWhatsApp() {
        const info = 'Complete la mision Guardianes de la Identidad y aprendi como usar la IA de forma mas segura.';
        const enlace = window.location.href;
        const mensaje = info + ' Mira aqui: ' + enlace;
        const whatsappUrl = 'https://wa.me/?text=' + encodeURIComponent(mensaje);

        window.open(whatsappUrl, '_blank');
    }

    if (btnShareText) {
        btnShareText.addEventListener('click', compartirPorWhatsApp);
    }

    if (btnShareIcon) {
        btnShareIcon.addEventListener('click', compartirPorWhatsApp);
    }

});

document.getElementById('hamburger-btn').addEventListener('click', function() {
    console.log('✓ Menú Hamburguesa presionado');
    window.location.href = 'index.html';
    // Aquí puedes agregar la lógica del menú más adelante
});