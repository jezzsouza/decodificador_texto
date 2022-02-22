var botaoDescrito = document.querySelector("#btn-descripto");
    botaoDescrito.addEventListener("click", function(event) {
    event.preventDefault();

var input = document.querySelector(".digita-texto");
var texto = input.value;
var textoNãoModificado = texto.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/ufat/gi,"u");

    function descriptografar(){
      
                var resultadoTexto = document.querySelector(".resultado-texto");
                    resultadoTexto.value = textoNãoModificado;
    }
                    
             if(texto!=textoNãoModificado) {
                          descriptografar();
                          input.value = "";

                      } else {

                        alert("Mensagem descriptografada!");
                      }
             
    });







