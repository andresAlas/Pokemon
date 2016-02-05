function pokemon(n,v,a,g)
{
	this.grito = g;
	this.nombre = n;
	this.vida = v;
	this.ataque = a;
	this.gritar = function()
	{
		alert(this.grito);
	}
}

function inicio()
{
	var opcionNombre = ["Pikachu","Totodile"];
	var opcionGrito = ["Pikaaa","Tototodilee"];
	opcionUsuario = prompt("Que Pokemon eliges: \n Pikachu: 0 \n Totodile: 1", 0);

	if(opcionNombre[opcionUsuario] == Pikachu)
	{
		var opcionPokemon = new pokemon(opcionNombre[opcionUsuario], 50, 25, opcionGrito[opcionUsuario]);
		nombrePokemon.innerText = opcionPokemon.nombre;
		document.write("<img src=imagenes/pikachu.png/>");
		datosPokemon.innerText = "El nombre del Pokemon es: " + opcionPokemon.nombre + "La vida del Pokemon es: " + opcionPokemon.vida + "El ataque del Pokemon es: " + opcionPokemon.ataque;
	}
}