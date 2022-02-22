var botaoCripto = document.querySelector("#btn-cripto");
    botaoCripto.addEventListener("click", function(event){
    event.preventDefault();

var input = document.querySelector(".digita-texto");
var texto = input.value;

   function criptografar() {
        
        var textoModificado = texto.replace(/[\e\é\ê]/gi,"enter").replace(/[\i\í]/gi,"imes").replace(/[\a\á\à\â\ã]/gi,"ai").replace(/[\o\ó\ô\õ]/gi,"ober").replace(/[\u\ú]/gi,"ufat");
        var resultadoTexto = document.querySelector(".resultado-texto");
            resultadoTexto.value = textoModificado;
}
 
         criptografar(); 
         input.value = "";
});
    

