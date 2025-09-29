
var a = [10]
var soma = 0

for(i=0; i<=9;i++){

a[i] = parseFloat(prompt("Informe o valor do produto "+ (i+1)))
soma = soma + a[i]
}

alert("Valor de cada produto: " + a)
alert("A soma dos produtos é: " + soma)
alert("A média dos produtos é: " + (soma/10))

document.writeln("<p>" +"Valor de cada produto: " + a + "</p>")
document.writeln("<p>" + "A soma dos produtos é: " + soma + "</p>")
document.writeln("<p>" + "A média dos produtos é: " + (soma/10) + "</p>")





