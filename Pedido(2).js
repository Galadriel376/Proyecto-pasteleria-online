
    function mostrar()
    {
        var nombre = document.getElementById("nombre").value;
        var apellido1 = document.getElementById("apellido1").value;
        var apellido2 = document.getElementById("apellido2").value;
        var domicilio = document.getElementById("domicilio").value;
        var telefono = document.getElementById("telefono").value;
        var email = document.getElementById("email").value;
        var ciudad = document.getElementById("ciudad").value;
        var cantidad = document.getElementById("cantidad").value;
        var cantidad2 = document.getElementById("cantidad2").value;
        var cantidad3 = document.getElementById("cantidad3").value;
        var cantidad4 = document.getElementById("cantidad4").value;
        var cantidad5 = document.getElementById("cantidad5").value;
        var cantidad6 = document.getElementById("cantidad6").value;
        var cantidad7 = document.getElementById("cantidad7").value;
        var cantidad8 = document.getElementById("cantidad8").value;
        var cantidad9 = document.getElementById("cantidad9").value;
        var cantidad10 = document.getElementById("cantidad10").value;
        var cantidad11 = document.getElementById("cantidad11").value;
        var cantidad12 = document.getElementById("cantidad12").value;
        var cantidad13 = document.getElementById("cantidad13").value;
        var cantidad14 = document.getElementById("cantidad14").value;
        var cantidad15 = document.getElementById("cantidad15").value;
        var cantidad16 = document.getElementById("cantidad16").value;
        var cantidad17 = document.getElementById("cantidad17").value;
        var cantidad18 = document.getElementById("cantidad18").value;
        var cantidad19 = document.getElementById("cantidad19").value;
        var cantidad20 = document.getElementById("cantidad20").value;
        var sabor = document.getElementById("sabor").value;
        var sabor2 = document.getElementById("sabor2").value;
        var sabor3 = document.getElementById("sabor3").value;
        var sabor4 = document.getElementById("sabor4").value;
        var sabor5 = document.getElementById("sabor5").value;
        var sabor6 = document.getElementById("sabor6").value;
        var sabor7 = document.getElementById("sabor7").value;
        var recogida = document.getElementById("recoger").value;
        var productos = document.getElementsByName("chkproductos");
        var comentarios = document.getElementById("comentarios").value;
        var resultado = document.getElementById("resultado");
        var resultado2 = "";
        var miVentana = window.open("", "_blank", "width=300,height=700");
        for (var i = 0; i < productos.length; i++)
        {
            if (productos[i].checked == true)
            {
                resultado2 = resultado2 + "<br />" + (productos[i].value);
            }
        }
   
        miVentana.document.write(resultado = nombre + "<br />" + apellido1 + "<br />" + apellido2 + "<br />" + domicilio + "<br />" + telefono + "<br />" + email + "<br />" + ciudad + "<br />" + resultado2 + "<br />" + cantidad + "&nbsp" + sabor + "<br/>" + cantidad2 + "&nbsp" + sabor2 + "<br/>" + cantidad3 + "&nbsp" + sabor3 + "<br/>" + cantidad4 + "&nbsp" + sabor4 + "<br/>" + cantidad5 + "<br/>" + cantidad6 + "<br/>" + cantidad7 + "<br/>" + cantidad8 + "<br/>" + cantidad9 + "<br/>" + cantidad10 + "<br/>" + cantidad11 + "<br/>" + cantidad12 + "<br/>" + cantidad13 + "<br/>" + cantidad14 + "&nbsp" + sabor5 + "<br/>" + cantidad15 + "<br/>" + cantidad16 + "&nbsp" + sabor6 + "<br/>" + cantidad17 + "&nbsp" + sabor7 + "<br/>" + cantidad18 + "<br/>" + cantidad19 + "<br/>" + cantidad20 + "<br/>" + recogida + "<br/>" + comentarios);

    }
    