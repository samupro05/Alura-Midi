function playSonido (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla');



for(let contador = 0; contador < ListaDeTeclas.length; contador++){
    const  tecla = ListaDeTeclas[contador];
    const instrumento =  tecla.classList[1];

    const idAudio = `#sonido_${instrumento}`;
    
    tecla.onclick =  function(){
    playSonido(idAudio);
    };
    tecla.onkeydown = function(evento){
        if(evento.code === 'espacio' || evento === 'Enter' ){
            tecla.classList.add('activa'); 
        }

        tecla.onkeyup = function(){
          tecla.classList.remove('activa')
        }
    ;
}
}


// codigo de prueba

// document.querySelector('.tecla_pom').onclick = playSonidoPom;




// /* function playSonidClap () {
//     document.querySelector('#sonido_tecla_clap').play();
// }
// document.querySelector('.tecla_clap').onclick = playSonidClap; */