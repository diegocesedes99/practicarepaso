const year=parseInt(prompt('Digite un año cualquiera: '));

if(year%4==0 && year % 100 !=0 || year %400==0){
    console.log((year), 'Es bisiesto');
}else{
    console.log((year), 'No es bisiesto');
}