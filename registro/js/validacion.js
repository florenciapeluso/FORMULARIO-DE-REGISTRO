function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

// function checkBoxChecked(){
//     if (checkBox.checked){
//         showAlertSuccess();
//     } else{
//         showAlertError();
//     }
// }


//const checkBox= document.getElementById("terminos")

//const regBtn= document.getElementById("regBtn")

//regBtn.addEventListener("click", checkBoxChecked);




document.getElementById("regBtn").addEventListener("click", function () {
   
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    const terminos = document.getElementById('terminos').checked;
    
    // Validar campos en blanco
    if (nombre === '' || apellido === '' || email === '' || password1 === '' || password2 === '') {
        showAlertError();
        return;
      }
    
    const mensaje = document.getElementById("mensaje");
    
    // Validar checkbox
    if (!terminos) {
        showAlertError();
        return;
      }
    
    // Validar contraseñas iguales
    if (password1 === password2) {
     
      mensaje.innerHTML = '<p class="text-success">Las contraseñas coinciden.</p>';
      showAlertSuccess();
    } else {
      mensaje.innerHTML = '<p class="text-danger">Las contraseñas no coinciden. Intenta nuevamente.</p>';
      showAlertError();
        return;
    }
  });