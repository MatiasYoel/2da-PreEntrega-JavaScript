
let personas = [
    {name: "marcos", edad: 15, ocupacion: "estudiante"},
    {name: "pedro", edad: 33, ocupacion: "trabajador"},
    {name: "ana", edad: 28, ocupacion: "trabajador"},
    {name: "maria", edad: 17, ocupacion: "estudiante"},
    {name: "lucas", edad: 65, ocupacion: "jubilado"}
]
alert("Ingrese el nombre de una persona para saber sus datos: marcos, pedro, ana, maria, lucas")
let valorBuscado=prompt("Ingrese nombre")
const resultado=personas.find(persona=> persona.name === valorBuscado)
if (resultado!=NaN || resultado!=0 || resultado !="") {
    alert(resultado.name+" "+resultado.edad+" años "+resultado.ocupacion)
} else{
    alert("Ingrese un valor correcto")
}


