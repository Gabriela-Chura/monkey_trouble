function calcular()
{
	var monoa = document.getElementById("monoa").value;
	var monob = parseInt(document.getElementById("monob").value);

	var isMonoa = false;
	var isMonob = false;

	var salida = document.getElementById("salida");

	if(monoa == "1")
	{
		isMonoa = true;
	}

	if(monob == "1")
	{
		isMonob = true;
	}

	if(isMonoa)
	{
		salida.innerHTML = "1";
	}else{
		if(isMonob)
		{
			salida.innerHTML = "0";
		}else{
			salida.innerHTML = "1";
		}
	}
}