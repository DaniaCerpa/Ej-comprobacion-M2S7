let numero1, numero2, resultado;
numero1 = prompt("Ingrese el valor numero1");
numero2 = prompt("Ingrese el valor numero2");

numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

resultado = numero1+numero2;

if (numero1>numero2) {
    alert(numero1+" es mayor que "+numero2);

}else if (numero1==numero2) {
    alert(numero1+ " es igual a "+numero2);
    
}
else{
    alert(numero2+" es mayor que "+numero1);
}

