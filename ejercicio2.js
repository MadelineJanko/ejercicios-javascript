document.getElementById("btn").addEventListener("click",generar);
function generar(){
    var n=document.getElementById("n").value;
    var tabla= "<table border='1'>";
    for(var i=1;i<11;i++)
    {
        tabla += "<tr><td>"+n+"</td><td>x</td><td>"+i+"</td><td>=</td><td>"+i*n+"</td></tr>";
    }
    tabla+= "</table>";
    document.getElementById("resultado").innerHTML=tabla;
}