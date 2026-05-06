function actualizarRelojGlobal() {
    const clockElements = document.querySelectorAll('.time');
    if (!clockElements.length) return;

    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const currentTime = hours + ':' + minutes;

    clockElements.forEach(element => {
        element.textContent = currentTime;
    });
}

actualizarRelojGlobal();
setInterval(actualizarRelojGlobal, 30000);