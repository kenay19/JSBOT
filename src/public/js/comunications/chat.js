window.onload = () => {
    $.ajax({
        url: '/chat/getConversation',
        type: 'GET',
        dataType: 'json',
        success: (data) => {
            createMessage(data);
        }
    });
}
const input = document.getElementById('message');
input.addEventListener('change',(e) => {
    e.preventDefault();
    const message = input.value;
    $.ajax({
        url: '/chat/addMessage',
        type: 'POST',
        dataType: 'json',
        data:{message: message},
        success: (data) => {
            createMessage(data);
            input.value = "";
        }


    });
});

function createMessage(data) {
    const container = document.getElementById('container');
    for(i=0; i<data.mensaje.length; i++) {
        let div = document.createElement('div');
        let p = document.createElement('p');
        let text =document.createTextNode(data.mensaje[i].mensaje);
        p.appendChild(text);
        div.appendChild(p)
        if(data.mensaje[i].tipo == 1) {
            div.classList.add('usuario');
        }else{
            div.classList.add('response');
        }
        container.insertAdjacentElement("beforeend",div);
        div = document.createElement('div');
        p = document.createElement('p');
        text =document.createTextNode(data.respuesta[i].mensaje);
        p.appendChild(text);
        div.appendChild(p)
        if(data.respuesta[i].tipo == 1) {
            div.classList.add('usuario');
        }else{
            div.classList.add('response');
        }
        container.insertAdjacentElement("beforeend",div);
        container.scrollTop = container.scrollHeight;
    }
}