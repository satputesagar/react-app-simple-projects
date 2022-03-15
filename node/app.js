const http =require("http")


// const pokemon =require("pokemon")
// console.log(pokemon.all());

const fs =require('fs');

const a =fs.readFileSync('./ttext.txt',"utf-8");

fs.readFile('./ttext.txt',"utf-8",(err,data)=>{
if(err){
    return err;
}
console.log(data);
});
console.log(a);

console.log("i am first")
