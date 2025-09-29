

var lista = ["Gervronilson", 12, "Estrada A", "Linha C", 18.5, 1800, true]

alert(lista)

for(i=0;i<lista.length; i++){

    document.writeln("<p>"+ lista[i] + "</p>")

}

/* Adicionar elementos ao fim da lista */
lista.push("84500000")
alert(lista)

/* remover elementos ao fim da lista */
lista.pop()
alert(lista)

/* remover elementos ao início da lista */
lista.shift()
alert(lista)


/* Adicionar elementos ao início da lista */
lista.unshift("Gevronildo")
alert(lista)







