const number = parseInt(prompt('Digite cualquier número'));
const sum=0;
let o=1;

while(o<=number){
    sum = sum + o;
    console.log(o);
    o++;
}
console.log('El resultado de la suma es: ', sum);