function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}


document.getElementById("regBtn").addEventListener("click", function () {
    // Obtener los valores de los campos de contraseña
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    
    // Verificar si las contraseñas coinciden
    if (password1 === password2) {
      // Mostrar la alerta de éxito
      const alertSuccess = document.getElementById("alert-success");
      alertSuccess.classList.add("show");
      alertSuccess.classList.remove("fade");
      
      // Aquí puedes agregar más acciones, como enviar el formulario
    } else {
      // Mostrar la alerta de error
      const alertDanger = document.getElementById("alert-danger");
      alertDanger.classList.add("show");
      alertDanger.classList.remove("fade");
    }
  });