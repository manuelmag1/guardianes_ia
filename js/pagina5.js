// Datos de cada tip (título, puntos, alerta)
const TIPS = {
    ojo: {
        titulo: 'TIP 1: PRIVACIDAD VISUAL',
        icono: '👁️',
        puntos: [
            'Mantén tus credenciales seguras de miradas indiscretas.',
            'Evita escribir contraseñas o códigos cuando haya personas cerca.',
            'No dejes tu sesión abierta en computadores compartidos.'
        ],
        alerta: 'Alguien detrás de ti puede fotografiar tu pantalla en segundos y usar tus cuentas como si fuera tú.'
    },
    candado: {
        titulo: 'TIP 2: BLOQUEA TU INFORMACIÓN',
        icono: '🔒',
        puntos: [
            'Revisa la sección de privacidad de cada app y limita quién puede ver tu perfil, tu ubicación y tu actividad.',
            'Activa siempre la verificación en dos pasos para que nadie pueda entrar solo con tu contraseña.'
        ],
        alerta: 'Si todo está en “público”, cualquiera puede seguir tus movimientos y rutinas diarias sin que lo notes.'
    },
    chip: {
        titulo: 'TIP 3: CUIDA LO QUE ESCRIBES A LA IA',
        icono: '💾',
        puntos: [
            'No envíes números de documentos, direcciones, contraseñas ni datos sensibles de otras personas.',
            'Recuerda que tus mensajes pueden guardarse y usarse para entrenar modelos.'
        ],
        alerta: 'Si confías datos íntimos a la IA, podrías perder el control sobre dónde terminan y quién los analiza.'
    },
    escudo: {
        titulo: 'TIP 4: SÉ UN GUARDIÁN ÉTICO',
        icono: '🛡️',
        puntos: [
            'Proteger tu privacidad también implica cuidar la de los demás.',
            'Pide permiso antes de compartir fotos o capturas de pantallas, no difundas información privada en grupos y denuncia contenidos que pongan en riesgo a otras personas.'
        ],
        alerta: 'Un solo pantallazo mal compartido puede dañar la reputación y seguridad de alguien de tu entorno.'
    }
};

// Referencias al DOM
const overlay    = document.getElementById('p5Overlay');
const closeBtn   = document.getElementById('p5CloseBtn');
const popupTitle = document.getElementById('p5PopupTitle');
const popupIcon  = document.getElementById('p5PopupIcon');
const popupList  = document.getElementById('p5PopupList');
const alertText  = document.getElementById('p5AlertText');
const iconBtns   = document.querySelectorAll('.p5-icon-btn');

// ---- Abrir popup ----
iconBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const key = btn.dataset.tip;
        const tip = TIPS[key];
        if (!tip) return;

        // Rellenar contenido
        popupIcon.textContent  = tip.icono;
        popupTitle.textContent = tip.titulo;
        alertText.textContent  = tip.alerta;

        // Crear ítems de la lista
        popupList.innerHTML = '';
        tip.puntos.forEach(punto => {
            const li = document.createElement('li');
            li.textContent = punto;
            popupList.appendChild(li);
        });

        // Mostrar overlay
        overlay.classList.add('active');
    });
});

// ---- Cerrar con el botón X ----
closeBtn.addEventListener('click', cerrarPopup);

// ---- Cerrar tocando el fondo oscuro ----
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) cerrarPopup();
});

// ---- Cerrar con tecla Escape ----
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') cerrarPopup();
});

function cerrarPopup() {
    overlay.classList.remove('active');
}

// ---- Reloj en tiempo real (igual que index) ----
function actualizarReloj() {
    const clock = document.getElementById('clock');
    if (!clock) return;
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    clock.textContent = h + ':' + m;
}
actualizarReloj();
setInterval(actualizarReloj, 30000);

// ---- Botón Anterior ----
document.getElementById('btn-anterior').addEventListener('click', () => {
    window.location.href = 'pagina4.html'; // ajusta según el nombre real de la página anterior
});

// ---- Botón Finalizar misión ----
document.getElementById('btn-finalizar').addEventListener('click', () => {
    window.location.href = 'pagina6.html'; // ajusta según la siguiente página del equipo
});


// ============================================================
// MENÚ HAMBURGUESA — submenú deslizable
// ============================================================
const hamburgerBtn  = document.getElementById('hamburger-btn');
const navMenu       = document.getElementById('p5NavMenu');
const navBackdrop   = document.getElementById('p5NavBackdrop');

function abrirMenu() {
    navMenu.classList.add('open');
    navBackdrop.classList.add('open');
    navMenu.setAttribute('aria-hidden', 'false');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
}

function cerrarMenu() {
    navMenu.classList.remove('open');
    navBackdrop.classList.remove('open');
    navMenu.setAttribute('aria-hidden', 'true');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
}

hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.contains('open') ? cerrarMenu() : abrirMenu();
});

// Cerrar al tocar el backdrop
navBackdrop.addEventListener('click', cerrarMenu);

// ---- Botones del menú ----
document.getElementById('nav-inicio').addEventListener('click', () => {
    cerrarMenu();
    window.location.href = 'index.html';
});

document.getElementById('nav-reiniciar').addEventListener('click', () => {
    cerrarMenu();
    // Cierra el popup por si estuviera abierto y recarga la página actual
    cerrarPopup();
    window.location.reload();
});

document.getElementById('nav-ayuda').addEventListener('click', () => {
    cerrarMenu();
    popupIcon.textContent  = 'ℹ️';
    popupTitle.textContent = 'CÓMO USAR ESTA PANTALLA';
    alertText.textContent  = ''; // vacío: el banner rojo se oculta con CSS
    popupList.innerHTML = '';
    const instrucciones = [
        'Toca el candado 🔒 para aprender a bloquear tu información.',
        'Toca el ojo 👁️ para consejos de privacidad visual.',
        'Toca el chip 💾 para saber qué no decirle a una IA.',
        'Toca el escudo 🛡️ para convertirte en guardián ético digital.'
    ];
    instrucciones.forEach(txt => {
        const li = document.createElement('li');
        li.textContent = txt;
        popupList.appendChild(li);
    });
    overlay.classList.add('active');
});