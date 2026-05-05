var alerts = {
    mail: { icon: 'fas fa-envelope', iconBg: '#ddeeff', iconColor: '#1a6aaa', badge: '⚠ ALERTA', badgeClass: 'badge-alerta', title: 'El correo te puede traicionar', msg: 'El 90% de los ataques cibernéticos empiezan con un correo falso.', cta: 'NUNCA ABRAS LINKS SOSPECHOSOS', ctaClass: 'cta-red' },
    chat: { icon: 'fas fa-comment-dots', iconBg: '#e8f5e9', iconColor: '#1a7a2a', badge: '📋 CASO REAL', badgeClass: 'badge-caso', title: 'Tus chats no son privados', msg: 'Una estudiante compartió su número en un chat grupal y recibió acoso.', cta: 'TODO EMPEZÓ CON UN MENSAJE', ctaClass: 'cta-orange' },
    shield: { icon: 'fas fa-shield-alt', iconBg: '#e8f5e9', iconColor: '#1a6a1a', badge: '💡 TIP RÁPIDO', badgeClass: 'badge-tip', title: 'Activa tu escudo digital', msg: 'La verificación en dos pasos bloquea el 99% de los accesos robados.', cta: 'ACTÍVALA EN TUS APPS AHORA', ctaClass: 'cta-green' }
    // Puedes añadir el resto siguiendo este patrón
};

function showAlert(key) {
    var a = alerts[key];
    if (!a) return;
    document.getElementById('alert-icon-wrap').style.background = a.iconBg;
    document.getElementById('alert-icon-wrap').innerHTML = `<i class="${a.icon}" style="color:${a.iconColor}; font-size:34px;"></i>`;
    document.getElementById('alert-badge').textContent = a.badge;
    document.getElementById('alert-badge').className = 'alert-badge ' + a.badgeClass;
    document.getElementById('alert-title').textContent = a.title;
    document.getElementById('alert-msg').textContent = a.msg;
    document.getElementById('alert-cta').textContent = a.cta;
    document.getElementById('alert-cta').className = 'alert-cta ' + a.ctaClass;
    document.getElementById('overlay').classList.add('show');
}

function closeAlert() { document.getElementById('overlay').classList.remove('show'); }

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.app-item').forEach(item => {
        item.addEventListener('click', () => showAlert(item.getAttribute('data-alert')));
    });
    document.getElementById('alert-close').addEventListener('click', closeAlert);
    document.getElementById('overlay').addEventListener('click', (e) => { if (e.target.id === 'overlay') closeAlert(); });
});
