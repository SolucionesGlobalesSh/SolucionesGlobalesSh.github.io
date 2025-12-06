document.querySelector('footer a').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#contacto').scrollIntoView({ behavior: 'smooth' });
});