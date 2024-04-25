function playSonido (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0

while (contador < 9){
    const  tecla = ListaDeTeclas[contador];
   const instrumento =  tecla.classList[1];

   const idAudio = `#sonido_${instrumento}`;
    

   tecla.onclick =  function(){
    playSonido(idAudio);
   };
   contador = contador + 1;
   console.log(contador);
}


// codigo de prueba

// document.querySelector('.tecla_pom').onclick = playSonidoPom;




// /* function playSonidClap () {
//     document.querySelector('#sonido_tecla_clap').play();
// }
// document.querySelector('.tecla_clap').onclick = playSonidClap; */