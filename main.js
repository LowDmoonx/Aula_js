const f = document.getElementById("formulario") /*pegando formulario referência no HTML*/ 

f.addEventListener("submit", function(e){ /*evento de para escutar*/
    e.preventDefault(); /* evita que a página reinicie*/

    const v1 = Number(document.getElementById("num1").value) /*(number) transforma unma parte do codígo em número "texto"*/
    const v2 = Number(document.getElementById("num2").value)

    const soma = v1+v2 /* onde a soma acontece*/

    document.getElementById("resultado").textContent=soma /* onde deve ser mostrado o resultado*/

})