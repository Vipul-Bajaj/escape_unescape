function escape(){
    document.getElementById("output_label").innerHTML = "Escaped String"
    var input = document.getElementById("input").value
    input = input.replace(/\\/g,"\\\\")
    input = input.replace(/"/g,"\\\"")
    input = input.replace(/\'/g,"\\'")
    input = input.replace(/\t/g,"\\t")
    input = input.replace(/\n/g,"\\r\\n")
    input = input.replace(/\r/g,"\\r")
    input = input.replace(/\v/g,"\\v")
    input = input.replace(/\f/g,"\\f")
    input = input.replace(/\0/g,"\\0")
    document.getElementById("output").value = input
}
function unescape(){
    document.getElementById("output_label").innerHTML = "UnEscaped String"
    var input = document.getElementById("input").value
    input = input.replace(/\\\\/g,"\\")
    input = input.replace(/\\"/g,"\"")
    input = input.replace(/\\'/g,"\'")
    input = input.replace(/\\t/g,"\t")
    input = input.replace(/\\n/g,"\n")
    input = input.replace(/\\r/g,"\r")
    input = input.replace(/\\v/g,"\v")
    input = input.replace(/\\f/g,"\f")
    input = input.replace(/\\0/g,"\0")
    document.getElementById("output").value = input
}