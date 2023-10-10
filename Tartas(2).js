
       $(document).ready(
           function()
           {
               cambiarImagen();
           }
       );
function cambiarImagen() {
    $("#chocolate").hover(function () {
        $(this).attr("src", "Tarta de chocolate.png");
        $(this).attr("width", "200");
        $(this).attr("height", "200");
    });
    $("#chocolate").mouseout(function () {
        $(this).attr("src", "1005609.jpg");
        $(this).attr("width", "200");
        $(this).attr("height", "200");
    });
    $("#queso").hover(function () {
        $(this).attr("src", "Tarta de queso.png");
        $(this).attr("width", "200");
        $(this).attr("height", "200");
    });
    $("#queso").mouseout(function () {
        $(this).attr("src", "200px-Tarte_au_fromage_blanc.png");
        $(this).attr("width", "200");
        $(this).attr("height", "200");
    });
    $("#marcos").hover(function () {
        $(this).attr("src", "Tarta de San Marcos.png");
        $(this).attr("width", "200");
        $(this).attr("height", "200");
    });
    $("#marcos").mouseout(function () {
        $(this).attr("src", "CD01212 TARTA SAN MARCOS 2.png");
        $(this).attr("width", "200");
        $(this).attr("height", "200");
    });
    $("#fresa").hover(function () {
        $(this).attr("src", "Tarta de Fresa.png");
        $(this).attr("width", "200");
        $(this).attr("height", "200");
    });
    $("#fresa").mouseout(function () {
        $(this).attr("src", "tarta-fresa-300x199.png");
        $(this).attr("width", "200");
        $(this).attr("height", "200");
    });
    $("#nata").hover(function () {
        $(this).attr("src", "Tarta de Nata.png");
        $(this).attr("width", "200");
        $(this).attr("height", "200");
    });
    $("#nata").mouseout(function () {
        $(this).attr("src", "tarta_natayturron_281005fedef34bcc0a174dc0c2422536.png");
        $(this).attr("width", "200");
        $(this).attr("height", "200");
    });
}