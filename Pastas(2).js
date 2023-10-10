
		$(document).ready(
			function()
			{
			    cambiarImagen();
			}
		);
function cambiarImagen()
{$("#cookies").hover(function () {
    $(this).attr("src", "Cookies.png");
    $(this).attr("width", "200");
    $(this).attr("height", "200");
});
    $("#cookies").mouseout(function () {
        $(this).attr("src", "ALIMENTOS (GALLETAS) (33).png");
        $(this).attr("width", "200");
        $(this).attr("height", "200");
    });
    $("#dulces").hover(function () {
        $(this).attr("src", "Dulce de leche.png");
        $(this).attr("width", "200");
        $(this).attr("height", "200");
    });
    $("#dulces").mouseout(function () {
        $(this).attr("src", "mamul-datil-minifw.png");
        $(this).attr("width", "200");
        $(this).attr("height", "200");
    });
    $("#galletas").hover(function () {
        $(this).attr("src", "Pastas integrales.png");
        $(this).attr("width", "200");
        $(this).attr("height", "200");
    });
    $("#galletas").mouseout(function () {
        $(this).attr("src", "Miniatura-Galletas-Cacao.png");
        $(this).attr("width", "200");
        $(this).attr("height", "200");
    });
    $("#macarons").hover(function () {
        $(this).attr("src", "Macarons.png");
        $(this).attr("width", "200");
        $(this).attr("height", "200");
    });
    $("#macarons").mouseout(function () {
        $(this).attr("src", "Ohlala-Macarons.jpg");
        $(this).attr("width", "200");
        $(this).attr("height", "200");
    });
    $("#tejas").hover(function () {
        $(this).attr("src", "TejasE.png");
        $(this).attr("width", "200");
        $(this).attr("height", "200");
    });
    $("#tejas").mouseout(function () {
        $(this).attr("src", "tejas.jpg");
        $(this).attr("width", "200");
        $(this).attr("height", "200");
    });
}