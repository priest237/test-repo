let i; 
let M;
let n;
let r;
let p;
let year;
p = document.getElementById('Mortage').Value;
year = document.getElementById('term').Value;
r = document.getElementById('rate').Value;

function mortagage(){
    r = r / 100;
    i = parseInt(r) / 12;
    n = parseInt(year) * 12;

    if(i===0){
    M = parseInt(p) / n ;
    } else{
        M = (parseInt(p) * i * Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
    }
    console.log(M);
    }