class Student {    
    private firstName: string;
    private lastName: string;

    constructor(theFirst: string, theLast: string) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }  
    
    // accessors
    getFirstName(): string {
        return this.firstName;
    }

    setFirstName(theFirst: string) {
        this.firstName = theFirst;
    }

    getLastName(): string {
        return this.lastName;
    }

    setLastName(theLast: string) {
        this.lastName = theLast;
    }
}

let student = new Student('Felipe', 'Santos');

console.log(`${student.getFirstName()} ${student.getLastName()}`)


