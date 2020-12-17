var num=0;
var pun=0;
var operacion;

function cero(){
    document.getElementById("display").value=document.getElementById("display").value+"0";
}
function uno(){
    document.getElementById("display").value=document.getElementById("display").value+"1";
}
function dos(){
    document.getElementById("display").value=document.getElementById("display").value+"2";
}
function tres(){
    document.getElementById("display").value=document.getElementById("display").value+"3";
}
function cuatro(){
    document.getElementById("display").value=document.getElementById("display").value+"4";
}
function cinco(){
    document.getElementById("display").value=document.getElementById("display").value+"5";
}
function seis(){
    document.getElementById("display").value=document.getElementById("display").value+"6";
}
function siete(){
    document.getElementById("display").value=document.getElementById("display").value+"7";
}
function ocho(){
    document.getElementById("display").value=document.getElementById("display").value+"8";
}
function nueve(){
    document.getElementById("display").value=document.getElementById("display").value+"9";
}
function punto(){
    if(pun==0 && document.getElementById("display").value!=""){
        document.getElementById("display").value=document.getElementById("display").value+".";
        pun=1;
    }  
}
function suma(){
    operacion="+";
    num=parseFloat(document.getElementById("display").value);
    document.getElementById("display").value="";
}
function resta(){
    operacion="-";
    num=parseFloat(document.getElementById("display").value);
    document.getElementById("display").value="";
}
function multiplicacion(){
    operacion="*";
    num=parseFloat(document.getElementById("display").value);
    document.getElementById("display").value="";
}
function division(){
    operacion="/";
    num=parseFloat(document.getElementById("display").value);
    document.getElementById("display").value="";
}
function raiz(){
    operacion=Math.sqrt();
    document.getElementById("display").value=Math.sqrt(document.getElementById("display").value);
}
function seno(){
    operacion=Math.sin();
    document.getElementById("display").value=Math.sin(document.getElementById("display").value);
}
function coseno(){
    operacion=Math.cos();
    document.getElementById("display").value=Math.cos(document.getElementById("display").value);
}
function tangente(){
    operacion=Math.tan();
    document.getElementById("display").value=Math.tan(document.getElementById("display").value);
}
function potencia(){
    operacion="p";
    num = parseFloat(document.getElementById("display").value);
    document.getElementById("display").value="";
}
function factorial(){
    num = parseInt(document.getElementById("display").value);
    var total=1;

    for (let index = 1; index < parseInt(document.getElementById("display").value)+1; index++) {
        total = total * index;
    }
    document.getElementById("display").value=total;
}

function igual(){
        switch(operacion){
            case "+":
                document.getElementById("display").value=(num+parseFloat(document.getElementById("display").value));
                break;
            case "-":
                document.getElementById("display").value=(num-parseFloat(document.getElementById("display").value));
                break;
            case "*":
                document.getElementById("display").value=(num*parseFloat(document.getElementById("display").value));
                break;
            case "/":
                if(parseFloat(document.getElementById("display").value)==0){
                    confirm("Error: division entre cero");
                }
                else{
                    document.getElementById("display").value=(num/parseFloat(document.getElementById("display").value));
                }  
                break;
            case "p":
                document.getElementById("display").value=(num**parseFloat(document.getElementById("display").value));
                break;
        }
}
function limpiar(){
    document.getElementById("display").value="";
}
function borrar(){
    document.getElementById("display").value="";
}