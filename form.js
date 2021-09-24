function click_submit()
{
    let name = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let telefono = document.getElementById("telefono").value;
    let telefono = document.getElementById("correo").value;
    let telefono = document.getElementById("password").value;
    checkNombre(nombre, "nombre");
    checkApellido(apellido, "apellido");
    checkTelefono(telefono, "telefono");
    checkCorreo(correo, "correo");
    checkContrasena(password, "password");
}

function checkNombre(texto, texto1){
    let verificacion = validar_texto(texto);

    if (verificacion == 1){
        alert("El campo " + texto1 + " fue ingresado correctamente");
    }
    else if (verificacion == 2){
        alert("El campo " + texto1 + " no admite numeros");
    }
    else if (verificacion == 3){
        alert("El campo " + texto1 + " debe contener entre 4 y 30 caracteres");
    }
    else if (verificacion == 4){
        alert("El campo " + texto1 + " no se puede dejar vacío");
    }
    module.export=checkNombre;
}

function checkApellido(texto, texto1){
    let verificacion = validar_texto(texto);

    if (verificacion == 1){
        alert("El campo " + texto1 + " fue ingresado correctamente");
    }
    else if (verificacion == 2){
        alert("El campo " + texto1 + " no admite numeros");
    }
    else if (verificacion == 3){
        alert("El campo " + texto1 + " debe contener entre 4 y 30 caracteres");
    }
    else if (verificacion == 4){
        alert("El campo " + texto1 + " no se puede dejar vacío");
    }

}


function checkTelefono(numero, numero1){

    let verificacion = validar_numero(numero);    
    if (verificacion == 1){
        alert("El campo " + numero1 + " fue ingresado correctamente");
    }
    else if (verificacion == 2){
        alert("El campo " + numero1 + " solo admite numeros");
    }
    else if (verificacion == 3){
        alert("El campo " + numero1 + " debe contener 7 digitos");
    }
    else if (verificacion == 4){
        alert("El campo " + numero1 + " no se puede dejar vacío");
    }
  
}

function checkContrasena(password, password1){
    
    let verificacion = validar_numero(password);    
    if (verificacion == 1){
        alert("El campo " + password1 + " fue ingresado correctamente");
    }
    else if (verificacion == 2){
        alert("El campo " + password1 + " ...............");
    }
    else if (verificacion == 3){
        alert("El campo " + password1 + " ........... ");
    }
    else if (verificacion == 4){
        alert("El campo " + password1 + " .............");
    }
    
}

function checkContrasena(correo, correo1){
    
    let verificacion = validar_numero(correo);    
    if (verificacion == 1){
        alert("El campo " + correo1 + " fue ingresado correctamente");
    }
    else if (verificacion == 2){
        alert("El campo " + correo1 + " debe contener el símbolo '@'");
    }
    else if (verificacion == 3){
        alert("El campo " + correo1 + " no se puede dejar vacío");
    }
}

function validar_texto(){
    let array_texto = Array.from(texto);
    let verificacion = 1;
    if (texto != "") {
        if (array_texto.length <= 30 && array_texto.length >= 4) {
            for(let i=0; i<array_campo.length; i++){
                if(array_texto[i] == "0" || array_texto[i] == "1" || array_texto[i] == "2" || array_texto[i] == "3" || array_texto[i] == "4" || array_texto[i] == "5" || array_texto[i] == "6" || array_texto[i] == "7" || array_texto[i] == "8" || array_texto[i] == "9"){  
                    verificacion = 2;
                    i = array_texto.length;                  
                }
            }
        }
        else{
            verificacion = 3;
        }       
    }
    else{
        verificacion = 4;       
    }
    return verificacion;
}

function validar_numero(numero){
    let array_tel = Array.from(numero);
    let verificacion = 1;
    if(numero != ""){
        if(array_tel.length == 7){
            for(let i=0; i<array_tel.length; i++)
            {                
                if(array_tel[i] == "0" || array_tel[i] == "1" || array_tel[i] == "2" || array_tel[i] == "3" || array_tel[i] == "4" || array_tel[i] == "5" || array_tel[i] == "6" || array_tel[i] == "7" || array_tel[i] == "8" || array_tel[i] == "9"){ 

                }
                else
                {
                    verificacion = 2;
                    i = array_tel.length;  
                }
            }
        }
        else
        {
            verificacion = 3;
        }

    }
    else
    {
        verificacion = 4;
    }
    return verificacion;
}

function validar_correo(correo){
    let array_correo = Array.from(correo);
    let verificacion = 1;
    if(numero != ""){
        for(let i=0; i<array_correo.length; i++){                
            if(array_correo[i] == "@"){ 

            }
            else{
                verificacion = 2;
                i = array_correo.length;  
            }
        }
    }
    else{
        verificacion = 3;
    }
    return verificacion;
}

function validar_contrasena(password){

}




module.export={checkNombre, checkApellido, checkCorreo, checkTelefono, checkContrasena};
