

document.addEventListener('DOMContentLoaded', () =>{
    document.getElementById("test").addEventListener('click', () =>{
        let username = document.getElementById("userName").value;
        let email = document.getElementById("email").value;
        let pass = document.getElementById("pass").value;
        let repass = document.getElementById("repass").value;
    
        let hibaUzenet = document.getElementById("hiba");

        if()
    
        if(username.length <3){
            hibaUzenet.textContent = "Rövid username (min 3 karakter)";
        }
    
        if(email.contains != "@"){
            hibaUzenet.textContent = "Az email nem tartalmaz '@' jelet.";
        }
    
        if(pass.length < 8){
            hibaUzenet.textContent = "A jelszónak hosszabnak kell lennie mint 8 karakter";
        }
        if(pass != repass){
            hibaUzenet.textContent = "Nem eggyezik a jelszó";
        }
    
    })
})
