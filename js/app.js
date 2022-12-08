const espejo = 35000;
const totem = 30000;
const base = 45000;
const cobertura = 50;
const dosHs = 0;
const tresHs = 9000;
const cuatroHs = 18000  
let continuar = true;
let repetir = true;
const mensaje= document.querySelector("#mensaje")
const DateTime = luxon.DateTime;

const ubicacion = [
  "Córdoba Capital", 
  "Interior"
];
const evento = [
  "Casamiento",
  "15 Años",
  "Cumpleaños",
  "Evento Corporativo",
  "Otro"
];
const servicios = [
  "Espejo Mágico", 
  "Totem Fotográfico", 
  "Base 360"
];
const tiempo = [
  "2hs", 
  "3hs", 
  "4hs",
];
const selectUbicacion = document.querySelector('select[name="ubicacion"]');
const selectEvento = document.querySelector('select[name="evento"]');
const selectServicio = document.querySelector('select[name="servicio"]');
const selectFecha = document.querySelector('input[name="fecha"]');
const selectTiempo = document.querySelector('select[name="tiempo"]');



//DOM
ubicacion.forEach((lugar) => {
  let option = document.createElement("option");
  option.value = lugar;
  option.innerText = lugar;
  selectUbicacion.appendChild(option);
});

selectUbicacion.addEventListener("change", () => {
  let option = selectUbicacion.options[selectUbicacion.selectedIndex].value;
  while(repetir){
  if (option == "Córdoba Capital") {;
    repetir = false;
  } else if (option == "Interior") {
    km = parseInt(
      prompt("Ingresa los kilómetros que hay desde tu localidad hasta Córdoba Capital:")
    );
    if (km > cobertura) {
      swal("Lo sentimos!","...No llegamos hasta tu Localidad!");
      repetir = false;
      continuar = false;
    } else {
      repetir = false;
    }
  } else {
    alert("Ingresa una opcion valida");
  }
}
});

evento.forEach((tipo) => {
  let option = document.createElement("option");
  option.value = tipo;
  option.innerText = tipo;
  selectEvento.appendChild(option);
});

selectEvento.addEventListener("change", () => {
  let option = selectEvento.options[selectEvento.selectedIndex].value;
  switch (option) {
    case evento[0]:
      break;
    case evento[1]:
      break;
    case evento[2]:
      break;
    case evento[3]:
      break;
    case evento[4]:
      break;
    default:
      alert("Ingresa una opcion valida");
      break;
  }
});

servicios.forEach((tipo) => {
  let option = document.createElement("option");
  option.value = tipo;
  option.innerText = tipo;
  selectServicio.appendChild(option);
});

selectServicio.addEventListener("change", () => {
  let option = selectServicio.options[selectServicio.selectedIndex].value;
  switch (option) {
    case servicios[0]:
      document.getElementById('EnvioSolicitud').onclick = function(){
        mensaje.innerHTML= `<h3>El costo del servicio de ${option} es de $${espejo }</h3>`
      };
      break;
    case servicios[1]:
      document.getElementById('EnvioSolicitud').onclick = function(){
      mensaje.innerHTML= `<h3>El costo del servicio de ${option} es de $${totem}</h3>`
      };
      break;
    case servicios[2]:
      document.getElementById('EnvioSolicitud').onclick = function(){
      mensaje.innerHTML= `<h3>El costo del servicio de la ${option} es de $${base}</h3>`
      };
      break;
    default:
      alert("Ingresa una opcion valida");
      break;
  }
});

//LUXON
selectFecha.addEventListener("select", () => {
  let fecha = document.querySelector('input[type="date"]');
  let min = DateTime.now().toFormat("yyyy-MM-dd")
  let max = DateTime.now().plus({months: 12}).toFormat("yyyy-MM-dd")
  
  fecha.forEach(el=>{
    el.setAtribute('min', min)
    el.setAtribute('max', max)  
  });
  return (fecha)
});

tiempo.forEach((horas) => {
  let duracion = document.createElement("option");
  duracion.value = horas;
  duracion.innerText = horas;
  selectTiempo.appendChild(duracion);
});

selectTiempo.addEventListener("change", ()=>{
  let duracion = selectTiempo.options[selectTiempo.selectedIndex].value;
  switch(duracion){
    case tiempo[0]:   
      break;
    case tiempo[1]:
      break;
    case tiempo[2]:
      break;
    default:
      alert("Ingresa una opcion valida");
      break;
  }

})


// JSON
document.querySelector('#EnvioSolicitud').addEventListener('click', guardarSolicitud);

function guardarSolicitud(event){
  event.preventDefault();
    let sUbicacion = selectUbicacion.value
    let sEvento = selectEvento.value
    let sServicio = selectServicio.value
    let sFecha = selectFecha.value
    let sTiempo = selectTiempo.value
        

addPedido(sUbicacion,sEvento,sServicio,sFecha,sTiempo);
}

//STORAGE
let Solicitud = [];

function addPedido(pubicacion,pevento,pservicio,pfecha,ptiempo) {

let nuevaSolicitud = {
    lugar: pubicacion,
    evento: pevento,
    servicio: pservicio,
    fecha: pfecha,
    tiempo: ptiempo,
};
  console.log(nuevaSolicitud);
  Solicitud.push(nuevaSolicitud);
  LSSolicitud(Solicitud)
}

function getSolicitud(){
  let storedList =localStorage.getItem('localSolicitud');
  if(storedList == null){
      Solicitud =[];
  }else{
      Solicitud = JSON.parse(storedList);
  }
  return Solicitud;
}

function LSSolicitud(plist){
  localStorage.setItem('localSolicitud', JSON.stringify(plist));
}

fetch("/data/datos.json")
.then(res=>res.json())
.then(data=>{
  console.log(data);
})




// const ingreso = alert("Gracias por contactarte con SelfieCam PhotoBooth. Por favor completa la siguiente información para que podamos darte un presupuesto a tu medida?");

//let repetir = true;

// while (repetir) {
//   let lugar = prompt(
//     "Donde se llevará a cabo la fiesta? \n1 - Córdoba Capital. \n2 - Interior"
//   );
//   if (lugar == "1") {
//     console.log("capital");
//     repetir = false;
//   } else if (lugar == "2") {
//     console.log("interior");
//     km = parseInt(
//       prompt(
//         "Ingresa los kilómetros que hay desde tu localidad hasta Córdoba Capital"
//       )
//     );
//     if (km > cobertura) {
//       alert("No llegamos hasta esa localidad. Gracias por tu consulta");
//       repetir = false;
//       continuar = false;
//     } else {
//       repetir = false;
//     }
//   } else {
//     alert("Ingresa una opcion valida");
//   }
// }

// if (continuar == true) {
//   let evento = prompt(
//     "Que evento estas planeando? \n1 - Boda. \n2 - Cumpleaños \n3 - 15 Años. \n4 -Evento Empresarial \n5 - Otro"
//   );

//   switch (evento) {
//     case "1":
//       console.log("boda");
//       break;
//     case "2":
//       console.log("cumpleaños");
//       break;
//     case "3":
//       console.log("15 años");
//       break;
//     case "4":
//       console.log("Evento Empresarial");
//       break;
//     case "5":
//       console.log("Otro");
//       break;
//     default:
//       alert("Ingresa una opcion valida");
//       break;
//   }

//   const servicios = prompt(
//     "Estos son los servicios disponibles \nElegí una opción: \n1 - Espejo Mágico. \n2 - Totem Fotográfico. \n3 - Base 360. \n4 - Todos"
//   );
//   switch (servicios) {
//     case "1":
//       alert("El costo del servicio de Espejo Mágico por 2 horas es de $" + espejo);
//       console.log("espejo");
//       break;

//     case "2":
//       alert("El costo del servicio de Tótem Fotográfico por 2 horas es de $" + totem);
//       console.log("totem");
//       break;

//     case "3":
//       alert("El costo del servicio de Base 360 por 2 horas es de $" + base);
//       console.log("base");
//       break;

//     case "4":
//       alert(
//         "\n-El costo del servicio de Espejo Mágico por 2 horas es de $" +
//           espejo +
//           "\n-El costo del servicio de Totem Fotografico por 2 horas es de $" +
//           totem +
//           "\n-El costo del servicio de Base 360 por 2 horas es de $" +
//           base
//       );
//       break;

//     default:
//       alert("Por favor selecione una opción valida");
//       break;
//   }
// }

// // Array con objeto //
// const opciones = [
//   {
//     id: 1,
//     nombre: "Espejo Mágico",
//     duracion: "2hs",
//     formato: "Foto 15x21",
//     costo: 35000,
//   },
//   {
//     id: 2,
//     nombre: "Tótem Fotográfico",
//     duracion: "2hs",
//     formato: 'Foto 15x21',
//     costo: 30000,
//   },
//   {
//     id: 3,
//     nombre: "Base 360",
//     duracion: "1:30hs",
//     formato: "Video + Foto 15x21",
//     costo: 50000,
//   }
// ]

// // metodo de busqueda con FIND
// let servicioBuscado = "Espejo Mágico"
// const busqueda = opciones.find(opciones => opciones.nombre === servicioBuscado)
// console.log(busqueda)