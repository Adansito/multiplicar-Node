const fs = require('fs'); 
const colors = require('colors');


let data = '';


let listarTabla = (base, limite)=>{

     console.log('==========================='.blue);
     console.log(`=====Tabla del ${base}=====`.blue);
     console.log('==========================='.blue); 
    
     for(x=1;x<=limite; x++){


        console.log(`${base} * ${x} = ${base * x}\n`);
    }

}



let crearArchivo = (base,limite)=>{

       

    return new Promise((resolve, reject)=>{

        if(!Number(base)){

            reject(`El valor introducido ${base} no es un número`);
            return;
        }

        if(!Number(limite)){

            reject(`El valor introducido ${limite} no es un número`);
            return;
        }

        for (i=1; i<=limite; i++){
 


            data += `${base} * ${i} = ${base * i}\n`;
       
       
       }
       
       
       fs.writeFile(`./archivos/Tabla-${base}.txt`,data, (err)=>{
       
           if(err) 
             reject(err)
           else
              resolve(`Tabla-${base}.txt`)

           //console.log(`El archivo Tabla-${base}.txt ha sido creado`);
       
       
       })

    })

}



module.exports = {

    crearArchivo,
    listarTabla

}
