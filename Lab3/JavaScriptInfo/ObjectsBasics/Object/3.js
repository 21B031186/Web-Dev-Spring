let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = salaries.John + salaries.Ann + salaries.Pete;
salaries[sum] = sum;

/////////////////
let sum = 0;
for (let key in salaries){
    sum += salaries[key];
}
alert(sum);