const espejo = 35000;
const totem = 30000;
const base = 45000;
const cobertura = 50;
const repetir = true

let ingreso = alert("Gracias por contactarte con SelfieCam PhotoBooth. Por favor completa la siguiente información para que podamos darte un presupuesto a tu medida?");

let evento = prompt("Que evento estas planeando? \n1 - Boda. \n2 - Cumpleaños \n3 - 15 Años. \n4 -Evento Empresarial \n5 - Otro");

let lugar = prompt("Donde se llevará a cabo la fiesta? \n1 - Córdoba Capital. \n2 - Interior");
switch(lugar){
  case "1":""
		break;
  case "2": 
	let km = parseInt(prompt("Ingresa los kilómetros que hay desde tu localidad hasta Córdoba Capital"));
	if(km>cobertura){
		alert("No llegamos hasta esa localidad. Gracias por tu consulta")
    repetir = false;	
	}	
};

let servicios = prompt("Estos son los servicios disponibles \nElegí una opción: \n1 - Espejo Mágico. \n2 - Totem Fotográfico. \n3 - Base 360. \n4 - Todos");
switch(servicios){
  case "1": 
    alert("El costo del servicio por 2 horas es de $" + espejo); 
    break;
  case "2": 
    alert("El costo del servicio por 2 horas es de $" + totem);
    break;
  case "3":
		alert("El costo del servicio por 2 horas es de $" + base);     
    break;
	case "4": 
	alert("\n-El costo del servicio de Espejo Mágico por 2 horas es de $" + espejo + "\n-El costo del servicio de Totem Fotografico por 2 horas es de $" + totem + "\n-El costo del servicio de Base 360 por 2 horas es de $" + base);	
	default:"" 
    break;
};

