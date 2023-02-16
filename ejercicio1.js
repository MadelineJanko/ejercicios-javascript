document.getElementById("btn").addEventListener("click",mostrar);
function mostrar(){
    var n=parseInt(document.getElementById("entrada").value);
    var suma=0;
    for(var i=1; i<n;i++){
        if(n%i==0)
            suma=suma+i;
        if(suma==n)
        document.getElementById("resultado").innerHTML=n+" ES PERFECTO";
        else
        document.getElementById("resultado").innerHTML=n+" NO ES PERFECTO";
    }
}