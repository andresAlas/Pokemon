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
	var treecko = new pokemon("Treecko",60,30);
	var torchic = new pokemon("Torchic",55,27);
	pikachu.grito = "Pikaaa!";
	totodile.grito = "Tototodilee!";
	treecko.grito = "Treeckoooo!";
	torchic.grito = "Torchiiiic!";

	var elija = prompt("Elija un Pokemon: \n Pikachu: 0 \n Totodile: 1 \n Treecko: 2 \n Torchic: 3", 0);

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

	if(elija == 2)
	{
		nombrePokemon.textContent = treecko.nombre;
		datosPokemon.textContent = "La vida del pokemon es: " + treecko.vida + " El ataque del pokemon es: " + treecko.ataque + " Su grito es: " + treecko.grito;
		document.write("<img src=imagenes/treecko.gif>");
		treecko.gritar();
	}

	if(elija == 3)
	{
		nombrePokemon.textContent = torchic.nombre;
		datosPokemon.textContent = "La vida del pokemon es: " + torchic.vida + " El ataque del pokemon es: " + torchic.ataque + " Su grito es: " + torchic.grito;
		document.write("<img src=imagenes/torchic.gif>");
		torchic.gritar();
	}
}