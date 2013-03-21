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
	$('#cerrarnombre').on('click', function()	{
		$('#formnombre').fadeOut('slow');
	});
	$('#cierraperso').on('click', movida2);

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
	$('#formnombre').fadeOut('slow');
	$('#textocontacto').fadeOut('slow');
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
function movida2(){
	var cambiosCSS =
	{
		height: 0,
		opacity:0, 
		overflow: "hidden",
		width: 0
	};
	var cambiosHistoria =
	{
		height: $("#cochecito").height(),
		margin: '0 2% 7em 1em',
		overflow: "visible",
		padding: '1em',
		width: '40%'
	}

	$('#personalizacion').css(cambiosCSS);
	$('#historia').css(cambiosHistoria);
};


