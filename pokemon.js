function pokemon(n,v,a)
{
	this.grito = "Pika";
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
	var pikachu = new pokemon("Pikachu", 50, 25);
	nombrePokemon.textContent = pikachu.nombre;
	datosPokemon.textContent = pikachu.ataque;
}