window.onload=function(){
	document.getElementsByTagName("form")[0].onsubmit=function(e){
		e.preventDefault();
	}
	var objetoPaciente = JSON.parse(localStorage.getItem("nuevoPaciente"));
	var inputsEditar = document.getElementsByClassName("input-editar");
	inputsEditar[0].value = objetoPaciente.nombre;
	inputsEditar[1].value = objetoPaciente.apellido;
	inputsEditar[2].value = objetoPaciente.edad;
	inputsEditar[3].value = objetoPaciente.genero;
	inputsEditar[4].value = objetoPaciente.ciudad;
	inputsEditar[5].value = objetoPaciente.pais;

	document.getElementsByTagName("button")[0].addEventListener("click",function(){
		if(inputsEditar[0].length!=0 && inputsEditar[1].length!=0 && inputsEditar[2].length!=0 && inputsEditar[3].length!=0 && inputsEditar[4].length!=0 && inputsEditar[5].length!=0){
			objetoPaciente.nombre=inputsEditar[0].value;
			objetoPaciente.apellido= inputsEditar[1].value
			objetoPaciente.edad = inputsEditar[2].value;
			objetoPaciente.genero = inputsEditar[3].value;
			objetoPaciente.ciudad = inputsEditar[4].value
			objetoPaciente.pais = inputsEditar[5].value;
			localStorage.setItem("nuevoPaciente",JSON.stringify(objetoPaciente));
			window.location="paciente.html"
		}
		else{
			alert("Todos los campos son obligatorios");
		}
	})
};