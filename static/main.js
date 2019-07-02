function escape() {
    document.getElementById("output_label").innerHTML = "Escaped String"
    var input = document.getElementById("input").value
    input = input.replace(/\\/g, "\\\\")
    input = input.replace(/"/g, "\\\"")
    input = input.replace(/\'/g, "\\'")
    input = input.replace(/\t/g, "\\t")
    input = input.replace(/\n/g, "\\r\\n")
    input = input.replace(/\r/g, "\\r")
    input = input.replace(/\v/g, "\\v")
    input = input.replace(/\f/g, "\\f")
    input = input.replace(/\0/g, "\\0")
    document.getElementById("output").value = input
}

function unescape() {
    document.getElementById("output_label").innerHTML = "UnEscaped String"
    var input = document.getElementById("input").value
    input = input.replace(/\\\\/g, "\\")
    input = input.replace(/\\"/g, "\"")
    input = input.replace(/\\'/g, "\'")
    input = input.replace(/\\t/g, "\t")
    input = input.replace(/\\n/g, "\n")
    input = input.replace(/\\r/g, "\r")
    input = input.replace(/\\v/g, "\v")
    input = input.replace(/\\f/g, "\f")
    input = input.replace(/\\0/g, "\0")
    document.getElementById("output").value = input
}

function pretty_json() {
    document.getElementById("output_label").innerHTML = "Pretty Json"
    var input = document.getElementById("input").value
    json = input
    var result = [''];
    var resultLine = 0;
    var indent = '';
    for (var i = 0; i < json.length; ++i) {
        var curChar = json[i];
        if (curChar == '{' || curChar == '[') {
            result[resultLine] += indent + curChar;
            result.push('');
            ++resultLine;
            indent += '\t';
            continue;
        }
        if (curChar == '}' || curChar == ']') {
            result.push('');
            ++resultLine;
            indent = indent.replace(/\t/, '');
            result[resultLine] += indent + curChar;
            continue;
        }
        if (curChar == ',') {
            result[resultLine] += curChar;
            result.push('');
            ++resultLine;
            continue;
        }
        if (result[resultLine] == '') {
            result[resultLine] += indent;
        }
        result[resultLine] += curChar;
        if (curChar == ':') {
            var nextChar = json[i + 1];
            if (nextChar == '{' || nextChar == '[') {
                result.push('');
                ++resultLine;
            }
        }
        continue;
    }
    var html = ""
    for (var i=0;i<result.length;i++){
        html+=result[i]+"\n"
    }
    document.getElementById("output").value = html
}

function clear_input(){
    document.getElementById("input").value = ""
}

function use_as_input(){
    document.getElementById("input").value = document.getElementById("output").value
}