
		$(document).ready(
			function()
			{
			    cambiarImagen();
			}
		);
function cambiarImagen()
{ $("#buñuelos").hover(function () {
    $(this).attr("src", "Buñuelos.png");
    $(this).attr("width", "200");
    $(this).attr("height", "200");
});
    $("#buñuelos").mouseout(function () {
        $(this).attr("src", "a52784_b4dfcaa855e84063bd92c6b3f21ab08c.png");
        $(this).attr("width", "200");
        $(this).attr("height", "200");
    });
    $("#huesos").hover(function () {
        $(this).attr("src", "Huesos.png");
        $(this).attr("width", "200");
        $(this).attr("height", "200");
    });
    $("#huesos").mouseout(function () {
        $(this).attr("src", "huesos-de-santo.jpg");
        $(this).attr("width", "200");
        $(this).attr("height", "200");
    });
    $("#mantecados").hover(function () {
        $(this).attr("src", "MantecadosE.png");
        $(this).attr("width", "200");
        $(this).attr("height", "200");
    });
    $("#mantecados").mouseout(function () {
        $(this).attr("src", "mantecados.png");
        $(this).attr("width", "200");
        $(this).attr("height", "200");
    });
    $("#yemas").hover(function () {
        $(this).attr("src", "Yemas.png");
        $(this).attr("width", "200");
        $(this).attr("height", "200");
    });
    $("#yemas").mouseout(function () {
        $(this).attr("src", "original.png");
        $(this).attr("width", "200");
        $(this).attr("height", "200");
    });
    $("#trufas").hover(function () {
        $(this).attr("src", "Trufas.png");
        $(this).attr("width", "200");
        $(this).attr("height", "200");
    });
    $("#trufas").mouseout(function () {
        $(this).attr("src", "trufas_buena3.png");
        $(this).attr("width", "200");
        $(this).attr("height", "200");
    });
}
