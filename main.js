function calcular()
{
	var monoa = document.getElementById("monoa").value;
	var monob = parseInt(document.getElementById("monob").value);

	var a = monoa, monob;
	var b = monoa, monob;

	var salida = document.getElementById("salida");

	if(monoa = "1")
	{
		a = true;
	}

	if(a == monoa && b ==monob){
        salida.innerHTML =1;
    } else if(a != monoa && b != monob){
        salida.innerHTML =1; 
    } else{
        salida.innerHTML = 0;
    }
}