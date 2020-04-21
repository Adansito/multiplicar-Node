//const fs = require('fs');  // Nativo Node.js
//const express = require('express'); // Librería externa de Node.js
//const datos = require('./datos); //Archivo de uso particular


const argv = require('./config/yargs').argv;
const {crearArchivo,listarTabla} = require('./multiplicar/multiplicar');
const colors = require('colors/safe');
//console.log(process.argv);

console.log( argv ,'argv');


let comando = argv._[0];


switch(comando){

     case 'listar':
     listarTabla(argv.base, argv.limite);
       
       
     break;

     case 'crear':

     crearArchivo(argv.base,argv.limite).then((archivo)=>{
      
       console.log(colors.yellow(archivo));
         
          }).catch((err)=>{

         console.log(err);
     })

     break;

     default: 
     console.log('comando no reconocido');

}





