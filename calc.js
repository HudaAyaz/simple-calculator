a = document.getElementById("display");

function show(e){
    a.value += e;
}

function calculate(){
    a.value = eval(a.value);
}

function clearDisplay(){
    a.value = '';
}