import { Coach } from './Coach';

export class CricketCoach implements Coach {
   
    getDailyWorkout(): string {
        return 'You better watch out your spin';
    }    
}