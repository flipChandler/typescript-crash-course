import { Coach } from './Coach';

export class GolfCoach implements Coach {
    
    getDailyWorkout(): string {
        return 'Living life int the easiest way possible';
    }

}