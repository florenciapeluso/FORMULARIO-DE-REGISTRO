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

