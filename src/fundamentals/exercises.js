// Explicação Ternário
// O ternário é usado quando há apenas duas condições

function validaIdade(idade){
    return (
        idade>=18 ? console.log("Pode comprar") : console.log("Não pode comprar")
    )
}
// validaIdade(19)


const age = 16
const message = age >= 18 ? "Você é maior de idade" : "Você é menor de idade"

// console.log(message)

/* 1.Exercícios de Operador Ternário*/

/*Exercício 1: Verificação de Paridade

    Escreva um código que verifique se um número é par ou ímpar usando o operador ternário.*/

function paridade(num){
    return(
        num%2===0 ? console.log("Par") : console.log("Ímpar")
    )
}

// paridade(2)

/* Exercício 2: Verificação de Desconto

Dada a variável: "clienteFidelidade", use um operador ternário para definir o valor do desconto (10% para clientes fiéis, 5% para novos clientes).*/

function cliente(clienteFidelidade){
    return(
        clienteFidelidade === true ? console.log("10% de desconto") : ("5% de desconto")
    )
}
// cliente(true)


/* Explicação if e else */

// O if é usado quando há apenas quatro condições

function validaIdadeIf(idade){
    if(idade>=18){
        return console.log("Maior de idade")

    } else{
        return console.log("Menor de idade")
    }
}

// validaIdadeIf(17)

function validaNota(nota){

    if(nota>=7){
        console.log("Aprovado")

    } else if(nota>=5 && nota<=6){
        return console.log("Recuperação")
    }else{
        console.log("Reprovado")
    }

}

// validaNota(3)


/* 2. Exercícios de Funções com `if` e `else` */

/*Exercício 1: Avaliação de Notas

Crie uma função que receba uma nota como parâmetro e retorne "Aprovado" se a nota for maior ou igual a 60, e "Reprovado" caso contrário.
*/

function validaNota2(nota){

    if(nota>=60){
        console.log("Aprovado")

    } else{
        console.log("Reprovado")
    }

}

// validaNota2(62)


/* Exercício 2: Verificação de Número Positivo/Negativo

Crie uma função que receba um número e retorne "Positivo", "Negativo" ou "Zero".*/

function verificaNum(num){
    if(num==0){
        return console.log("Zero")

    } else if(num>0){
        return console.log("Positivo")

    } else{
        return console.log("Negativo")
    }
}

// verificaNum(0)
// verificaNum(4)
// verificaNum(-9)

/* Explicação Switch */

// O switch case é usado quando há mais de quatro condições

function diaDaSemana(dia){
    switch(dia){
        case 1:
            return 'Domingo'
        case 2:
            return 'Segunda'
        case 4:
            return 'Terça'
        case 5:
            return 'Quarta'
        case 6:
            return 'Quinta'
        case 7:
            return 'Sexta'
    }
}

// console.log(diaDaSemana())


/* 3. Exercícios de Funções com switch*/

/* Exercício 1: Verificação de Mês
Crie uma função que recebe um número de 1 a 12 e retorne o nome do mês correspondente. */

function verificaMes(mes){
    switch (mes){
        case 1:
            return "Janeiro"
            // break
        
        case 2:
            return "Fevereiro"
            // break

        case 3:
            return "Março"
            // break

        case 4:
            return "Abril"
            // break
        case 5:
            return "Maio"
            // break
        case 6:
            return "Junho"
            // break
        case 7:
            return "Julho"
            // break
        case 8:
            return "Agosto"
            // break
        case 9:
            return "Setembro"
            // break
        case 10:
            return "Outubro"
            // break
        case 11:
            return "Novembro"
            // break
        case 12:
            return "Dezembro"
            // break
        default:
            return "Insira um número válido"
        
    }
}

// console.log(verificaMes(2))

/* Exercício 2: Classificação de Níveis
Crie uma função que recebe uma string ("iniciante", "intermediário", "avançado") e retorne uma mensagem apropriada de acordo com o nível. */

function verificaNivel(nivel){

    const nivelLower = nivel.toLowerCase()
    
    switch(nivelLower){
        case ("iniciante"):
            return 'Você está no nível iniciante'
        case ("intermediário"):
            return 'Você está no nível intermediário'
        case ("avançado"):
            return 'Você está no nível avançado'
        default:
            return 'Digite um nível válido'
    }
}

console.log(verificaNivel("AVANÇADO"))