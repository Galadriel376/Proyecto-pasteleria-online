
		$(document).ready(
			function()
			{
			    cambiarImagen();
			}
		);
function cambiarImagen()
{
    $("#pepito").hover(function(){
        $(this).attr("src", "Pepito de azúcar.png");
        $(this).attr("width", "200");
        $(this).attr("height", "200");
    });
    $("#pepito").mouseout(function(){
        $(this).attr("src", "022373-Pepito-azucar-relleno-crema-270x202.png");
        $(this).attr("width", "200");
        $(this).attr("height", "200");
    });
    $("#palmera").hover(function () {
        $(this).attr("src", "Palmeras.png");
        $(this).attr("width", "200");
        $(this).attr("height", "200");
    });
    $("#palmera").mouseout(function () {
        $(this).attr("src", "2012 2013 2090 Palmeras.jpg");
        $(this).attr("width", "200");
        $(this).attr("height", "200");
    });
    $("#croissant").hover(function () {
        $(this).attr("src", "CroissantE.png");
        $(this).attr("width", "200");
        $(this).attr("height", "200");
    });
    $("#croissant").mouseout(function () {
        $(this).attr("src", "croissant.png");
        $(this).attr("width", "200");
        $(this).attr("height", "200");
    });
    $("#donut").hover(function () {
        $(this).attr("src", "DonutsE.png");
        $(this).attr("width", "200");
        $(this).attr("height", "200");
    });
    $("#donut").mouseout(function () {
        $(this).attr("src", "donuts.png");
        $(this).attr("width", "200");
        $(this).attr("height", "200");
    });
    $("#ensaimada").hover(function () {
        $(this).attr("src","Ensaimada.png");
        $(this).attr("width", "200");
        $(this).attr("height", "200");
    });
    $("#ensaimada").mouseout(function () {
        $(this).attr("src", "Ensaimada Plus.jpg");
        $(this).attr("width", "200");
        $(this).attr("height", "200");
    });
}