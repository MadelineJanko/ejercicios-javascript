document.getElementById("btn").addEventListener("click",mostrar);
function mostrar(){
    var n=parseInt(document.getElementById("entrada").value);
    var unidades = numero%10; numero /= 10; //unidades = 2 , numero = 215
	var decenas = numero%10; numero /= 10; //decenas = 5 , numero = 21
	var centenas = numero % 10; numero /= 10; //centenas = 1 , numero = 2
	var millar = numero % 10 ; numero /= 10; //millar = 2 , numero = 0
    
    switch(millar){
		case 1: 'M';break;
		case 2: 'MM'; break;
		case 3: 'MMM';break;
	}
	
	switch(centenas){
		case 1: 'C';break;
		case 2: 'CC';break;
		case 3: 'CCC';break;
		case 4: 'CD';break;
		case 5: 'D';break;
		case 6: 'DC';break;
		case 7: 'DCC';break;
		case 8: 'DCCC';break;
		case 9: 'CM';break;
	}
	
	switch(decenas){
		case 1: 'X';break;
		case 2: 'XX';break;
		case 3: 'XXX';break;
		case 4: cout<<"XL";break;
		case 5: cout<<"L";break;
		case 6: cout<<"LX";break;
		case 7: cout<<"LXX";break;
		case 8: cout<<"LXXX";break;
		case 9: cout<<"XC";break;
	}
	
	switch(unidades){
		case 1: cout<<"I";break;
		case 2: cout<<"II";break;
		case 3: cout<<"III";break;
		case 4: cout<<"IV";break;
		case 5: cout<<"V";break;
		case 6: cout<<"VI";break;
		case 7: cout<<"VII";break;
		case 8: cout<<"VIII";break;
		case 9: cout<<"IX";break;
	}
	return 0;
}