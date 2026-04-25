// ============================================
// EVENTOS - Botones y menú hamburguesa
// ============================================

// Menú Hamburguesa
document.getElementById('hamburger-btn').addEventListener('click', function() {
    console.log('✓ Menú Hamburguesa presionado');
    window.location.href = 'index.html';
    // Aquí puedes agregar la lógica del menú más adelante
});

// Botón Login/Inicio de Sesión Segura
document.getElementById('login-btn').addEventListener('click', function() {
    console.log('✓ Botón INICIA SESIÓN SEGURA presionado');
    // Aquí puedes agregar la lógica de login
});

// Botón SECURE
document.getElementById('secure-btn').addEventListener('click', function() {
    console.log('✓ Botón SECURE presionado');
    // Aquí puedes agregar la lógica de seguridad
});

// Botón IA INTEL
document.getElementById('ia-btn').addEventListener('click', function() {
    console.log('✓ Botón IA INTEL presionado');
    // Aquí puedes agregar la lógica de IA
});

// Botón AYUDA
document.getElementById('help-btn').addEventListener('click', function() {
    console.log('✓ Botón AYUDA presionado');
    // Aquí puedes agregar la lógica de ayuda
});

// ============================================
// INICIALIZACIÓN
// ============================================
console.log('Sistema Guardianes de la Identidad inicializado correctamente');


// ============================================
// EVENTOS - Botones y menú hamburguesa
// ============================================

// Menú Hamburguesa
document.getElementById('hamburger-btn').addEventListener('click', function() {
    console.log('✓ Menú Hamburguesa presionado');
    // Aquí puedes agregar la lógica del menú más adelante
});

// Botón Login/Inicio de Sesión Segura
document.getElementById('login-btn').addEventListener('click', function() {
    console.log('✓ Botón INICIA SESIÓN SEGURA presionado');
    window.location.href = 'pagina2.html';
});

// Botón SECURE
document.getElementById('secure-btn').addEventListener('click', function() {
    console.log('✓ Botón SECURE presionado');
    // Aquí puedes agregar la lógica de seguridad
});

// Botón IA INTEL
document.getElementById('ia-btn').addEventListener('click', function() {
    console.log('✓ Botón IA INTEL presionado');
    // Aquí puedes agregar la lógica de IA
});

// Botón AYUDA
document.getElementById('help-btn').addEventListener('click', function() {
    console.log('✓ Botón AYUDA presionado');
    // Aquí puedes agregar la lógica de ayuda
});

// ============================================
// INICIALIZACIÓN
// ============================================
console.log('Sistema Guardianes de la Identidad inicializado correctamente');

// =======================
// PÁGINA 4 - FUNCIONES POPUP (INDEPENDIENTE)
// =======================

function p4OpenModal(modalId) {
    const overlay = document.getElementById('p4-overlay');
    if (!overlay) return;

    // Oculta todos los modales
    const modals = document.querySelectorAll('.p4-modal');
    modals.forEach(m => m.style.display = 'none');

    // Muestra overlay
    overlay.style.display = 'flex';

    // Muestra el modal seleccionado
    const target = document.getElementById(modalId);
    if (target) target.style.display = 'block';
}

function p4CloseModal() {
    const overlay = document.getElementById('p4-overlay');
    if (!overlay) return;

    overlay.style.display = 'none';

    // Oculta todos los modales
    const modals = document.querySelectorAll('.p4-modal');
    modals.forEach(m => m.style.display = 'none');
}

// Cerrar al hacer clic fuera del modal
const overlayP4 = document.getElementById('p4-overlay');
if (overlayP4) {
    overlayP4.addEventListener('click', function (e) {
        if (e.target === this) {
            p4CloseModal();
        }
    });
}


