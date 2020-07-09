let number = parseInt(prompt("Digite un numero cualquiera: "));
const secret_num = 9;
const exit = 0;

if(num == secret_num){
    console.log(`${num}, numero ganador`);
}else{
    while( num != exit && num != secret_num ){
    num = parseInt(prompt("Digite el numero de nuevo"));
        if(num <= 100 && number >= 1){
            if(num < secret_num){
                console.log( `${num}, es menor al numero secreto`);
            }else if(num > secret_num){
                console.log(`${num}, es mayor al numero secreto`);
            }else if( num == secret_num){
                console.log(`${num}, numero ganador`); 
            }
        }else{
            console.log(`Error ${num} esta fuero del rango`);
                
        }
            
    }
}