window.onload=function(){
	document.getElementById("form").onsubmit=function(e){
		e.preventDefault();
	}
	function Paciente(nombrePaciente, apellidoPaciente, edadPaciente, generoPaciente,ciudadPaciente,paisPaciente) {
		this.nombre = nombrePaciente;
		this.apellido = apellidoPaciente;
		this.edad = edadPaciente;
		this.genero = generoPaciente;
		this.ciudad = ciudadPaciente;
		this.pais = paisPaciente;
	};
	var arrPacientes = [];

	document.getElementById("registrar").addEventListener("click",function(){
		var nombre = document.getElementById("nombre").value;
		var apellido = document.getElementById("apellido").value;
		var edad = document.getElementById("edad").value;
		var genero = document.getElementById("genero").value;
		var ciudad = document.getElementById("ciudad").value;
		var pais = document.getElementById("pais").value;
		arrPacientes.push(new Paciente(nombre,apellido,edad,genero,ciudad,pais));
		creandoDiv(arrPacientes);
		document.getElementById("form").reset()
	}); 

	function creandoDiv(paciente){
		var contenedor = document.getElementById("div-contenedor");
		contenedor.innerHTML="";
		for(var i = 0; i<paciente.length;i++){
			var contenedorPaciente = document.createElement("div");
			contenedorPaciente.classList.add("un-paciente");
			for (var prop in paciente[i]) {
				var dato = document.createElement("p");
				dato.innerHTML= prop + " : " + paciente[i][prop];
				contenedorPaciente.appendChild(dato);
			}
			contenedor.appendChild(contenedorPaciente);
		}
	}

}