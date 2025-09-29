
var a = [10]
var soma = 0

for(i=0; i<=9;i++){

a[i] = parseFloat(prompt("Informe o valor do produto "+ (i+1)))

}

for(x=0;x<=9;x++){
    soma = soma + a[x]
}

alert("Valor de cada produto: " + a)
alert("A soma dos produtos é: " + soma)
alert("A média dos produtos é: " + (soma/10))









