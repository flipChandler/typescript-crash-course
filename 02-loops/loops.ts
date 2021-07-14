let reviews: number[] = [10, 23.5, 15, 45, 78, 7];
let total: number = 0;
for (let i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}

let average: number = total / reviews.length;
console.log(`Review average = ${average}`)

reviews.forEach(element => {
    element += 2;
    console.log(element);
});

let sportsArray: string[] = ["Soccer", "Baseball", "Basketball", "Swimming", "Golf"];

sportsArray.forEach(element => {
    console.log(element);
});

let sports: string[] = ["Soccer", "Baseball", "Basketball", "Swimming", "Golf"];

sports.push("Videogame");
sports.push("Volley")

sports.forEach(sport => {
    if (sport === 'Soccer') {
        console.log(`${sport} << my favorite!`);        
    } else {
        console.log(sport);
    }    
});