function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function checkBoxChecked(){
    if (checkBox.checked){
        showAlertSuccess();
    } else{
        showAlertError();
    }
}


const checkBox= document.getElementById("terminos")

const regBtn= document.getElementById("regBtn")

regBtn.addEventListener("click", checkBoxChecked);




document.getElementById("regBtn").addEventListener("click", function () {
   
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    
    
    const mensaje = document.getElementById("mensaje");
    
    
     if (password1 === password2) {
     
      mensaje.innerHTML = '<p class="text-success">Las contraseñas coinciden. Registro exitoso.</p>';
    } else {
      mensaje.innerHTML = '<p class="text-danger">Las contraseñas no coinciden. Intenta nuevamente.</p>';
    }
  });