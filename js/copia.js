var botaoCopia = document.querySelector("#btn-copia");
    botaoCopia.addEventListener("click", function(event){
    event.preventDefault();

    var input = document.querySelector(".resultado-texto");
        
            function copiar(){
   
                navigator.clipboard.writeText(input.value); 
                input.value = ""; 
        }
            copiar();
    });
