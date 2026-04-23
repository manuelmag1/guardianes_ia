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


// ============================================
// NAVEGACIÓN FOOTER - PÁGINA 5
// ============================================

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