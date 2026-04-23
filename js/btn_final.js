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

});

document.getElementById('hamburger-btn').addEventListener('click', function() {
    console.log('✓ Menú Hamburguesa presionado');
    window.location.href = 'index.html';
    // Aquí puedes agregar la lógica del menú más adelante
});

// ============================================
// NAVEGACIÓN FOOTER - PÁGINA 2
// ============================================

function abrir(id) {
  document.getElementById(id).classList.add('active');
}

function cerrar(id) {
  document.getElementById(id).classList.remove('active');
}