
function convertLine(line) {

    var symbol = line.split(" ")[0];
    var data = line.split(" ")[1];

    switch (symbol) {

        case "#":
            var output = "<h1>" + data + "</h1>";
            console.log(output);
            break;

        case "##":
            var output = "<h2>" + data + "</h2>";
            console.log(output);
            break;

        case "*":
            var output = "<li>" + data + "</li>";
            console.log(output);

            break;

    }

}

function convertText(text){

console.log('Input:\n');
console.log(text);
var a = inputText.split("\n");

var i = 0;

console.log('\n\n Output:\n');
while(i<a.length)
{

  convertLine(a[i]);
  i++;
}

}
var inputText=  `
# My Notes 
## Section1 
* Structured programming
* Fucntional programming
`

convertText(inputText);