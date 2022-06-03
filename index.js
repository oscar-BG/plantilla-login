var json
function respuesta(){
    console.log("respuesta")
    let usuario = $("#user").val()
    let pass = $("#pass").val()

    console.log(usuario)
    console.log(pass)
    
    $.ajax({
        url: 'http://localhost:8002/infra_webservice/login.php',
        type: 'POST',
        data: {
            user: usuario,
            pass: pass
        }
    }).done(function(data) {
        json = JSON.parse(data)
        // console.log(json)

        
        if (json.status) {
            var success = json.success

            var nombre = success.nombre
            
        }

        
        var usuario_existe = json.usuario_existe;

       

        if(usuario_existe != "1"){
            document.getElementById('alert').innerHTML = '<h1>Usuario y contraseña incorrectas</h1>';
        }else{
            document.getElementById('alert-bienvenida').innerHTML = '<h1>Bienenido</h1>';

            var url = "presentacion.html";
            $(location).attr('href',url);
        }
        
        //var user_res = json.usuario
        //console.log('Tengo usuario', user_res)

    }).fail(function(err) {
        console.log(err)
    })
}

function presentacion(){
    $.ajax
}