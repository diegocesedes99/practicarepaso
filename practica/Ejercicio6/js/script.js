let number = parseInt(prompt("Digite un numero cualquiera: "));
let d = 2;
let num_primo = true;

while (d < number) {
    if(number % d == 0){
        num_primo = false;
    }
    d++;
}

if(primo == true){
    console.log(`El numero ${number} es primo`);
}else{
    console.log(`El numero ${number} es compuesto`);
}