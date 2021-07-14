var reviews = [10, 23.5, 15, 45, 78, 7];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
var average = total / reviews.length;
console.log("Review average = " + average);
reviews.forEach(function (element) {
    element += 2;
    console.log(element);
});
var sportsArray = ["Soccer", "Baseball", "Basketball", "Swimming", "Golf"];
sportsArray.forEach(function (element) {
    console.log(element);
});
var sports = ["Soccer", "Baseball", "Basketball", "Swimming", "Golf"];
sports.push("Videogame");
sports.push("Volley");
sports.forEach(function (sport) {
    if (sport === 'Soccer') {
        console.log(sport + " << my favorite!");
    }
    else {
        console.log(sport);
    }
});
