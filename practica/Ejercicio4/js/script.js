let text = prompt("Digite un texto");
let character = prompt("Digite el caracter");
let result = [];

for (let d = 0; d < text.length; d++){
    if( text[d].toLowerCase() === character){
		result.push(d);
		}
}

console.log(` El character ${character}, se repite en el texto en  :  ${result.length}`);