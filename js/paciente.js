window.onload=function(){
	var nombre = document.getElementById("nombre-paciente");
	var apellido = document.getElementById("apellido-paciente");
	var edad = document.getElementById("edad-paciente");
	var genero = document.getElementById("genero-paciente");
	var ciudad = document.getElementById("ciudad-paciente");
	var pais = document.getElementById("pais-paciente");

	var objetoPaciente = JSON.parse(localStorage.getItem("nuevoPaciente"));

	nombre.innerText=objetoPaciente.nombre;
	apellido.innerText=objetoPaciente.apellido;
	edad.innerText=objetoPaciente.edad;
	genero.innerText=objetoPaciente.genero;
	ciudad.innerText=objetoPaciente.ciudad;
	pais.innerText=objetoPaciente.pais;

	function Paciente(nombrePaciente, apellidoPaciente, edadPaciente, generoPaciente,ciudadPaciente,paisPaciente) {
		this.nombre = nombrePaciente;
		this.apellido = apellidoPaciente;
		this.edad = edadPaciente;
		this.genero = generoPaciente;
		this.ciudad = ciudadPaciente;
		this.pais = paisPaciente;
	};

	document.getElementsByTagName("button")[0].addEventListener("click",function(){
		window.location="editar.html"
	})
};