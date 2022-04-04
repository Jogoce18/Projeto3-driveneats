let prato = false;
let bebida = false;
let sobremesa = false;
let total = 0;
let nomePrato;
let valorPrato;
let nomeBebida;
let valorBebida;
let nomeSobremesa;
let valorSobremesa;
function selecionar1() {
    const prato1 = document.querySelector(".produto1");
    nomePrato = document.querySelector(".produto1 .tituloalimento")
      .textContent;
    valorPrato = document.querySelector(".produto1 .precioalimento")
      .textContent;
    const existe1 = prato1.classList.contains("selecionado");
    const check1 = document.querySelector(".check1");
    const check2 = document.querySelector(".check2");
    const check3 = document.querySelector(".check3");
    const check4 = document.querySelector(".check4");
  
    if (existe1 == false) {
      prato1.classList.add("selecionado");
      check1.setAttribute("style", "display: inline");
      prato = true;
      total = sobremesa && bebida && prato;
    }
    const prato2 = document.querySelector(".produto2");
    const existe2 = prato2.classList.contains("selecionado");
    if (existe2 == true) {
      prato2.classList.remove("selecionado");
      check2.setAttribute("style", "display: none");
    }
  
    const prato3 = document.querySelector(".produto3");
    const existe3 = prato3.classList.contains("selecionado");
    if (existe3 == true) {
      prato3.classList.remove("selecionado");
      check3.setAttribute("style", "display: none");
    }
    const prato4 = document.querySelector(".produto4");
    const existe4 = prato4.classList.contains("selecionado");
    if (existe4 == true) {
      prato4.classList.remove("selecionado");
      check4.setAttribute("style", "display: none");
    }
    const finalizar = document.querySelector(".finalizarencargo");
    const p2 = document.querySelector(".p2");
    const p1 = document.querySelector(".p1");
    if (total ) {
      finalizar.setAttribute("style", "background-color: #32B72F;");
      p2.parentNode.remove(p2);
      p1.innerHTML = "Fechar pedido";
     
    }
  }
  function selecionar2() {
    const prato2 = document.querySelector(".produto2");
    nomePrato = document.querySelector(".produto2 .tituloalimento")
      .textContent;
    valorPrato = document.querySelector(".produto2 .precioalimento")
      .textContent;
    const existe2 = prato2.classList.contains("selecionado");
    const check1 = document.querySelector(".check1");
    const check2 = document.querySelector(".check2");
    const check3 = document.querySelector(".check3");
    const check4 = document.querySelector(".check4");
  
    if (existe2 == false) {
      prato2.classList.add("selecionado");
      check2.setAttribute("style", "display: inline");
      prato = true;
      total = sobremesa && bebida && prato;
    }
    const prato1 = document.querySelector(".produto1");
    const existe1 = prato1.classList.contains("selecionado");
    if (existe1 == true) {
      prato1.classList.remove("selecionado");
      check1.setAttribute("style", "display: none");
    }
  
    const prato3 = document.querySelector(".produto3");
    const existe3 = prato3.classList.contains("selecionado");
    if (existe3 == true) {
      prato3.classList.remove("selecionado");
      check3.setAttribute("style", "display: none");
    }
    const prato4 = document.querySelector(".produto3");
    const existe4 = prato4.classList.contains("selecionado");
    if (existe4 == true) {
      prato4.classList.remove("selecionado");
      check4.setAttribute("style", "display: none");
    }
    const finalizar = document.querySelector(".finalizarencargo");
    const p2 = document.querySelector(".p2");
    const p1 = document.querySelector(".p1");
    if (total ) {
      finalizar.setAttribute("style", "background-color: #32B72F;");
      p2.parentNode.remove(p2);
      p1.innerHTML = "Fechar pedido";
    }
  }
  function selecionar3() {
    const prato3 = document.querySelector(".produto3");
    nomePrato = document.querySelector(".produto3 .tituloalimento")
      .textContent;
    valorPrato = document.querySelector(".produto3 .precioalimento")
      .textContent;
    const existe3 = prato3.classList.contains("selecionado");
    const check1 = document.querySelector(".check1");
    const check2 = document.querySelector(".check2");
    const check3 = document.querySelector(".check3");
    const check4= document.querySelector(".check4");
  
  
    if (existe3 == false) {
      prato3.classList.add("selecionado");
      check3.setAttribute("style", "display: inline");
      prato = true;
      total =sobremesa && bebida && prato;
    }
  
    const prato2 = document.querySelector(".produto2");
    const existe2 = prato2.classList.contains("selecionado");
    if (existe2 == true) {
      prato2.classList.remove("selecionado");
      check2.setAttribute("style", "display: none");
    }
  
    const prato1 = document.querySelector(".produto1");
    const existe1 = prato1.classList.contains("selecionado");
    if (existe1 == true) {
      prato1.classList.remove("selecionado");
      check1.setAttribute("style", "display: none");
    }
    const prato4 = document.querySelector(".produto4");
    const existe4 = prato4.classList.contains("selecionado");
    if (existe4 == true) {
      prato4.classList.remove("selecionado");
      check4.setAttribute("style", "display: none");
    }
    const finalizar = document.querySelector(".finalizarencargo");
    const p2 = document.querySelector(".p2");
    const p1 = document.querySelector(".p1");
    if (total ) {
      finalizar.setAttribute("style", "background-color: #32B72F;");
      p2.parentNode.removeChild(p2);
      p1.innerHTML = "Fechar pedido";
    }
  }
  function selecionar4() {
    const prato4 = document.querySelector(".produto4");
    nomePrato = document.querySelector(".produto4 .tituloalimento")
      .textContent;
    valorPrato = document.querySelector(".produto4 .precioalimento")
      .textContent;
    const existe4 = prato4.classList.contains("selecionado");
    const check1 = document.querySelector(".check1");
    const check2 = document.querySelector(".check2");
    const check3 = document.querySelector(".check3");
    const check4= document.querySelector(".check4");
  
  
    if (existe4 == false) {
      prato4.classList.add("selecionado");
      check4.setAttribute("style", "display: inline");
      prato = true;
      total = sobremesa && bebida && prato;
    }
  
    const prato2 = document.querySelector(".produto2");
    const existe2 = prato2.classList.contains("selecionado");
    if (existe2 == true) {
      prato2.classList.remove("selecionado");
      check2.setAttribute("style", "display: none");
    }
  
    const prato1 = document.querySelector(".produto1");
    const existe1 = prato1.classList.contains("selecionado");
    if (existe1 == true) {
      prato1.classList.remove("selecionado");
      check1.setAttribute("style", "display: none");
    }
    const prato3 = document.querySelector(".produto3");
    const existe3 = prato3.classList.contains("selecionado");
    if (existe3 == true) {
      prato3.classList.remove("selecionado");
      check3.setAttribute("style", "display: none");
    }
    const finalizar = document.querySelector(".finalizarencargo");
    const p2 = document.querySelector(".p2");
    const p1 = document.querySelector(".p1");
    if (total ) {
      finalizar.setAttribute("style", "background-color: #32B72F;");
      p2.parentNode.removeChild(p2);
      p1.innerHTML = "Fechar pedido";
    }
  }
  function selecionar5() {
    const prato1 = document.querySelector(".produto5");
    nomeBebida = document.querySelector(".produto5 .titulobebida")
      .textContent;
    valorBebida = document.querySelector(".produto5 .preciobebida")
      .textContent;
    const existe1 = prato1.classList.contains("selecionado");
    const check1beb = document.querySelector(".check1beb");
    const check2beb = document.querySelector(".check2beb");
    const check3beb = document.querySelector(".check3beb");
    const check4beb= document.querySelector(".check4beb");
  
    if (existe1 == false) {
      prato1.classList.add("selecionado");
      check1beb.setAttribute("style", "display: inline");
      bebida = true;
      total = sobremesa && bebida && prato;
    }
    const prato2 = document.querySelector(".produto6");
    const existe2 = prato2.classList.contains("selecionado");
    if (existe2 == true) {
      prato2.classList.remove("selecionado");
      check2beb.setAttribute("style", "display: none");
    }
  
    const prato3 = document.querySelector(".produto7");
    const existe3 = prato3.classList.contains("selecionado");
    if (existe3 == true) {
      prato3.classList.remove("selecionado");
      check3beb.setAttribute("style", "display: none");
    }
    const prato4 = document.querySelector(".produto8");
    const existe4 = prato4.classList.contains("selecionado");
    if (existe4 == true) {
      prato4.classList.remove("selecionado");
      check4beb.setAttribute("style", "display: none");
    }
    const finalizar = document.querySelector(".finalizarencargo");
    const p2 = document.querySelector(".p2");
    const p1 = document.querySelector(".p1");
    if (total ) {
      finalizar.setAttribute("style", "background-color: #32B72F;");
      p2.parentNode.removeChild(p2);
      p1.innerHTML = "Fechar pedido";
    }
  }
  function selecionar6() {
    const prato2 = document.querySelector(".produto6");
    nomeBebida = document.querySelector(".produto6 .titulobebida")
      .textContent;
    valorBebida = document.querySelector(".produto6 .preciobebida")
      .textContent;
    const existe2 = prato2.classList.contains("selecionado");
    const check1beb = document.querySelector(".check1beb");
    const check2beb = document.querySelector(".check2beb");
    const check3beb = document.querySelector(".check3beb");
    const check4beb= document.querySelector(".check4beb");
  
    if (existe2 == false) {
      prato2.classList.add("selecionado");
      check2beb.setAttribute("style", "display: inline");
      bebida = true;
      total =sobremesa && bebida && prato;
    }
    const prato1 = document.querySelector(".produto5");
    const existe1 = prato1.classList.contains("selecionado");
    if (existe1== true) {
      prato1.classList.remove("selecionado");
      check1beb.setAttribute("style", "display: none");
    }
  
    const prato3 = document.querySelector(".produto7");
    const existe3 = prato3.classList.contains("selecionado");
    if (existe3 == true) {
      prato3.classList.remove("selecionado");
      check3beb.setAttribute("style", "display: none");
    }
    const prato4 = document.querySelector(".produto8");
    const existe4 = prato4.classList.contains("selecionado");
    if (existe4 == true) {
      prato4.classList.remove("selecionado");
      check4beb.setAttribute("style", "display: none");
    }
    const finalizar = document.querySelector(".finalizarencargo");
    const p2 = document.querySelector(".p2");
    const p1 = document.querySelector(".p1");
    if (total ) {
      finalizar.setAttribute("style", "background-color: #32B72F;");
      p2.parentNode.removeChild(p2);
      p1.innerHTML = "Fechar pedido";
    }
  }
  function selecionar7() {
    const prato3 = document.querySelector(".produto7");
    nomeBebida = document.querySelector(".produto7 .titulobebida")
      .textContent;
    valorBebida = document.querySelector(".produto6 .preciobebida")
      .textContent;
    const existe3 = prato3.classList.contains("selecionado");
    const check1beb = document.querySelector(".check1beb");
    const check2beb = document.querySelector(".check2beb");
    const check3beb = document.querySelector(".check3beb");
    const check4beb= document.querySelector(".check4beb");
  
    if (existe3 == false) {
      prato3.classList.add("selecionado");
      check3beb.setAttribute("style", "display: inline");
      bebida = true;
      total = sobremesa && bebida && prato;
    }
    const prato1 = document.querySelector(".produto5");
    const existe1 = prato1.classList.contains("selecionado");
    if (existe1== true) {
      prato1.classList.remove("selecionado");
      check1beb.setAttribute("style", "display: none");
    }
  
    const prato2 = document.querySelector(".produto6");
    const existe2 = prato2.classList.contains("selecionado");
    if (existe2 == true) {
      prato2.classList.remove("selecionado");
      check2beb.setAttribute("style", "display: none");
    }
    const prato4 = document.querySelector(".produto8");
    const existe4 = prato4.classList.contains("selecionado");
    if (existe4 == true) {
      prato4.classList.remove("selecionado");
      check4beb.setAttribute("style", "display: none");
    }
    const finalizar = document.querySelector(".finalizarencargo");
    const p2 = document.querySelector(".p2");
    const p1 = document.querySelector(".p1");
    if (total ) {
      finalizar.setAttribute("style", "background-color: #32B72F;");
      p2.parentNode.removeChild(p2);
      p1.innerHTML = "Fechar pedido";
    }
  }
  function selecionar8() {
    const prato4 = document.querySelector(".produto8");
    nomeBebida = document.querySelector(".produto8 .titulobebida")
      .textContent;
    valorBebida = document.querySelector(".produto8 .preciobebida")
      .textContent;
    const existe4 = prato4.classList.contains("selecionado");
    const check1beb = document.querySelector(".check1beb");
    const check2beb = document.querySelector(".check2beb");
    const check3beb = document.querySelector(".check3beb");
    const check4beb= document.querySelector(".check4beb");
  
    if (existe4 == false) {
      prato4.classList.add("selecionado");
      check4beb.setAttribute("style", "display: inline");
      bebida = true;
      total = sobremesa && bebida && prato;
    }
    const prato1 = document.querySelector(".produto5");
    const existe1 = prato1.classList.contains("selecionado");
    if (existe1== true) {
      prato1.classList.remove("selecionado");
      check1beb.setAttribute("style", "display: none");
    }
  
    const prato2 = document.querySelector(".produto6");
    const existe2 = prato2.classList.contains("selecionado");
    if (existe2 == true) {
      prato2.classList.remove("selecionado");
      check2beb.setAttribute("style", "display: none");
    }
    const prato3 = document.querySelector(".produto7");
    const existe3 = prato3.classList.contains("selecionado");
    if (existe3 == true) {
      prato3.classList.remove("selecionado");
      check3beb.setAttribute("style", "display: none");
    }
    const finalizar = document.querySelector(".finalizarencargo");
    const p2 = document.querySelector(".p2");
    const p1 = document.querySelector(".p1");
    if (total ) {
      finalizar.setAttribute("style", "background-color: #32B72F;");
      p2.parentNode.removeChild(p2);
      p1.innerHTML = "Fechar pedido";
    }
  }
 
  function selecionar9() {
    const prato1 = document.querySelector(".produto9");
    nomeSobremesa = document.querySelector(".produto9 .titulopostre")
      .textContent;
    valorSobremesa = document.querySelector(".produto9 .preciopostre")
      .textContent;
    const existe1 = prato1.classList.contains("selecionado");
    const check1postre = document.querySelector(".check1postre");
    const check2postre = document.querySelector(".check2postre");
    const check3postre= document.querySelector(".check3postre");
    const check4postre= document.querySelector(".check4postre");
  
    if (existe1 == false) {
      prato1.classList.add("selecionado");
      check1postre.setAttribute("style", "display: inline");
      sobremesa= true;
      total = sobremesa && bebida && prato;
    }
    const prato2 = document.querySelector(".produto10");
    const existe2 = prato2.classList.contains("selecionado");
    if (existe2 == true) {
      prato2.classList.remove("selecionado");
      check2postre.setAttribute("style", "display: none");
    }
  
    const prato3 = document.querySelector(".produto11");
    const existe3 = prato3.classList.contains("selecionado");
    if (existe3 == true) {
      prato3.classList.remove("selecionado");
      check3postre.setAttribute("style", "display: none");
    }
    const prato4 = document.querySelector(".produto12");
    const existe4 = prato4.classList.contains("selecionado");
    if (existe4 == true) {
      prato4.classList.remove("selecionado");
      check4postre.setAttribute("style", "display: none");
    }
    const finalizar = document.querySelector(".finalizarencargo");
    const p2 = document.querySelector(".p2");
    const p1 = document.querySelector(".p1");
    if (total=3) {
      finalizar.setAttribute("style", "background-color: #32B72F;");
      p2.parentNode.removeChild(p2);
      p1.innerHTML = "Fechar pedido";
    }
  }
  function selecionar10() {
    const prato2 = document.querySelector(".produto10");
    nomeSobremesa = document.querySelector(".produto10 .titulopostre")
      .textContent;
    valorSobremesa= document.querySelector(".produto10 .preciopostre")
      .textContent;
    const existe2 = prato2.classList.contains("selecionado");
    const check1postre = document.querySelector(".check1postre");
    const check2postre = document.querySelector(".check2postre");
    const check3postre= document.querySelector(".check3postre");
    const check4postre= document.querySelector(".check4postre");
  
    if (existe2 == false) {
      prato2.classList.add("selecionado");
      check2postre.setAttribute("style", "display: inline");
      sobremesa = true;
      total =sobremesa && bebida && prato;
    }
    const prato1 = document.querySelector(".produto9");
    const existe1 = prato1.classList.contains("selecionado");
    if (existe1 == true) {
      prato1.classList.remove("selecionado");
      check1postre.setAttribute("style", "display: none");
    }
  
    const prato3 = document.querySelector(".produto11");
    const existe3 = prato3.classList.contains("selecionado");
    if (existe3 == true) {
      prato3.classList.remove("selecionado");
      check3postre.setAttribute("style", "display: none");
    }
    const prato4 = document.querySelector(".produto12");
    const existe4 = prato4.classList.contains("selecionado");
    if (existe4 == true) {
      prato4.classList.remove("selecionado");
      check4postre.setAttribute("style", "display: none");
    }
    const finalizar = document.querySelector(".finalizarencargo");
    const p2 = document.querySelector(".p2");
    const p1 = document.querySelector(".p1");
    if (total ) {
      finalizar.setAttribute("style", "background-color: #32B72F;");
      p2.parentNode.removeChild(p2);
      p1.innerHTML = "Fechar pedido";
    }
  }
  function selecionar11() {
    const prato3 = document.querySelector(".produto11");
    nomeSobremesa = document.querySelector(".produto11 .titulopostre")
      .textContent;
    valorSobremesa = document.querySelector(".produto11 .preciopostre")
      .textContent;
    const existe3 = prato3.classList.contains("selecionado");
    const check1postre = document.querySelector(".check1postre");
    const check2postre = document.querySelector(".check2postre");
    const check3postre= document.querySelector(".check3postre");
    const check4postre= document.querySelector(".check4postre");
  
    if (existe3 == false) {
      prato3.classList.add("selecionado");
      check3postre.setAttribute("style", "display: inline");
      sobremesa = true;
      total = sobremesa && bebida && prato;
    }
    const prato1 = document.querySelector(".produto9");
    const existe1 = prato1.classList.contains("selecionado");
    if (existe1 == true) {
      prato1.classList.remove("selecionado");
      check1postre.setAttribute("style", "display: none");
    }
  
    const prato2 = document.querySelector(".produto10");
    const existe2 = prato2.classList.contains("selecionado");
    if (existe2 == true) {
      prato2.classList.remove("selecionado");
      check2postre.setAttribute("style", "display: none");
    }
    const prato4 = document.querySelector(".produto12");
    const existe4 = prato4.classList.contains("selecionado");
    if (existe4 == true) {
      prato4.classList.remove("selecionado");
      check4postre.setAttribute("style", "display: none");
    }
    const finalizar = document.querySelector(".finalizarencargo");
    const p2 = document.querySelector(".p2");
    const p1 = document.querySelector(".p1");
    if (total ) {
      finalizar.setAttribute("style", "background-color: #32B72F;");
      p2.parentNode.removeChild(p2);
      p1.innerHTML = "Fechar pedido";
    }
  }
  function selecionar12() {
    const prato4= document.querySelector(".produto12");
    nomeSobremesa = document.querySelector(".produto12 .titulopostre")
      .textContent;
    valorSobremesa = document.querySelector(".produto12 .preciopostre")
      .textContent;
    const existe4 = prato4.classList.contains("selecionado");
    const check1postre = document.querySelector(".check1postre");
    const check2postre = document.querySelector(".check2postre");
    const check3postre= document.querySelector(".check3postre");
    const check4postre= document.querySelector(".check4postre");
  
    if (existe4 == false) {
      prato4.classList.add("selecionado");
      check4postre.setAttribute("style", "display: inline");
      sobremesa = true;
      total = sobremesa && bebida && prato;
    }
    const prato1 = document.querySelector(".produto9");
    const existe1 = prato1.classList.contains("selecionado");
    if (existe1 == true) {
      prato1.classList.remove("selecionado");
      check1postre.setAttribute("style", "display: none");
    }
    const prato2 = document.querySelector(".produto10");
    const existe2 = prato2.classList.contains("selecionado");
    if (existe2 == true) {
      prato2.classList.remove("selecionado");
      check2postre.setAttribute("style", "display: none");
    }
    const prato3 = document.querySelector(".produto11");
    const existe3 = prato3.classList.contains("selecionado");
    if (existe3 == true) {
      prato3.classList.remove("selecionado");
      check3postre.setAttribute("style", "display: none");
    }
    const finalizar = document.querySelector(".finali");
    const p2 = document.querySelector(".p2");
    const p1 = document.querySelector(".p1");
    if (total ) {
      finalizar.setAttribute("style", "background-color: #32B72F;");
      p2.parentNode.removeChild(p2);
      p1.innerHTML = "Fechar pedido";
    }
  }
  function finalizarpedido() {
    const pedido = document.querySelector(".conteiner");
    pedido.setAttribute("style", "display: inline");
  
    const verificar = document.querySelector(".verificar");
    verificar.setAttribute("style", "display: flex");
  
    let precoPrato = valorPrato.substring(3, valorPrato.length);
    let precoBebida = valorBebida.substring(3, valorBebida.length);
    let precoSobremesa = valorSobremesa.substring(3, valorSobremesa.length);
  
    const nomePT = document.querySelector(".pedido-nome-pt");
    nomePT.innerHTML = nomePrato;
    const valorPT = document.querySelector(".pedido-preco-pt");
    valorPT.innerHTML = precoPrato;
  
    const nomeBE = document.querySelector(".pedido-nome-be");
    nomeBE.innerHTML = nomeBebida;
    const valorBE = document.querySelector(".pedido-preco-be");
    valorBE.innerHTML = precoBebida;
  
    const nomeSB = document.querySelector(".pedido-nome-sb");
    nomeSB.innerHTML = nomeSobremesa;
    const valorSB = document.querySelector(".pedido-preco-sb");
    valorSB.innerHTML = precoSobremesa;
    
    precoPrato = parseFloat(precoPrato.replace(/[^\d\.]*/g, ""));
  
    precoBebida =parseFloat(precoBebida.replace(/[^\d\.]*/g, ""));
  
    precoSobremesa = parseFloat(precoSobremesa.replace(/[^\d\.]*/g, ""));
  
    let valorTotal = (precoPrato) + (precoBebida) + (precoSobremesa);
    valorTotal = valorTotal.toFixed(2);
    const total = document.querySelector(".preco-total");
    total.innerHTML = "R$ " + valorTotal;
  }
  function enviarPedido(telefone) {
    let nomeCliente = prompt("Informe seu nome:");
    let endereco = prompt("informe seu endereço:");
    let mensagem =
      "Olá, gostaria de fazer o pedido:\n- Prato: " +
      nomePrato +
      "\n- Bebida: " +
      nomeBebida +
      "\n- Sobremesa: " +
      nomeSobremesa +
      "\n Total: R$ 27.70\n\nNome: " +
      nomeCliente +
      "\nEndereço: " +
      endereco;
    let msg = encodeURIComponent(mensagem);
    let url = "https://wa.me/" + telefone + "?text=" + msg;
    let a = document.createElement("a");
    a.target = "_blank";
    a.href = url;
    
    a.click();


  }