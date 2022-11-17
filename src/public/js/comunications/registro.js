const form = document.getElementById('form');

form.addEventListener('submit',(e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const app = document.getElementById('app').value;
    const apm = document.getElementById('apm').value;
    const genero = document.getElementById('genero').value;
    const edad = document.getElementById('edad').value;
    const tel = document.getElementById('tel').value;
    const email = document.getElementById('email').value;
    const password = btoa(document.getElementById('password').value);
    $.ajax({
        url:'/registration/register',
        type: 'POST',
        dataType: 'json',
        data: {nombre,app,apm,genero,edad,tel,email,password},
        success: (data) => {
            if(data.message) {
                window.location.href='/login'
            }
            if(data.error) {
                form.reset();
            }
        }

    });
});