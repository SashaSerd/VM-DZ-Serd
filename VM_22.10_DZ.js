let fs=require('fs');

function MaxKr (x, y) {
	if (y > x) return NOD(y, x);
	if (y==0) return x;
	return NOD(y, x % y);
}

let mem=new Array();
let ip=0;
intext=fs.readFileSync('FirstProg.spml');
intext=intext.toString();

mem=intext.split(/ |\r\n/);


while(mem[ip]!='exit')
	switch(mem[ip]){
		case 'fibon':
			let fib=new Array();
			let last1=1;
			let last2=1;
			let last3=2;
			fib.push(last1);
			fib.push(last2);
			while(fibon.length!=parseInt(mem[ip+2])){
				fibon.push(last1+last2)
				last3=last1+last2
				last1=last2;
				last2=last3
			}
			mem[parseInt(mem[ip+1])]=fibon
			ip+=3;
			break
		case 'maxk':
			mem[parseInt(mem[ip+1])]=(parseInt(mem[ip+2])*parseInt(mem[ip+3]))/MaxKr(parseInt(mem[ip+2]),parseInt(mem[ip+3]));
			ip+=4;
			break
		case 'set':
			mem[parseInt(mem[ip+1])]=parseInt(mem[ip+2]);
			ip+=3;
			break
		case 'output':
			console.log(mem[parseInt(mem[ip+1])]);
			ip+=2;
			break
		case 'add':
			mem[parseInt(mem[ip+3])]=mem[parseInt(mem[ip+1])]+mem[parseInt(mem[ip+2])];
			ip+=4;
			break
		
	}