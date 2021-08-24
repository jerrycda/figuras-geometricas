//Codigo del cudrado
console.group("Cuadrados");
//const ladoCudadrado = 5;
//console.log("Los lados del cuadrado miden:" + ladoCudadrado + " cm");

function perimetroCuadrado(lado){
 return lado * 4;
}
//console.log("El perimetro del cuadrado es:" + perimetroCuadrado + " cm");

//const areaCuadrado = ladoCudadrado * ladoCudadrado;
function areaCuadrado(lado){
 return lado * lado;
}

//console.log("El area del cuadrado es:" + areaCuadrado + " cm^2");
console.groupEnd();

//Codigo del triangulo
console.group("Triangulos");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;

//console.log(
//    "Los lados del triangulo miden: " 
// + ladoTriangulo1 
// + "cm, " 
// + ladoTriangulo2 
// + "cm, " 
// + baseTriangulo 
// + "cm"
//);

//const alturaTriangulo = 5.5;
//console.log("La altura del triangulo mide:" + alturaTriangulo + " cm");

function PerimetroTriangulo(lado1, lado2, base){
 return (lado1 + lado2 + base);
}  
//console.log("El perimetro del triangulo es:" + perimetroTriangulo + " cm");

//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
function AreaTriangulo(base, altura){
    return (base * altura) / 2;
   } 
//console.log("El area del Triangulo es:" + areaTriangulo + " cm^2");

console.groupEnd();

//Codigo del circulo
console.group("Circulos");
//radio
//const radioCirculo = 4;
//console.log("El radio del circulo es:" + radioCirculo + " cm");
//Diametro
function DiametroCirculo(radio){
 return radio * 2;
}
//const DiametroCirculo = radioCirculo * 2;
//console.log("El Diametro del circulo es:" + DiametroCirculo + " cm");
//Pi
const Pi = Math.PI;
console.log("El Pi es:" + Pi);
//Circunferencia
function perimetroCirculo(radio){
    const diametro = DiametroCirculo(radio);
    return diametro * Pi;
}
//const perimetroCirculo = DiametroCirculo * Pi;
//console.log("El perimetro del circulo es:" + perimetroCirculo + " cm");
//Area
function areaCirculo(radio){
    return (radio * radio)* Pi;
}
//const areaCirculo = (radioCirculo * radioCirculo) * Pi;
//console.log("El area del circulo es:" + areaCirculo + " cm");

console.groupEnd();

//aqui interactuamos con el HTML

//area y perimetro del cuadrado

function calcularPerimetroCuadrado(){
 const input = document.getElementById("InputCuadrado");
 const value = input.value;

 const perimetro = perimetroCuadrado(value);
 alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
   
    const area = areaCuadrado(value);
    alert(area);  
}
//area y perimetro del triangulo

function calcularPerimetroTriangulo(){
    const input1P = document.getElementById("InputTriangulo1P");
    const input2P = document.getElementById("InputTriangulo2P");
    const input3P = document.getElementById("InputTriangulo3P");
    const value1P = Number(input1P.value);
    const value2P = Number(input2P.value);
    const value3P = Number(input3P.value);
    const perimetroTri = PerimetroTriangulo(value1P,value2P,value3P);
    alert(perimetroTri);
   }
   function calcularAreaTriangulo(){
       const input1A = document.getElementById("InputTriangulo1A");
       const input2A = document.getElementById("InputTriangulo2A");
       const value1A = input1A.value;
       const value2A = input2A.value;
       const area2 = AreaTriangulo(value1A,value2A);
       alert(area2);  
   }
//area y perimetro del circulo

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
   
    const perimetroCir = perimetroCirculo(value);
    alert(perimetroCir);
   }
   function calcularAreaCirculo(){
       const input = document.getElementById("InputCirculo");
       const value = input.value;
      
       const area3 = areaCuadrado(value);
       alert(area3);  
   }