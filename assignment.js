function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}


function woodCalculator(chair, table, bed) {
    var chairWood = chair * 1;
    var tableWood = table * 3;
    var bedWood = bed * 5;
    var totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}


function tinyfriend(friend){
    var smallName = Infinity;
    var tinyName;
    for (var i = 0; i < friend.length; i++) {
        if (friend[i].length < smallName){
            smallName = friend[i].length;
            tinyName = friend[i];
        }
    }
    return tinyName;
}

