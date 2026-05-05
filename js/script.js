/* ═══════════════════════════════════════════════════
   script_p3.js  —  Lógica exclusiva de Página 3
   Revista Digital · Guardianes IA
═══════════════════════════════════════════════════ */

/* ── DATOS DE CADA ALERTA ── */
var alerts = {

    mail: {
        icon:       'fas fa-envelope',
        iconBg:     '#ddeeff',
        iconColor:  '#1a6aaa',
        badge:      '⚠ ALERTA',
        badgeClass: 'badge-alerta',
        title:      'El correo te puede traicionar',
        msg:        'El 90% de los ataques cibernéticos empiezan con un correo falso. Un clic en el lugar equivocado puede entregar tus datos sin que te des cuenta.',
        cta:        'NUNCA ABRAS<br>LINKS SOSPECHOSOS',
        ctaClass:   'cta-red'
    },

    chat: {
        icon:       'fas fa-comment-dots',
        iconBg:     '#e8f5e9',
        iconColor:  '#1a7a2a',
        badge:      '📋 CASO REAL',
        badgeClass: 'badge-caso',
        title:      'Tus chats no son privados',
        msg:        'Una estudiante compartió su número en un chat grupal. Días después recibió mensajes de extraños haciéndose pasar por su colegio.',
        cta:        'TODO EMPEZÓ<br>CON UN MENSAJE',
        ctaClass:   'cta-orange'
    },

    cloud1: {
        icon:       'fas fa-cloud',
        iconBg:     '#ddeeff',
        iconColor:  '#1a7aaa',
        badge:      '⚠ ALERTA',
        badgeClass: 'badge-alerta',
        title:      'Tu nube puede tener filtraciones',
        msg:        'Si usas la misma contraseña en varias apps, un hacker puede acceder a todos tus archivos en la nube de una sola vez.',
        cta:        'USA CONTRASEÑAS<br>ÚNICAS',
        ctaClass:   'cta-red'
    },

    cloud2: {
        icon:       'fas fa-cloud-upload-alt',
        iconBg:     '#ddeeff',
        iconColor:  '#1a7aaa',
        badge:      '⚠ ALERTA',
        badgeClass: 'badge-alerta',
        title:      'Permisos que no notaste',
        msg:        '¿Le diste acceso a tus fotos, contactos y micrófono sin leer? Muchas apps guardan esa información aunque no las estés usando.',
        cta:        'REVISA TUS<br>PERMISOS HOY',
        ctaClass:   'cta-orange'
    },

    shield: {
        icon:       'fas fa-shield-alt',
        iconBg:     '#e8f5e9',
        iconColor:  '#1a6a1a',
        badge:      '💡 TIP RÁPIDO',
        badgeClass: 'badge-tip',
        title:      'Activa tu escudo digital',
        msg:        'La verificación en dos pasos bloquea el 99% de los accesos no autorizados. Incluso si alguien roba tu contraseña, no podrá entrar.',
        cta:        'ACTÍVALA EN TUS<br>APPS AHORA',
        ctaClass:   'cta-green'
    },

    settings: {
        icon:       'fas fa-cog',
        iconBg:     '#e0e0e0',
        iconColor:  '#444444',
        badge:      '💡 TIP RÁPIDO',
        badgeClass: 'badge-tip',
        title:      'Configurar es protegerte',
        msg:        'Las apps actualizadas corrigen vulnerabilidades. Una app sin actualizar es como dejar la puerta de tu casa abierta de noche.',
        cta:        'MANTÉN TUS APPS<br>ACTUALIZADAS',
        ctaClass:   'cta-green'
    },

    maps1: {
        icon:       'fas fa-map-marker-alt',
        iconBg:     '#ede8f5',
        iconColor:  '#6a1a8a',
        badge:      '⚠ ALERTA',
        badgeClass: 'badge-alerta',
        title:      'Saben dónde estás',
        msg:        'Las apps de mapas pueden compartir tu ubicación en tiempo real con terceros. ¿Sabes quién tiene acceso a dónde estás ahora?',
        cta:        'DESACTIVA LA<br>UBICACIÓN AL SALIR',
        ctaClass:   'cta-red'
    },

    maps2: {
        icon:       'fas fa-cog',
        iconBg:     '#e0e0e0',
        iconColor:  '#444444',
        badge:      '📋 CASO REAL',
        badgeClass: 'badge-caso',
        title:      'Una app que lo controlaba todo',
        msg:        "Un joven instaló una app de 'optimización'. Recopilaba sus contraseñas, fotos y mensajes en segundo plano sin que lo supiera.",
        cta:        'INSTALA SOLO<br>APPS OFICIALES',
        ctaClass:   'cta-orange'
    },

    payment: {
        icon:       'fas fa-credit-card',
        iconBg:     '#fde8e8',
        iconColor:  '#aa1a1a',
        badge:      '⚠ ALERTA',
        badgeClass: 'badge-alerta',
        title:      'Tu tarjeta en riesgo',
        msg:        'Guardar datos bancarios en apps desconocidas es como prestarle tu tarjeta a un extraño. Un fallo de seguridad y pierdes tu dinero.',
        cta:        'NUNCA GUARDES DATOS<br>EN APPS DUDOSAS',
        ctaClass:   'cta-red'
    }
};

/* ── MOSTRAR ALERTA ── */
function showAlert(key) {
    var a = alerts[key];
    if (!a) return;

    /* Ícono */
    var wrap = document.getElementById('alert-icon-wrap');
    wrap.style.background = a.iconBg;
    wrap.innerHTML = '<i class="' + a.icon + '" style="color:' + a.iconColor + '; font-size:34px;"></i>';

    /* Badge */
    var badge = document.getElementById('alert-badge');
    badge.textContent = a.badge;
    badge.className = 'alert-badge ' + a.badgeClass;

    /* Título y mensaje */
    document.getElementById('alert-title').textContent = a.title;
    document.getElementById('alert-msg').textContent   = a.msg;

    /* Botón CTA */
    var cta = document.getElementById('alert-cta');
    cta.innerHTML  = a.cta;
    cta.className  = 'alert-cta ' + a.ctaClass;

    /* Mostrar overlay */
    document.getElementById('overlay').classList.add('show');
}

/* ── CERRAR ALERTA ── */
function closeAlert() {
    document.getElementById('overlay').classList.remove('show');
}

/* ── RELOJ EN TIEMPO REAL ── */
function updateClock() {
    var now = new Date();
    var h   = String(now.getHours()).padStart(2, '0');
    var m   = String(now.getMinutes()).padStart(2, '0');
    var el  = document.getElementById('clock');
    if (el) el.textContent = h + ':' + m;
}

/* ── INICIALIZACIÓN ── */
document.addEventListener('DOMContentLoaded', function () {

    /* Clic en cada ícono de app */
    document.querySelectorAll('.app-item').forEach(function (item) {
        item.addEventListener('click', function () {
            showAlert(this.getAttribute('data-alert'));
        });
    });

    /* Cerrar con botón X */
    document.getElementById('alert-close').addEventListener('click', closeAlert);

    /* Cerrar al hacer clic fuera del modal */
    document.getElementById('overlay').addEventListener('click', function (e) {
        if (e.target === this) closeAlert();
    });

    /* Hamburger: alterna ícono bars / times */
    var menuOpen = false;
    document.getElementById('hamburger-btn').addEventListener('click', function () {
        menuOpen = !menuOpen;
        this.querySelector('i').className = menuOpen ? 'fas fa-times' : 'fas fa-bars';
    });

    /* Botones de navegación */
    document.getElementById('btn-anterior').addEventListener('click', function () {
        window.location.href = 'página2.html';
    });
    document.getElementById('btn-siguiente').addEventListener('click', function () {
        window.location.href = 'página4.html';
    });

    /* Reloj */
    updateClock();
    setInterval(updateClock, 30000);
});
