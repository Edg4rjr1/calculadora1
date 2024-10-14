
const display = document.getElementById("display")


function addDisplay(input)
{
display.value += input;

}

function limpar(){
display.value = ""

}

function calcular() {
    try {
        const display = document.getElementById('display');
        
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Erro';
    }
}


    function removeLast() {
        const display = document.getElementById('display');
        display.value = display.value.slice(0, -1);
    }
