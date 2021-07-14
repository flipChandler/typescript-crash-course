class Customer {    
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

    // tsc --noEmitOnError Customer.ts {{ do not generate .js file if there is a compilation error }}
    let customer = new Customer('Felipe', 'Santos');

    console.log(`${customer.getFirstName()} ${customer.getLastName()}`)