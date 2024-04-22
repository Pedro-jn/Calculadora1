function calcular(){

    var numero1 = parseInt(document.getElementById('numero1').value);

    var numero2 = parseInt(document.getElementById('numero2').value);
    var resultado = document.querySelector('span');
    var operacao = document.getElementById('operadores');
    const casos = operacao.selectIndex;


    switch(casos){
        case (1):
            resultado.innerHTML = (numero1 + numero2)
            console.log(numero1 + numero2);
            break
        case (2):
            resultado.innerHTML = numero1 - numero2
            console.log(numero1 + numero2);
            break
        case (3):
            resultado.innerHTML = numero1 / numero2
            console.log(numero1 + numero2);
            break
        case (4):
            resultado.innerHTML = numero1 * numero2
            console.log(numero1 + numero2);
            break
    }

}