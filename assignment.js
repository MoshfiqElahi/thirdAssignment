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


function tinyfriend(friend) {
    var smallName = Infinity;
    var tinyName;
    for (var i = 0; i < friend.length; i++) {
        if (friend[i].length < smallName) {
            smallName = friend[i].length;
            tinyName = friend[i];
        }
    }
    return tinyName;
}

function brickCalculator(building) {
    var feetBricks = 1000;
    if (building >= 0 && building <= 10) {
        var totalFeet = (building * 15);
        var totalBricks = (totalFeet + feetBricks);
        return totalBricks;
    }
    else if (building >= 0 && building <= 20) {
        var firstTenFloorBricks = 30000;
        var totalFeet = (building * 12);
        var totalBricks = (totalFeet * feetBricks) + firstTenFloorBricks;
        return totalBricks;
    }
    else if (building >= 0 && building >= 21) {
        var firstTenFloorBricks = 50000;
        var secondFloorBricks = 20000;
        var extraTotalBricks = (firstTenFloorBricks + secondFloorBricks);
        totalFeet = (building * 10);
        var totalBricks = (totalFeet * feetBricks) + extraTotalBricks;
        return totalBricks;
    }
    else {
        return "Input a positive value"
    }
}