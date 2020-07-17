function feetToMile(feet) {
    var mile = feet/5280;
    return mile;
}
var mileResult = feetToMile(500052)
console.log(mileResult)

function woodCalculator(chair, table, bed){
    var chairWood = chair * 1;
    var tableWood = table * 3;
    var bedWood = bed * 5;
    var totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}
var woodCount = woodCalculator(5, 5, 2)
console.log(woodCount)

function tinyFriend(name){
    var tiny = name[0];
}