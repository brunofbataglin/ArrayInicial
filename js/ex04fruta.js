
var list = []
var f



do{

f = prompt("Informe o nome da fruta: (clique em cancerar quando tiver colocado todas.)")
if(f != null){
list.push(f) }

} while (f != null)

alert(list)

document.writeln("<h1>" + "Frutas" + "</h1>")
for(i=0;i<list.length;i++){
document.writeln("<p>" + list[i] + "</p>")
}











