document.addEventListener('DOMContentLoaded', (event) => {
    const boton = document.getElementById('yesBtn');

    boton.addEventListener('click', () => {
        alert('GRACIAS!! TE QUIERO MUCHO <3');
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const botonAleatorio = document.getElementById('noBtn');

    botonAleatorio.addEventListener('mouseover', () => {
        const anchoVentana = window.innerWidth;
        const altoVentana = window.innerHeight;
        const anchoBoton = botonAleatorio.offsetWidth;
        const altoBoton = botonAleatorio.offsetHeight;

        
        const nuevaPosicionX = Math.random() * (anchoVentana - anchoBoton);
        const nuevaPosicionY = Math.random() * (altoVentana - altoBoton);

        
        botonAleatorio.style.left = `${nuevaPosicionX}px`;
        botonAleatorio.style.top = `${nuevaPosicionY}px`;
    });
});