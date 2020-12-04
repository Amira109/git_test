const HW = require('./hw.json') ;
function batterType(){
console.log("all batter types are : ") ;
for(let i = 0 ; i < HW.length ; i++){
    for(let j = 0 ; j < HW[i].batters.batter.length ; j++){
        console.log(HW[i].batters.batter[j].type) ;

    }
}
}
function toppingType(){
console.log("all topping types are : ") ;
for(let i = 0 ; i < HW.length ; i++){
    for(let j = 0 ; j < HW[i].topping.length ; j++){
        console.log(HW[i].topping[j].type) ;

    }
}
}
function ppuSum(){
var sum = 0 ;
for(let i = 0 ; i < HW.length ; i++){
    sum += HW[i].ppu ;
}
return sum ;
}
function ppuAverage(){
var sum = ppuSum() ;
var avg = sum/HW.length ;
return avg ; 
}
function batterID(){
console.log("all batter type's id  ^^ ")
for(let i =0 ; i < HW.length ; i++){
    for(let j = 0 ; j < HW[i].batters.batter.length; j++){
        console.log("the id of batter  " + HW[i].batters.batter[j].type + "is: " + HW[i].batters.batter[j].id) ;
    }
}
}
function toppingID(){
console.log("all topping type's id  ^^ ")
for(let i =0 ; i < HW.length ; i++){
    for(let j = 0 ; j < HW[i].topping.length; j++){
        console.log("the id of topping  " + HW[i].topping[j].type + "is: " + HW[i].topping[j].id) ;
    }
}
}
toppingType() ;
console.log() ;
batterType() ;
console.log() ;
console.log("the sum of Ppu is :" + ppuSum()) ;
console.log() ;
console.log("the average of Ppu is :" + ppuAverage() ) ;
console.log() ;
batterID() ;
console.log() ;
toppingID() ;