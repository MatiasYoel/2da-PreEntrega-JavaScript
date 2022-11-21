
let personas = [
    {name: "marcos", edad: 23, ocupacion: "ayudante"},
    {name: "pedro", edad: 33, ocupacion: "carpintero"},
    {name: "juan", edad: 28, ocupacion: "pañolero"},
    {name: "pablo", edad: 50, ocupacion: "jefe general"},
    {name: "lucas", edad: 55, ocupacion: "soldador"}
]
alert("Ingrese el nombre de una persona para saber sus datos: marcos, pedro, juan, pablo, lucas")
let valorBuscado=prompt("Ingrese nombre")
const resultado=personas.find(persona=> persona.name === valorBuscado)
if (resultado!= NaN && resultado!= 0 && resultado !="" && valorBuscado!="" && valorBuscado!=NaN && valorBuscado!=0) {
    alert(resultado.name+" "+resultado.edad+" años "+resultado.ocupacion)
} else{
    alert("Ingrese un valor correcto")
}


function horas(horasTrabajadas, precioHora) {
   return horasTrabajadas * precioHora 
}
let usuarioHoras= prompt("Ingrese horas trabajadas por "+resultado.name)
let usuarioPrecio= prompt("Ingrese precio por Hora")
if (usuarioHoras !="" && usuarioPrecio!="" && usuarioHoras!= NaN && usuarioPrecio!= NaN) {
    let sueldo= horas(usuarioHoras, usuarioPrecio)
    alert("El sueldo de "+resultado.name+" es $"+sueldo)
}else{
    alert("Ingrese un numero correcto")
}

