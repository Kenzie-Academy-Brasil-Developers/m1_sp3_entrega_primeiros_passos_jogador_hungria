//primeiro

function clicar1() {
 let primeira_caixa_1 = document.querySelector('#caixa1_exercício_1')
 let segunda_caixa_1 = document.querySelector('#caixa2_exercício_1')

 let primeiroNumero_1 = parseInt(primeira_caixa_1.value)
 let segundoNumero_1 = parseInt(segunda_caixa_1.value)
 let resultado_1 = document.querySelector('#resu_1')


    if((primeira_caixa_1).value == "" || (segunda_caixa_1).value == "" ){

         resultado_1.innerHTML = `Por favor, preencha os campos`

    }else if(primeiroNumero_1 > segundoNumero_1){

        numeroMaior = primeiroNumero_1
        diferenca_1 = primeiroNumero_1 - segundoNumero_1
        resultado_1.innerHTML = `o numero maior é ${numeroMaior} e a diferença entre os numeros é : ${String(diferenca_1)}`

    }else{

        numeroMaior = segundoNumero_1
        diferenca_1 =  segundoNumero_1 - primeiroNumero_1
        resultado_1.innerHTML = `o numero maior é ${numeroMaior} e a diferença entre os numeros é : ${String(diferenca_1)}`
    }
}

//Segundo

function clicar2() {
    let primeira_caixa_2 = document.querySelector('#caixa1_exercício_2')
    let segunda_caixa_2 = document.querySelector('#caixa2_exercício_2')
   
    let primeiroNumero_2 = parseInt(primeira_caixa_2.value)
    let segundoNumero_2 = parseInt(segunda_caixa_2.value)
    let resultado_2 = document.querySelector('#resu_2')
   
   
       if((primeira_caixa_2).value == "" || (segunda_caixa_2).value == "" ){
   
            resultado_2.innerHTML = `Por favor, preencha os campos`
   
       }else if(primeiroNumero_2 === segundoNumero_2){

           primeira_caixa_2.innerHTML = ""
           resultado_2.innerHTML = `" Números iguais "`
   
       }else if (primeiroNumero_2 > segundoNumero_2){
           
           resultado_2.innerHTML = `o numero ${primeiroNumero_2} é maior que o numero ${segundoNumero_2}`

        }else if(primeiroNumero_2 < segundoNumero_2){
            
            resultado_2.innerHTML = `o numero ${segundoNumero_2} é maior que o numero ${primeiroNumero_2}`
       }

   }

//Terceiro

function clicar3() {
    let primeira_caixa_3 = (document.querySelector('#caixa1_exercicio_3'))
    let segunda_caixa_3 = document.querySelector('#caixa2_exercicio_3')
    let resultado_3 = document.querySelector('#resu_3')
   
    let porcentagem = parseFloat(primeira_caixa_3.value / 3)
    let parcela_3 = parseFloat(segunda_caixa_3.value)
    
   
       if((primeira_caixa_3).value == "" || (segunda_caixa_3).value == ""){
   
        resultado_3.innerHTML = `Por favor, preencha o campo!`
   
       }else if (porcentagem > parcela_3){
        resultado_3.innerHTML = `Sim`
       }else{
        resultado_3.innerHTML = `não`
       }
   }

//quarto

function clicar4() {
    let primeira_caixa_4 = document.querySelector('#caixa1_exercicio_4')
    let resultado_4 = document.querySelector('#resu_4')

    let primeiroNumero_4 = parseInt(primeira_caixa_4.value % 3)
    let segundoNumero_4 = parseInt(primeira_caixa_4.value % 5)
    let verificando_se_é_par = parseInt(primeira_caixa_4.value % 2)


    if((primeira_caixa_4).value == ""){
   
        resultado_4.innerHTML = `Por favor, preencha o campo!`
   
       }else if(primeiroNumero_4 == 0 && segundoNumero_4 == 0 ){
        resultado_4.innerHTML = `Numero inválido`
       }else if(primeiroNumero_4 == 0 ){
        resultado_4.innerHTML = `valor divisivel por 3`
       }else if (segundoNumero_4 == 0){
        resultado_4.innerHTML = `valor divisivel por 5`
       }else if (verificando_se_é_par == 0){
        resultado_4.innerHTML = `${primeira_caixa_4.value} -  e par e não divisivel por 5 ou 3 `
       }else{
        resultado_4.innerHTML = `${primeira_caixa_4.value} -  e impar e não divisivel por 5 ou 3 `
       }
}
//quinto
function clicar5() {
    let primeira_caixa_5 = document.querySelector('#caixa1_exercicio_5')
    let resultado_5 = document.querySelector('#resu_5')


    if((primeira_caixa_5).value == ""){
   
        resultado_5.innerHTML = `Por favor, preencha o campo!`
   
       }else if((primeira_caixa_5).value == 1 ){
        resultado_5.innerHTML = `hoje é "Domingo"`
       }else if((primeira_caixa_5).value == 2 ){
        resultado_5.innerHTML = `hoje é "Segunda"`
       }else if((primeira_caixa_5).value == 3 ){
        resultado_5.innerHTML = `hoje é "Terça-feira"`
       }else if((primeira_caixa_5).value == 4 ){
        resultado_5.innerHTML = `hoje é "Quarta-feira"`
       }else if((primeira_caixa_5).value == 5 ){
        resultado_5.innerHTML = `hoje é "Quinta-feira"`
       }else if((primeira_caixa_5).value == 6 ){
        resultado_5.innerHTML = `hoje é "Sexta-feira"`
       }else if((primeira_caixa_5).value == 7 ){
        resultado_5.innerHTML = `hoje é "Sabado"`
       }else{
        resultado_5.innerHTML = `"Por favor!"digite um numero entre 1 e 7"`
       }

}
//sexto
function clicar6() {
    let primeira_caixa_6 = document.querySelector('#caixa1_exercicio_6')
    let segunda_caixa_6 = document.querySelector('#caixa2_exercicio_6')
    let resultado_6 = document.querySelector('#resu_6')

    let salario = parseFloat(primeira_caixa_6.value) 
     


    if((primeira_caixa_6).value == "" || (segunda_caixa_6).value == "" ){
   
        resultado_6.innerHTML = `Por favor, preencha o campo!`
   
       }else if((segunda_caixa_6).value == 1 ){
            porcentagem = parseFloat(salario * 0.01)
            alert(`o salario é R$ ${salario.toFixed(2)} o aumento é de R$${porcentagem} salario com bonificação : R$ ${salario + porcentagem }`)
            resultado_6.innerHTML = `o salario é R$ ${salario.toFixed(2)} o aumento é de R$${porcentagem} salario com bonificação :R$ ${salario + porcentagem }`
       }else if((segunda_caixa_6).value == 2 ){
            porcentagem = parseFloat(salario * 0.02)
            alert(`o salario é R$ ${salario.toFixed(2)} o aumento é de R$${porcentagem} salario com bonificação : R$ ${salario + porcentagem }`)
            resultado_6.innerHTML = `o salario é R$ ${salario.toFixed(2)} o aumento é de R$${porcentagem} salario com bonificação : R$ ${salario + porcentagem }`
       }else if((segunda_caixa_6).value == 3 ){   
            porcentagem = parseFloat(salario * 0.03)
            alert(`o salario é R$ ${salario.toFixed(2)} o aumento é de R$${porcentagem} salario com bonificação : R$ ${salario + porcentagem }`)
            resultado_6.innerHTML = `o salario é R$ ${salario.toFixed(2)} o aumento é de R$${porcentagem} salario com bonificação  : R$ ${salario + porcentagem }`
       }else if((segunda_caixa_6).value == 4 ){    
            porcentagem = parseFloat(salario * 0.04)
            alert(`o salario é R$ ${salario.toFixed(2)} o aumento é de R$${porcentagem} salario com bonificação : R$ ${salario + porcentagem }`)
            resultado_6.innerHTML = `o salario é R$ ${salario.toFixed(2)} o aumento é de R$${porcentagem} salario com bonificação : R$ ${salario + porcentagem }`
       }else if((segunda_caixa_6).value == 5 ){       
            porcentagem = parseFloat(salario * 0.05)
            alert(`o salario é R$ ${salario.toFixed(2)} o aumento é de R$${porcentagem} salario com bonificação : R$ ${salario + porcentagem }`)
            resultado_6.innerHTML = `o salario é R$ ${salario.toFixed(2)} o aumento é de R$${porcentagem} salario com bonificação : R$ ${salario + porcentagem }`
       }else{
        resultado_6.innerHTML = "Por favor. Digite um numero até 5"
       }
      
    }
//setimo
function clicar7() {
    let primeira_caixa_7 = document.querySelector('#caixa1_exercicio_7')
    let segunda_caixa_7 = document.querySelector('#caixa2_exercicio_7')
    let resultado_7 = document.querySelector('#resu_7')

    let valor_em_dolar_7 = parseFloat(primeira_caixa_7.value)
    let cotacao_7 =  parseFloat(segunda_caixa_7.value)
        

    if((primeira_caixa_7).value == "" || (segunda_caixa_7).value == "" ){
    
        resultado_7.innerHTML = `Por favor, preencha o campo!`
    
    }else{
            let valor_real =  valor_em_dolar_7 * cotacao_7
            resultado_7.innerHTML = `A quantia de $${valor_em_dolar_7.toFixed(2)} é equivalente a   R$ ${valor_real.toFixed(2)} tendo $${cotacao_7.toFixed(2)} como cotação.`
    }
}
//oitavo
function clicar8() {
    let primeira_caixa_8 = prompt("Digite a quantidade de acres")
    let segunda_caixa_8 = prompt("escolha um item de 1 a 4")

    let resultado_8 = document.querySelector("#resu_8")
    
    if( primeira_caixa_8 == 0 || segunda_caixa_8 == 0 ){
        resultado_8.innerHTML = `VERIFIQUE AS OPÇOES E TENTE NOVAMENTE` 
    }else if (segunda_caixa_8 == 1 ){
        let area = parseFloat(primeira_caixa_8 * 50)
        alert(`valor total : R$ ${area}`)
                if(area >= 750){
                   desconto = area * 0.1
                    alert(`Passou de 750$ ganhou desconto de R$ ${desconto} equivalente a 10%`)
                } 
                if(primeira_caixa_8 >= 1000){
                   desconto_2 = area * 0.05
                   alert(`Passou de 1000 acres ganhou desconto de R$ ${desconto_2} Equivalente a 5%`)
                }


    }else if (segunda_caixa_8 == 2 ){
        let area = parseFloat(primeira_caixa_8 * 100)
        alert(`valor total : R$ ${area}`)
            if(area >= 750){
                desconto = area * 0.1
                alert(`Passou de 750$ ganhou desconto de R$ ${desconto} equivalente a 10%`)
            } 
            if(primeira_caixa_8 >= 1000){
                desconto_2 = area * 0.05
                alert(`Passou de 1000 acres ganhou desconto de R$ ${desconto_2} Equivalente a 5%`)
            }
     
     
                
    }else if (segunda_caixa_8 == 3 ){
        let area = parseFloat(primeira_caixa_8 * 150)
        alert(`valor total : ${area}`)
            if(area >= 750){
                desconto = area * 0.1
                alert(`Passou de 750$ ganhou desconto de R$ ${desconto} equivalente a 10%`)
            } 
            if(primeira_caixa_8 >= 1000){
                desconto_2 = area * 0.05
                alert(`Passou de 1000 acres ganhou desconto de R$ ${desconto_2} Equivalente a 5%`)
            } 

    }else if (segunda_caixa_8 == 4 ){
        let area = parseFloat(primeira_caixa_8 * 250)
        alert(`valor total : ${area}`)
           if(area >= 750){
                   desconto = area * 0.1
                    alert(`Passou de 750$ ganhou desconto de R$ ${desconto} equivalente a 10%`)
                } 
                if(primeira_caixa_8 >= 1000){
                   desconto_2 = area * 0.05
                   alert(`Passou de 1000 acres ganhou desconto de R$ ${desconto_2} Equivalente a 5%`)
                } 
    }

}
//Nono
function clicar9() {
    let primeira_caixa_9 = prompt("Tempo");
    let segunda_caixa_9 = prompt("Velocidade");
    

    let distancia = parseFloat(primeira_caixa_9 * segunda_caixa_9);
    
    let  litros_usados = distancia / 12;

  
         distancia = primeira_caixa_9 * segunda_caixa_9
         litros_usados = distancia / 12;

         alert(`Seu veículo percorreu ${distancia} km a ${segunda_caixa_9} km/h em ${primeira_caixa_9} hora(s) de viagem e consumiu ${litros_usados} litros de gasolina`)  
}
//decimo
function clicar10(){

  var valor = parseInt(prompt("Digite o valor"))
  var taxa =  parseInt(prompt("Digite a taxa"))
  var tempo = parseInt(prompt("Digite tempo"))
  

  if( tempo == 0 || tempo < 0){
    alert(`"Valor inválido o tempo de atraso deve ser em dias."`)
  }else{
    prestação = valor + (valor* (taxa/100) * tempo)
    alert(`R$ ${prestação}`)
  }
  

}