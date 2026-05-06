document.addEventListener('DOMContentLoaded', function () {
    const secureBtn = document.getElementById('secure-btn');
    const iaBtn = document.getElementById('ia-btn');
    const helpBtn = document.getElementById('help-btn');

    if (!secureBtn || !iaBtn || !helpBtn) return;

    const overlay = document.createElement('div');
    overlay.className = 'index-info-overlay';
    overlay.innerHTML = [
        '<div class="index-info-modal" role="dialog" aria-modal="true" aria-labelledby="index-info-title">',
        '  <div class="index-info-head">',
        '    <img class="index-info-icon" id="index-info-icon" src="" alt="">',
        '    <h2 class="index-info-title" id="index-info-title"></h2>',
        '    <button class="index-info-close" aria-label="Cerrar">x</button>',
        '  </div>',
        '  <p class="index-info-text" id="index-info-text"></p>',
        '</div>'
    ].join('');

    document.body.appendChild(overlay);

    const titleNode = document.getElementById('index-info-title');
    const iconNode = document.getElementById('index-info-icon');
    const textNode = document.getElementById('index-info-text');
    const closeBtn = overlay.querySelector('.index-info-close');

    const messages = {
        secure: {
            title: 'Secure',
            icon: 'src/img_p1/CANDADO.png',
            text: 'Esta revista te dara herramientas para fortalecer el uso de la IA.'
        },
        ia: {
            title: 'IA Intel',
            icon: 'src/img_p1/IA ICONO.png',
            text: 'No toda la IA esta para ayudarte, recuerda: si es gratis, tu eres el producto.'
        },
        help: {
            title: 'Ayuda',
            icon: 'src/img_p1/AYUDA.png',
            text: 'En cada seccion encontraras tips para fortalecer tus conocimientos en seguridad.'
        }
    };

    function openPopup(type) {
        const message = messages[type];
        if (!message) return;

        titleNode.textContent = message.title;
        iconNode.src = message.icon;
        iconNode.alt = message.title;
        textNode.textContent = message.text;
        overlay.classList.add('active');
    }

    function closePopup() {
        overlay.classList.remove('active');
    }

    secureBtn.addEventListener('click', function () {
        openPopup('secure');
    });

    iaBtn.addEventListener('click', function () {
        openPopup('ia');
    });

    helpBtn.addEventListener('click', function () {
        openPopup('help');
    });

    closeBtn.addEventListener('click', closePopup);

    overlay.addEventListener('click', function (event) {
        if (event.target === overlay) {
            closePopup();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closePopup();
        }
    });
});
