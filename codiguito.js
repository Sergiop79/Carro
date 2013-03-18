$(document).on("ready", inicio);
function inicio ()
{
	//Aqui va todo el codigo relacionado con DOM
	$("#personalizar").on("click", movida);
	$('#ponnombre').on('click', ponleNombre);
	$('#contacto').on('click', contactar);
	$('#cerrarcontacto').on('click', function(){
		$('#textocontacto').fadeOut('slow');
	});
}
function movida ()
{
	//JSON
	var cambiosCSS =
	{
		height: $("#cochecito").height(),
		margin: 0,
		overflow: "hidden",
		padding: 0,
		width: 0
	};
	var cambiosPersonalizacion =
	{
		height: "auto",
		opacity: 1,
		width: "40%"
	};
	$("#historia").css(cambiosCSS);
	$("#personalizacion").css(cambiosPersonalizacion);
	$("#color div").on("click", cambiarColor);
}
function cambiarColor (datos)
{
	var colorito = datos.currentTarget.id;
	var nuevoCoche = "c" + colorito + ".jpg";
	$("#cochecito img").attr("src", nuevoCoche);
}
function ponleNombre(){
	$('#formnombre').slideToggle('fast');
	$('#boton').on('click', function()	{
		var $texto = $('#nombre').val();
		$('h1').html($texto);
		$('figcaption h2').html($texto);
		$('#formnombre').fadeOut('fast');
	});
	$('#textocontacto').hide();

}
function contactar(){
	$('#textocontacto').slideToggle('fast');
	$('#formnombre').hide();
}