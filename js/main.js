
let email="manikandan2dd32@gmail.com"

let str=email.indexOf("@");
console.log(str);

let sli=email.slice(0,str);

let name=sli.match(/[a-z]/g);
let num=sli.match(/[0-9]/g);

console.log(name);
console.log(num);

var mail="manidhiyamech234@gmail.com";
var sol="";
for( var i=0; i<mail.length;i++){
	if(mail[i]=="@"){
		//sol+=mail[i];
		break
		
	}
	console.log(mail[i]);
}
;
