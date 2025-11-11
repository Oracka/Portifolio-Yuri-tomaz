


// darkmode
const checkDark = document.getElementById('check');

function darkmode() {
    if(check.checked){
        document.body.classList.add("dark");
        localStorage.setItem("manter", "true");
    } else  {
        document.body.classList.remove("dark");
        localStorage.setItem("manter", "false");
    }

}
//garantir q ele mude 
checkDark.addEventListener("change", darkmode);


// storage
// importante é fechar o dom no final pra contar o codigo inteiro 
document.addEventListener("DOMContentLoaded", () => {
 const ManterModo = localStorage.getItem("manter");
   if (ManterModo === "true") {
    document.body.classList.add("dark");
    checkDark.checked = true;
   }

   darkmode();

});

