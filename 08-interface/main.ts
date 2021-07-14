import { GolfCoach } from './GolfCoach';
import { CricketCoach } from './CricketCoach';
import { Coach } from './Coach';


let cricketCoach = new CricketCoach();
let golfCoach = new GolfCoach();

console.log(cricketCoach.getDailyWorkout());
console.log(golfCoach.getDailyWorkout());

let coaches: Coach[] = [];

coaches.push(cricketCoach);
coaches.push(golfCoach);

coaches.forEach(element => {
    console.log(element.getDailyWorkout());
});
