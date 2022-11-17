const form = document.getElementById('forms').addEventListener('submit',(e)=>{
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    $.ajax({
        url: '/login/verification',
        type: 'POST',
        dataType: 'json',
        data: {email,password: btoa(password)},
        success: (data)=>{
            if(data.success){
                window.location.href = '/chat'
            }
            if(data.error) {
                window.location.reload();
            }
        }
    });
});

console.log(form);
