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
	var pikachu = new pokemon("Pikachu",50,22);
	var totodile = new pokemon("Totodile",52,20);
	pikachu.grito = "Pikaaa!";
	totodile.grito = "Tototodilee!";

	var elija = prompt("Elija un Pokemon: \n Pikachu: 0 \n Totodile: 1", 0);

	if(elija == 0) 
	{
		nombrePokemon.textContent = pikachu.nombre;
		datosPokemon.textContent = "La vida del pokemon es: " + pikachu.vida + " El ataque del pokemon es: " + pikachu.ataque + " Su grito es: " + pikachu.grito;
		document.write("<img src=imagenes/pikachu.png>");
		pikachu.gritar();
	}

	if(elija == 1)
	{
		nombrePokemon.textContent = totodile.nombre;
		datosPokemon.textContent = "La vida del pokemon es: " + totodile.vida + " El ataque del pokemon es: " + totodile.ataque + " Su grito es: " + totodile.grito;
		document.write("<img src=imagenes/totodile.png>");
		totodile.gritar();
	}
}