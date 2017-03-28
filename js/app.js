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
		if(nombre.length!=0 && apellido.length!=0 && edad.length!=0 && genero.length!=0 && ciudad.length!=0 && pais.length!=0){
			//arrPacientes.push(new Paciente(nombre,apellido,edad,genero,ciudad,pais));
			console.log(new Paciente(nombre,apellido,edad,genero,ciudad,pais));
			localStorage.setItem("nuevoPaciente",JSON.stringify(new Paciente(nombre,apellido,edad,genero,ciudad,pais)));
			//creandoDiv(arrPacientes);
			document.getElementById("form").reset()
			window.location="paciente.html";
		}
		else{
			var indicacion = document.getElementById("indicacion");
			indicacion.innerText = "Todos los campos son obligatorios"
		}
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

	var nombre = document.getElementById("nombre");
	var apellido = document.getElementById("apellido");
	var edad = document.getElementById("edad");

	var soloLetras = function(e){
		var codigoTecla = e.keyCode;
		if((codigoTecla>=97 && codigoTecla<=122) || (codigoTecla>=65 && codigoTecla<=90)|| codigoTecla==39 || codigoTecla == 32){
			this.nextElementSibling.nextElementSibling.innerText = "";
			return true; 
		}else{
			this.nextElementSibling.nextElementSibling.innerText = "Este campo solo permite letras"
			return false;
		}
	}
	nombre.onkeypress=soloLetras;
	apellido.onkeypress=soloLetras;

	var soloNumeros = function(e){
		var codigoTecla = e.keyCode;
		var longitud = this.value.length;
		if(longitud==1){
			this.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.focus();
		}
		if(codigoTecla>=48 && codigoTecla<=57 && this.value.length<=2){
			return true; 
		}else{
			return false;
		}
	}
	edad.onkeypress=soloNumeros;

	var inputs = document.getElementsByClassName("input-registro");
	var validacionInput = function(){
		if(this.value.trim().length==0){
			this.value ="";
			this.nextElementSibling.nextElementSibling.innerText= "*Este campo es obligatorio";
		}else{
			this.nextElementSibling.nextElementSibling.innerText= "";
		}
		/*		var datoCorrecto = this.value.charAt(0).toUpperCase()+this.value.substring(1).toLowerCase();
		this.value=datoCorrecto;*/
		if(this.getAttribute("type")=="text"){
			var arrDato = this.value.split(" ");
			var datoConMayusculas = "";
			for(var i = 0; i<arrDato.length;i++){
				datoConMayusculas += arrDato[i].charAt(0).toUpperCase() + arrDato[i].substring(1).toLowerCase() + " ";
			}
			this.value=datoConMayusculas.trim();
		}
	}

	for(var i = 0; i<inputs.length;i++){
		inputs[i].onblur=validacionInput;
	}

}